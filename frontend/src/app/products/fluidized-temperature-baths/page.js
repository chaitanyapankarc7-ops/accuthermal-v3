"use client";

import { useState } from "react";
import "./page.css";
import Navbar from "../../component/Navbar";
import Image from "next/image";


export default function FluidizedTemperatureBaths() {
   const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <>
      <Navbar />

     {/* =====================================================
    FLUIDIZED TEMPERATURE BATH — PRODUCT HERO
===================================================== */}

<section className="ftb-product-hero-new">

  <div className="ftb-hero-grid"></div>

  <div className="ftb-hero-inner">

    {/* LEFT CONTENT */}
    <div className="ftb-hero-content">

      <span className="ftb-hero-kicker">
        THERMAL PROCESSING SYSTEMS
      </span>

      <h1>
        Fluidized
        <br />
        Temperature
        <br />
        <span>Baths.</span>
      </h1>

      <p>
        Precision fluidized temperature baths engineered for
        rapid, uniform, and controlled thermal processing,
        cleaning, calibration, testing and specialized
        industrial applications.
      </p>

      <div className="ftb-hero-buttons">

        <a
          href="#overview"
          className="ftb-hero-primary"
        >
          EXPLORE MODELS
          <span>→</span>
        </a>

        <a
          href="/form"
          className="ftb-hero-secondary"
        >
          REQUEST A QUOTE
        </a>

      </div>

    </div>


    {/* RIGHT PRODUCT VISUAL */}
    <div className="ftb-hero-visual">

      {/* Technical rings */}

      <div className="ftb-ring ftb-ring-1"></div>
      <div className="ftb-ring ftb-ring-2"></div>
      <div className="ftb-ring ftb-ring-3"></div>

      {/* Product image */}

      <Image
        src="/assets/images/fluidized/hero-machine.png"
        alt="Fluidized Temperature Bath"
        width={700}
        height={700}
        className="ftb-hero-machine"
        priority
      />


      {/* TOP SPEC */}

      <div className="ftb-floating-card ftb-temp-card">

        <span>
          FTB SERIES
        </span>

        <strong>
          600°C
        </strong>

        <small>
          MAXIMUM TEMPERATURE
        </small>

      </div>


      {/* BOTTOM SPEC */}

      <div className="ftb-floating-card ftb-stability-card">

        <span>
          PRECISION
        </span>

        <strong>
          ±1°C
        </strong>

        <small>
          TEMPERATURE STABILITY
        </small>

      </div>

    </div>

  </div>


  {/* BOTTOM META */}

  <div className="ftb-hero-bottom">

    <span>
      ATS / FLUIDIZED TEMPERATURE BATH
    </span>

    <span>
      600°C MAXIMUM
    </span>

    <span>
      SCROLL TO EXPLORE ↓
    </span>

  </div>

</section>
{/* ================= PRODUCT DETAILS ================= */}

<section className="product-details-section" id="overview">

  <div className="product-details-grid"></div>

  <div className="product-details-container">

    {/* SECTION HEADER */}

    <div className="product-details-header">

      <span className="product-details-tag">
        01 / PRODUCT DETAILS
      </span>

      <h2>
        ENGINEERED
        <br />
        DOWN TO
        <br />
        THE DETAIL.
      </h2>

      <p>
        Explore the key components that make the ATS Fluidized Temperature
        Bath precise, reliable, and practical for demanding thermal
        processing applications.
      </p>

    </div>


    {/* ================= DETAIL 01 ================= */}

    <div className="product-detail-row">

      <div className="product-detail-image-wrap">

        <div className="product-detail-glow"></div>

        <div className="product-detail-frame">

          <div className="product-detail-grid"></div>

          <Image
            src="/assets/images/fluidized/temp.png"
            alt="Digital PID Control Module"
            width={700}
            height={700}
            className="product-detail-image"
          />

          <span className="image-index">
            01
          </span>

        </div>

      </div>


      <div className="product-detail-content">

        <span className="detail-number">
          01 / CONTROL
        </span>

        <h3>
          DIGITAL
          <br />
          CONTROL
          <br />
          MODULE
        </h3>

        <p>
          The integrated digital PID controller provides intuitive
          operation, real-time temperature monitoring, and precise
          closed-loop regulation.
        </p>

        <div className="detail-features">

          <div className="detail-feature">
            <span>01</span>
            <div>
              <strong>Digital PID Control</strong>
              <p>
                Precise closed-loop temperature regulation.
              </p>
            </div>
          </div>

          <div className="detail-feature">
            <span>02</span>
            <div>
              <strong>Clear LED Display</strong>
              <p>
                Easy-to-read operating and status information.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>


    {/* ================= DETAIL 02 ================= */}

    <div className="product-detail-row reverse">

      <div className="product-detail-image-wrap">

        <div className="product-detail-glow"></div>

        <div className="product-detail-frame">

          <div className="product-detail-grid"></div>

          <Image
            src="/assets/images/fluidized/airflow-control.jpg"
            alt="Power and Air Flow Control"
            width={700}
            height={900}
            className="product-detail-image"
          />

          <span className="image-index">
            02
          </span>

        </div>

      </div>


      <div className="product-detail-content">

        <span className="detail-number">
          02 / AIRFLOW
        </span>

        <h3>
          POWER &
          <br />
          AIR FLOW
          <br />
          CONTROL
        </h3>

        <p>
          A dedicated control interface provides independent power
          switching and adjustable airflow control for the fluidized
          system.
        </p>

        <div className="detail-features">

          <div className="detail-feature">
            <span>01</span>
            <div>
              <strong>Adjustable Air Flow</strong>
              <p>
                Controlled airflow for consistent media fluidization.
              </p>
            </div>
          </div>

          <div className="detail-feature">
            <span>02</span>
            <div>
              <strong>Integrated Flow Meter</strong>
              <p>
                Visual airflow indication during operation.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>


    {/* ================= DETAIL 03 ================= */}

    <div className="product-detail-row">

      <div className="product-detail-image-wrap">

        <div className="product-detail-glow"></div>

        <div className="product-detail-frame">

          <div className="product-detail-grid"></div>

          <Image
            src="/assets/images/fluidized/lid-basket.jpg"
            alt="Fluidized Bath Lid and Parts Basket"
            width={900}
            height={900}
            className="product-detail-image"
          />

          <span className="image-index">
            03
          </span>

        </div>

      </div>


      <div className="product-detail-content">

        <span className="detail-number">
          03 / HARDWARE
        </span>

        <h3>
          LID &
          <br />
          PARTS
          <br />
          BASKET
        </h3>

        <p>
          The stainless-steel lid and removable parts basket provide
          a practical setup for handling components during thermal
          processing.
        </p>

        <div className="detail-features">

          <div className="detail-feature">
            <span>01</span>
            <div>
              <strong>Stainless Construction</strong>
              <p>
                Durable hardware designed for repeated operation.
              </p>
            </div>
          </div>

          <div className="detail-feature">
            <span>02</span>
            <div>
              <strong>Removable Parts Basket</strong>
              <p>
                Simplifies component placement and handling.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>

{/* =====================================================
    FLUIDIZED TEMPERATURE BATH — PRODUCT FEATURE
===================================================== */}

<section className="ftb-feature-section">

  <div className="ftb-feature-panel">

    {/* TECHNICAL GRID */}
    <div className="ftb-feature-grid"></div>

    {/* PRODUCT IMAGE RINGS */}
    <div className="ftb-feature-ring ftb-feature-ring-1"></div>
    <div className="ftb-feature-ring ftb-feature-ring-2"></div>
    <div className="ftb-feature-ring ftb-feature-ring-3"></div>


    {/* =================================================
        LEFT CONTENT
    ================================================= */}

    <div className="ftb-feature-content">

      <span className="ftb-feature-kicker">
        ATS / FTB SERIES
      </span>

      <h2>
        Fluidized
        <br />
        Temperature
        <br />
        Baths
      </h2>

      <p>
        Engineered thermal systems for controlled
        heating, cleaning, calibration, testing and
        specialized industrial processing.
      </p>

    </div>


    {/* =================================================
        CENTER PRODUCT
    ================================================= */}

    <div className="ftb-feature-product">

      <div className="ftb-feature-crosshair horizontal"></div>
      <div className="ftb-feature-crosshair vertical"></div>

      <Image
        src="/assets/images/fluidized/hero-machine.png"
        alt="Fluidized Temperature Bath"
        width={700}
        height={700}
        className="ftb-feature-machine"
      />

    </div>


    {/* =================================================
        RIGHT APPLICATION MATRIX
    ================================================= */}

    <div className="ftb-feature-applications">

      <span className="ftb-app-kicker">
        APPLICATION MATRIX
      </span>


      <div className="ftb-app-row">

        <span>01</span>

        <strong>
          Thermal Cleaning
        </strong>

      </div>


      <div className="ftb-app-row">

        <span>02</span>

        <strong>
          Temperature Calibration
        </strong>

      </div>


      <div className="ftb-app-row">

        <span>03</span>

        <strong>
          Heat Treatment
        </strong>

      </div>


      <div className="ftb-app-row">

        <span>04</span>

        <strong>
          Reactor Heating
        </strong>

      </div>

    </div>


    {/* =================================================
        BOTTOM META BAR
    ================================================= */}

    <div className="ftb-feature-footer">

      <span>
        ATS / FLUIDIZED TEMPERATURE BATH
      </span>

      <span>
        08 MODELS AVAILABLE →
      </span>

    </div>

  </div>

</section>



{/* =====================================================
    PROCESS / TECHNOLOGY
===================================================== */}

<section className="process-section" id="process">

  {/* Background technical grid */}
  <div className="process-grid"></div>


  {/* ================= HEADER ================= */}

  <div className="process-header">

    <div className="process-title">

      <span className="process-tag">
        02 / PROCESS TECHNOLOGY
      </span>

      <h2>
        SEE HOW
        <br />
        THE SYSTEM
        <br />
        WORKS.
      </h2>

    </div>


    <div className="process-intro">

      <span>
        FLUIDIZED TECHNOLOGY
      </span>

      <p>
        A controlled fluidized thermal environment transfers
        heat rapidly and uniformly, delivering precise and
        repeatable temperature performance.
      </p>

    </div>

  </div>


{/* ================= MEDIA AREA ================= */}

<div className="process-media">

  {/* =====================================================
      LARGE VIDEO
  ===================================================== */}

  <div className={`process-video ${videoPlaying ? "video-is-playing" : ""}`}>

    <video
      controls
      muted
      playsInline
      preload="metadata"
      className="process-video-player"
      onPlay={() => setVideoPlaying(true)}
    >
      <source
        src="/videos/MVI_6338.mp4"
        type="video/mp4"
      />
    </video>

    


    {/* =================================================
        VIDEO INTRO / POSTER
    ================================================= */}

    {!videoPlaying && (
      <div
        className="process-video-intro"
        onClick={(e) => {
          const video = e.currentTarget
            .closest(".process-video")
            ?.querySelector("video");

          if (video) {
            video.play();
          }
        }}
      >

        {/* Technical label */}

        <span className="video-intro-kicker">
          ATS / FLUIDIZED TECHNOLOGY
        </span>


        {/* Main heading */}

        <h3>
          HOW DOES A
          <br />
          FLUIDIZED BATH
          <br />
          <span>WORK?</span>
        </h3>


        {/* Play button */}

        <button
          type="button"
          className="video-intro-play"
          aria-label="Play fluidized temperature bath video"
        >
          <span className="video-play-icon">
            ▶
          </span>
        </button>


        {/* ATS Logo */}

        <div className="video-intro-logo">

          <Image
            src="/assets/images/ats-logo.png"
            alt="Accurate Thermal Systems"
            width={150}
            height={70}
          />

        </div>


        {/* Bottom metadata */}

        <div className="video-intro-footer">

          <span>
            ATS / FLUIDIZED TEMPERATURE BATH
          </span>

          <span>
            WATCH PROCESS ↓
          </span>

        </div>

      </div>
    )}


    {/* Video technical overlay */}

    <div className="video-corner video-corner-top">
      ATS / PROCESS DEMONSTRATION
    </div>

    <div className="video-corner video-corner-bottom">
      FLUIDIZED TEMPERATURE BATH
    </div>

  </div>


  {/* =====================================================
      SIDE INFORMATION
  ===================================================== */}

  <div className="process-side">

    <div className="process-side-image">

      <Image
        src="/assets/images/fluidized/2015-02-23 20.46.16.jpg"
        alt="Fluidized Temperature Bath"
        width={700}
        height={700}
      />

    </div>


    <div className="process-side-content">

      <span>
        ATS / TECHNOLOGY
      </span>

      <h3>
        HOW DOES A
        <br />
        FLUIDIZED BATH
        <br />
        WORK?
      </h3>

      <p>
        See fluidized temperature bath technology
        operating as part of a real ATS thermal system.
      </p>

    </div>

  </div>

</div>


{/* =====================================================
    SYSTEM CHARACTERISTICS
===================================================== */}

<div className="process-characteristics">

  <div className="characteristics-heading">

    <span>
      SYSTEM CHARACTERISTICS
    </span>

    <p>
      ENGINEERED FOR CONTROLLED THERMAL PERFORMANCE
    </p>

  </div>


  <div className="characteristics-grid">

    {/* 01 */}

    <div className="characteristic">

      <span className="characteristic-number">
        01
      </span>

      <div>

        <span className="characteristic-label">
          THERMAL PERFORMANCE
        </span>

        <h4>
          Rapid heat transfer
        </h4>

        <p>
          A fluidized thermal environment provides
          efficient and uniform heat transfer throughout
          the working zone.
        </p>

      </div>

    </div>


    {/* 02 */}

    <div className="characteristic">

      <span className="characteristic-number">
        02
      </span>

      <div>

        <span className="characteristic-label">
          TEMPERATURE CONTROL
        </span>

        <h4>
          Precise PID regulation
        </h4>

        <p>
          Digital closed-loop control maintains stable
          operating conditions with accurate temperature
          monitoring.
        </p>

      </div>

    </div>


    {/* 03 */}

    <div className="characteristic">

      <span className="characteristic-number">
        03
      </span>

      <div>

        <span className="characteristic-label">
          APPLICATION
        </span>

        <h4>
          Continuous operation
        </h4>

        <p>
          Designed for demanding industrial environments
          where repeatable thermal processing is required.
        </p>

      </div>

    </div>


    {/* 04 */}

    <div className="characteristic">

      <span className="characteristic-number">
        04
      </span>

      <div>

        <span className="characteristic-label">
          CONSTRUCTION
        </span>

        <h4>
          Industrial build
        </h4>

        <p>
          Robust construction and carefully selected
          components support dependable long-term use.
        </p>

      </div>

    </div>

  </div>


  {/* Characteristics footer */}

  <div className="characteristics-footer">

    <span>
      ATS / FLUIDIZED TEMPERATURE BATH
    </span>

    <span>
      PRECISION THERMAL SYSTEM
    </span>

  </div>


</div>


</section>
{/* =====================================================
    DOWNLOADS / PRODUCT DOCUMENTATION
===================================================== */}

<section className="ftb-downloads-section" id="downloads">

  <div className="ftb-downloads-grid"></div>

  <div className="ftb-downloads-container">

    {/* LEFT SIDE */}

    <div className="ftb-downloads-intro">

      <div className="ftb-downloads-tag">
        <span></span>
        06 / RESOURCES
      </div>

      <h2>
        TECHNICAL
        <br />
        <span>DOCUMENTATION.</span>
      </h2>

      <p>
        Access product brochures, technical documentation,
        safety information and application resources for
        ATS Fluidized Temperature Bath systems.
      </p>

      <div className="ftb-downloads-meta">
        <span>ATS / FLUIDIZED TEMPERATURE BATH</span>
        <span>DOCUMENT LIBRARY</span>
      </div>

    </div>


    {/* RIGHT SIDE */}

    <div className="ftb-downloads-list">

      {/* DOCUMENT 01 */}

      <a
        href="/downloads/FTBL12-FTBL26-FTBL12W-fluidized-bath-brochure.pdf"
        className="ftb-download-item"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div className="ftb-download-number">
          01
        </div>

        <div className="ftb-download-info">
          <span>PRODUCT BROCHURE</span>
          <h3>
            FTB L12 / FTB L26 / FTB L12W
          </h3>
          <p>
            Fluidized Temperature Bath Series
          </p>
        </div>

        <div className="ftb-download-action">
          <span>PDF</span>
          <strong>↓</strong>
        </div>

      </a>


      {/* DOCUMENT 02 */}

      <a
        href="/downloads/FTBLL27-FTBLL47-fluidized-bath-brochure.pdf"
        className="ftb-download-item"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div className="ftb-download-number">
          02
        </div>

        <div className="ftb-download-info">
          <span>PRODUCT BROCHURE</span>
          <h3>
            FTB LL27 / FTB LL47
          </h3>
          <p>
            Fluidized Temperature Bath Series
          </p>
        </div>

        <div className="ftb-download-action">
          <span>PDF</span>
          <strong>↓</strong>
        </div>

      </a>


      {/* DOCUMENT 03 */}

      <a
        href="/downloads/FTBSL15-FTBSL25-fluidized-bath-brochure.pdf"
        className="ftb-download-item"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div className="ftb-download-number">
          03
        </div>

        <div className="ftb-download-info">
          <span>PRODUCT BROCHURE</span>
          <h3>
            FTB SL15 / FTB SL25
          </h3>
          <p>
            Fluidized Temperature Bath Series
          </p>
        </div>

        <div className="ftb-download-action">
          <span>PDF</span>
          <strong>↓</strong>
        </div>

      </a>


      {/* DOCUMENT 04 */}

      <a
        href="/downloads/FTBSL6-fluidized-bath-brochure.pdf"
        className="ftb-download-item"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div className="ftb-download-number">
          04
        </div>

        <div className="ftb-download-info">
          <span>PRODUCT BROCHURE</span>
          <h3>
            FTB SL6
          </h3>
          <p>
            Fluidized Temperature Bath Documentation
          </p>
        </div>

        <div className="ftb-download-action">
          <span>PDF</span>
          <strong>↓</strong>
        </div>

      </a>


      {/* DOCUMENT 05 */}

      <a
        href="/downloads/fume-ventilation-diagrams.pdf"
        className="ftb-download-item"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div className="ftb-download-number">
          05
        </div>

        <div className="ftb-download-info">
          <span>TECHNICAL RESOURCE</span>
          <h3>
            Fume Ventilation Diagrams
          </h3>
          <p>
            Installation and ventilation reference
          </p>
        </div>

        <div className="ftb-download-action">
          <span>PDF</span>
          <strong>↓</strong>
        </div>

      </a>


      {/* SAFETY */}

      <div className="ftb-download-category">

        <span>
          SAFETY DATA
        </span>

        <div className="ftb-safety-links">

          <a href="/downloads/brown-aluminum-oxide.pdf">
            Brown Aluminum Oxide
            <strong>↓</strong>
          </a>

          <a href="/downloads/white-activated-alumina.pdf">
            White Activated Alumina
            <strong>↓</strong>
          </a>

        </div>

      </div>

    </div>

  </div>

</section>


{/* =====================================================
    FTBLL12 — PRODUCT SPECIFICATIONS
===================================================== */}

<section className="ftb-specifications-section" id="specifications">

  <div className="ftb-specifications-grid"></div>

  <div className="ftb-specifications-container">

    {/* ================= HEADER ================= */}

    <div className="ftb-specifications-header">

      <div>
        <span className="ftb-specifications-tag">
          05 / PRODUCT SPECIFICATIONS
        </span>

        <h2>
          FTBLL12
          <br />
          <span>SPECIFICATIONS.</span>
        </h2>
      </div>

      <div className="ftb-specifications-intro">

        <span>
          ACCUTHERMAL FLUIDIZED TEMPERATURE BATH
        </span>

        <p>
          Technical specifications for the FTBLL12 fluidized
          temperature bath, designed for extrusion tool cleaning
          and high-temperature thermal processing.
        </p>

      </div>

    </div>


    {/* ================= MODEL BAR ================= */}

    <div className="ftb-spec-model">

      <div>
        <span>MODEL</span>
        <strong>FTBLL12</strong>
      </div>

      <div>
        <span>CATALOG NUMBER</span>
        <strong>ATS1012</strong>
      </div>

      <div>
        <span>APPLICATION</span>
        <strong>EXTRUSION TOOL CLEANING</strong>
      </div>

      <div>
        <span>MAXIMUM TEMPERATURE</span>
        <strong>600°C</strong>
      </div>

    </div>


    {/* ================= SPECIFICATIONS TABLE ================= */}

    <div className="ftb-spec-table-wrap">

      <table className="ftb-spec-table">

        <thead>
          <tr>
            <th>SPECIFICATION</th>
            <th>FTBLL12</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Catalog Number</td>
            <td>ATS1012</td>
          </tr>

          <tr>
            <td>Recommended Applications</td>
            <td>Extrusion tool cleaning</td>
          </tr>

          <tr>
            <td>Temperature Stability at 500°C</td>
            <td>±1.0°C</td>
          </tr>

          <tr>
            <td>Calibrated Accuracy at 500°C</td>
            <td>±5.0°C</td>
          </tr>

          <tr>
            <td>Radial Temperature Uniformity at 500°C</td>
            <td>3.0</td>
          </tr>

          <tr>
            <td>Heat Up Time: Ambient to 600°C</td>
            <td>150 minutes</td>
          </tr>

          <tr>
            <td>Power Consumption</td>
            <td>4.5 kW — 240V, 1 phase</td>
          </tr>

          <tr>
            <td>Working Diameter</td>
            <td>9.5 inches</td>
          </tr>

          <tr>
            <td>Working Depth</td>
            <td>12 inches</td>
          </tr>

          <tr>
            <td>Working Area in Basket</td>
            <td>8.4 × 12 inches</td>
          </tr>

          <tr>
            <td>Maximum Load Capacity</td>
            <td>25 lbs</td>
          </tr>

          <tr>
            <td>Recovery from Quench</td>
            <td>Good</td>
          </tr>

          <tr>
            <td>Air Pressure Required</td>
            <td>50 PSI</td>
          </tr>

          <tr>
            <td>Maximum Air Consumption</td>
            <td>3.6 SCFM</td>
          </tr>

          <tr>
            <td>Total Unit Weight</td>
            <td>115 lbs — without aluminum oxide</td>
          </tr>

          <tr>
            <td>Aluminum Oxide Required & Included</td>
            <td>85 / 100 lbs</td>
          </tr>

          <tr>
            <td>Overall Footprint — H × W × D</td>
            <td>33 × 25 × 23 inches</td>
          </tr>

          <tr>
            <td>Warranty</td>
            <td>1 Year</td>
          </tr>

        </tbody>

      </table>

    </div>


    {/* ================= TEMPERATURE NOTE ================= */}

    <div className="ftb-spec-note">

      <div className="ftb-spec-note-icon">
        °C
      </div>

      <div>

        <span>
          TEMPERATURE CONVERSION
        </span>

        <p>
          To convert to degrees Fahrenheit, multiply by 1.8,
          then add 32. For specifications, multiply by 1.8.
        </p>

      </div>

    </div>


    {/* ================= KEY SPECIFICATIONS ================= */}

    <div className="ftb-key-specs">

      <div className="ftb-key-spec">

        <span>01</span>

        <strong>
          ±1.0°C
        </strong>

        <p>
          Temperature stability at 500°C
        </p>

      </div>


      <div className="ftb-key-spec">

        <span>02</span>

        <strong>
          600°C
        </strong>

        <p>
          Maximum operating temperature
        </p>

      </div>


      <div className="ftb-key-spec">

        <span>03</span>

        <strong>
          150 MIN
        </strong>

        <p>
          Ambient to 600°C heat-up time
        </p>

      </div>


      <div className="ftb-key-spec">

        <span>04</span>

        <strong>
          25 LBS
        </strong>

        <p>
          Maximum load capacity
        </p>

      </div>

    </div>


    {/* ================= ACCESSORIES ================= */}

    <div className="ftb-accessories">

      <div className="ftb-accessories-header">

        <span>
          COMPATIBLE ACCESSORIES
        </span>

        <h3>
          FTBLL12
          <br />
          ACCESSORIES.
        </h3>

      </div>


      <div className="ftb-accessories-list">

        <div className="ftb-accessory">

          <span>ATS1121</span>

          <div>
            <h4>Standard Parts Basket</h4>

            <p>
              Standard parts basket for FTBLL12.
              Size 8.4″ diameter × 12″ depth with
              25 pound capacity.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1056</span>

          <div>
            <h4>Small Parts Basket</h4>

            <p>
              Small-parts basket with 3/16″ opening,
              6 5/8″ diameter × 6 5/8″ deep.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1057</span>

          <div>
            <h4>Tiered Basket</h4>

            <p>
              Two-tier basket system for flexibility
              in parts placement and cleaning efficiency.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1020<br />ATS1087<br />ATS1031</span>

          <div>
            <h4>Retort Lid</h4>

            <p>
              Retort lid compatible with the FTBLL
              fluidized temperature bath series.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1026</span>

          <div>
            <h4>Air Filter / Regulator</h4>

            <p>
              Clean and dry air supply equipment
              required for fluidized bath operation.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1033</span>

          <div>
            <h4>Extraction Fan</h4>

            <p>
              4″ OD inlet and outlet, 250 CFM,
              1/2 HP, 120/230 volt extraction fan.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1032</span>

          <div>
            <h4>Cyclone</h4>

            <p>
              Collects sand and heavy material from
              the exhaust air.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1041</span>

          <div>
            <h4>Cooling Stand & Sieve</h4>

            <p>
              Safely cool hot parts in the basket,
              then sieve and reuse aluminum oxide media.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1100</span>

          <div>
            <h4>Activated White Alumina</h4>

            <p>
              Activated white alumina, 230 mesh,
              supplied in a 55 pound pail.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1027</span>

          <div>
            <h4>Aluminum Oxide</h4>

            <p>
              Aluminum oxide supplied in a
              100 pound pail.
            </p>
          </div>

        </div>


        <div className="ftb-accessory">

          <span>ATS1028</span>

          <div>
            <h4>Aluminum Oxide</h4>

            <p>
              Aluminum oxide supplied in a
              400 pound drum.
            </p>
          </div>

        </div>


      </div>

    </div>

  </div>

</section>


</>
  );
}