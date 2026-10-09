"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import "./page.css";

export default function FTBLL12WPage() {
  return (
    <main className="ftbl12w-page">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ftbl12w-hero">

        <div className="ftbl12w-container">

          <div className="ftbl12w-topline">
            <span>ATS / FLUIDIZED TEMPERATURE BATHS</span>
            <span>MODEL ATS1017</span>
          </div>


          <div className="ftbl12w-hero-grid">

            {/* LEFT */}
            <div className="ftbl12w-intro">

              <span className="ftbl12w-kicker">
                FLUIDIZED TEMPERATURE BATH
              </span>

              <h1>
                FTBLL
                <br />
                <span>12W.</span>
              </h1>

              <h2>
                12 Litre Wide Fluidized Temperature Bath
              </h2>

              <p>
                A wide-format fluidized temperature bath designed for
                thermal cleaning, heat treatment, reactor heating and
                other high-temperature processing applications.
              </p>


              <div className="ftbl12w-actions">

                <a
                  href="/#contact"
                  className="ftbl12w-btn ftbl12w-btn-primary"
                >
                  REQUEST A QUOTE
                  <span>→</span>
                </a>

                <a
                  href="#specifications"
                  className="ftbl12w-btn ftbl12w-btn-secondary"
                >
                  VIEW SPECIFICATIONS
                  <span>↓</span>
                </a>

              </div>

            </div>


            {/* RIGHT PRODUCT VISUAL */}
            <div className="ftbl12w-visual">

              <div className="ftbl12w-grid"></div>

              <div className="ftbl12w-orbit ftbl12w-orbit-one"></div>
              <div className="ftbl12w-orbit ftbl12w-orbit-two"></div>

              <div className="ftbl12w-image-wrap">

                <img
                    src="/assets/images/products/fluidizedbath.png"
                    alt="FTBLL12 Fluidized Temperature Bath"
                    className="ftbl12-product-image"
                  />


              </div>


              <div className="ftbl12w-capacity">

                <span>WORKING CAPACITY</span>

                <strong>
                  60<span>LB</span>
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="ftbl12w-overview">

        <div className="ftbl12w-container">

          <div className="ftbl12w-overview-grid">

            <div className="ftbl12w-overview-item">
              <span>MODEL</span>
              <strong>FTBLL12W</strong>
            </div>

            <div className="ftbl12w-overview-item">
              <span>ORDER CODE</span>
              <strong>ATS1017</strong>
            </div>

            <div className="ftbl12w-overview-item">
              <span>TEMPERATURE RANGE</span>
              <strong>50–605°C</strong>
            </div>

            <div className="ftbl12w-overview-item">
              <span>POWER</span>
              <strong>6.8 kW</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BUILT FOR PERFORMANCE
      ===================================================== */}

      <section className="ftbl12w-benefits">

        <div className="ftbl12w-container">

          <div className="ftbl12w-section-heading">

            <div>

              <span>
                01 / ENGINEERED PERFORMANCE
              </span>

              <h2>
                BUILT FOR
                <br />
                THERMAL PERFORMANCE.
              </h2>

            </div>

            <p>
              The FTBLL12W combines automatic fluidizing air control,
              PID temperature control and independent over-temperature
              protection for controlled thermal processing.
            </p>

          </div>


          <div className="ftbl12w-benefits-grid">

            <div className="ftbl12w-benefit">
              <span>01</span>
              <h3>Automatic Air Control</h3>
              <p>
                Four-step automatic fluidizing air control adjusts
                airflow during ramp-up and cooldown.
              </p>
            </div>

            <div className="ftbl12w-benefit">
              <span>02</span>
              <h3>PID Temperature Control</h3>
              <p>
                Four PID control zones provide improved thermal
                performance and temperature regulation.
              </p>
            </div>

            <div className="ftbl12w-benefit">
              <span>03</span>
              <h3>Over-Temperature Protection</h3>
              <p>
                Independent protection disables heating when the
                system exceeds its safety limit or detects failure.
              </p>
            </div>

            <div className="ftbl12w-benefit">
              <span>04</span>
              <h3>RS485 Interface</h3>
              <p>
                Built-in RS485 communication provides PC connection
                for supported monitoring and control functions.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="ftbl12w-applications">

        <div className="ftbl12w-container">

          <div className="ftbl12w-section-heading">

            <div>

              <span>
                02 / APPLICATIONS
              </span>

              <h2>
                WHERE IT
                <br />
                IS USED.
              </h2>

            </div>

            <p>
              Fluidized temperature technology provides a dry thermal
              environment for cleaning, heating and material processing.
            </p>

          </div>


          <div className="ftbl12w-application-grid">

            <div className="ftbl12w-application">
              <span>01</span>
              <h3>Thermal Cleaning</h3>
              <p>
                Cleaning extrusion and injection molding tooling,
                including dies, breaker plates, nozzles, tips,
                screens and other components.
              </p>
            </div>

            <div className="ftbl12w-application">
              <span>02</span>
              <h3>Heat Treatment</h3>
              <p>
                General heat treatment of devices, tooling and
                materials requiring controlled thermal processing.
              </p>
            </div>

            <div className="ftbl12w-application">
              <span>03</span>
              <h3>Reactor Heating</h3>
              <p>
                Heating of reactors and process vessels used in
                laboratory and industrial applications.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      <section
        className="ftbl12w-specifications"
        id="specifications"
      >

        <div className="ftbl12w-container">

          <div className="ftbl12w-section-heading">

            <div>

              <span>
                03 / PRODUCT SPECIFICATIONS
              </span>

              <h2>
                TECHNICAL
                <br />
                DATA.
              </h2>

            </div>

            <p>
              FTBLL12W specifications based on the ATS product
              documentation.
            </p>

          </div>


          <div className="ftbl12w-spec-table">

            <div className="ftbl12w-spec-row ftbl12w-spec-header">
              <span>SPECIFICATION</span>
              <span>FTBLL12W</span>
            </div>


            <div className="ftbl12w-spec-row">
              <span>Order Code</span>
              <strong>ATS1017</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Temperature Range</span>
              <strong>122–1121°F (50–605°C)</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Working Volume</span>
              <strong>12⅜″ diameter × 13″ depth</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Temperature Stability at 900°F</span>
              <strong>Better than ±3.0°F</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Heat-Up Time to 1100°F</span>
              <strong>200 minutes</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Cool-Down Time to 400°F</span>
              <strong>180 minutes</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Power Consumption</span>
              <strong>6800 W / 240 VAC</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Air Pressure / Flow</span>
              <strong>50 PSI / 8 CFM max</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Overall Footprint</span>
              <strong>38 × 30 × 26″</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Operating Weight</span>
              <strong>335 lb</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Shipping Weight</span>
              <strong>375 lb</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Cleaning Capacity</span>
              <strong>60 lb</strong>
            </div>

            <div className="ftbl12w-spec-row">
              <span>Warranty</span>
              <strong>1 Year</strong>
            </div>

          </div>


          <div className="ftbl12w-spec-note">

            <span>MAXIMUM TEMPERATURE</span>

            <strong>605°C</strong>

            <p>
              The documented operating range is 50–605°C
              (122–1121°F).
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT YOU NEED
      ===================================================== */}

      <section className="ftbl12w-requirements">

        <div className="ftbl12w-container">

          <div className="ftbl12w-section-heading">

            <div>

              <span>
                04 / INSTALLATION REQUIREMENTS
              </span>

              <h2>
                WHAT DO I
                <br />
                NEED TO RUN IT?
              </h2>

            </div>

          </div>


          <div className="ftbl12w-requirements-grid">

            <div className="ftbl12w-requirement">

              <span>01</span>

              <h3>Electrical Supply</h3>

              <p>
                220–240 VAC mains, 50/60 Hz.
                FTBLL12W requires a 30 amp supply.
              </p>

            </div>


            <div className="ftbl12w-requirement">

              <span>02</span>

              <h3>Clean Dry Air</h3>

              <p>
                Clean dry air supply capable of delivering
                a fixed 50 PSI with a maximum flow of 8.0 CFM.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT YOU RECEIVE
      ===================================================== */}

      <section className="ftbl12w-included">

        <div className="ftbl12w-container">

          <div className="ftbl12w-section-heading">

            <div>

              <span>
                05 / INCLUDED
              </span>

              <h2>
                WHAT YOU
                <br />
                RECEIVE.
              </h2>

            </div>

          </div>


          <div className="ftbl12w-included-grid">

            <div>
              <span>01</span>
              <h3>Fluidized Bath</h3>
              <p>
                Complete FTBLL12W fluidized temperature bath.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Bath Media</h3>
              <p>
                Full charge of bath media included with the system.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Instruction Manual</h3>
              <p>
                Operating and system documentation.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ftbl12w-support">

        <div className="ftbl12w-container">

          <div className="ftbl12w-support-box">

            <div>

              <span>
                NEED HELP CONFIGURING YOUR SYSTEM?
              </span>

              <h2>
                TALK TO AN
                <br />
                ATS ENGINEER.
              </h2>

            </div>


            <div className="ftbl12w-support-info">

              <p>
                Contact Accurate Thermal Systems for quotation,
                application assistance, installation support and
                maintenance information.
              </p>

              <a
                href="/#contact"
                className="ftbl12w-btn ftbl12w-btn-primary"
              >
                REQUEST A QUOTE
                <span>→</span>
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BACK TO MODELS
      ===================================================== */}

      <section className="ftbl12w-navigation">

        <div className="ftbl12w-container">

          <Link
            href="/products/fluidized-temperature-baths"
            className="ftbl12w-back"
          >
            ← BACK TO FLUIDIZED TEMPERATURE BATHS
          </Link>

        </div>

      </section>

    </main>
  );
}