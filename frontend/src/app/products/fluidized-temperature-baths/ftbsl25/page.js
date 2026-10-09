
import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import "./page.css";

export default function FTBSL25Page() {
  return (
    <>
      <Navbar />

      <main className="ftbsl25-page">
        <section className="ftbsl25-product-hero">
          <div className="ftbsl25-product-container">
            <div className="ftbsl25-product-topline">
              <span>ATS / FTB SERIES</span>
              <span>MODEL 08</span>
            </div>

            <div className="ftbsl25-product-hero-grid">
              <div className="ftbsl25-product-intro">
                <div className="ftbsl25-product-kicker">
                  FLUIDIZED TEMPERATURE BATH
                </div>

                <h1>FTBSL25</h1>

                <p className="ftbsl25-product-subtitle">
                  25-Inch Fluidized Temperature Bath
                </p>

                <p className="ftbsl25-product-description">
                  A deeper fluidized temperature bath designed for
                  thermal cleaning and controlled processing of longer
                  components within its working dimensions.
                </p>

                <div className="ftbsl25-product-actions">
                  <Link
                    href="/form"
                    className="ftbsl25-btn ftbsl25-btn-primary"
                  >
                    REQUEST A QUOTE <span>→</span>
                  </Link>

                  <a
                    href="#specifications"
                    className="ftbsl25-btn ftbsl25-btn-secondary"
                  >
                    VIEW SPECIFICATIONS <span>↓</span>
                  </a>
                </div>
              </div>

              <div className="ftbsl25-product-visual">
                <div className="ftbsl25-product-grid"></div>
                <div className="ftbsl25-product-orbit ftbsl25-orbit-one"></div>
                <div className="ftbsl25-product-orbit ftbsl25-orbit-two"></div>

                <div className="ftbsl25-product-image-wrap">
                     <img
                    src="/assets/images/products/fluidizedbath.png"
                    alt="FTBLL12 Fluidized Temperature Bath"
                    className="ftbl12-product-image"
                  />
                </div>

                <div className="ftbsl25-product-capacity">
                  <span>WORKING DEPTH</span>
                  <strong>25<span>″</span></strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl25-product-overview">
          <div className="ftbsl25-product-container">
            <div className="ftbsl25-overview-grid">
              <div className="ftbsl25-overview-item">
                <span>MODEL</span>
                <strong>FTBSL25</strong>
              </div>
              <div className="ftbsl25-overview-item">
                <span>WORKING DIAMETER</span>
                <strong>7.0 inches</strong>
              </div>
              <div className="ftbsl25-overview-item">
                <span>WORKING DEPTH</span>
                <strong>25 inches</strong>
              </div>
              <div className="ftbsl25-overview-item">
                <span>MAXIMUM LOAD</span>
                <strong>15 lb</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl25-benefits">
          <div className="ftbsl25-product-container">
            <div className="ftbsl25-section-heading">
              <div>
                <span>WHY FTBSL25</span>
                <h2>MORE DEPTH<br />CONTROLLED HEAT</h2>
              </div>
              <p>
                Extended working depth for compatible components
                requiring controlled thermal cleaning and processing.
              </p>
            </div>

            <div className="ftbsl25-benefits-grid">
              <div className="ftbsl25-benefit-card">
                <span>01</span>
                <h3>Automatic Air Control</h3>
                <p>Fluidizing air control for consistent operation.</p>
              </div>
              <div className="ftbsl25-benefit-card">
                <span>02</span>
                <h3>PID Temperature Control</h3>
                <p>Designed for controlled thermal processing.</p>
              </div>
              <div className="ftbsl25-benefit-card">
                <span>03</span>
                <h3>Temperature Protection</h3>
                <p>Independent over-temperature protection.</p>
              </div>
              <div className="ftbsl25-benefit-card">
                <span>04</span>
                <h3>Extended Working Depth</h3>
                <p>A 25-inch working depth and 15 lb maximum load.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl25-applications">
          <div className="ftbsl25-product-container">
            <div className="ftbsl25-section-heading">
              <div>
                <span>APPLICATIONS</span>
                <h2>WHERE IT<br />IS USED</h2>
              </div>
            </div>

            <div className="ftbsl25-application-grid">
              <div className="ftbsl25-application-card">
                <span>01</span>
                <h3>Thermal Cleaning</h3>
                <p>Cleaning compatible tooling and industrial components.</p>
              </div>
              <div className="ftbsl25-application-card">
                <span>02</span>
                <h3>Heat Treatment</h3>
                <p>Controlled heating for suitable materials and parts.</p>
              </div>
              <div className="ftbsl25-application-card">
                <span>03</span>
                <h3>Industrial Processing</h3>
                <p>Processing longer components that fit the working area.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="ftbsl25-specifications"
          id="specifications"
        >
          <div className="ftbsl25-product-container">
            <div className="ftbsl25-section-heading">
              <div>
                <span>ATS / TECHNICAL DATA</span>
                <h2>SPECIFICATIONS</h2>
              </div>
              <p>Technical information for the FTBSL25 model.</p>
            </div>

            <div className="ftbsl25-spec-card">
              <div className="ftbsl25-spec-row">
                <span>Model</span><strong>FTBSL25</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Working diameter</span><strong>7.0 inches</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Working depth</span><strong>25 inches</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Maximum load</span><strong>15 lb</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Temperature stability</span><strong>±0.4°C</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Heat-up time</span><strong>180 minutes</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Power</span><strong>6 kW</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Temperature range</span>
                <strong>Confirm against the current model datasheet</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Electrical and air requirements</span>
                <strong>Confirm with ATS for the ordered configuration</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Footprint and unit weight</span>
                <strong>Refer to the current model datasheet</strong>
              </div>
              <div className="ftbsl25-spec-row">
                <span>Warranty</span>
                <strong>Confirm at quotation</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl25-requirements">
          <div className="ftbsl25-product-container">
            <div className="ftbsl25-requirements-grid">
              <div>
                <span className="ftbsl25-small-label">BEFORE YOU ORDER</span>
                <h2>CHECK YOUR<br />INSTALLATION</h2>
              </div>

              <div className="ftbsl25-requirement-list">
                <div className="ftbsl25-requirement">
                  <span>POWER</span>
                  <strong>Confirm electrical supply</strong>
                  <p>Verify voltage, phase and current with ATS.</p>
                </div>
                <div className="ftbsl25-requirement">
                  <span>AIR SUPPLY</span>
                  <strong>Confirm air requirements</strong>
                  <p>Verify operating pressure and flow before installation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl25-included">
          <div className="ftbsl25-product-container">
            <div className="ftbsl25-section-heading">
              <div>
                <span>SUPPLY</span>
                <h2>WHAT TO<br />CONFIRM</h2>
              </div>
            </div>

            <div className="ftbsl25-included-grid">
              <div><span>01</span><strong>Fluidized temperature bath</strong></div>
              <div><span>02</span><strong>Bath media and quantity — confirm in quotation</strong></div>
              <div><span>03</span><strong>Documentation and accessories — confirm in quotation</strong></div>
            </div>
          </div>
        </section>

        <section className="ftbsl25-support">
          <div className="ftbsl25-product-container">
            <div className="ftbsl25-support-box">
              <div>
                <span>ATS SUPPORT</span>
                <h2>NEED HELP<br />CONFIGURING YOUR SYSTEM?</h2>
              </div>
              <div className="ftbsl25-support-info">
                <p>Contact ATS to confirm the right configuration and utilities for your application.</p>
                <Link href="/form" className="ftbsl25-btn ftbsl25-btn-primary">
                  REQUEST A QUOTE <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="ftbsl25-model-navigation">
          <div className="ftbsl25-product-container">
            <Link
              href="/products/fluidized-temperature-baths"
              className="ftbsl25-back-models"
            >
              ← BACK TO ALL FLUIDIZED TEMPERATURE BATHS
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
