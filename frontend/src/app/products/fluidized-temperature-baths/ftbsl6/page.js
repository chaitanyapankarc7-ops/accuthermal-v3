"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../../../components/Navbar";
import "./page.css";

export default function FTBSL6Page() {
  return (
    <main className="ftbsl6-page">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ftbsl6-hero">

        <div className="ftbsl6-hero-grid"></div>

        <div className="ftbsl6-container">

          <div className="ftbsl6-breadcrumb">
            HOME / PRODUCTS / FLUIDIZED TEMPERATURE BATHS / FTBSL6
          </div>

          <div className="ftbsl6-hero-content">

            <div className="ftbsl6-hero-copy">

              <span className="ftbsl6-kicker">
                ATS / SL SERIES
              </span>

              <h1>
                FTBSL
                <br />
                <span>6.</span>
              </h1>

              <p>
                Compact fluidized temperature bath engineered for
                precise thermal processing, calibration and specialized
                laboratory applications.
              </p>

              <div className="ftbsl6-actions">

                <a href="#overview" className="ftbsl6-primary">
                  EXPLORE SYSTEM
                  <span>→</span>
                </a>

                <a href="/form" className="ftbsl6-secondary">
                  REQUEST A QUOTE
                </a>

              </div>

            </div>

            <div className="ftbsl6-visual">

              <div className="ftbsl6-ring ring-one"></div>
              <div className="ftbsl6-ring ring-two"></div>

            <img
                    src="/assets/images/products/fluidizedbath.png"
                    alt="FTBLL12 Fluidized Temperature Bath"
                    className="ftbl12-product-image"
                  />


              <div className="ftbsl6-floating">

                <span>STABILITY</span>
                <strong>±0.2°C</strong>
                <small>@ 500°C</small>

              </div>

            </div>

          </div>

          <div className="ftbsl6-meta">

            <span>ATS / FLUIDIZED TEMPERATURE BATH</span>

            <span>
              ORDER CODE / ATS2016 / ATS2018
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="ftbsl6-overview" id="overview">

        <div className="ftbsl6-container">

          <div className="ftbsl6-section-head">

            <div>

              <span>01 / SYSTEM OVERVIEW</span>

              <h2>
                COMPACT
                <br />
                THERMAL CONTROL.
              </h2>

            </div>

            <p>
              The FTBSL6 provides a compact fluidized thermal
              environment for applications requiring controlled,
              uniform and rapidly responsive heating.
            </p>

          </div>


          <div className="ftbsl6-overview-grid">

            <div className="ftbsl6-overview-main">

              <span className="ftbsl6-model-label">
                MODEL
              </span>

              <strong>FTBSL6</strong>

              <p>
                Designed for smaller workpieces and applications
                requiring precise temperature control with a
                compact working area.
              </p>

            </div>


            <div className="ftbsl6-stat">

              <span>WORKING DIAMETER</span>
              <strong>5.3"</strong>

            </div>


            <div className="ftbsl6-stat">

              <span>WORKING DEPTH</span>
              <strong>6"</strong>

            </div>


            <div className="ftbsl6-stat">

              <span>MAXIMUM LOAD</span>
              <strong>1.5 lb</strong>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PERFORMANCE
      ===================================================== */}

      <section className="ftbsl6-performance">

        <div className="ftbsl6-container">

          <div className="ftbsl6-section-head">

            <div>

              <span>02 / PERFORMANCE</span>

              <h2>
                BUILT FOR
                <br />
                PRECISION.
              </h2>

            </div>

          </div>


          <div className="ftbsl6-performance-grid">

            <div>
              <span>01</span>
              <strong>±0.2°C</strong>
              <p>Temperature stability at 500°C</p>
            </div>

            <div>
              <span>02</span>
              <strong>70 MIN</strong>
              <p>Ambient to 600°C heat-up time</p>
            </div>

            <div>
              <span>03</span>
              <strong>1.9 kW</strong>
              <p>Power consumption</p>
            </div>

            <div>
              <span>04</span>
              <strong>30 PSI</strong>
              <p>Required air pressure</p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      <section className="ftbsl6-specifications">

        <div className="ftbsl6-container">

          <div className="ftbsl6-section-head">

            <div>

              <span>03 / TECHNICAL DATA</span>

              <h2>
                DETAILED
                <br />
                SPECIFICATIONS.
              </h2>

            </div>

          </div>


          <div className="ftbsl6-spec-grid">

            <div>
              <span>Temperature Stability</span>
              <strong>±0.2°C</strong>
            </div>

            <div>
              <span>Calibrated Accuracy @ 500°C</span>
              <strong>±2.0°C</strong>
            </div>

            <div>
              <span>Radial Uniformity</span>
              <strong>&lt;0.5</strong>
            </div>

            <div>
              <span>Heat-Up Time</span>
              <strong>70 min</strong>
            </div>

            <div>
              <span>Power</span>
              <strong>1.9 kW</strong>
              <small>120V / 240V · 1 phase</small>
            </div>

            <div>
              <span>Working Area</span>
              <strong>5.3" × 6"</strong>
            </div>

            <div>
              <span>Maximum Load</span>
              <strong>1.5 lb</strong>
            </div>

            <div>
              <span>Recovery From Quench</span>
              <strong>Very good</strong>
            </div>

            <div>
              <span>Maximum Air Consumption</span>
              <strong>1.7 SCFM</strong>
            </div>

            <div>
              <span>Total Unit Weight</span>
              <strong>32 lbs</strong>
            </div>

            <div>
              <span>Aluminum Oxide</span>
              <strong>13 / 20 lbs</strong>
              <small>Required / Included</small>
            </div>

            <div>
              <span>Overall Footprint</span>
              <strong>15 × 17 × 13"</strong>
            </div>

            <div>
              <span>Warranty</span>
              <strong>1 Year</strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATIONS
      ===================================================== */}

      <section className="ftbsl6-applications">

        <div className="ftbsl6-container">

          <div className="ftbsl6-section-head">

            <div>

              <span>04 / APPLICATIONS</span>

              <h2>
                SMALL FORMAT.
                <br />
                SERIOUS CONTROL.
              </h2>

            </div>

          </div>


          <div className="ftbsl6-application-grid">

            <div>
              <span>01</span>
              <h3>Medical Device Processing</h3>
              <p>
                Controlled thermal processing for medical device
                shape setting and related applications.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Calibration</h3>
              <p>
                Stable thermal conditions for temperature
                calibration and testing.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Reactor Heating</h3>
              <p>
                Compact thermal processing for specialized
                reaction and laboratory applications.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="ftbsl6-cta">

        <div className="ftbsl6-container">

          <span>ATS / FTBSL6</span>

          <h2>
            NEED A COMPACT
            <br />
            THERMAL SYSTEM?
          </h2>

          <a href="/form">
            REQUEST A QUOTE →
          </a>

        </div>

      </section>


      <div className="ftbsl6-back">

        <Link href="/products/fluidized-temperature-baths">
          ← BACK TO FLUIDIZED TEMPERATURE BATHS
        </Link>

      </div>

    </main>
  );
}