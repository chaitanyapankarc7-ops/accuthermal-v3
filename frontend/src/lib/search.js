import { SEARCH_INDEX, TYPE_ORDER } from "../data/search-index";

/* Field weights. Ordered so the first field a token matches is the one that counts. */
const FIELD_WEIGHTS = {
  title: 100,
  subtitle: 42,
  keywords: 30,
  body: 8,
};

const SYNONYM_DAMPING = 0.62;
/* Ceiling for a fuzzy hit, kept below a single exact keyword match (30) so a
   typo match can never outrank a real one. */
const FUZZY_CEILING = 18;
/* Below this a result is noise from a stray one-character fuzzy hit. */
const MIN_SCORE = 8;
const WORD_START = /[\s\-_/.,;:(&+]/;

/* Hand-mapped B2B vocabulary. Engineering buyers search for the symptom or the
   process, not the ATS product name. Bidirectional: "die" finds extrusion die
   cleaning, and a user who types "extrusion die" still ranks die-cleaning first. */
const SYNONYMS = {
  polymer: ["plastic", "resin", "pvc", "nylon", "peek", "thermoplastic", "fluids"],
  plastics: ["polymer", "resin", "pvc"],
  die: ["dies", "tooling", "mold", "mould", "extrusion", "nozzle"],
  mold: ["mould", "die", "tooling", "injection"],
  screw: ["screws", "extruder", "barrel", "flight"],
  nozzle: ["nozzles", "hot runner", "tip", "spinneret"],
  tooling: ["tool", "die", "fixture", "hardware"],
  purge: ["changeout", "change-out", "shutdown", "cleaning"],
  pyrolysis: ["oven", "burn-off", "burnoff", "furnace", "combustion"],
  oven: ["pyrolysis", "burn-off", "furnace", "kiln"],
  furnace: ["oven", "pyrolysis", "kiln"],
  ultrasonic: ["ultrasonics", "solvent", "cleaning"],
  calibrator: ["calibration", "dry block", "thermcal", "sensor"],
  calibration: ["calibrator", "thermcal", "dry block", "accuracy"],
  calibrate: ["calibration", "calibrator", "thermcal"],
  thermocouple: ["probe", "thermocouples", "sensor", "rtd", "calibration"],
  sensor: ["probe", "thermocouple", "rtd", "calibration"],
  thermometer: ["sensor", "probe", "calibration"],
  accuracy: ["calibration", "calibrator", "uniformity", "stability"],
  nitinol: ["shape setting", "shape-setting", "medical", "annealing", "superelastic"],
  annealing: ["heat treatment", "anneal", "nitinol"],
  fume: ["fumes", "smoke", "ventilation", "exhaust", "hepa", "filtration"],
  fumes: ["fume", "smoke", "hepa", "filtration"],
  smoke: ["fume", "filtration", "hepa"],
  dust: ["particulate", "filtration", "hepa", "extraction"],
  silica: ["dust", "particulate", "filtration", "hepa"],
  ventilation: ["exhaust", "fume", "airflow", "scrubber"],
  filter: ["filtration", "hepa", "media"],
  media: ["aluminum oxide", "alumina", "filtration"],
  bath: ["baths", "fluidized", "ftb", "fluidised"],
  fluidized: ["fluidised", "bath", "ftb", "bed"],
  reactor: ["reaction", "vessel", "process", "heating"],
  nitinolmedical: ["medical device"],
  quote: ["price", "pricing", "rfq", "estimate", "form"],
  price: ["quote", "pricing", "rfq", "cost"],
  cost: ["price", "pricing", "quote", "buy"],
  much: ["cost", "price", "quote"],
  brochure: ["datasheet", "specifications", "pdf", "documentation"],
  manual: ["documentation", "instructions", "technical"],
  breaker: ["breaker plate", "screen pack", "polymer"],
  maintenance: ["cleaning", "downtime", "service"],
  plastic: ["polymer", "resin", "cleaning"],
  extruder: ["screw", "extrusion", "barrel"],
  heater: ["heating", "heat", "temperature"],
  temperature: ["thermal", "heat", "calibration"],
};

/* Pre-lowercased field cache, built once at module load. */
const DOCUMENTS = SEARCH_INDEX.map((entry) => {
  const fields = {};

  for (const [field, weight] of Object.entries(FIELD_WEIGHTS)) {
    const raw = entry[field];
    if (!raw) continue;
    fields[field] = {
      weight,
      text: (Array.isArray(raw) ? raw.join(" ") : raw).toLowerCase(),
    };
  }

  return {
    entry,
    fields,
    keywords: (entry.keywords || []).map((k) => k.toLowerCase()),
    searchable: `${entry.title} ${entry.subtitle || ""} ${
      entry.keywords || []
    } ${entry.body || ""}`.toLowerCase(),
  };
});

const WORD_PATTERN = /[a-z0-9]+/g;

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* Lowercase, strip punctuation into word tokens, and drop filler words that
   would otherwise dilute coverage scoring. */
export function tokenize(query) {
  if (!query) return [];

  const stopWords = new Set(["the", "a", "an", "of", "for", "to", "in", "on", "and", "or", "with", "my"]);

  return (String(query).toLowerCase().match(WORD_PATTERN) || []).filter(
    (word) => word.length > 1 && !stopWords.has(word)
  );
}

function expand(token) {
  const expansions = SYNONYMS[token];
  return expansions ? [token, ...expansions] : [token];
}

/* 0..1 quality of a needle appearing in a haystack. */
function scoreIn(haystack, needle) {
  const at = haystack.indexOf(needle);
  if (at === -1) return 0;
  if (at === 0) return 1;
  return WORD_START.test(haystack[at - 1]) ? 0.82 : 0.6;
}

/* Best (score, damping) for a token across every field of one document. */
function scoreToken(doc, token) {
  let best = 0;
  let bestDamping = 1;

  for (const expansion of expand(token)) {
    const damping = expansion === token ? 1 : SYNONYM_DAMPING;

    for (const { weight, text } of Object.values(doc.fields)) {
      const value = scoreIn(text, expansion) * weight * damping;
      if (value > best) {
        best = value;
        bestDamping = damping;
      }
    }
  }

  return { score: best, damping: bestDamping };
}

/* Damerau-Levenshtein, bounded — only used on tokens short enough that the
   cost is negligible. */
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  if (a === b) return 0;

  const rows = a.length + 1;
  const cols = b.length + 1;
  let prev = new Array(cols);

  for (let j = 0; j < cols; j++) prev[j] = j;

  for (let i = 1; i < rows; i++) {
    const current = [i];
    let rowMin = i;

    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let value = Math.min(current[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);

      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        value = Math.min(value, prev[j - 2] + 1);
      }

      current.push(value);
      if (value < rowMin) rowMin = value;
    }

    if (rowMin > max) return max + 1;
    prev = current;
  }

  return prev[cols - 1];
}

