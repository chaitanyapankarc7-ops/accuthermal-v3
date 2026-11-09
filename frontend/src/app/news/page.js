import Link from "next/link";
import Image from "next/image";
import "./page.css";

const articles = [
  {
    title: "The Basics of Fluidized Bath operation",
    date: "February 5, 2020",
    excerpt:
      "This short video shows the basics of how a Fluidized Temperature Bath operates using our smallest, bench top model FTBSL6.",
    href: "https://accuthermal.com/the-basics-of-fluidized-bath-operation/",
    category: "Applications",
    image: "/assets/images/fluidized/hero-machine.png",
  },
  {
    title: "New HEPA Air Filtration System for environmentally friendly tool cleaning",
    date: "December 3, 2019",
    excerpt:
      "We are launching the new ECU1 portable HEPA Air Filtration System for environmentally friendly extrusion and injection molding tool cleaning.",
    href: "https://accuthermal.com/ecu1-hepa-system/",
    category: "New products",
    image: "/assets/images/heap_air/ecu2.png",
  },
  {
    title: "Large capacity Fluidized Bath for heating laboratory reactors",
    date: "January 21, 2019",
    excerpt:
      "ATS designed and delivered a CSA certified system for a Fortune 500 chemical company needing a high-temperature source for a large coil reactor.",
    href: "https://accuthermal.com/large-capacity-fluidized-bath-for-heating-laboratory-reactors/",
    category: "Case study",
    image: "/assets/images/fluidized/20200214_115814.jpg",
  },
  {
    title: "ATS Fluidized Baths clean tooling used to make Pet treats",
    date: "May 22, 2018",
    excerpt:
      "Accurate Thermal Systems Fluidized Temperature Baths are now being used to clean tooling and hardware used to manufacture pet products and treats.",
    href: "https://accuthermal.com/ats-fluidized-baths-clean-tooling-used-to-make-pet-treats/",
    category: "Applications",
    image: "/assets/images/fluidized/lid-basket.jpg",
  },
  {
    title: "Temperature Validation Software (TVS) for use with ATS Fluidized Temperature Baths",
    date: "April 23, 2018",
    excerpt:
      "ATS developed Temperature Validation Software that works with all ATS Fluidized Temperature Bath models.",
    href: "https://accuthermal.com/temperature-validation-software-tvs-for-use-with-ats-fluidized-temperature-baths/",
    category: "Technology",
    image: "/assets/images/thermal cal/Screenshot 2026-10-09 220156.png",
  },
  {
    title: "We are now an authorized distributor of PolyScience waterbath products",
    date: "April 20, 2018",
    excerpt:
      "ATS is now an authorized distributor of the complete PolyScience line of water baths, circulators and chiller systems.",
    href: "https://accuthermal.com/authorized-distributor-of-polyscience-waterbath-products/",
    category: "Company news",
    image: "/assets/images/products/fluidizedbath.png",
  },
  {
    title: "May 7-11th: NPE 2018 The International Plastics Showcase",
    date: "April 18, 2018",
    excerpt:
      "Accurate Thermal Systems will be exhibiting at NPE 2018 in Orlando. Come visit ATS in the South Hall.",
    href: "https://accuthermal.com/may-7-11th-npe-2018-the-international-plastics-showcase-orlando-fl/",
    category: "Events",
    image: "/assets/images/hero/ftbll12-filter-cleaning.jpg",
  },
  {
    title: "Model FTBLL12W Fluidized Temperature Bath launch",
    date: "April 18, 2018",
    excerpt:
      "The latest addition to the Fluidized Temperature Bath line offers customers a much larger working area for demanding applications.",
    href: "https://accuthermal.com/model-ftbll12w-fluidized-temperature-bath-launch/",
    category: "New products",
    image: "/assets/images/hero-wide/ftbll12-filter-cleaning-wide.png",
  },
  {
    title: "Model FTBSL6 Fluidized Temperature Bath Launch",
    date: "April 18, 2018",
    excerpt:
      "The FTBSL6 is an innovative bench top Fluidized Temperature Bath for small tooling, cleaning and R&D applications.",
    href: "https://accuthermal.com/model-ftbsl6-fluidized-temperature-bath-launch/",
    category: "New products",
    image: "/assets/images/fluidized/airflow-control.jpg",
  },
  {
    title: "ATS Develops Custom Fluidized Bath for Fortune 500 Medical Device Company",
    date: "April 18, 2018",
    excerpt:
      "ATS designed a custom Fluidized Bath system to support a medical device manufacturer’s heat treatment and production requirements.",
    href: "https://accuthermal.com/ats-develops-custom-fluidized-bath-for-fortune-500-medical-device-company/",
    category: "Case study",
    image: "/assets/images/fluidized/temp.png",
  },
  {
    title: "Dynisco Recommends Accurate Thermal Systems!",
    date: "April 18, 2018",
    excerpt:
      "Dynisco recommends Accurate Thermal Systems Fluidized Temperature Baths as a fast, effective and controlled way to clean tooling.",
    href: "https://accuthermal.com/dynisco-recommends-accurate-thermal-systems/",
    category: "Company news",
    image: "/assets/images/customers/thermal-cleaning/dynisco.png",
  },
  {
    title: "Model ThermCal 130 Dry Block Calibrator launch",
    date: "April 18, 2018",
    excerpt:
      "The lightweight ThermCal130 calibrator is designed for portable, reliable temperature verification in the field and on the bench.",
    href: "https://accuthermal.com/model-thermcal-130-dry-block-calibrator-launch/",
    category: "New products",
    image: "/assets/images/products/ats-thermcal400.png",
  },
];

