
import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import "./page.css";

const features = [
  {
    number: "01",
    title: "Filtration Applications",
    description:
      "Evaluate the ECU2 model for your specific industrial filtration application.",
  },
  {
    number: "02",
    title: "Configuration",
    description:
      "Confirm available configurations and compatibility with your system.",
  },
  {
    number: "03",
    title: "Technical Assistance",
    description:
      "Speak with our team about your operating and installation requirements.",
  },
];

export default function ModelECU2Page() {
  return (
    <>
      <Navbar />

      <main className="hepa-ecu-page">
        <section className="hepa-ecu-hero">
          <div className="hepa-ecu-hero-content">
            <span className="hepa-ecu-eyebrow">
              ATS / HEPA AIR FILTRATION / MODEL 02
            </span>

            <h1>
              ECU<span>2</span>
            </h1>

            <h2>HEPA Air Filtration System</h2>

            <p>
              Explore the ECU2 model from Accurate Thermal Systems.
              Contact our team for confirmed technical information,
              configuration options, and application guidance.
            </p>

            <div className="hepa-ecu-actions">
              <Link href="/form" className="hepa-ecu-primary-btn">
                Request an Enquiry <span>↗</span>
              </Link>

              <Link
                href="/products/hepa-air-filtration"
                className="hepa-ecu-secondary-btn"
              >
                ← All HEPA Products
              </Link>
            </div>
          </div>

          <div className="hepa-ecu-visual">
            <div className="hepa-ecu-visual-grid" />
            <div className="hepa-ecu-orbit hepa-ecu-orbit-one" />
            <div className="hepa-ecu-orbit hepa-ecu-orbit-two" />

            <div className="hepa-ecu-visual-label">
              <span>ATS / PRODUCT SERIES</span>
              <strong>ECU2</strong>
              <small>HEPA AIR FILTRATION</small>
            </div>

            <span className="hepa-ecu-visual-index">02</span>
          </div>
        </section>

        <section className="hepa-ecu-overview">
          <div className="hepa-ecu-section-heading">
            <span>01 / PRODUCT OVERVIEW</span>
            <h2>Designed around your process.</h2>
          </div>

          <p className="hepa-ecu-overview-copy">
            Use this page to review the ECU2 product and discuss its
            intended application with Accurate Thermal Systems. Confirm
            performance data and system compatibility with the manufacturer.
          </p>
        </section>

        <section className="hepa-ecu-features">
          <div className="hepa-ecu-section-heading">
            <span>02 / KEY CONSIDERATIONS</span>
            <h2>Find the right configuration.</h2>
          </div>

          <div className="hepa-ecu-feature-grid">
            {features.map((feature) => (
              <article className="hepa-ecu-feature-card" key={feature.number}>
                <span className="hepa-ecu-feature-number">
                  {feature.number}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hepa-ecu-specifications">
          <div>
            <span>03 / TECHNICAL INFORMATION</span>
            <h2>Get the official ECU2 data.</h2>
            <p>
              Request confirmed technical specifications and available
              configurations for your application.
            </p>
          </div>

          <Link href="/form" className="hepa-ecu-primary-btn">
            Request Technical Details <span>↗</span>
          </Link>
        </section>

        <section className="hepa-ecu-bottom-cta">
          <span>ACCURATE THERMAL SYSTEMS</span>
          <h2>Let's discuss your requirements.</h2>
          <Link href="/form" className="hepa-ecu-primary-btn">
            Contact Our Team <span>↗</span>
          </Link>
        </section>
      </main>
    </>
  );
}
