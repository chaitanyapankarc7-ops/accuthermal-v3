
"use client";

import "./page.css";
import Navbar from "../../../../components/Navbar";

const specifications = [
  ["Model", "ATS3080"],
  ["Technology", "Thermoelectric / Peltier"],
  ["Temperature range", "−25°C to 130°C"],
  ["Maximum temperature", "130°C"],
  ["Minimum temperature", "−25°C"],
  ["Accuracy", "±0.4°C"],
  ["Stability", "±0.03°C"],
  ["Heat-up time", "3.5 minutes"],
  ["Power", "200 W"],
  ["Instrument weight", "15 lbs"],
  ["Resolution", "0.1°C"],
  ["Warranty", "2 years"],
];

const features = [
  {
    number: "01",
    title: "Heating and cooling",
    description:
      "Thermoelectric technology supports both heating and cooling for temperature calibration applications.",
  },
  {
    number: "02",
    title: "Compact calibration design",
    description:
      "A compact instrument format designed for suitable laboratory and field calibration tasks.",
  },
  {
    number: "03",
    title: "Temperature stability",
    description:
      "Designed for controlled temperature operation, with a stated stability of ±0.03°C.",
  },
  {
    number: "04",
    title: "Rapid temperature response",
    description:
      "A stated heat-up time of 3.5 minutes helps support calibration workflows that need a quick response.",
  },
];

