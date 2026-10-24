```jsx
import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import "./page.css";

const features = [
  {
    number: "01",
    title: "Air Filtration",
    description:
      "Explore the ECU1 system for your industrial air filtration requirements and process environment.",
  },
  {
    number: "02",
    title: "System Integration",
    description:
      "Discuss installation requirements and compatibility with your existing system.",
  },
  {
    number: "03",
    title: "Application Support",
    description:
      "Connect with our team to discuss your application and configuration requirements.",
  },
];

const requirements = [
  {
    number: "01",
    title: "Application Requirements",
    description:
      "Describe your process, operating environment, and intended application.",
  },
  {
    number: "02",
    title: "Installation & Integration",
    description:
      "Discuss installation conditions and integration with your existing equipment.",
  },
  {
    number: "03",
    title: "Technical Specifications",
    description:
      "Request confirmed product data, dimensions, and available configurations.",
  },
  {
    number: "04",
    title: "Manufacturer Assistance",
    description:
      "Contact Accurate Thermal Systems for product-specific technical guidance.",
  },
];

export default function ModelECU1Page() {
  return (
    <>
      <Navbar />

      <main className="hepa-ecu-page">
        {/* HERO SECTION */}
        <section className="hepa-ecu-hero">
          <div className="hepa-ecu-hero-content">
            <Link
              href="/products/hepa-air-filtration"
              className="hepa-ecu-back-link"
            >
              <span aria-hidden="true">←</span>
              All HEPA Products
            </Link>

            <span className="hepa-ecu-eyebrow">
              ATS / HEPA AIR FILTRATION / MODEL 01
            </span>

            <h1>
              ECU<span>1</span>
            </h1>

            <h2>HEPA Air Filtration System</h2>

            <p>
              Discover the ECU1 model from Accurate Thermal Systems.
              Contact our team to discuss your industrial air filtration
              application, system integration requirements, and confirmed
              technical specifications.
            </p>

            <div className="hepa-ecu-actions">
              <Link
                href="/form"
                className="hepa-ecu-primary-btn"
              >
                Request an Enquiry <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#ecu1-overview"
                className="hepa-ecu-secondary-btn"
              >
                Explore the System <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hepa-ecu-trust-row">
              <span>Technical Enquiries</span>
              <span>Application Support</span>
            </div>
          </div>

          {/* PRODUCT VISUAL */}
          <div className="hepa-ecu-visual">
            <div className="hepa-ecu-visual-grid" />

            <div className="hepa-ecu-orbit hepa-ecu-orbit-one" />
            <div className="hepa-ecu-orbit hepa-ecu-orbit-two" />

            <div className="hepa-ecu-visual-label">
              <span>ATS / PRODUCT SERIES</span>
              <strong>ECU1</strong>
              <small>HEPA AIR FILTRATION</small>
            </div>

            <span className="hepa-ecu-visual-index">01</span>
          </div>
        </section>

        {/* OVERVIEW */}
        <section
          className="hepa-ecu-overview"
          id="ecu1-overview"
        >
          <div className="hepa-ecu-section-heading">
            <span>01 / PRODUCT OVERVIEW</span>
            <h2>Engineered for your application.</h2>
          </div>

          <div className="hepa-ecu-overview-copy">
            <p>
              The ECU1 product page provides a starting point for
              evaluating your filtration requirements. Discuss your
              operating environment, installation conditions, and
              intended application with Accurate Thermal Systems to
              determine the information needed for product selection.
            </p>

            <Link
              href="/form"
              className="hepa-ecu-text-link"
            >
              Discuss Your Application <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>

        {/* FEATURES */}
        <section className="hepa-ecu-features">
          <div className="hepa-ecu-section-heading">
            <span>02 / KEY CONSIDERATIONS</span>
            <h2>Explore the system.</h2>
          </div>

          <div className="hepa-ecu-feature-grid">
            {features.map((feature) => (
              <article
                className="hepa-ecu-feature-card"
                key={feature.number}
              >
                <span className="hepa-ecu-feature-number">
                  {feature.number}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

                <Link
                  href="/form"
                  className="hepa-ecu-feature-link"
                >
                  Learn More <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* TECHNICAL INFORMATION */}
        <section className="hepa-ecu-specifications">
          <div>
            <span>03 / TECHNICAL INFORMATION</span>

            <h2>Get the official ECU1 data.</h2>

            <p>
              Request confirmed technical specifications, product
              dimensions, performance information, and available
              configurations directly from our team.
            </p>
          </div>

          <Link
            href="/form"
            className="hepa-ecu-primary-btn"
          >
            Request Technical Details <span aria-hidden="true">↗</span>
          </Link>
        </section>

        {/* APPLICATION REQUIREMENTS */}
        <section className="hepa-ecu-requirements">
          <div className="hepa-ecu-section-heading">
            <span>04 / APPLICATION REVIEW</span>
            <h2>Start with the right information.</h2>
            <p>
              Share your requirements so our team can help you
              identify the relevant technical details.
            </p>
          </div>

          <div className="hepa-ecu-requirements-grid">
            {requirements.map((item) => (
              <article
                className="hepa-ecu-requirement-card"
                key={item.number}
              >
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="hepa-ecu-bottom-cta">
          <span>ACCURATE THERMAL SYSTEMS / ECU1</span>

          <h2>Let's discuss your requirements.</h2>

          <p>
            Get in touch with our team to discuss your HEPA air
            filtration application and request official product
            information.
          </p>

          <div className="hepa-ecu-actions">
            <Link
              href="/form"
              className="hepa-ecu-primary-btn"
            >
              Contact Our Team <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/products/hepa-air-filtration"
              className="hepa-ecu-secondary-btn"
            >
              <span aria-hidden="true">←</span> All HEPA Products
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
```