function fuzzyScore(doc, token) {
  const maxDistance = token.length >= 6 ? 2 : 1;
  if (maxDistance === 0) return 0;

  const words = doc.searchable.match(WORD_PATTERN) || [];
  let best = 0;

  for (const word of words) {
    if (Math.abs(word.length - token.length) > maxDistance) continue;

    const distance = editDistance(token, word, maxDistance);
    if (distance > maxDistance) continue;

    const quality = 1 - distance / (token.length + 1);
    if (quality > best) best = quality;
  }

  return best * FUZZY_CEILING;
}

/* Reward tokens that land next to each other in the title. */
function proximityBonus(doc, tokens) {
  if (tokens.length < 2) return 0;

  const title = doc.fields.title.text;
  const positions = tokens.map((t) => title.indexOf(t));

  for (let i = 0; i < positions.length - 1; i++) {
    if (positions[i] === -1 || positions[i + 1] === -1) continue;

    const between = title.slice(positions[i] + tokens[i].length, positions[i + 1]);
    if (between.length === 0) return 30;
    if (between.length === 1) return 18;
  }

  return 0;
}

function scoreDocument(doc, tokens) {
  let total = 0;
  let matched = 0;

  for (const token of tokens) {
    const { score } = scoreToken(doc, token);
    const value = score || fuzzyScore(doc, token);
    if (value > 0) matched++;
    total += value;
  }

  if (matched === 0) return 0;

  /* Coverage dominates: matching every token should always beat matching one
     token very well. */
  const coverage = matched / tokens.length;
  return total * (0.45 + 0.55 * coverage) + proximityBonus(doc, tokens);
}