export default function ThermCal130Page() {
  return (
    <>
      <Navbar />

      <main className="tc130-page">
        {/* HERO */}
        <section className="tc130-hero">
          <div className="tc130-container">
            <div className="tc130-breadcrumb">
              <a href="/products/thermcal/ThermCal130">
                THERMCAL CALIBRATORS
              </a>
              <span>/</span>
              <span>THERMCAL130</span>
            </div>

            <div className="tc130-hero-grid">
              <div className="tc130-visual">
                <div className="tc130-grid-bg" />
                <div className="tc130-orbit tc130-orbit-one" />
                <div className="tc130-orbit tc130-orbit-two" />

                <span className="tc130-image-label">
                  ATS / PRECISION CALIBRATION
                </span>

                <img
                  src="/assets/images/thermal%20cal/Screenshot%202026-10-09%20220156.png"
                  alt="Accurate Thermal Systems ThermCal130 temperature calibrator"
                  className="tc130-product-image"
                />

                <div className="tc130-model-stamp">
                  <span>MODEL</span>
                  <strong>THERMCAL130</strong>
                </div>
              </div>

              <div className="tc130-hero-content">
                <span className="tc130-eyebrow">ATS3080</span>

                <h1>
                  ThermCal<span>130</span>
                </h1>

                <p className="tc130-lead">
                  A thermoelectric / Peltier-based temperature calibrator
                  offering rapid heating and cooling for applications
                  requiring temperature control from −25°C to 130°C.
                </p>

                <div className="tc130-metrics">
                  <div>
                    <strong>130°C</strong>
                    <span>MAX TEMP</span>
                  </div>
                  <div>
                    <strong>±0.4°C</strong>
                    <span>ACCURACY</span>
                  </div>
                  <div>
                    <strong>±0.03°C</strong>
                    <span>STABILITY</span>
                  </div>
                  <div>
                    <strong>3.5 MIN</strong>
                    <span>HEAT-UP</span>
                  </div>
                </div>

                <div className="tc130-tags">
                  <span>200 W</span>
                  <span>15 LBS</span>
                  <span>0.1°C RESOLUTION</span>
                  <span>2 YEAR WARRANTY</span>
                </div>

                <div className="tc130-actions">
                  <a
                    href="/contact"
                    className="tc130-btn tc130-btn-primary"
                  >
                    REQUEST A QUOTE <span>↗</span>
                  </a>

                  <a
                    href="#tc130-specifications"
                    className="tc130-btn tc130-btn-secondary"
                  >
                    TECHNICAL DATA <span>↓</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="tc130-overview">
          <div className="tc130-container tc130-overview-grid">
            <div>
              <span>01 / TEMPERATURE RANGE</span>
              <strong>−25°C to 130°C</strong>
            </div>
            <div>
              <span>02 / TECHNOLOGY</span>
              <strong>Peltier Based</strong>
            </div>
            <div>
              <span>03 / OPERATION</span>
              <strong>Heating & Cooling</strong>
            </div>
            <div>
              <span>04 / WARRANTY</span>
              <strong>2 Years</strong>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="tc130-features">
          <div className="tc130-container">
            <div className="tc130-section-heading">
              <div>
                <span>01 / ENGINEERED FOR FLEXIBILITY</span>
                <h2>
                  Heating.
                  <br />
                  Cooling. Control.
                </h2>
              </div>

              <p>
                Discover the core capabilities of the ThermCal130
                thermoelectric temperature calibration system.
              </p>
            </div>

            <div className="tc130-feature-grid">
              {features.map((feature) => (
                <article className="tc130-feature-card" key={feature.number}>
                  <span>{feature.number}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <div className="tc130-feature-line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section className="tc130-applications">
          <div className="tc130-container tc130-applications-grid">
            <div>
              <span className="tc130-eyebrow">02 / APPLICATIONS</span>
              <h2>
                One calibrator.
                <br />
                Two directions.
              </h2>
              <p>
                The ThermCal130 is designed for calibration workflows
                that require temperature control across both below-
                ambient and above-ambient operating conditions.
              </p>
            </div>

            <div className="tc130-application-list">
              <article>
                <span>01</span>
                <div>
                  <h3>Laboratory calibration</h3>
                  <p>
                    Temperature calibration work in laboratory
                    environments using a compact calibrator.
                  </p>
                </div>
              </article>

              <article>
                <span>02</span>
                <div>
                  <h3>Below-ambient testing</h3>
                  <p>
                    Applications requiring controlled temperatures
                    below ambient conditions, within the instrument's
                    specified operating range.
                  </p>
                </div>
              </article>

              <article>
                <span>03</span>
                <div>
                  <h3>Industrial temperature testing</h3>
                  <p>
                    Calibration workflows requiring controlled
                    heating and cooling in one instrument.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SPECIFICATIONS */}
        <section
          className="tc130-specifications"
          id="tc130-specifications"
        >
          <div className="tc130-container">
            <div className="tc130-section-heading">
              <div>
                <span>03 / TECHNICAL DATA</span>
                <h2>Specifications</h2>
              </div>
              <p>
                Technical information for the ThermCal130 model.
              </p>
            </div>

            <div className="tc130-spec-table">
              {specifications.map(([label, value], index) => (
                <div className="tc130-spec-row" key={label}>
                  <span className="tc130-spec-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="tc130-spec-label">{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>

            <p className="tc130-spec-note">
              Confirm final operating conditions and configuration
              with Accurate Thermal Systems before ordering.
            </p>
          </div>
        </section>

        {/* ENQUIRY */}
        <section className="tc130-cta">
          <div className="tc130-container tc130-cta-inner">
            <div>
              <span>04 / NEXT STEP</span>
              <h2>
                Looking for
                <br />
                flexible calibration?
              </h2>
              <p>
                Contact Accurate Thermal Systems to discuss your
                ThermCal130 requirements.
              </p>
            </div>

            <a href="/contact" className="tc130-btn tc130-btn-light">
              ENQUIRE ABOUT THERMCAL130 <span>↗</span>
            </a>
          </div>
        </section>

        {/* BACK TO PRODUCT RANGE */}
        <div className="tc130-container tc130-back">
          <a href="/products/thermcal-dry-block-calibrators">
            ← BACK TO THERMCAL PRODUCT RANGE
          </a>
        </div>
      </main>
    </>
  );
}