export default function NewsPage() {
  return (
    <main className="news-page">
      <header className="news-hero">
        <div className="wrap news-hero-inner">
          <div className="news-hero-copy">
            <div className="news-kicker">Accurate Thermal Systems / Journal</div>
            <h1>
              News <span>and more…</span>
            </h1>
            <p>
              Product announcements, application stories and technical updates from the ATS team.
              Explore how our thermal systems are used in real production, research and calibration
              environments.
            </p>
            <div className="news-hero-rule" aria-hidden="true" />
          </div>
          <div className="news-hero-note">
            <span>Archive</span>
            <strong>{articles.length}</strong>
            <small>Stories, launches and field notes</small>
          </div>
        </div>
      </header>

      <section className="news-archive" aria-labelledby="news-archive-title">
        <div className="wrap">
          <div className="news-section-heading">
            <div>
              <div className="news-kicker">The ATS archive</div>
              <h2 id="news-archive-title">Ideas from the field.</h2>
            </div>
            <p>
              From fluidized bath operation and polymer removal to new products and customer
              applications, these stories cover the work behind dependable thermal processing.
            </p>
          </div>

          <div className="news-grid">
            {articles.map((article, index) => (
              <article className={`news-card${index === 0 ? " news-card-featured" : ""}`} key={article.title}>
                <a className="news-card-image" href={article.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={article.image}
                      alt=""
                      width={1200}
                      height={675}
                      priority={index < 3}
                    />
                  <span>Read story <span aria-hidden="true">↗</span></span>
                </a>
                <div className="news-card-content">
                  <div className="news-card-meta">
                    <span>{article.category}</span>
                    <time>{article.date}</time>
                  </div>
                  <h3><a href={article.href} target="_blank" rel="noopener noreferrer">{article.title}</a></h3>
                  <p>{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="news-footer-cta">
        <div className="wrap news-footer-cta-inner">
          <div>
            <div className="news-kicker">Have an application to discuss?</div>
            <h2>Let’s talk about your thermal process.</h2>
          </div>
          <Link className="news-cta-button" href="/form">Get a quote <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}
