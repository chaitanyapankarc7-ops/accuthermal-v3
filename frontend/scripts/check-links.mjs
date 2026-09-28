import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = join(process.cwd(), "out");
const SKIP_SCHEME = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;

/* Media the site links to that has never been committed. The HEPA product page
   was built before its assets arrived. These are reported but do not fail the
   build, so a known gap can never mask a real regression — and each entry
   announces itself as resolved once the file lands, prompting its removal. */
const KNOWN_MISSING = new Set([
  "/assets/images/hepa/hero-machine.png",
  "/assets/images/hepa/ecu1.jpg",
  "/assets/images/hepa/ecu2.jpg",
  "/videos/hepa-filtration.mp4",
  "/downloads/ECU1-brochure.pdf",
  "/downloads/ECU2-brochure.pdf",
  "/downloads/hepa-safety-data.pdf",
]);

/* Every build output is indexed as the URL a browser would request, so link
   checks are a set lookup rather than a filesystem hit per link.
   out/index.html -> "/", out/foo/index.html -> "/foo", out/foo.html -> "/foo" */
function buildRouteIndex(dir, routes = new Set()) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      buildRouteIndex(full, routes);
      continue;
    }
    const rel = relative(OUT, full).split(sep).join("/");
    if (entry === "index.html") {
      routes.add("/" + rel.slice(0, -"index.html".length));
    } else if (entry.endsWith(".html")) {
      routes.add("/" + rel.slice(0, -".html".length));
    } else {
      routes.add("/" + rel);
    }
  }
  return routes;
}

function htmlFiles(dir, found = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) htmlFiles(full, found);
    else if (entry.endsWith(".html")) found.push(full);
  }
  return found;
}

/* Attribute values are HTML-escaped, so `&` arrives as `&amp;` and must be
   unescaped before the value is compared against real filenames. */
function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

/* "trailingSlash: true" means /foo/ is canonical, but /foo must resolve too. */
function normalize(path) {
  const clean = path.split("#")[0].split("?")[0];
  if (!clean) return clean;
  try {
    return decodeURIComponent(decodeEntities(clean));
  } catch {
    return decodeEntities(clean);
  }
}

function targetExists(route, routes) {
  if (routes.has(route)) return true;
  const withoutSlash = route.replace(/\/+$/, "");
  return routes.has(withoutSlash) || routes.has(withoutSlash + "/");
}

const routes = buildRouteIndex(OUT);
const files = htmlFiles(OUT);
const broken = [];
const anchorWarnings = [];
const knownGaps = new Set();
const resolvedGaps = new Set();

for (const file of files) {
  const html = readFileSync(file, "utf8");
  const source = relative(process.cwd(), file);

  for (const [, attribute, value] of html.matchAll(/\b(href|src)\s*=\s*"([^"]*)"/g)) {
    const raw = value.trim();

    if (SKIP_SCHEME.test(raw)) continue;

    if (raw.startsWith("#")) {
      if (raw.length > 1 && !html.includes(`id="${raw.slice(1)}"`)) {
        anchorWarnings.push(`${source} -> ${raw}`);
      }
      continue;
    }

    if (!raw.startsWith("/")) {
      broken.push(`${source} -> ${raw} (relative link, resolves against the current path)`);
      continue;
    }

    const route = normalize(raw);
    const exists = targetExists(route, routes);

    if (KNOWN_MISSING.has(route)) {
      (exists ? resolvedGaps : knownGaps).add(route);
      continue;
    }

    if (!exists) broken.push(`${source} -> ${route}`);
  }
}

if (resolvedGaps.size) {
  console.log("\nKnown-missing entries that now exist — remove them from KNOWN_MISSING:");
  for (const route of [...resolvedGaps].sort()) console.log(`  ${route}`);
}

if (knownGaps.size) {
  console.log(`\n${knownGaps.size} known missing asset(s), not failing the build:`);
  for (const route of [...knownGaps].sort()) console.log(`  ${route}`);
}

if (anchorWarnings.length) {
  console.log(`\n${anchorWarnings.length} same-page anchor(s) with no matching id:`);
  for (const warning of [...new Set(anchorWarnings)]) console.log(`  ${warning}`);
  console.log("  (warnings only — not failing the build)");
}

if (broken.length) {
  console.error(`\n${broken.length} broken internal link(s):`);
  for (const entry of [...new Set(broken)]) console.error(`  ${entry}`);
  console.error("\nLink check failed.");
  process.exit(1);
}

console.log(
  `\nLink check passed: ${files.length} pages scanned, all internal links resolve` +
    (knownGaps.size ? ` (${knownGaps.size} known-missing asset(s) listed above).` : ".")
);
