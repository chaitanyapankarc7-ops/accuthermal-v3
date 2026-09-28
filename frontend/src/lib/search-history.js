/**
 * Visitor search history, persisted in localStorage.
 *
 * There is no server in this project (static export), so this is the only
 * persistence available. Every access is guarded: `window` does not exist
 * during prerender, and localStorage throws outright in Safari private mode
 * and when the user has blocked site data.
 */

const STORAGE_KEY = "ats.search.v1";
const VIEWS_KEY = "ats.views.v1";
const MAX_ENTRIES = 20;
const MAX_VIEWS = 20;
const MAX_QUERY_LENGTH = 80;

function isEmpty(value) {
  return !value || typeof value !== "string" || value.trim().length === 0;
}

function normalize(query) {
  return String(query).trim().replace(/\s+/g, " ").slice(0, MAX_QUERY_LENGTH);
}

function read() {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter((item) => item && isEmpty(item.query) === false)
      .map((item) => ({
        query: normalize(item.query),
        at: Number(item.at) || 0,
        count: Number(item.count) || 1,
      }))
      .filter((item) => item.query.length > 0);
  } catch {
    return [];
  }
}

function write(entries) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    /* Storage unavailable or full — history is a nicety, not a requirement. */
  }
}

/** Record a search. Re-searching an existing query bumps its count and its
    position in the recency list. */
export function recordQuery(query) {
  const value = normalize(query);
  if (isEmpty(value)) return;

  const entries = read();
  const key = value.toLowerCase();
  const existing = entries.find((item) => item.query.toLowerCase() === key);

  /* Date.now() can repeat within a single millisecond, which would make
     recency arbitrary. Keep the timestamp strictly increasing. */
  const latest = entries.reduce((max, item) => Math.max(max, item.at), 0);
  const now = Math.max(Date.now(), latest + 1);

  if (existing) {
    existing.count += 1;
    existing.at = now;
  } else {
    entries.push({ query: value, count: 1, at: now });
  }

  /* Cap on distinct queries, keeping the most-searched. */
  write(entries.sort((a, b) => b.count - a.count || b.at - a.at).slice(0, MAX_ENTRIES));
}

/** Most recent first. */
export function getRecent(limit = 5) {
  return read()
    .slice()
    .sort((a, b) => b.at - a.at)
    .slice(0, limit)
    .map((item) => item.query);
}

/** Most searched first. */
export function getPopular(limit = 5) {
  const seen = new Set();
  const out = [];

  for (const item of read().sort((a, b) => b.count - a.count || b.at - a.at)) {
    const key = item.query.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item.query);
    if (out.length >= limit) break;
  }

  return out;
}

/** How many times this exact query was searched before. Feeds the ranking boost. */
export function getQueryCount(query) {
  const key = normalize(query).toLowerCase();
  if (!key) return 0;

  const match = read().find((item) => item.query.toLowerCase() === key);
  return match ? match.count : 0;
}

export function clearHistory() {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* nothing to do */
  }
}

/* =====================================================
   APPLICATION VIEW HISTORY
   Feeds the personalised "more applications" rail. Kept under its own key so
   clearing search history does not also clear browsing history.
   ===================================================== */

function readViews() {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(VIEWS_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((item) => (typeof item === "string" ? { slug: item, at: 0 } : item))
      .filter((item) => item && typeof item.slug === "string" && item.slug.length > 0)
      .map((item) => ({ slug: item.slug, at: Number(item.at) || 0 }));
  } catch {
    return [];
  }
}

/** Record that an application page was opened. Most recent ends up first. */
export function recordView(slug) {
  if (typeof window === "undefined" || !slug) return;

  const entries = readViews().filter((item) => item.slug !== slug);
  const latest = entries.reduce((max, item) => Math.max(max, item.at), 0);

  entries.push({ slug, at: Math.max(Date.now(), latest + 1) });
  writeTo(VIEWS_KEY, entries.slice(0, MAX_VIEWS));
}

/** Slugs the visitor opened before, most recent first. */
export function getViewedApplications() {
  return readViews()
    .sort((a, b) => b.at - a.at)
    .map((item) => item.slug);
}

function writeTo(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* history is a nicety, not a requirement */
  }
}
