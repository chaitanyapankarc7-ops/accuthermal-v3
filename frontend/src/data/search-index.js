import { applications } from "../app/applications/data";

export const ENTRY_TYPES = {
  application: "Application",
  product: "Product",
  download: "Document",
  page: "Page",
};

/* Order used to group results and to break score ties. */
export const TYPE_ORDER = ["product", "application", "download", "page"];

/* Keys whose values are URLs, image paths or captions already covered by
   title/subtitle. Skipped so the body text stays prose. */
const BODY_SKIP_KEYS = new Set([
  "src",
  "href",
  "link",
  "alt",
  "poster",
  "heroImage",
  "detailImage",
  "image",
  "slug",
  "num",
  "tags",
  "relatedProducts",
  "benefits",
  "description",
  "shortDesc",
  "navSubtitle",
  "title",
]);

/* Recursively flattens an application's data object into searchable prose.
   Adding copy to data.js automatically widens the index. */
function collectBody(value, out, depth = 0) {
  if (depth > 6 || value == null) return;

  if (typeof value === "string") {
    if (value.length > 2) out.push(value);
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) collectBody(item, out, depth + 1);
    return;
  }

  if (typeof value === "object") {
    for (const key of Object.keys(value)) {
      if (BODY_SKIP_KEYS.has(key)) continue;
      collectBody(value[key], out, depth + 1);
    }
  }
}

/* Engineering vocabulary visitors actually type, per application. The derived
   `tags` only cover marketing terms, so these widen recall. */
const APPLICATION_KEYWORDS = {
  "thermal-cleaning": [
    "polymer",
    "plastic",
    "resin",
    "purge",
    "changeover",
    "organics",
    "burn-off",
    "pyrolysis",
    "oven",
    "furnace",
    "ultrasonic",
    "solvent",
    "silicone",
    "rubber",
    "adhesive",
    "paint",
    "downtime",
    "hydrothermal",
    "breaker plate",
    "hot runner",
    "spinneret",
    "screen changer",
    "melt flow indexer",
    "capillary rheometer",
  ],
  "nitinol-shape-setting": [
    "medical device",
    "stent",
    "superelastic",
    "shape memory alloy",
    "annealing",
    "heat treatment",
    "biocompatible",
    "orthopedic",
    "wire",
    "tube",
  ],
  "reactor-heating": [
    "chemical",
    "pharmaceutical",
    "process vessel",
    "agitation",
    "lab",
    "pilot plant",
    "jacketed",
    "pressure",
    "reflux",
  ],
  "temperature-calibration": [
    "calibrator",
    "dry block",
    "thermocouple",
    "probe",
    "RTD",
    "sensor",
    "accuracy",
    "uniformity",
    "stability",
    "traceability",
    "verification",
  ],
  "extrusion-die-cleaning": [
    "die",
    "polymer removal",
    "channels",
    "flow passages",
    "grooves",
    "hot runner",
    "spinneret",
    "screen changer",
    "film extrusion",
    "profile",
    "purging",
    "downtime",
  ],
  "extruder-screw-cleaning": [
    "screw",
    "barrel",
    "flights",
    "roots",
    "mixing sections",
    "scraping",
    "polymer removal",
    "film extrusion",
    "coating",
    "changeover",
  ],
};

function applicationEntry(app) {
  const body = [];
  collectBody(app, body);

  return {
    id: `application-${app.slug}`,
    type: "application",
    title: app.title,
    subtitle: app.navSubtitle,
    href: `/applications/${app.slug}`,
    keywords: [
      ...(app.tags || []),
      ...(app.relatedProducts || []).map((p) => p.name),
      ...(APPLICATION_KEYWORDS[app.slug] || []),
    ],
    body: body.join(" "),
    related: (app.relatedProducts || []).map((p) => p.link).filter(Boolean),
  };
}

