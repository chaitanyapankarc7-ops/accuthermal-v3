
import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import "./page.css";

export default function FTBSL15Page() {
  return (
    <>
      <Navbar />

      <main className="ftbsl15-page">
        <section className="ftbsl15-product-hero">
          <div className="ftbsl15-product-container">
            <div className="ftbsl15-product-topline">
              <span>ATS / FTB SERIES</span>
              <span>MODEL 07</span>
            </div>

            <div className="ftbsl15-product-hero-grid">
              <div className="ftbsl15-product-intro">
                <div className="ftbsl15-product-kicker">
                  FLUIDIZED TEMPERATURE BATH
                </div>

                <h1>FTBSL15</h1>

                <p className="ftbsl15-product-subtitle">
                  15-Inch Fluidized Temperature Bath
                </p>

                <p className="ftbsl15-product-description">
                  A compact fluidized temperature bath designed for
                  thermal cleaning and controlled processing of
                  components requiring a 15-inch working depth.
                </p>

                <div className="ftbsl15-product-actions">
                  <Link
                    href="/form"
                    className="ftbsl15-btn ftbsl15-btn-primary"
                  >
                    REQUEST A QUOTE <span>→</span>
                  </Link>

                  <a
                    href="#specifications"
                    className="ftbsl15-btn ftbsl15-btn-secondary"
                  >
                    VIEW SPECIFICATIONS <span>↓</span>
                  </a>
                </div>
              </div>

              <div className="ftbsl15-product-visual">
                <div className="ftbsl15-product-grid"></div>
                <div className="ftbsl15-product-orbit ftbsl15-orbit-one"></div>
                <div className="ftbsl15-product-orbit ftbsl15-orbit-two"></div>

                <div className="ftbsl15-product-image-wrap">
                  <img
                    src="/assets/images/fluidized/Screenshot 2026-10-08 212344.png"
                    alt="FTBSL15 Fluidized Temperature Bath"
                    className="ftbsl15-product-image"
                  />
                </div>

                <div className="ftbsl15-product-capacity">
                  <span>WORKING DEPTH</span>
                  <strong>15<span>″</span></strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl15-product-overview">
          <div className="ftbsl15-product-container">
            <div className="ftbsl15-overview-grid">
              <div className="ftbsl15-overview-item">
                <span>MODEL</span>
                <strong>FTBSL15</strong>
              </div>
              <div className="ftbsl15-overview-item">
                <span>WORKING DIAMETER</span>
                <strong>7.0 inches</strong>
              </div>
              <div className="ftbsl15-overview-item">
                <span>WORKING DEPTH</span>
                <strong>15 inches</strong>
              </div>
              <div className="ftbsl15-overview-item">
                <span>MAXIMUM LOAD</span>
                <strong>8 lb</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl15-benefits">
          <div className="ftbsl15-product-container">
            <div className="ftbsl15-section-heading">
              <div>
                <span>WHY FTBSL15</span>
                <h2>PRECISE<br />THERMAL CONTROL</h2>
              </div>
              <p>
                A smaller working diameter with an extended depth
                for compatible industrial components and tooling.
              </p>
            </div>

            <div className="ftbsl15-benefits-grid">
              <div className="ftbsl15-benefit-card">
                <span>01</span>
                <h3>Automatic Air Control</h3>
                <p>Fluidizing air control for consistent operation.</p>
              </div>
              <div className="ftbsl15-benefit-card">
                <span>02</span>
                <h3>PID Temperature Control</h3>
                <p>Designed for controlled thermal processing.</p>
              </div>
              <div className="ftbsl15-benefit-card">
                <span>03</span>
                <h3>Temperature Protection</h3>
                <p>Independent over-temperature protection.</p>
              </div>
              <div className="ftbsl15-benefit-card">
                <span>04</span>
                <h3>Extended Working Depth</h3>
                <p>A 15-inch working depth and 8 lb maximum load.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl15-applications">
          <div className="ftbsl15-product-container">
            <div className="ftbsl15-section-heading">
              <div>
                <span>APPLICATIONS</span>
                <h2>WHERE IT<br />IS USED</h2>
              </div>
            </div>

            <div className="ftbsl15-application-grid">
              <div className="ftbsl15-application-card">
                <span>01</span>
                <h3>Thermal Cleaning</h3>
                <p>Cleaning compatible tooling and industrial components.</p>
              </div>
              <div className="ftbsl15-application-card">
                <span>02</span>
                <h3>Heat Treatment</h3>
                <p>Controlled heating for suitable materials and parts.</p>
              </div>
              <div className="ftbsl15-application-card">
                <span>03</span>
                <h3>Industrial Processing</h3>
                <p>Processing components that fit the working dimensions.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftbsl15-specifications"
          id="specifications"
        >
          <div className="ftbsl15-product-container">
            <div className="ftbsl15-section-heading">
              <div>
                <span>ATS / TECHNICAL DATA</span>
                <h2>SPECIFICATIONS</h2>
              </div>
              <p>Technical information for the FTBSL15 model.</p>
            </div>

            <div className="ftbsl15-spec-card">
              <div className="ftbsl15-spec-row">
                <span>Model</span><strong>FTBSL15</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Working diameter</span><strong>7.0 inches</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Working depth</span><strong>15 inches</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Maximum load</span><strong>8 lb</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Temperature stability</span><strong>±0.3°C</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Heat-up time</span><strong>150 minutes</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Power</span><strong>4 kW</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Temperature range</span>
                <strong>Confirm against the current model datasheet</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Electrical and air requirements</span>
                <strong>Confirm with ATS for the ordered configuration</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Footprint and unit weight</span>
                <strong>Refer to the current model datasheet</strong>
              </div>
              <div className="ftbsl15-spec-row">
                <span>Warranty</span>
                <strong>Confirm at quotation</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl15-requirements">
          <div className="ftbsl15-product-container">
            <div className="ftbsl15-requirements-grid">
              <div>
                <span className="ftbsl15-small-label">BEFORE YOU ORDER</span>
                <h2>CHECK YOUR<br />INSTALLATION</h2>
              </div>

              <div className="ftbsl15-requirement-list">
                <div className="ftbsl15-requirement">
                  <span>POWER</span>
                  <strong>Confirm electrical supply</strong>
                  <p>Verify voltage, phase and current with ATS.</p>
                </div>
                <div className="ftbsl15-requirement">
                  <span>AIR SUPPLY</span>
                  <strong>Confirm air requirements</strong>
                  <p>Verify operating pressure and flow before installation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl15-included">
          <div className="ftbsl15-product-container">
            <div className="ftbsl15-section-heading">
              <div>
                <span>SUPPLY</span>
                <h2>WHAT TO<br />CONFIRM</h2>
              </div>
            </div>

            <div className="ftbsl15-included-grid">
              <div><span>01</span><strong>Fluidized temperature bath</strong></div>
              <div><span>02</span><strong>Bath media and quantity — confirm in quotation</strong></div>
              <div><span>03</span><strong>Documentation and accessories — confirm in quotation</strong></div>
            </div>
          </div>
        </section>

        <section className="ftbsl15-support">
          <div className="ftbsl15-product-container">
            <div className="ftbsl15-support-box">
              <div>
                <span>ATS SUPPORT</span>
                <h2>NEED HELP<br />CONFIGURING YOUR SYSTEM?</h2>
              </div>
              <div className="ftbsl15-support-info">
                <p>Contact ATS to confirm the right configuration and utilities for your application.</p>
                <Link href="/form" className="ftbsl15-btn ftbsl15-btn-primary">
                  REQUEST A QUOTE <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl15-model-navigation">
          <div className="ftbsl15-product-container">
            <Link
              href="/products/fluidized-temperature-baths"
              className="ftbsl15-back-models"
            >
              ← BACK TO ALL FLUIDIZED TEMPERATURE BATHS
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
