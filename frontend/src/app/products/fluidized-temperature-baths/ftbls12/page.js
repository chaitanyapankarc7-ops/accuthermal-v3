import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import "./page.css";

export default function FTBLS12Page() {
  return (
    <>
      <Navbar />

      <main className="ftbl12-product-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="ftbl12-product-hero">

          <div className="ftbl12-product-container">

            <div className="ftbl12-product-topline">
              <span>ATS / FTB SERIES</span>
              <span>MODEL 01</span>
            </div>

            <div className="ftbl12-product-hero-grid">

              {/* LEFT */}
              <div className="ftbl12-product-intro">

                <div className="ftbl12-product-kicker">
                  FLUIDIZED TEMPERATURE BATH
                </div>

                <h1>FTBLL12</h1>

                <p className="ftbl12-product-subtitle">
                  12 Litre Fluidized Temperature Bath
                </p>

                <p className="ftbl12-product-description">
                  A fluidized temperature bath designed for thermal
                  cleaning, heat treatment and controlled thermal
                  processing applications.
                </p>

                <div className="ftbl12-product-actions">

                  <Link
                    href="/form"
                    className="ftbl12-btn ftbl12-btn-primary"
                  >
                    REQUEST A QUOTE
                    <span>→</span>
                  </Link>

                  <a
                    href="#specifications"
                    className="ftbl12-btn ftbl12-btn-secondary"
                  >
                    VIEW SPECIFICATIONS
                    <span>↓</span>
                  </a>

                </div>

              </div>


              {/* RIGHT */}
              <div className="ftbl12-product-visual">

                <div className="ftbl12-product-grid"></div>

                <div className="ftbl12-product-orbit orbit-one"></div>
                <div className="ftbl12-product-orbit orbit-two"></div>

                <div className="ftbl12-product-image-wrap">

                  <img
                    src="/assets/images/products/fluidizedbath.png"
                    alt="FTBLL12 Fluidized Temperature Bath"
                    className="ftbl12-product-image"
                  />

                </div>

                <div className="ftbl12-product-capacity">
                  <span>CAPACITY</span>

                  <strong>
                    12<span>L</span>
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK FACTS
        ===================================================== */}

        <section className="ftbl12-product-overview">

          <div className="ftbl12-product-container">

            <div className="ftbl12-overview-grid">

              <div className="ftbl12-overview-item">
                <span>MODEL</span>
                <strong>FTBLL12</strong>
              </div>

              <div className="ftbl12-overview-item">
                <span>CAPACITY</span>
                <strong>12 L</strong>
              </div>

              <div className="ftbl12-overview-item">
                <span>TEMPERATURE RANGE</span>
                <strong>50–605°C</strong>
              </div>

              <div className="ftbl12-overview-item">
                <span>POWER</span>
                <strong>4500 W</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            KEY BENEFITS
        ===================================================== */}

        <section className="ftbl12-benefits">

          <div className="ftbl12-product-container">

            <div className="ftbl12-section-heading">

              <div>
                <span>WHY FTBLL12</span>

                <h2>
                  BUILT FOR<br />
                  THERMAL PERFORMANCE
                </h2>
              </div>

              <p>
                Fluidized Bath technology provides thermal cleaning
                and processing without abrasive action.
              </p>

            </div>


            <div className="ftbl12-benefits-grid">

              <div className="ftbl12-benefit-card">
                <span>01</span>
                <h3>Automatic Air Control</h3>
                <p>
                  Fully automatic fluidizing air control for
                  consistent operation.
                </p>
              </div>

              <div className="ftbl12-benefit-card">
                <span>02</span>
                <h3>PID Temperature Control</h3>
                <p>
                  Advanced PID temperature controller for
                  optimum thermal results.
                </p>
              </div>

              <div className="ftbl12-benefit-card">
                <span>03</span>
                <h3>Independent Protection</h3>
                <p>
                  Independent over-temperature protection
                  disables heat during excessive temperature
                  or system failure.
                </p>
              </div>

              <div className="ftbl12-benefit-card">
                <span>04</span>
                <h3>Fast Cleaning</h3>
                <p>
                  Cleans most tooling in under 60 minutes and
                  removes organics including polymer, paint,
                  adhesives and resins.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            APPLICATIONS
        ===================================================== */}

        <section className="ftbl12-applications">

          <div className="ftbl12-product-container">

            <div className="ftbl12-section-heading">

              <div>
                <span>APPLICATIONS</span>

                <h2>
                  WHERE IT<br />
                  IS USED
                </h2>
              </div>

            </div>


            <div className="ftbl12-application-grid">

              <div className="ftbl12-application-card">
                <span>01</span>

                <h3>
                  Thermal Cleaning
                </h3>

                <p>
                  Extrusion and injection molding tooling
                  including breaker plates, dies, nozzles,
                  tips, screens, metal filters, feed pipes,
                  hardware and feed screws.
                </p>
              </div>


              <div className="ftbl12-application-card">
                <span>02</span>

                <h3>
                  General Heat Treatment
                </h3>

                <p>
                  General heat treatment of devices
                  and materials.
                </p>
              </div>


              <div className="ftbl12-application-card">
                <span>03</span>

                <h3>
                  Reactor Heating
                </h3>

                <p>
                  Heating of reactors for controlled
                  thermal processing.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SPECIFICATIONS
        ===================================================== */}

        <section
          className="ftbl12-specifications"
          id="specifications"
        >

          <div className="ftbl12-product-container">

            <div className="ftbl12-section-heading">

              <div>
                <span>ATS / TECHNICAL DATA</span>

                <h2>
                  SPECIFICATIONS
                </h2>
              </div>

              <p>
                Technical and ordering information for the
                FTBLL12 configuration.
              </p>

            </div>


            <div className="ftbl12-spec-card">

              <div className="ftbl12-spec-row">
                <span>Model</span>
                <strong>FTBLL12</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Temperature range</span>
                <strong>122 to 1121°F (50 to 605°C)</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Working volume</span>
                <strong>8 3/8" diameter × 12" depth</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Stability at 900°F</span>
                <strong>±2.0</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Heat-up time to 1100°F</span>
                <strong>150 minutes</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Cool-down time to 400°F</span>
                <strong>150 minutes</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Power consumption</span>
                <strong>4500 watts @ 240 VAC</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Air pressure & flow</span>
                <strong>50 PSI, 4 CFM</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Overall footprint</span>
                <strong>32.5 × 25 × 23 inches</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Operating weight</span>
                <strong>210 lb</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Shipping weight</span>
                <strong>215 lb</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Cleaning capacity</span>
                <strong>25 lb</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Order code</span>
                <strong>ATS1012</strong>
              </div>

              <div className="ftbl12-spec-row">
                <span>Warranty</span>
                <strong>1 year</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            REQUIREMENTS
        ===================================================== */}

        <section className="ftbl12-requirements">

          <div className="ftbl12-product-container">

            <div className="ftbl12-requirements-grid">

              <div>

                <span className="ftbl12-small-label">
                  BEFORE YOU ORDER
                </span>

                <h2>
                  WHAT DO I NEED<br />
                  TO RUN IT?
                </h2>

              </div>


              <div className="ftbl12-requirement-list">

                <div className="ftbl12-requirement">

                  <span>POWER</span>

                  <strong>
                    220–240 VAC
                  </strong>

                  <p>
                    50/60 Hz · 20 amps
                  </p>

                </div>


                <div className="ftbl12-requirement">

                  <span>AIR SUPPLY</span>

                  <strong>
                    Clean, dry air
                  </strong>

                  <p>
                    Fixed 50 PSI · maximum flow
                    8.0 CFM
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHAT'S INCLUDED
        ===================================================== */}

        <section className="ftbl12-included">

          <div className="ftbl12-product-container">

            <div className="ftbl12-section-heading">

              <div>
                <span>INCLUDED</span>

                <h2>
                  WHAT YOU<br />
                  RECEIVE
                </h2>
              </div>

            </div>


            <div className="ftbl12-included-grid">

              <div>
                <span>01</span>
                <strong>Fluidized Bath</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Full charge of bath media</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Instruction manual</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SUPPORT
        ===================================================== */}

        <section className="ftbl12-support">

          <div className="ftbl12-product-container">

            <div className="ftbl12-support-box">

              <div>

                <span>
                  ATS SUPPORT
                </span>

                <h2>
                  NEED HELP<br />
                  CONFIGURING YOUR SYSTEM?
                </h2>

              </div>

              <div className="ftbl12-support-info">

                <p>
                  Lifetime technical, application and
                  installation support is available,
                  along with maintenance support.
                </p>

                <Link
                  href="/form"
                  className="ftbl12-btn ftbl12-btn-primary"
                >
                  REQUEST A QUOTE
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BACK TO MODELS
        ===================================================== */}

        <section className="ftbl12-model-navigation">

          <div className="ftbl12-product-container">

            <Link
              href="/products/fluidized-temperature-baths"
              className="ftbl12-back-models"
            >
              ← BACK TO ALL FLUIDIZED TEMPERATURE BATHS
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}