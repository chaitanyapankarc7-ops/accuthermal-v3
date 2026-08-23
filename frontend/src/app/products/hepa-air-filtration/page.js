"use client";

import "./page.css";
import Navbar from "../../component/Navbar";
import Image from "next/image";

export default function HEPAAirFiltration() {
  return (
    <>
      <Navbar />

      {/* =====================================================
          01 / HEPA HERO
      ===================================================== */}

      <section className="hepa-hero">

        <div className="hepa-hero-grid"></div>

        <div className="hepa-hero-inner">

          {/* LEFT CONTENT */}

          <div className="hepa-hero-content">

            <span className="hepa-hero-kicker">
              INDUSTRIAL AIR FILTRATION SYSTEMS
            </span>

            <h1>
              HEPA AIR
              <br />
              <span>FILTRATION.</span>
            </h1>

            <p>
              High-efficiency filtration systems engineered to
              capture smoke, particles, fumes and VOCs from
              demanding industrial operations.
            </p>

            <div className="hepa-hero-buttons">

              <a
                href="#systems"
                className="hepa-primary-btn"
              >
                EXPLORE SYSTEMS
                <span>→</span>
              </a>

              <a
                href="#downloads"
                className="hepa-secondary-btn"
              >
                VIEW DOCUMENTATION
              </a>

            </div>

          </div>


          {/* RIGHT PRODUCT VISUAL */}

          <div className="hepa-hero-visual">

            <div className="hepa-air-ring hepa-air-ring-1"></div>
            <div className="hepa-air-ring hepa-air-ring-2"></div>
            <div className="hepa-air-ring hepa-air-ring-3"></div>


            {/* PRODUCT LABEL */}

            <div className="hepa-product-label">

              <span>PRODUCT SYSTEM</span>

              <strong>
                ECU
              </strong>

            </div>


            {/* PRODUCT IMAGE */}

            <Image
              src="/assets/images/hepa/hero-machine.png"
              alt="HEPA Air Filtration System"
              width={700}
              height={700}
              className="hepa-hero-machine"
              priority
            />


            {/* TOP TECH CARD */}

            <div className="hepa-tech-card hepa-temp-card">

              <span>
                HEPA FILTRATION
              </span>

              <strong>
                99.97%
              </strong>

              <small>
                PARTICLE EFFICIENCY
              </small>

            </div>


            {/* BOTTOM TECH CARD */}

            <div className="hepa-tech-card hepa-efficiency-card">

              <span>
                SYSTEM
              </span>

              <strong>
                ECU1 / ECU2
              </strong>

              <small>
                MOBILE FILTRATION
              </small>

            </div>

          </div>

        </div>


        {/* HERO FOOTER */}

        <div className="hepa-hero-bottom">

          <span>
            ATS / HEPA AIR FILTRATION
          </span>

          <span>
            INDUSTRIAL FILTRATION SYSTEM
          </span>

          <span>
            SCROLL TO EXPLORE ↓
          </span>

        </div>

      </section>


      {/* =====================================================
          02 / OVERVIEW
      ===================================================== */}

      <section className="hepa-overview">

        <div className="hepa-overview-container">

          <div className="hepa-overview-heading">

            <span className="hepa-section-tag">
              01 / FILTRATION SYSTEM
            </span>

            <h2>
              CAPTURE
              <br />
              WHAT THE
              <br />
              PROCESS
              <br />
              LEAVES
              <br />
              BEHIND.
            </h2>

          </div>


          <div className="hepa-overview-content">

            <p>
              Accurate Thermal Systems' HEPA Air Filtration
              systems are designed to capture and remove smoke,
              particles, fumes and VOCs generated during
              industrial thermal processing operations.
            </p>

            <p>
              These systems can be used for operations involving
              fine dust, welding smoke, paint fumes and other
              process by-products where controlled filtration
              is required.
            </p>


            <div className="hepa-overview-stat">

              <strong>
                99.97%
              </strong>

              <span>
                HEPA FILTRATION EFFICIENCY
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          03 / HEPA SYSTEMS
      ===================================================== */}

      <section
        className="hepa-systems"
        id="systems"
      >

        <div className="hepa-systems-container">

          <div className="hepa-systems-header">

            <div>

              <span className="hepa-section-tag">
                02 / HEPA SYSTEMS
              </span>

              <h2>
                TWO SYSTEMS.
                <br />
                <span>ONE CLEANER PROCESS.</span>
              </h2>

            </div>

            <p>
              Select the filtration system according to your
              application, airflow requirements and duty cycle.
            </p>

          </div>


          {/* ECU1 */}

          <div className="hepa-system-card">

            <div className="hepa-system-image">

              <Image
                src="/assets/images/hepa/ecu1.jpg"
                alt="ECU1 HEPA Air Filtration System"
                width={800}
                height={800}
              />

              <span className="hepa-card-number">
                01
              </span>

            </div>


            <div className="hepa-system-info">

              <span className="hepa-product-type">
                MOBILE HEPA FILTRATION
              </span>

              <h3>
                Model ECU1
              </h3>

              <p>
                The ECU1 is a mobile HEPA air filtration system
                recommended for light to moderate-duty smoke
                and fume capture applications.
              </p>


              <div className="hepa-spec-grid">

                <div>
                  <strong>99.97%</strong>
                  <span>HEPA EFFICIENCY</span>
                </div>

                <div>
                  <strong>90%</strong>
                  <span>PRE-FILTER</span>
                </div>

                <div>
                  <strong>80 LB</strong>
                  <span>ACTIVATED CARBON</span>
                </div>

              </div>

              <a
                href="#downloads"
                className="hepa-card-link"
              >
                VIEW DOCUMENTATION →
              </a>

            </div>

          </div>


          {/* ECU2 */}

          <div className="hepa-system-card reverse">

            <div className="hepa-system-image">

              <Image
                src="/assets/images/hepa/ecu2.jpg"
                alt="ECU2 HEPA Air Filtration System"
                width={800}
                height={800}
              />

              <span className="hepa-card-number">
                02
              </span>

            </div>


            <div className="hepa-system-info">

              <span className="hepa-product-type">
                HEAVY-DUTY FILTRATION
              </span>

              <h3>
                Model ECU2
              </h3>

              <p>
                The ECU2 is designed for moderate to heavy-duty
                smoke and fume capture applications requiring
                dependable industrial filtration.
              </p>


              <div className="hepa-spec-grid">

                <div>
                  <strong>99.97%</strong>
                  <span>HEPA EFFICIENCY</span>
                </div>

                <div>
                  <strong>0.3 µM</strong>
                  <span>FILTER RATING</span>
                </div>

                <div>
                  <strong>ECU2</strong>
                  <span>HEAVY DUTY</span>
                </div>

              </div>

              <a
                href="#downloads"
                className="hepa-card-link"
              >
                VIEW DOCUMENTATION →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          04 / APPLICATIONS
      ===================================================== */}

      <section className="hepa-applications">

        <div className="hepa-applications-container">

          <div className="hepa-applications-header">

            <div>

              <span className="hepa-section-tag">
                03 / APPLICATIONS
              </span>

              <h2>
                BUILT FOR
                <br />
                REAL-WORLD
                <br />
                <span>FILTRATION.</span>
              </h2>

            </div>

            <p>
              Industrial filtration engineered for environments
              where smoke, fumes, particles and process
              by-products must be effectively captured.
            </p>

          </div>


          <div className="hepa-application-grid">

            <div className="hepa-application-item">
              <span>01</span>
              <h3>TOOL CLEANING</h3>
              <p>
                Capture smoke and fumes generated during
                thermal tool cleaning operations.
              </p>
            </div>

            <div className="hepa-application-item">
              <span>02</span>
              <h3>SMOKE CAPTURE</h3>
              <p>
                Designed for industrial smoke and particulate
                capture applications.
              </p>
            </div>

            <div className="hepa-application-item">
              <span>03</span>
              <h3>FUME REMOVAL</h3>
              <p>
                Controlled filtration of fumes generated by
                demanding thermal processes.
              </p>
            </div>

            <div className="hepa-application-item">
              <span>04</span>
              <h3>VOC CONTROL</h3>
              <p>
                Activated carbon filtration helps capture
                odors and volatile organic compounds.
              </p>
            </div>

            <div className="hepa-application-item">
              <span>05</span>
              <h3>DUST CAPTURE</h3>
              <p>
                Multi-stage filtration for fine dust and
                airborne process particles.
              </p>
            </div>

            <div className="hepa-application-item">
              <span>06</span>
              <h3>INDUSTRIAL EXHAUST</h3>
              <p>
                Mobile filtration systems for controlled
                industrial exhaust environments.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          05 / FILTRATION PROCESS
      ===================================================== */}

      <section className="hepa-process">

        <div className="hepa-process-container">

          <div className="hepa-process-header">

            <span className="hepa-section-tag">
              04 / FILTRATION PROCESS
            </span>

            <h2>
              HOW DOES
              <br />
              THE SYSTEM
              <br />
              <span>WORK?</span>
            </h2>

            <p>
              A multi-stage filtration system captures
              contaminants before treated air is discharged
              from the system.
            </p>

          </div>


          <div className="hepa-process-media">

            <div className="hepa-video-wrapper">

              <video
                controls
                muted
                playsInline
                preload="metadata"
                className="hepa-video"
              >
                <source
                  src="/videos/hepa-filtration.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="hepa-video-label">
                ATS / FILTRATION PROCESS
              </div>

            </div>


            <div className="hepa-process-stages">

              <div className="hepa-process-stage">

                <span>01</span>

                <h3>
                  PRE-FILTER
                </h3>

                <p>
                  Initial particulate filtration.
                </p>

              </div>


              <div className="hepa-process-stage">

                <span>02</span>

                <h3>
                  HEPA FILTER
                </h3>

                <p>
                  High-efficiency particle capture.
                </p>

              </div>


              <div className="hepa-process-stage">

                <span>03</span>

                <h3>
                  ACTIVATED CARBON
                </h3>

                <p>
                  Odor and VOC capture.
                </p>

              </div>


              <div className="hepa-process-stage">

                <span>04</span>

                <h3>
                  CLEAN AIR
                </h3>

                <p>
                  Filtered air discharge.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          06 / PRODUCT DOCUMENTATION
      ===================================================== */}

      <section
        className="hepa-downloads"
        id="downloads"
      >

        <div className="hepa-downloads-container">

          <div className="hepa-downloads-intro">

            <span className="hepa-section-tag">
              06 / RESOURCES
            </span>

            <h2>
              FILTRATION
              <br />
              <span>DOCUMENTATION.</span>
            </h2>

            <p>
              Access technical documentation, product
              information and filtration resources for ATS
              HEPA systems.
            </p>

          </div>


          <div className="hepa-download-list">

            <a
              href="/downloads/ECU1-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hepa-download-item"
            >

              <span>01</span>

              <div>
                <small>PRODUCT BROCHURE</small>
                <h3>
                  ECU1 HEPA FILTRATION SYSTEM
                </h3>
              </div>

              <strong>
                PDF ↓
              </strong>

            </a>


            <a
              href="/downloads/ECU2-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hepa-download-item"
            >

              <span>02</span>

              <div>
                <small>PRODUCT BROCHURE</small>
                <h3>
                  ECU2 HEPA FILTRATION SYSTEM
                </h3>
              </div>

              <strong>
                PDF ↓
              </strong>

            </a>


            <a
              href="/downloads/hepa-safety-data.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hepa-download-item"
            >

              <span>03</span>

              <div>
                <small>TECHNICAL RESOURCE</small>
                <h3>
                  HEPA FILTER / SAFETY DATA
                </h3>
              </div>

              <strong>
                PDF ↓
              </strong>

            </a>

          </div>

        </div>

      </section>

    </>
  );
}