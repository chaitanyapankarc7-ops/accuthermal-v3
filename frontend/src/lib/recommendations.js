import { applications } from "../app/applications/data";
import { SEARCH_INDEX } from "../data/search-index";
import { getViewedApplications, getPopular } from "./search-history";
import { search } from "./search";

/**
 * Similarity-based recommendations for application pages.
 *
 * Every application lists "Fluidized Temperature Baths" as a related product,
 * so counting shared products directly would make the whole catalogue look
 * alike. Signals are therefore weighted by inverse document frequency: a term
 * shared by every application carries no information and scores zero, while a
 * term shared by two carries a lot.
 */

/* The breaker plate page is nested under /applications/thermal-cleaning/, so
   hrefs are read from the search index instead of being rebuilt from the slug
   — `/applications/${slug}` would 404 for that seventh application. */
const APPLICATION_HREFS = new Map(
  SEARCH_INDEX.filter((item) => item.href.startsWith("/applications/")).map((item) => [
    item.href.split("/").filter(Boolean).pop(),
    item.href,
  ])
);

function applicationHref(slug) {
  return APPLICATION_HREFS.get(slug) || `/applications/${slug}`;
}

const SIGNALS = {  product: { weight: 3, source: (app) => (app.relatedProducts || []).map((p) => p.name) },
  tag: { weight: 2, source: (app) => app.tags || [] },
  category: { weight: 2.5, source: (app) => (app.customerCategory ? [app.customerCategory] : []) },
  keyword: { weight: 1, source: (app) => applicationKeywords(app.slug) },
};

/* The breaker plate page is a seventh application but is not part of the
   `applications` array, so it is folded in here. */
const EXTRA_APPLICATIONS = [
  {
    slug: "breaker-plate-cleaning",
    num: "07",
    title: "Breaker Plate Cleaning",
    navSubtitle: "Thermal cleaning for polymer-filled holes",
    shortDesc:
      "Thermal cleaning of polymer-filled breaker plate holes using fluidized temperature baths.",
    heroImage: "/assets/images/tools/Tool%20%26%20Parts%20Cleaning.jpg",
    tags: ["TOOLING", "POLYMER REMOVAL", "CLEANING"],
    customerCategory: "thermal-cleaning",
    relatedProducts: [
      { name: "Fluidized Temperature Baths", link: "/products/fluidized-temperature-baths" },
      { name: "HEPA Air Filtration", link: "/products/hepa-air-filtration" },
    ],
  },
];

/* Kept in sync with APPLICATION_KEYWORDS in data/search-index.js. Imported
   lazily to avoid duplicating the list. */
function applicationKeywords(slug) {
  const entry = SEARCH_INDEX.find((item) => item.id === `application-${slug}`);
  if (!entry) return [];
  return (entry.keywords || []).map((k) => k.toLowerCase());
}

const CATALOGUE = [...applications, ...EXTRA_APPLICATIONS];

function signalsFor(app) {
  const out = [];

  for (const [type, config] of Object.entries(SIGNALS)) {
    for (const value of config.source(app)) {
      if (value) out.push({ type, value: String(value).toLowerCase() });
    }
  }

  return out;
}

/* Precompute each application's signals and the document frequency of every
   distinct signal, so scoring is a set intersection rather than a full scan. */
const CATALOGUE_INDEX = CATALOGUE.map((app) => {
  const seen = new Set();
  const signals = signalsFor(app);

  for (const signal of signals) {
    seen.add(`${signal.type}:${signal.value}`);
  }

  return { app, signals, seen };
});

const DF = new Map();
for (const { seen } of CATALOGUE_INDEX) {
  for (const key of seen) {
    DF.set(key, (DF.get(key) || 0) + 1);
  }
}

const TOTAL = CATALOGUE_INDEX.length;

const SIMILAR_LIMIT = 3;
const MORE_LIMIT = 3;

/* Shared with the UI so the "picked for you" label stays in step with the
   reason text attached to each card. */
export const PERSONALISED_REASON = "Based on what you have been viewing";

function idf(type, value) {
  const df = DF.get(`${type}:${value}`) || 0;
  if (df === 0) return 0;
  return SIGNALS[type].weight * Math.log(TOTAL / df);
}

function findBySlug(slug) {
  return CATALOGUE_INDEX.find((entry) => entry.app.slug === slug) || null;
}

function sharedSignals(a, b) {
  const shared = [];

  for (const signal of a.signals) {
    const key = `${signal.type}:${signal.value}`;
    if (!b.seen.has(key)) continue;
    if (shared.some((s) => s.key === key)) continue;
    shared.push({ key, type: signal.type, value: signal.value, weight: idf(signal.type, signal.value) });
  }

  return shared.sort((x, y) => y.weight - x.weight);
}

/* Anything below this shares only a vague term, e.g. both applications mention
   "temperature". Surfacing that as "visitors also look at" reads as noise. */
const MIN_SIMILARITY_SCORE = 1;

/**
 * Applications most similar to `slug`, most similar first.
 */
export function getSimilarApplications(slug, limit = 3) {
  const self = findBySlug(slug);
  if (!self) return [];

  return CATALOGUE_INDEX.filter((entry) => entry.app.slug !== slug)
    .map((entry) => {
      const shared = sharedSignals(self, entry);
      const score = shared.reduce((sum, signal) => sum + signal.weight, 0);
      return { entry, shared, score };
    })
    .filter((result) => result.score >= MIN_SIMILARITY_SCORE)
    .sort((a, b) => b.score - a.score || a.entry.app.title.localeCompare(b.entry.app.title))
    .slice(0, limit)
    .map(toApplication);
}

