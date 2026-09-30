import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import "./page.css";

export default function ftbl26S26Page() {
  return (
    <>
      <Navbar />

     <main className="ftbl2626-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="ftbl26-product-hero">
          <div className="ftbl26-product-container">

            <div className="ftbl2626-product-topline">
              <span>ATS / FTB SERIES</span>
              <span>MODEL 02</span>
            </div>

            <div className="ftbl26-product-hero-grid">

              <div className="ftbl26-product-intro">

                <div className="ftbl26-product-kicker">
                  FLUIDIZED TEMPERATURE BATH
                </div>

                <h1>ftbl26L26</h1>

                <p className="ftbl26-product-subtitle">
                  26 Litre Fluidized Temperature Bath
                </p>

                <p className="ftbl26-product-description">
                  A large-capacity fluidized temperature bath designed
                  for thermal cleaning, heat treatment and controlled
                  thermal processing applications.
                </p>

                <div className="ftbl26-product-actions">

                  <Link
                    href="/form"
                    className="ftbl26-btn ftbl26-btn-primary"
                  >
                    REQUEST A QUOTE
                    <span>→</span>
                  </Link>

                  <a
                    href="#specifications"
                    className="ftbl26-btn ftbl26-btn-secondary"
                  >
                    VIEW SPECIFICATIONS
                    <span>↓</span>
                  </a>

                </div>

              </div>


              {/* PRODUCT IMAGE */}

              <div className="ftbl26-product-visual">

                <div className="ftbl26-product-grid"></div>

                <div className="ftbl26-product-orbit orbit-one"></div>
                <div className="ftbl26-product-orbit orbit-two"></div>

                <div className="ftbl26-product-image-wrap">

                  <img
                    src="/assets/images/products/fluidizedbath.png"
                    alt="ftbl26L26 Fluidized Temperature Bath"
                    className="ftbl26-product-image"
                  />

                </div>

                <div className="ftbl26-product-capacity">

                  <span>CAPACITY</span>

                  <strong>
                    26<span>L</span>
                  </strong>

                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =====================================================
            QUICK FACTS
        ===================================================== */}

        <section className="ftbl26-product-overview">

          <div className="ftbl26-product-container">

            <div className="ftbl26-overview-grid">

              <div className="ftbl26-overview-item">
                <span>MODEL</span>
                <strong>ftbl26L26</strong>
              </div>

              <div className="ftbl26-overview-item">
                <span>CAPACITY</span>
                <strong>26 L</strong>
              </div>

              <div className="ftbl26-overview-item">
                <span>TEMPERATURE RANGE</span>
                <strong>50–605°C</strong>
              </div>

              <div className="ftbl26-overview-item">
                <span>POWER</span>
                <strong>6200 W</strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            KEY BENEFITS
        ===================================================== */}

        <section className="ftbl26-benefits">

          <div className="ftbl26-product-container">

            <div className="ftbl26-section-heading">

              <div>
                <span>WHY ftbl26L26</span>

                <h2>
                  BUILT FOR<br />
                  HIGHER CAPACITY
                </h2>
              </div>

              <p>
                A larger working volume for applications requiring
                deeper processing capacity and higher cleaning loads.
              </p>

            </div>


            <div className="ftbl26-benefits-grid">

              <div className="ftbl26-benefit-card">
                <span>01</span>

                <h3>
                  Automatic Air Control
                </h3>

                <p>
                  Fully automatic fluidizing air control
                  for simple and consistent operation.
                </p>
              </div>


              <div className="ftbl26-benefit-card">
                <span>02</span>

                <h3>
                  Advanced PID Control
                </h3>

                <p>
                  Advanced PID temperature control for
                  optimum thermal performance.
                </p>
              </div>


              <div className="ftbl26-benefit-card">
                <span>03</span>

                <h3>
                  Independent Protection
                </h3>

                <p>
                  Independent over-temperature protection
                  helps protect the system during excessive
                  temperature or system failure.
                </p>
              </div>


              <div className="ftbl26-benefit-card">
                <span>04</span>

                <h3>
                  Large Working Volume
                </h3>

                <p>
                  Up to 26-inch working depth and
                  50 lb cleaning capacity for demanding
                  tooling applications.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            APPLICATIONS
        ===================================================== */}

        <section className="ftbl26-applications">

          <div className="ftbl26-product-container">

            <div className="ftbl26-section-heading">

              <div>

                <span>APPLICATIONS</span>

                <h2>
                  WHERE IT<br />
                  IS USED
                </h2>

              </div>

            </div>


            <div className="ftbl26-application-grid">

              <div className="ftbl26-application-card">

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


              <div className="ftbl26-application-card">

                <span>02</span>

                <h3>
                  General Heat Treatment
                </h3>

                <p>
                  General heat treatment of devices
                  and materials requiring controlled
                  thermal processing.
                </p>

              </div>


              <div className="ftbl26-application-card">

                <span>03</span>

                <h3>
                  Reactor Heating
                </h3>

                <p>
                  Heating of reactors for controlled
                  thermal processing applications.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SPECIFICATIONS
        ===================================================== */}

        <section
          className="ftbl26-specifications"
          id="specifications"
        >

          <div className="ftbl26-product-container">

            <div className="ftbl26-section-heading">

              <div>

                <span>ATS / TECHNICAL DATA</span>

                <h2>
                  SPECIFICATIONS
                </h2>

              </div>

              <p>
                Technical and ordering information for the
                ftbl26L26 configuration.
              </p>

            </div>


            <div className="ftbl26-spec-card">

              <div className="ftbl26-spec-row">
                <span>Model</span>
                <strong>ftbl26L26</strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Temperature range</span>
                <strong>
                  122 to 1121°F (50 to 605°C)
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Working volume</span>
                <strong>
                  8 3/8" diameter × 26" depth
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Stability at 900°F</span>
                <strong>
                  ±3.0
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Heat-up time to 1100°F</span>
                <strong>
                  180 minutes
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Cool-down time to 400°F</span>
                <strong>
                  210 minutes
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Power consumption</span>
                <strong>
                  6200 watts @ 240 VAC
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Air pressure & flow</span>
                <strong>
                  50 PSI, 4 CFM
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Overall footprint</span>
                <strong>
                  49 × 25 × 23 inches
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Operating weight</span>
                <strong>
                  335 lb
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Shipping weight</span>
                <strong>
                  375 lb
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Cleaning capacity</span>
                <strong>
                  50 lb
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Order code</span>
                <strong>
                  ATS1013
                </strong>
              </div>

              <div className="ftbl26-spec-row">
                <span>Warranty</span>
                <strong>
                  1 year
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            REQUIREMENTS
        ===================================================== */}

        <section className="ftbl26-requirements">

          <div className="ftbl26-product-container">

            <div className="ftbl26-requirements-grid">

              <div>

                <span className="ftbl26-small-label">
                  BEFORE YOU ORDER
                </span>

                <h2>
                  WHAT DO I NEED
                  <br />
                  TO RUN IT?
                </h2>

              </div>


              <div className="ftbl26-requirement-list">

                <div className="ftbl26-requirement">

                  <span>POWER</span>

                  <strong>
                    220–240 VAC
                  </strong>

                  <p>
                    50/60 Hz · 30 amps
                  </p>

                </div>


                <div className="ftbl26-requirement">

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
            WHAT YOU RECEIVE
        ===================================================== */}

        <section className="ftbl26-included">

          <div className="ftbl26-product-container">

            <div className="ftbl26-section-heading">

              <div>

                <span>INCLUDED</span>

                <h2>
                  WHAT YOU
                  <br />
                  RECEIVE
                </h2>

              </div>

            </div>


            <div className="ftbl26-included-grid">

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
            SUPPORT / QUOTE
        ===================================================== */}

        <section className="ftbl26-support">

          <div className="ftbl26-product-container">

            <div className="ftbl26-support-box">

              <div>

                <span>
                  ATS SUPPORT
                </span>

                <h2>
                  NEED HELP
                  <br />
                  CONFIGURING YOUR SYSTEM?
                </h2>

              </div>


              <div className="ftbl26-support-info">

                <p>
                  Lifetime technical, application and
                  installation support is available,
                  along with maintenance support.
                </p>

                <Link
                  href="/form"
                  className="ftbl26-btn ftbl26-btn-primary"
                >
                  REQUEST A QUOTE
                  <span>→</span>
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BACK
        ===================================================== */}

        <section className="ftbl26-model-navigation">

          <div className="ftbl26-product-container">

            <Link
              href="/products/fluidized-temperature-baths"
              className="ftbl26-back-models"
            >
              ← BACK TO ALL FLUIDIZED TEMPERATURE BATHS
            </Link>

          </div>

        </section>

      </main>
    </>
  );
}