const PRODUCTS = [
  {
    id: "product-fluidized-temperature-baths",
    type: "product",
    title: "Fluidized Temperature Baths",
    subtitle: "Thermal processing systems",
    href: "/products/fluidized-temperature-baths",
    keywords: [
      "FTB",
      "FTBL",
      "FTBLL",
      "FTBSL",
      "fluidized bath",
      "fluidized bed",
      "aluminum oxide",
      "activated alumina",
      "hot runner",
      "spinneret",
      "screen changer",
      "breaker plate",
      "melt flow indexer",
      "capillary rheometer",
      "crosshead",
      "static mixer",
      "hydrothermal",
      "bath",
      "cleaning",
      "annealing",
    ],
    body:
      "Fluidized temperature baths use heated aluminum oxide media to clean tooling, anneal parts and provide uniform heat. Brochures for FTBL12, FTBL26, FTBL12W, FTBLL27, FTBLL47, FTBSL15, FTBSL25 and FTBSL6 models.",
  },
  {
    id: "product-thermcal",
    type: "product",
    title: "ThermCal Dry Block Calibrators",
    subtitle: "Temperature calibration systems",
    href: "/products/thermcal",
    keywords: [
      "ThermCal",
      "dry block",
      "calibrator",
      "calibration",
      "thermocouple",
      "probe",
      "RTD",
      "sensor",
      "accuracy",
      "stability",
      "uniformity",
      "portable",
      "instrument",
      "verification",
      "traceability",
    ],
    body:
      "Precision dry block temperature calibrators providing a stable, uniform and portable temperature source for sensor calibration and verification.",
  },
  {
    id: "product-hepa-air-filtration",
    type: "product",
    title: "HEPA Air Filtration",
    subtitle: "Process air filtration systems",
    href: "/products/hepa-air-filtration",
    keywords: [
      "HEPA",
      "ECU1",
      "ECU2",
      "filtration",
      "filter",
      "fume",
      "smoke",
      "vapor",
      "VOC",
      "particulate",
      "dust",
      "silica",
      "extraction",
      "ventilation",
      "exhaust",
      "air quality",
      "capture",
    ],
    body:
      "High-efficiency filtration systems engineered to capture smoke, particles, fumes and VOCs from demanding industrial operations.",
  },
];

const DOWNLOADS = [
  {
    id: "download-ftbl12-brochure",
    type: "download",
    title: "FTB L12 / FTB L26 / FTB L12W Brochure",
    subtitle: "Fluidized Temperature Bath Series",
    href: "/downloads/FTBL12-FTBL26-FTBL12W-fluidized-bath-brochure.pdf",
    keywords: ["FTBL12", "FTBL26", "FTBL12W", "brochure", "datasheet", "specifications", "PDF"],
    body: "Product brochure for the FTBL12, FTBL26 and FTBL12W fluidized temperature bath series.",
  },
  {
    id: "download-ftbll-brochure",
    type: "download",
    title: "FTB LL27 / FTB LL47 Brochure",
    subtitle: "Fluidized Temperature Bath Series",
    href: "/downloads/FTBLL27-FTBLL47-fluidized-bath-brochure.pdf",
    keywords: ["FTBLL27", "FTBLL47", "breaker plate", "brochure", "datasheet", "specifications", "PDF"],
    body: "Product brochure for the FTBLL27 and FTBLL47 fluidized temperature bath series.",
  },
  {
    id: "download-ftbsl-brochure",
    type: "download",
    title: "FTB SL15 / FTB SL25 Brochure",
    subtitle: "Fluidized Temperature Bath Series",
    href: "/downloads/FTBSL15-FTBSL25-fluidized-bath-brochure.pdf",
    keywords: ["FTBSL15", "FTBSL25", "brochure", "datasheet", "specifications", "PDF"],
    body: "Product brochure for the FTBSL15 and FTBSL25 fluidized temperature bath series.",
  },
  {
    id: "download-ftbsl6-brochure",
    type: "download",
    title: "FTB SL6 Documentation",
    subtitle: "Fluidized Temperature Bath Series",
    href: "/downloads/FTBSL6-fluidized-bath-brochure.pdf",
    keywords: ["FTBSL6", "SL6", "brochure", "manual", "datasheet", "specifications", "PDF"],
    body: "Documentation for the FTBSL6 fluidized temperature bath.",
  },
  {
    id: "download-fume-ventilation",
    type: "download",
    title: "Fume Ventilation Diagrams",
    subtitle: "Engineering reference",
    href: "/downloads/fume-ventilation-diagrams.pdf",
    keywords: ["fume", "ventilation", "exhaust", "hood", "scrubber", "airflow", "CFM", "diagrams", "PDF"],
    body: "Fume ventilation and exhaust system diagrams for fluidized temperature bath installations.",
  },
  {
    id: "download-brown-aluminum-oxide",
    type: "download",
    title: "Brown Aluminum Oxide Safety Data",
    subtitle: "Fluidized bath media",
    href: "/downloads/brown-aluminum-oxide.pdf",
    keywords: ["aluminum oxide", "brown", "media", "abrasive", "safety data", "SDS", "MSDS", "PDF"],
    body: "Safety data sheet for brown aluminum oxide fluidized bath media.",
  },
  {
    id: "download-white-activated-alumina",
    type: "download",
    title: "White Activated Alumina Safety Data",
    subtitle: "Fluidized bath media",
    href: "/downloads/white-activated-alumina.pdf",
    keywords: ["activated alumina", "white alumina", "media", "safety data", "SDS", "MSDS", "PDF"],
    body: "Safety data sheet for white activated alumina fluidized bath media.",
  },
];