/** A short, human explanation of why two applications are related. */
function reasonFor(shared) {
  if (!shared || shared.length === 0) return null;

  const top = shared[0];

  if (top.type === "tag") {
    const pretty = top.value.replace(/\b\w/g, (c) => c.toUpperCase());
    return `Also covers ${pretty}`;
  }

  if (top.type === "category") {
    return "Serves the same industry";
  }

  if (top.type === "product") {
    return "Runs on the same equipment";
  }

  return null;
}

function toApplication({ entry, shared, score }) {
  return {
    slug: entry.app.slug,
    num: entry.app.num,
    title: entry.app.title,
    subtitle: entry.app.navSubtitle,
    shortDesc: entry.app.shortDesc,
    href: applicationHref(entry.app.slug),
    image: entry.app.heroImage,
    score,
    reason: reasonFor(shared),
  };
}

/* ------------------------------------------------------------------ */

/** All applications except `slug`, in catalogue order. */
function candidatesExcluding(slug) {
  return CATALOGUE.filter((app) => app.slug !== slug);
}

/**
 * What the visitor has searched toward, inferred by running their past queries
 * back through the search index. Opening an application deliberately does NOT
 * feed this: someone who has already read a page gains nothing from being shown
 * it again, whereas a search signals intent toward something unseen.
 */
function getInterestProfile() {
  const interest = new Map();

  for (const query of getPopular(6)) {
    for (const result of search(query, { limit: 4 })) {
      const slug = result.href.split("/").filter(Boolean).pop();
      if (slug) interest.set(slug, (interest.get(slug) || 0) + 1.5);
    }
  }

  return interest;
}
/**
 * The discovery rail. Excludes only the applications already shown as
 * "similar" — not every application that scored well — so the rail stays
 * populated even for tightly clustered applications where the three cleaning
 * pages are each other's nearest neighbours. Anything already opened drops to
 * the back, and only fills leftover slots if nothing else is left.
 */
export function getMoreApplications(slug, limit = 3, options = {}) {
  const { interest, exclude = [], useViews = true } = options;
  const profile = interest instanceof Map ? interest : getInterestProfile();
  const shown = new Set([slug, ...exclude]);
  const viewed = useViews ? new Set(getViewedApplications()) : new Set();

  const rank = (signal) => signal || 0;

  const candidates = candidatesExcluding(slug)
    .filter((app) => !shown.has(app.slug))
    .map((app) => {
      const signal = rank(profile.get(app.slug));
      return {
        slug: app.slug,
        num: app.num,
        title: app.title,
        subtitle: app.navSubtitle,
        shortDesc: app.shortDesc,
        href: applicationHref(app.slug),
        image: app.heroImage,
        score: signal,
        seen: viewed.has(app.slug),
        reason: signal > 0 ? PERSONALISED_REASON : null,
      };
    });

  const byInterest = (a, b) =>
    b.score - a.score || a.title.localeCompare(b.title);

  const unseen = candidates.filter((item) => !item.seen).sort(byInterest);
  const seen = candidates.filter((item) => item.seen).sort(byInterest);

  return [...unseen, ...seen].slice(0, limit);
}

/* ------------------------------------------------------------------ */

const PRODUCT_HREF_FIXES = {
  "Fluidized Temperature Baths": "/products/fluidized-temperature-baths",
  "ThermCal Dry Block Calibrators": "/products/thermcal",
  "HEPA Air Filtration": "/products/hepa-air-filtration",
};

/**
 * The equipment for an application, resolved to the real product page.
 * Several applications in data.js point their product links at a sibling
 * application rather than the product, so the canonical product route wins.
 */
export function getProductsForApplication(slug) {
  const app = CATALOGUE.find((item) => item.slug === slug);
  if (!app) return [];

  const seen = new Set();
  const out = [];

  for (const product of app.relatedProducts || []) {
    const href = PRODUCT_HREF_FIXES[product.name] || product.link;
    if (seen.has(href)) continue;
    seen.add(href);

    const indexEntry = SEARCH_INDEX.find((item) => item.href === href);
    const tags = (app.tags || []).slice(0, 3);

    out.push({
      name: product.name,
      href,
      subtitle: indexEntry ? indexEntry.subtitle : "Thermal processing system",
      keywords: indexEntry ? (indexEntry.keywords || []).slice(0, 4) : [],
      tags,
      reason: app.customerCategory ? `Specified for ${app.title.toLowerCase()}` : null,
    });
  }

  return out;
}

/**
 * Everything the application page needs, in one call.
 *
 * `personalize` is false for the prerendered pass and true once the client has
 * hydrated. Reading localStorage during the first client render would produce
 * a different rail order than the prerendered HTML and trip a hydration
 * mismatch, so the un-personalised result is what gets rendered first.
 */
export function getApplicationRecommendations(slug, options = {}) {
  const { personalize = true } = options;
  const interest = personalize ? getInterestProfile() : new Map();
  const similar = getSimilarApplications(slug, SIMILAR_LIMIT);

  return {
    similar,
    more: getMoreApplications(slug, MORE_LIMIT, {
      interest,
      useViews: personalize,
      exclude: similar.map((item) => item.slug),
    }),
    products: getProductsForApplication(slug),
  };
}
