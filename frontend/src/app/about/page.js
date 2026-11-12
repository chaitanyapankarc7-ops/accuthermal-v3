import Link from "next/link";
import "./page.css";

const PRODUCT_GROUPS = [
  { title: "Fluidized Temperature Baths", text: "Stable and uniform temperature environments for thermal cleaning, heat treatment, and demanding process applications.", href: "/products/fluidized-temperature-baths/" },
  { title: "Dry Block Temperature Calibrators", text: "High-accuracy, stable temperature sources for field and laboratory calibration work.", href: "/products/thermcal/" },
  { title: "HEPA Air Filtration", text: "Filtration systems designed to capture smoke, particulates, fumes, and VOCs from thermal tool cleaning operations.", href: "/products/hepa-air-filtration/" },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-grid" aria-hidden="true" />
        <div className="wrap about-hero-inner">
          <div className="about-hero-copy">
            <h1>About Us</h1>
            <p>For over 40 years, Accurate Thermal Systems has designed, built, and supported laboratory and industrial temperature systems.</p>
          </div>
        </div>
      </section>

      <section className="about-intro">
        <div className="wrap about-intro-grid">
          <h2>Unique solutions for thermal applications.</h2>
          <div>
            <p>Our products include fluidized temperature baths, dry block temperature calibrators, liquid temperature baths, ovens, incubators, furnaces, and other heating laboratory products and temperature measurement instruments.</p>
            <p>Our products and services are sold to direct end users, distributors, dealers, and manufacturer representatives.</p>
          </div>
        </div>
      </section>

      <section className="about-capabilities">
        <div className="wrap">
          <div className="about-section-head"><h2>From standard equipment to custom systems.</h2><p>We develop products around the requirements of the process, including low temperatures down to -100°C, high temperatures up to 1200°C, and proprietary medical device applications requiring large working volumes.</p></div>
          <div className="about-capability-list">
            <div><strong>-100°C</strong><span>Low-temperature capability</span></div>
            <div><strong>1200°C</strong><span>High-temperature capability</span></div>
            <div><strong>≤ 3 months</strong><span>Target custom-solution turnaround</span></div>
          </div>
        </div>
      </section>

      <section className="about-products">
        <div className="wrap">
          <div className="about-section-head"><h2>Products that solve real work.</h2><p>Explore the systems and equipment that make up the Accurate Thermal Systems range.</p></div>
          <div className="about-product-list">{PRODUCT_GROUPS.map((product) => <Link key={product.title} href={product.href} className="about-product-row"><div><h3>{product.title}</h3><p>{product.text}</p></div><span aria-hidden="true">→</span></Link>)}</div>
        </div>
      </section>

      <section className="about-cta"><div className="wrap about-cta-inner"><h2>If a standard product does not fit, let’s talk about the application.</h2><Link className="btn primary" href="/form">Get a Quote <span aria-hidden="true">→</span></Link></div></section>
    </main>
  );
}
