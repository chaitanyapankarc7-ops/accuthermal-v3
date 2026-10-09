
"use client";

import "./page.css";
import Navbar from "../../../../components/Navbar";

const specifications = [
  ["Maximum temperature", "455°C / 850°F"],
  ["Temperature range", "Ambient +5°C to 455°C"],
  ["Accuracy", "±0.4°C"],
  ["Stability", "±0.05°C"],
  ["Heat-up time", "12 minutes"],
  ["Power", "900 W"],
  ["Instrument weight", "11 lbs"],
  ["Resolution", "0.1°C"],
  ["Warranty", "2 years"],
];

const features = [
  {
    number: "01",
    title: "High-temperature calibration",
    description:
      "Designed for temperature calibration applications reaching up to 455°C.",
  },
  {
    number: "02",
    title: "Precise temperature control",
    description:
      "Designed to support repeatable calibration procedures with controlled temperatures.",
  },
  {
    number: "03",
    title: "Compact dry block design",
    description:
      "A practical calibration instrument for laboratory and field environments.",
  },
  {
    number: "04",
    title: "Simple operation",
    description:
      "An integrated temperature display provides convenient access to operating temperature.",
  },
];

export default function ThermCal400Page() {
  return (
    <>
      <Navbar />

      <main className="tc400-page">
        {/* HERO */}
        <section className="tc400-hero">
          <div className="tc400-container">
            <div className="tc400-breadcrumb">
              <a href="/products/thermcal/ThermCal400">
                THERMCAL CALIBRATORS
              </a>
              <span>/</span>
              <span>THERMCAL400</span>
            </div>

            <div className="tc400-hero-grid">
              <div className="tc400-visual">
                <div className="tc400-grid-bg" />
                <div className="tc400-orbit tc400-orbit-one" />
                <div className="tc400-orbit tc400-orbit-two" />

                <span className="tc400-image-label">
                  ATS / PRECISION CALIBRATION
                </span>

                <img
                  src="/assets/images/thermal%20cal/Screenshot%202026-10-09%20220143.png"
                  alt="Accurate Thermal Systems ThermCal400 dry block temperature calibrator"
                  className="tc400-product-image"
                />

                <div className="tc400-model-stamp">
                  <span>MODEL</span>
                  <strong>THERMCAL400</strong>
                </div>
              </div>

              <div className="tc400-hero-content">
                <span className="tc400-eyebrow">
                  ATS3010 / ATS3020
                </span>

                <h1>
                  ThermCal<span>400</span>
                </h1>

                <p className="tc400-lead">
                  A high-temperature dry block temperature calibrator
                  designed for laboratory and field use, providing
                  operation from ambient +5°C up to 455°C / 850°F.
                </p>

                <div className="tc400-metrics">
                  <div>
                    <strong>455°C</strong>
                    <span>MAX TEMP</span>
                  </div>
                  <div>
                    <strong>±0.4°C</strong>
                    <span>ACCURACY</span>
                  </div>
                  <div>
                    <strong>±0.05°C</strong>
                    <span>STABILITY</span>
                  </div>
                  <div>
                    <strong>12 MIN</strong>
                    <span>HEAT-UP</span>
                  </div>
                </div>

                <div className="tc400-tags">
                  <span>900 W</span>
                  <span>11 LBS</span>
                  <span>0.1°C RESOLUTION</span>
                  <span>2 YEAR WARRANTY</span>
                </div>

                <div className="tc400-actions">
                  <a href="/form" className="tc400-btn tc400-btn-primary">
                    REQUEST A QUOTE <span>↗</span>
                  </a>
                  <a
                    href="#tc400-specifications"
                    className="tc400-btn tc400-btn-secondary"
                  >
                    TECHNICAL DATA <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW STRIP */}
        <section className="tc400-overview">
          <div className="tc400-container tc400-overview-grid">
            <div>
              <span>01 / TEMPERATURE</span>
              <strong>Up to 455°C</strong>
            </div>
            <div>
              <span>02 / APPLICATION</span>
              <strong>Laboratory & Field</strong>
            </div>
            <div>
              <span>03 / INSTRUMENT</span>
              <strong>Dry Block Calibrator</strong>
            </div>
            <div>
              <span>04 / WARRANTY</span>
              <strong>2 Years</strong>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="tc400-features">
          <div className="tc400-container">
            <div className="tc400-section-heading">
              <div>
                <span>01 / ENGINEERED FOR ACCURACY</span>
                <h2>
                  Precision in
                  <br />
                  every degree.
                </h2>
              </div>
              <p>
                Explore the design features of the ThermCal400
                temperature calibration system.
              </p>
            </div>

            <div className="tc400-feature-grid">
              {features.map((feature) => (
                <article className="tc400-feature-card" key={feature.number}>
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="tc400-feature-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="tc400-applications">
          <div className="tc400-container tc400-applications-grid">
            <div>
              <span className="tc400-eyebrow">
                02 / APPLICATIONS
              </span>
              <h2>
                Built for
                <br />
                calibration work.
              </h2>
              <p>
                The ThermCal400 is intended for temperature calibration
                tasks in laboratory and field environments.
              </p>
            </div>

            <div className="tc400-application-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Laboratory calibration</h3>
                  <p>
                    Temperature calibration work in controlled
                    laboratory environments.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Field calibration</h3>
                  <p>
                    A compact instrument format for suitable
                    on-site calibration tasks.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Industrial temperature testing</h3>
                  <p>
                    Supports temperature testing workflows that
                    require a dry block calibrator.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section
          className="tc400-specifications"
          id="tc400-specifications"
        >
          <div className="tc400-container">
            <div className="tc400-section-heading">
              <div>
                <span>03 / TECHNICAL DATA</span>
                <h2>Specifications</h2>
              </div>
              <p>
                Technical information for the ThermCal400 model.
              </p>
            </div>

            <div className="tc400-spec-table">
              {specifications.map(([label, value], index) => (
                <div className="tc400-spec-row" key={label}>
                  <span className="tc400-spec-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="tc400-spec-label">{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <p className="tc400-spec-note">
              Please confirm final operating conditions and configuration
              with Accurate Thermal Systems before ordering.
            </p>
          </div>
        </section>

        {/* ENQUIRY CTA */}
        <section className="tc400-cta">
          <div className="tc400-container tc400-cta-inner">
            <div>
              <span>04 / NEXT STEP</span>
              <h2>
                Need a calibration
                <br />
                solution?
              </h2>
              <p>
                Contact Accurate Thermal Systems to discuss your
                ThermCal400 requirements.
              </p>
            </div>

            <a href="/form" className="tc400-btn tc400-btn-light">
              ENQUIRE ABOUT THERMCAL400 <span>↗</span>
            </a>
          </div>
        </section>

        {/* BACK TO PRODUCT RANGE */}
        <div className="tc400-container tc400-back">
          <a href="/products/thermcal">
            ← BACK TO THERMCAL PRODUCT RANGE
          </a>
        </div>
      </main>
    </>
  );
}
