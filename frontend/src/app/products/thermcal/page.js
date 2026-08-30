"use client";

import Image from "next/image";
import Navbar from "../../component/Navbar";
import "./page.css";
import { useState } from "react";

export default function ThermCalPage() {

  const [thermcal400Started, setThermcal400Started] = useState(false);
  const [thermcal130Started, setThermcal130Started] = useState(false);


  return (
     <>
      <Navbar />
    <main className="thermcal-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="thermcal-hero">

        <div className="thermcal-grid"></div>

        <div className="thermcal-hero-inner">

          {/* TOP LABEL */}

          <div className="thermcal-breadcrumb">
            <span></span>
            ATS / PRODUCTS
          </div>


          {/* LEFT CONTENT */}

          <div className="thermcal-hero-content">

            <div className="thermcal-eyebrow">
              PRECISION CALIBRATION SYSTEMS
            </div>

            <h1>
              ThermCal
              <br />
              <strong>Calibrators.</strong>
            </h1>

            <p>
              Precision dry block temperature calibrators providing a
              stable, uniform, and portable temperature source for
              sensor calibration and verification.
            </p>

            <div className="thermcal-actions">

              <a
                href="#models"
                className="thermcal-btn-primary"
              >
                EXPLORE MODELS
              </a>

              <a
                href="#specifications"
                className="thermcal-btn-secondary"
              >
                VIEW SPECIFICATIONS
              </a>

            </div>

          </div>


          {/* =====================================================
              PRODUCT IMAGE
          ===================================================== */}

          <div className="thermcal-hero-product">

            <div className="thermcal-product-glow"></div>

            <div className="thermcal-product-ring"></div>

            <div className="thermcal-product-ring ring-small"></div>

            <Image
              src="/assets/images/products/ats-thermcal400.png"
              alt="ThermCal400 Dry Block Temperature Calibrator"
              width={650}
              height={700}
              className="thermcal-main-image"
              priority
            />


            {/* TOP INFO */}

            <div className="thermcal-floating-card thermcal-card-top">

              <span>THERMCAL400</span>

              <strong>455°C</strong>

              <small>
                MAXIMUM TEMPERATURE
              </small>

            </div>


            {/* BOTTOM INFO */}

            <div className="thermcal-floating-card thermcal-card-bottom">

              <span>PRECISION</span>

              <strong>±0.4°C</strong>

              <small>
                ACCURACY
              </small>

            </div>

          </div>


          {/* SCROLL */}

          <div className="thermcal-scroll">
            SCROLL TO EXPLORE
            <span>↓</span>
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        className="thermcal-intro"
        id="models"
      >

        <div className="thermcal-container">

          <div className="thermcal-section-label">
            01 / PRODUCT SYSTEM
          </div>

          <div className="thermcal-intro-grid">

            <div>

              <h2>
                CALIBRATION
                <br />
                <span>WITHOUT</span>
                <br />
                COMPROMISE.
              </h2>

            </div>

            <div className="thermcal-intro-text">

              <p>
                Accurate Thermal Systems offers two dry block
                temperature calibrators used for calibration of
                many types of temperature sensors and systems.
              </p>

              <p>
                These include liquid-in-glass thermometers,
                thermocouples, RTDs, PRTs, thermal switches,
                temperature transmitters, dial thermometers,
                temperature controllers, indicators,
                temperature loggers and thermistors.
              </p>

              <p>
                ThermCal calibrators are designed for both
                portable field applications and laboratory
                bench use.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          THERMCAL SERIES
      ===================================================== */}

      <section className="thermcal-series">

        <div className="thermcal-container">

          <div className="thermcal-section-heading">

            <div>

              <span>
                02 / THERMCAL SERIES
              </span>

              <h2>
                TWO SYSTEMS.
                <br />
                <strong>ONE STANDARD.</strong>
              </h2>

            </div>

            <p>
              Select the ThermCal platform according to your
              required temperature range, heating and cooling
              performance, portability and calibration workflow.
            </p>

          </div>


          {/* =================================================
              THERMCAL 400
          ================================================= */}

          <article className="thermcal-model thermcal-model-featured">

            <div className="thermcal-model-image">

              <div className="thermcal-image-grid"></div>

              <div className="thermcal-placeholder-content"></div>
              

              <Image
                src="/assets/images/products/20190719_160629.jpg"
                alt="ThermCal400 Dry Block Temperature Calibrator"
                width={650}
                height={600}
                className="thermcal-series-image"
              />

              <div className="thermcal-image-badge">
                <span>MODEL</span>
                <strong>THERMCAL400</strong>
              </div>

            </div>


            <div className="thermcal-model-info">

              <span className="thermcal-model-number">
                ATS3010 / ATS3020
              </span>

              <h3>
                ThermCal400
              </h3>

              <p>
                A high-temperature dry block temperature
                calibrator designed for laboratory and field use,
                providing operation from ambient +5°C up to
                455°C / 850°F.
              </p>


              <div className="thermcal-model-stats">

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


              <div className="thermcal-model-tags">

                <span>900 W</span>

                <span>11 LBS</span>

                <span>0.1°C RESOLUTION</span>

                <span>2 YEAR WARRANTY</span>

              </div>

            </div>

          </article>


{/* =====================================================
    THERMCAL 130
===================================================== */}

<article className="thermcal-model thermcal-model-second">

  {/* PRODUCT IMAGE */}

  <div className="thermcal-model-image">

    <div className="thermcal-image-grid"></div>

    <Image
      src="/assets/images/products/20150102_135234.jpg"
      alt="ThermCal130 Dry Block Temperature Calibrator"
      width={650}
      height={600}
      className="thermcal-series-image"
    />

    <div className="thermcal-image-badge">

      <span>MODEL</span>

      <strong>THERMCAL130</strong>

    </div>

  </div>


  {/* PRODUCT INFORMATION */}

  <div className="thermcal-model-info">

    <span className="thermcal-model-number">
      ATS3080
    </span>

    <h3>
      ThermCal130
    </h3>

    <p>
      A thermoelectric/Peltier-based calibrator offering rapid
      heating and cooling for applications requiring temperature
      control from -25°C to 130°C.
    </p>


    <div className="thermcal-model-stats">

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


    <div className="thermcal-model-tags">

      <span>200 W</span>

      <span>15 LBS</span>

      <span>0.1°C RESOLUTION</span>

      <span>2 YEAR WARRANTY</span>

    </div>

  </div>

</article>
        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="thermcal-features">

        <div className="thermcal-container">

          <div className="thermcal-section-label">
            03 / ENGINEERED FEATURES
          </div>


          <div className="thermcal-features-header">

            <h2>
              BUILT FOR
              <br />
              <span>REAL WORK.</span>
            </h2>

            <p>
              Laboratory-grade performance combined with rugged
              construction and field-ready portability.
            </p>

          </div>


          <div className="thermcal-feature-grid">


            <div className="thermcal-feature">

              <span>01</span>

              <h3>
                Laboratory Grade
              </h3>

              <p>
                Accurate and stable temperature control for
                demanding calibration environments.
              </p>

            </div>


            <div className="thermcal-feature">

              <span>02</span>

              <h3>
                Portable Design
              </h3>

              <p>
                Lightweight construction makes the systems
                suitable for field and laboratory applications.
              </p>

            </div>


            <div className="thermcal-feature">

              <span>03</span>

              <h3>
                Digital Control
              </h3>

              <p>
                Advanced all-digital controller with a large,
                bright display.
              </p>

            </div>


            <div className="thermcal-feature">

              <span>04</span>

              <h3>
                Traceable Calibration
              </h3>

              <p>
                Units include NIST traceable calibration
                certificates with ISO 17025 compliant
                documentation.
              </p>

            </div>


            <div className="thermcal-feature">

              <span>05</span>

              <h3>
                Rugged Construction
              </h3>

              <p>
                Rugged powder-coated case with polished
                stainless steel top and bottom construction.
              </p>

            </div>


            <div className="thermcal-feature">

              <span>06</span>

              <h3>
                Made in USA
              </h3>

              <p>
                ThermCal systems are manufactured and
                supported in Hainesport, New Jersey, USA.
              </p>

            </div>


          </div>

        </div>

      </section>


      

{/* =====================================================
    VIDEO / THERMCAL IN ACTION
===================================================== */}

<section className="thermcal-video-section">

  <div className="thermcal-container">

    <div className="thermcal-section-label">
      04 / SYSTEM IN ACTION
    </div>


    <div className="thermcal-video-header">

      <div>
        <h2>
          SEE THE
          <br />
          <span>SYSTEM IN ACTION.</span>
        </h2>
      </div>

      <p>
        See how ThermCal dry block temperature calibrators
        deliver rapid heating, precise temperature control,
        and stable calibration performance.
      </p>

    </div>


    {/* =====================================================
        THERMCAL 400 VIDEO
    ===================================================== */}

    <div className="thermcal-video-wrapper">

      <video
        controls
        muted
        playsInline
        preload="metadata"
        className="thermcal-video"

        onPlay={() => {
          setThermcal400Started(true);
        }}
      >

        <source
          src="/videos/20150203_140542.mp4"
          type="video/mp4"
        />

        Your browser does not support the video element.

      </video>


      {/* =================================================
          THERMCAL 400 INTRO WALLPAPER
      ================================================= */}

      {!thermcal400Started && (

        <div
          className="thermcal-video-intro"

          onClick={(e) => {

            const video = e.currentTarget
              .closest(".thermcal-video-wrapper")
              ?.querySelector("video");

            if (video) {
              video.play();
            }

          }}
        >

          {/* TOP LABEL */}

          <span className="thermcal-intro-kicker">
            ATS / PRECISION CALIBRATION
          </span>


          {/* MAIN HEADING */}

          <h3>
            SEE THE
            <br />
            SYSTEM
            <br />
            <span>IN ACTION.</span>
          </h3>


          {/* ATS LOGO */}

          <div className="thermcal-intro-logo">

            <img
              src="/assets/images/ats-logo.png"
              alt="Accurate Thermal Systems"
            />

          </div>


          {/* PLAY BUTTON */}

          <button
            type="button"
            className="thermcal-intro-play"
            aria-label="Play ThermCal 400 video"

            onClick={(e) => {

              e.stopPropagation();

              const video = e.currentTarget
                .closest(".thermcal-video-wrapper")
                ?.querySelector("video");

              if (video) {
                video.play();
              }

            }}
          >

            <span>
              ▶
            </span>

          </button>


          {/* BOTTOM META */}

          <div className="thermcal-intro-footer">

            <span>
              ATS / THERMCAL400
            </span>

            <span>
              WATCH PROCESS ↓
            </span>

          </div>

        </div>

      )}


      {/* VIDEO LABEL */}

      <div className="thermcal-video-label">

        <span>
          THERMCAL400
        </span>

        <strong>
          PRECISION IN MOTION
        </strong>

      </div>

    </div>



    {/* =====================================================
        THERMCAL 130 VIDEO
    ===================================================== */}

    <div className="thermcal-video-wrapper thermcal-video-wrapper-130">

      <video
        controls
        muted
        playsInline
        preload="metadata"
        className="thermcal-video"

        onPlay={() => {
          setThermcal130Started(true);
        }}
      >

        <source
          src="/videos/130.mp4"
          type="video/mp4"
        />

        Your browser does not support the video element.

      </video>


      {/* =================================================
          THERMCAL 130 INTRO WALLPAPER
      ================================================= */}

      {!thermcal130Started && (

        <div
          className="thermcal-video-intro"

          onClick={(e) => {

            const video = e.currentTarget
              .closest(".thermcal-video-wrapper")
              ?.querySelector("video");

            if (video) {
              video.play();
            }

          }}
        >

          {/* TOP LABEL */}

          <span className="thermcal-intro-kicker">
            ATS / PRECISION CALIBRATION
          </span>


          {/* MAIN HEADING */}

          <h3>
            SEE THE
            <br />
            SYSTEM
            <br />
            <span>IN ACTION.</span>
          </h3>


          {/* ATS LOGO */}

          <div className="thermcal-intro-logo">

            <img
              src="/assets/images/ats-logo.png"
              alt="Accurate Thermal Systems"
            />

          </div>


          {/* PLAY BUTTON */}

          <button
            type="button"
            className="thermcal-intro-play"
            aria-label="Play ThermCal 130 video"

            onClick={(e) => {

              e.stopPropagation();

              const video = e.currentTarget
                .closest(".thermcal-video-wrapper")
                ?.querySelector("video");

              if (video) {
                video.play();
              }

            }}
          >

            <span>
              ▶
            </span>

          </button>


          {/* BOTTOM META */}

          <div className="thermcal-intro-footer">

            <span>
              ATS / THERMCAL130
            </span>

            <span>
              WATCH PROCESS ↓
            </span>

          </div>

        </div>

      )}


      {/* VIDEO LABEL */}

      <div className="thermcal-video-label">

        <span>
          THERMCAL130
        </span>

        <strong>
          PRECISION IN MOTION
        </strong>

      </div>

    </div>

  </div>

</section>
      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      <section
        className="thermcal-specifications"
        id="specifications"
      >

        <div className="thermcal-container">

          <div className="thermcal-section-label">
            05 / TECHNICAL DATA
          </div>


          <h2>
            TECHNICAL
            <br />
            <span>SPECIFICATIONS.</span>
          </h2>


          <div className="thermcal-table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>
                    Specification
                  </th>

                  <th>
                    ThermCal400
                  </th>

                  <th>
                    ThermCal130
                  </th>

                </tr>

              </thead>


              <tbody>

                <tr>

                  <td>
                    Temperature Range
                  </td>

                  <td>
                    Ambient +5 to 455°C / 850°F
                  </td>

                  <td>
                    -25°C to 130°C
                  </td>

                </tr>


                <tr>

                  <td>
                    Accuracy
                  </td>

                  <td>
                    ±0.4°C
                  </td>

                  <td>
                    ±0.4°C
                  </td>

                </tr>


                <tr>

                  <td>
                    Stability
                  </td>

                  <td>
                    ±0.05°C
                  </td>

                  <td>
                    ±0.03°C
                  </td>

                </tr>


                <tr>

                  <td>
                    Well-to-Well Radial Uniformity
                  </td>

                  <td>
                    0.015 at 100°C /
                    0.052 at 300°C
                  </td>

                  <td>
                    N/A
                  </td>

                </tr>


                <tr>

                  <td>
                    Heat-Up Time
                  </td>

                  <td>
                    12 minutes
                  </td>

                  <td>
                    3.5 minutes
                  </td>

                </tr>


                <tr>

                  <td>
                    Cool-Down Time
                  </td>

                  <td>
                    20 minutes to 100°C
                  </td>

                  <td>
                    2.5 minutes to 20°C
                  </td>

                </tr>


                <tr>

                  <td>
                    Display Resolution
                  </td>

                  <td>
                    0.1°C / °F
                  </td>

                  <td>
                    0.1°C / °F
                  </td>

                </tr>


                <tr>

                  <td>
                    Dimensions L/W/H
                  </td>

                  <td>
                    8 × 8 × 8 in
                  </td>

                  <td>
                    8 × 9 × 10 in
                  </td>

                </tr>


                <tr>

                  <td>
                    Power
                  </td>

                  <td>
                    900 W
                  </td>

                  <td>
                    200 W
                  </td>

                </tr>


                <tr>

                  <td>
                    Mains Voltage
                  </td>

                  <td>
                    120 / 240 V fixed
                  </td>

                  <td>
                    100–260 VAC
                  </td>

                </tr>


                <tr>

                  <td>
                    Catalog Number
                  </td>

                  <td>
                    ATS3010 / ATS3020
                  </td>

                  <td>
                    ATS3080
                  </td>

                </tr>


                <tr>

                  <td>
                    Weight with Insert
                  </td>

                  <td>
                    11 lbs
                  </td>

                  <td>
                    15 lbs
                  </td>

                </tr>


                <tr>

                  <td>
                    Warranty
                  </td>

                  <td>
                    2 years
                  </td>

                  <td>
                    2 years
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* =====================================================
          DOWNLOADS
      ===================================================== */}

      <section className="thermcal-downloads">

        <div className="thermcal-container">

          <div className="thermcal-section-label">
            06 / RESOURCES
          </div>


          <div className="thermcal-download-grid">

            <div>

              <h2>
                PRODUCT
                <br />
                <span>DOCUMENTATION.</span>
              </h2>

            </div>


            <div className="thermcal-download-links">

              <a
                href="https://accuthermal.com/wp-content/uploads/2024/01/thermcal400-brochure-rev9.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >

                <span>
                  THERMCAL400
                </span>

                <strong>
                  DOWNLOAD BROCHURE →
                </strong>

              </a>


              <a
                href="https://accuthermal.com/wp-content/uploads/2024/01/thermcal130-brochure-rev13.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >

                <span>
                  THERMCAL130
                </span>

                <strong>
                  DOWNLOAD BROCHURE →
                </strong>

              </a>

            </div>

          </div>

        </div>

      </section>
      


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="thermcal-cta">

        <div className="thermcal-cta-grid"></div>

        <div className="thermcal-cta-content">

          <span>
            ACCURATE THERMAL SYSTEMS
          </span>

          <h2>
            READY TO
            <br />
            <strong>CALIBRATE?</strong>
          </h2>

          <p>
            Talk with our team about the ThermCal system
            suited to your application.
          </p>

          <a
            href="#contact"
            className="thermcal-btn-primary"
          >
            REQUEST A QUOTE
          </a>

        </div>

        

      </section>

    </main>
     </>
  );
}