"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import "./page.css";

export default function FTBLL27Page() {
  return (
    <main className="ftbl27-page">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ftbl27-hero">

        <div className="ftbl27-container">

          <div className="ftbl27-topline">
            <span>ATS / FLUIDIZED TEMPERATURE BATHS</span>
            <span>MODEL ATS1016</span>
          </div>


          <div className="ftbl27-hero-grid">

            {/* LEFT */}
            <div className="ftbl27-intro">

              <span className="ftbl27-kicker">
                FLUIDIZED TEMPERATURE BATH
              </span>

              <h1>
                FTBLL
                <br />
                <span>27.</span>
              </h1>

              <h2>
                27 Litre Fluidized Temperature Bath
              </h2>

              <p>
                A large-capacity fluidized temperature bath designed
                for thermal cleaning of extrusion tooling and other
                demanding high-temperature processing applications.
              </p>


              <div className="ftbl27-actions">

                <a
                  href="/#contact"
                  className="ftbl27-btn ftbl27-btn-primary"
                >
                  REQUEST A QUOTE
                  <span>→</span>
                </a>

                <a
                  href="#specifications"
                  className="ftbl27-btn ftbl27-btn-secondary"
                >
                  VIEW SPECIFICATIONS
                  <span>↓</span>
                </a>

              </div>

            </div>


            {/* RIGHT */}
            <div className="ftbl27-visual">

              <div className="ftbl27-grid"></div>

              <div className="ftbl27-orbit ftbl27-orbit-one"></div>
              <div className="ftbl27-orbit ftbl27-orbit-two"></div>

              <div className="ftbl27-image-wrap">

                <Image
                  src="/assets/images/fluidized/ftbll27.png"
                  alt="Accurate Thermal Systems FTBLL27 Fluidized Temperature Bath"
                  width={700}
                  height={700}
                  className="ftbl27-image"
                  priority
                />

              </div>


              <div className="ftbl27-capacity">

                <span>MAXIMUM LOAD</span>

                <strong>
                  130<span>LB</span>
                </strong>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="ftbl27-overview">

        <div className="ftbl27-container">

          <div className="ftbl27-overview-grid">

            <div className="ftbl27-overview-item">
              <span>MODEL</span>
              <strong>FTBLL27</strong>
            </div>

            <div className="ftbl27-overview-item">
              <span>ORDER CODE</span>
              <strong>ATS1016</strong>
            </div>

            <div className="ftbl27-overview-item">
              <span>WORKING AREA</span>
              <strong>17.7 × 28″</strong>
            </div>

            <div className="ftbl27-overview-item">
              <span>POWER</span>
              <strong>12.9 kW</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PERFORMANCE
      ===================================================== */}

      <section className="ftbl27-benefits">

        <div className="ftbl27-container">

          <div className="ftbl27-section-heading">

            <div>

              <span>
                01 / ENGINEERED PERFORMANCE
              </span>

              <h2>
                BUILT FOR
                <br />
                DEMANDING
                <br />
                THERMAL WORK.
              </h2>

            </div>

            <p>
              FTBLL27 combines large working volume with automatic
              fluidizing control and high heating capacity for
              demanding thermal cleaning applications.
            </p>

          </div>


          <div className="ftbl27-benefits-grid">

            <div className="ftbl27-benefit">
              <span>01</span>

              <h3>
                Large Working Volume
              </h3>

              <p>
                A 17.7-inch working diameter and 28-inch working
                depth provide a large processing area for tooling.
              </p>
            </div>


            <div className="ftbl27-benefit">
              <span>02</span>

              <h3>
                High Heating Capacity
              </h3>

              <p>
                The system uses 12.9 kW of heating power for
                high-temperature thermal processing.
              </p>
            </div>


            <div className="ftbl27-benefit">
              <span>03</span>

              <h3>
                Automatic Fluidizing Control
              </h3>

              <p>
                Fluidizing air is automatically controlled during
                system operation for consistent processing.
              </p>
            </div>


            <div className="ftbl27-benefit">
              <span>04</span>

              <h3>
                PID Temperature Control
              </h3>

              <p>
                Advanced PID temperature control supports controlled
                thermal operation throughout the bath.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="ftbl27-applications">

        <div className="ftbl27-container">

          <div className="ftbl27-section-heading">

            <div>

              <span>
                02 / APPLICATION
              </span>

              <h2>
                WHERE IT
                <br />
                IS USED.
              </h2>

            </div>

            <p>
              The FTBLL27 is listed in your product data for
              extrusion tool cleaning applications.
            </p>

          </div>


          <div className="ftbl27-application-grid">

            <div className="ftbl27-application">

              <span>01</span>

              <h3>
                Extrusion Tool Cleaning
              </h3>

              <p>
                Thermal cleaning of extrusion tooling and components
                requiring removal of difficult-to-remove organic
                material.
              </p>

            </div>


            <div className="ftbl27-application">

              <span>02</span>

              <h3>
                High-Capacity Processing
              </h3>

              <p>
                The large 17.7-inch by 28-inch working area is suited
                to larger tooling and components.
              </p>

            </div>


            <div className="ftbl27-application">

              <span>03</span>

              <h3>
                Continuous Thermal Work
              </h3>

              <p>
                Designed around a large fluidized working zone for
                demanding thermal processing workflows.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      <section
        className="ftbl27-specifications"
        id="specifications"
      >

        <div className="ftbl27-container">

          <div className="ftbl27-section-heading">

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
              Model-specific technical information for the
              FTBLL27 / ATS1016.
            </p>

          </div>


          <div className="ftbl27-spec-table">

            <div className="ftbl27-spec-row ftbl27-spec-header">
              <span>SPECIFICATION</span>
              <span>FTBLL27</span>
            </div>


            <div className="ftbl27-spec-row">
              <span>Order Code</span>
              <strong>ATS1016</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Temperature Range</span>
              <strong>Up to 600°C</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Temperature Stability at 500°C</span>
              <strong>±5.0°C</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Calibrated Accuracy at 500°C</span>
              <strong>±20.0°C</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Radial Temperature Uniformity</span>
              <strong>10.0</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Heat-Up Time to 600°C</span>
              <strong>240 minutes</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Power Consumption</span>
              <strong>
                12.9 kW / 480V or 380V / 3 Phase
              </strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Working Diameter</span>
              <strong>17.7″</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Working Depth</span>
              <strong>28″</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Working Area in Basket</span>
              <strong>15.8 × 27″</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Maximum Load Capacity</span>
              <strong>130 lb</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Recovery from Quench</span>
              <strong>Good</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Air Pressure Required</span>
              <strong>70 PSI</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Maximum Air Consumption</span>
              <strong>10.0 SCFM</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Total Unit Weight</span>
              <strong>500 lb</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Aluminum Oxide</span>
              <strong>450 / 500 lb</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Overall Footprint</span>
              <strong>53 × 42 × 32″</strong>
            </div>

            <div className="ftbl27-spec-row">
              <span>Warranty</span>
              <strong>1 Year</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          REQUIREMENTS
      ===================================================== */}

      <section className="ftbl27-requirements">

        <div className="ftbl27-container">

          <div className="ftbl27-section-heading">

            <div>

              <span>
                04 / SYSTEM REQUIREMENTS
              </span>

              <h2>
                WHAT DO I
                <br />
                NEED TO RUN IT?
              </h2>

            </div>

          </div>


          <div className="ftbl27-requirements-grid">

            <div className="ftbl27-requirement">

              <span>01</span>

              <h3>
                Electrical Supply
              </h3>

              <p>
                The documented power configuration is 12.9 kW
                at 480V / 380V, three phase.
              </p>

            </div>


            <div className="ftbl27-requirement">

              <span>02</span>

              <h3>
                Compressed Air
              </h3>

              <p>
                The FTBLL27 requires 70 PSI air pressure with
                maximum air consumption of 10.0 SCFM.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INCLUDED
      ===================================================== */}

      <section className="ftbl27-included">

        <div className="ftbl27-container">

          <div className="ftbl27-section-heading">

            <div>

              <span>
                05 / INCLUDED
              </span>

              <h2>
                SYSTEM
                <br />
                PACKAGE.
              </h2>

            </div>

            <p>
              Your existing ATS product information identifies
              fluidized bath systems as supplied with bath media
              and operating documentation.
            </p>

          </div>


          <div className="ftbl27-included-grid">

            <div>
              <span>01</span>

              <h3>
                Fluidized Bath
              </h3>

              <p>
                Complete FTBLL27 fluidized temperature bath system.
              </p>
            </div>


            <div>
              <span>02</span>

              <h3>
                Aluminum Oxide
              </h3>

              <p>
                450 lb required / 500 lb included according to
                the current specification data.
              </p>
            </div>


            <div>
              <span>03</span>

              <h3>
                Documentation
              </h3>

              <p>
                Operating and technical documentation for the
                system.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ftbl27-support">

        <div className="ftbl27-container">

          <div className="ftbl27-support-box">

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


            <div className="ftbl27-support-info">

              <p>
                Contact Accurate Thermal Systems for quotation,
                application assistance, installation support and
                maintenance information.
              </p>

              <a
                href="/#contact"
                className="ftbl27-btn ftbl27-btn-primary"
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

      <section className="ftbl27-navigation">

        <div className="ftbl27-container">

          <Link
            href="/products/fluidized-temperature-baths"
            className="ftbl27-back"
          >
            ← BACK TO FLUIDIZED TEMPERATURE BATHS
          </Link>

        </div>

      </section>

    </main>
  );
}