/**
 * Rank the index against a free-text query.
 *
 * @param {string} query
 * @param {{limit?: number, boost?: number}} options
 *   boost - how many times this exact query was searched before. Applied as a
 *   small multiplier so it can reorder near-ties but never bury a real match.
 * @returns {Array<{id,type,title,subtitle,href,score}>}
 */
export function search(query, options = {}) {
  const { limit = 20, boost = 0 } = options;
  const tokens = tokenize(query);

  if (tokens.length === 0) return [];

  const multiplier = 1 + Math.min(boost, 5) * 0.08;
  const results = [];

  for (const doc of DOCUMENTS) {
    const score = scoreDocument(doc, tokens);
    if (score < MIN_SCORE) continue;
    results.push({ ...doc.entry, score: score * multiplier });
  }

  results.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const byType = TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type);
    if (byType !== 0) return byType;
    return a.title.localeCompare(b.title);
  });

  return limit > 0 ? results.slice(0, limit) : results;
}

export function normalizeHref(href) {
  if (!href) return "";
  const [path] = href.split("#");
  return path.replace(/\/+$/, "").toLowerCase() || "/";
}

function findEntry(href) {
  const target = normalizeHref(href);
  if (!target) return null;
  return SEARCH_INDEX.find((entry) => normalizeHref(entry.href) === target) || null;
}

/**
 * Suggestions for a visitor who has not typed anything: what relates to the
 * page they are currently on. Always excludes the page itself.
 */
export function getContextualSuggestions(pathname, limit = 5) {
  const current = findEntry(pathname);
  const seen = new Set([normalizeHref(pathname)]);
  const out = [];

  const push = (href) => {
    const normalized = normalizeHref(href);
    if (seen.has(normalized)) return;

    const entry = findEntry(href);
    if (!entry) return;

    seen.add(normalized);
    out.push({ ...entry, score: 0 });
    if (out.length >= limit) return;
  };

  if (current) {
    for (const href of current.related || []) {
      push(href);
      if (out.length >= limit) return out;
    }
  }

  const siblings = SEARCH_INDEX.filter(
    (entry) =>
      entry.type === current?.type ||
      (current?.type === "application" && entry.type === "product")
  );

  for (const entry of siblings) push(entry.href);
  if (out.length >= limit) return out;

  for (const entry of SEARCH_INDEX) {
    push(entry.href);
    if (out.length >= limit) break;
  }

  return out;
}

/** Default suggestions shown on a fresh session with no history at all. */
export function getDefaultSuggestions(limit = 6) {
  const out = [];
  for (const entry of SEARCH_INDEX) {
    if (entry.type !== "product" && entry.type !== "application") continue;
    out.push({ ...entry, score: 0 });
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * Split text into matched/unmatched segments so the UI can wrap hits in <mark>.
 */
export function highlightParts(text, tokens) {
  const source = text || "";
  const usable = tokens.filter((t) => t && t.length > 1);
  if (!source || usable.length === 0) return [{ text: source, match: false }];

  const pattern = usable.map(escapeRegExp).join("|");
  const splitter = new RegExp(`(${pattern})`, "gi");
  const tester = new RegExp(`^(?:${pattern})$`, "i");

  return source
    .split(splitter)
    .filter((part) => part !== "")
    .map((part) => ({ text: part, match: tester.test(part) }));
}