const PAGES = [
  {
    id: "page-breaker-plate-cleaning",
    type: "application",
    title: "Breaker Plate Cleaning",
    subtitle: "Thermal cleaning for polymer-filled holes",
    href: "/applications/thermal-cleaning/breaker-plate-cleaning",
    keywords: [
      "breaker plate",
      "breaker plate cleaning",
      "polymer",
      "PVC",
      "CPVC",
      "polyethylene",
      "polypropylene",
      "nylon",
      "PEEK",
      "hardness",
      "drilling",
      "scraping",
      "holes",
      "screen pack",
    ],
    body:
      "Thermal cleaning of polymer-filled breaker plate holes using fluidized temperature baths. Cleaning temperature selection by polymer, hardness protection, and comparison against manual drilling and oven methods.",
    related: ["/products/fluidized-temperature-baths", "/products/hepa-air-filtration"],
  },
  {
    id: "page-systems",
    type: "page",
    title: "Calibration Services",
    subtitle: "ATS validation & support",
    href: "/#systems",
    keywords: [
      "calibration service",
      "validation",
      "support",
      "service",
      "repair",
      "recalibration",
      "certification",
      "accredited",
    ],
    body: "Calibration services, validation and technical support provided by Accurate Thermal Systems.",
  },
  {
    id: "page-industries",
    type: "page",
    title: "Industries We Serve",
    subtitle: "Markets and end uses",
    href: "/#industries",
    keywords: [
      "industry",
      "industries",
      "market",
      "plastics",
      "polymer",
      "medical device",
      "laboratory",
      "research",
      "manufacturing",
      "OEM",
    ],
    body: "Industries and markets served by Accurate Thermal Systems.",
  },
  {
    id: "page-resources",
    type: "page",
    title: "Technical Resources",
    subtitle: "Technical library and brochures",
    href: "/#resources",
    keywords: [
      "resources",
      "documentation",
      "manuals",
      "technical files",
      "library",
      "brochures",
      "media",
      "accessories",
      "parts",
      "support",
    ],
    body:
      "Technical resources including product brochures, instruction manuals, technical files, media and accessories.",
  },
  {
    id: "page-contact",
    type: "page",
    title: "Contact an Engineer",
    subtitle: "Talk to ATS about your application",
    href: "/#contact",
    keywords: ["contact", "engineer", "sales", "email", "inquiry", "consultation", "talk"],
    body: "Contact Accurate Thermal Systems to discuss a thermal system built around your application.",
  },
  {
    id: "page-quote",
    type: "page",
    title: "Get a Quote",
    subtitle: "Request pricing for a thermal system",
    href: "/form",
    keywords: [
      "quote",
      "quotation",
      "price",
      "pricing",
      "cost",
      "estimate",
      "RFQ",
      "order",
      "buy",
      "purchase",
      "request",
    ],
    body: "Request a quote from Accurate Thermal Systems for fluidized baths, calibrators and air filtration systems.",
  },
];

export const SEARCH_INDEX = [
  ...PRODUCTS,
  ...applications.map(applicationEntry),
  ...DOWNLOADS,
  ...PAGES,
];
