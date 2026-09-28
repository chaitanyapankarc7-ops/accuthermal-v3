"use client";
import "./page.css";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../../components/Navbar";

export default function HEPAAirFiltration() {
  const [hepaVideoStarted, setHepaVideoStarted] = useState(false);

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
              Accurate Thermal Systems&apos; HEPA Air Filtration
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
                src="/assets/images/heap_air/20191105_104207.jpg"
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
    DIGITAL CONTROL / MONITORING
===================================================== */}

<section
  className="hepa-control-section"
  id="digital-control"
>

  {/* TECHNICAL GRID */}
  <div className="hepa-control-grid"></div>

  {/* GLOW */}
  <div className="hepa-control-glow"></div>


  <div className="hepa-control-container">


    {/* =================================================
        LEFT — CONTROL PANEL VISUAL
    ================================================= */}

    <div className="hepa-control-visual">

      <div className="hepa-control-frame">


        {/* =================================================
            TOP TECHNICAL BAR
        ================================================= */}

        <div className="hepa-control-topbar">

          <span>
            ATS / HEPA FILTRATION
          </span>

          <span>
            CONTROL INTERFACE
          </span>

        </div>


        {/* =================================================
            IMAGE AREA
        ================================================= */}

        <div className="hepa-control-image">

          <img
            src="/assets/images/heap_air/digital-control-panel.jpg"
            alt="Digital control panel of Accurate Thermal Systems HEPA filtration system"
          />


          {/* =================================================
              IMAGE OVERLAY
          ================================================= */}

          <div className="hepa-control-overlay"></div>


          {/* =================================================
              SCANNING LINE
          ================================================= */}

          <div className="hepa-control-scan"></div>


          {/* =================================================
              CALLOUT 01 — DIGITAL DISPLAY
          ================================================= */}

          <div className="hepa-control-point hepa-point-1">

            <span className="hepa-point-dot"></span>

            <div className="hepa-point-line"></div>

            <div className="hepa-point-label">

              <small>
                01
              </small>

              <strong>
                DIGITAL DISPLAY
              </strong>

            </div>

          </div>


          {/* =================================================
              CALLOUT 02 — CONTROL INPUT
          ================================================= */}

          <div className="hepa-control-point hepa-point-2">

            <span className="hepa-point-dot"></span>

            <div className="hepa-point-line"></div>

            <div className="hepa-point-label">

              <small>
                02
              </small>

              <strong>
                CONTROL INPUT
              </strong>

            </div>

          </div>


          {/* =================================================
              IMAGE CORNER LABEL
          ================================================= */}

          <div className="hepa-control-corner">

            <span>
              ATS / ECU
            </span>

            <strong>
              DIGITAL CONTROL
            </strong>

          </div>

        </div>


        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="hepa-control-bottom">

          <span>
            SYSTEM INTERFACE
          </span>

          <span>
            DIGITAL MONITORING
          </span>

          <span>
            ATS HEPA
          </span>

        </div>


      </div>

    </div>



    {/* =================================================
        RIGHT — CONTENT
    ================================================= */}

    <div className="hepa-control-content">

      <div className="hepa-control-kicker">

        <span></span>

        04 / CONTROL SYSTEM

      </div>


      <h2>
        CONTROL
        <br />
        <span>AT A GLANCE.</span>
      </h2>


      <p className="hepa-control-description">

        A dedicated digital control interface provides
        a clear view of the filtration system and keeps
        essential operating information accessible from
        the front of the unit.

      </p>


      {/* FEATURE LIST */}

      <div className="hepa-control-features">


        {/* FEATURE 01 */}

        <div className="hepa-control-feature">

          <div className="hepa-feature-index">
            01
          </div>

          <div className="hepa-feature-content">

            <h3>
              Digital Display
            </h3>

            <p>
              Clear digital information presented directly
              through the integrated front-panel interface.
            </p>

          </div>

          <div className="hepa-feature-arrow">
            ↗
          </div>

        </div>


        {/* FEATURE 02 */}

        <div className="hepa-control-feature">

          <div className="hepa-feature-index">
            02
          </div>

          <div className="hepa-feature-content">

            <h3>
              System Controls
            </h3>

            <p>
              Dedicated controls provide direct access to
              the filtration system interface.
            </p>

          </div>

          <div className="hepa-feature-arrow">
            ↗
          </div>

        </div>


        {/* FEATURE 03 */}

        <div className="hepa-control-feature">

          <div className="hepa-feature-index">
            03
          </div>

          <div className="hepa-feature-content">

            <h3>
              Status Indication
            </h3>

            <p>
              Integrated visual indicators provide immediate
              feedback from the control panel.
            </p>

          </div>

          <div className="hepa-feature-arrow">
            ↗
          </div>

        </div>


      </div>


      {/* TECHNICAL FOOTER */}

      <div className="hepa-control-meta">

        <div>
          <span>APPLICATION</span>
          <strong>HEPA AIR FILTRATION</strong>
        </div>

        <div>
          <span>INTERFACE</span>
          <strong>DIGITAL CONTROL</strong>
        </div>

        <div>
          <span>DESIGN</span>
          <strong>FRONT PANEL</strong>
        </div>

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
      


    

  

    <>
      
      <main className="hepa-page">

        {/* ALL YOUR SECTIONS GO HERE */}


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


            {/* =================================================
                MEDIA AREA
            ================================================= */}

            <div className="hepa-process-media">


              {/* =================================================
                  VIDEO
              ================================================= */}

              <div
                className={`hepa-video-wrapper ${
                  hepaVideoStarted
                    ? "hepa-video-playing"
                    : ""
                }`}
              >

                <video
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  className="hepa-video"

                  onPlay={() => {
                    setHepaVideoStarted(true);
                  }}
                >

                  <source
                    src="/videos/ECU1 HEPA Air Filtration System.mp4"
                    type="video/mp4"
                  />

                  Your browser does not support the video element.

                </video>


                {/* =================================================
                    CUSTOM WALLPAPER
                ================================================= */}

                {!hepaVideoStarted && (

                  <div
                    className="hepa-video-overlay"

                    onClick={(e) => {

                      const video =
                        e.currentTarget
                          .closest(".hepa-video-wrapper")
                          ?.querySelector("video");

                      if (video) {
                        video.play();
                      }

                    }}
                  >

                    <div className="hepa-overlay-grid"></div>

                    <div className="hepa-overlay-rings"></div>


                    {/* TOP LABEL */}

                    <span className="hepa-overlay-kicker">
                      ATS / HEPA FILTRATION TECHNOLOGY
                    </span>


                    {/* TITLE */}

                    <h3 className="hepa-overlay-title">
                      HOW DOES A
                      <br />
                      HEPA FILTRATION
                      <br />
                      <span>SYSTEM WORK?</span>
                    </h3>


                    {/* PLAY BUTTON */}

                    <button
                      type="button"
                      className="hepa-overlay-play"
                      aria-label="Play HEPA filtration video"

                      onClick={(e) => {

                        e.stopPropagation();

                        const video =
                          e.currentTarget
                            .closest(".hepa-video-wrapper")
                            ?.querySelector("video");

                        if (video) {
                          video.play();
                        }

                      }}
                    >
                      <span>▶</span>
                    </button>


                    {/* LOGO */}

                    <div className="hepa-overlay-logo">

                      <img
                        src="/assets/images/ats-logo.png"
                        alt="Accurate Thermal Systems"
                      />

                    </div>


                    {/* FOOTER */}

                    <div className="hepa-overlay-footer">

                      <span>
                        ATS / HEPA AIR FILTRATION
                      </span>

                      <span>
                        WATCH PROCESS ↓
                      </span>

                    </div>

                  </div>

                )}


                {/* VIDEO LABEL */}

                
              </div>


              {/* =================================================
                  FILTRATION STAGES
              ================================================= */}

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


      </main>
    </>

  {/* =====================================================
    ECU1 / ECU2 — MODEL COMPARISON
===================================================== */}

<section className="hepa-comparison-section">

  <div className="hepa-comparison-container">

    {/* HEADER */}
    <div className="hepa-comparison-header">

      <div>
        <span className="hepa-comparison-tag">
          06 / MODEL COMPARISON
        </span>

        <h2>
          COMPARE
          <br />
          <span>THE SYSTEMS.</span>
        </h2>
      </div>

  

    </div>


    {/* COMPARISON TABLE */}
    <div className="hepa-comparison-table-wrapper">

      <table className="hepa-comparison-table">

        <thead>
          <tr>

            <th>
              SPECIFICATION
            </th>

            <th className="hepa-model-column">

              <span className="hepa-model-number">
                ECU1
              </span>

              <span className="hepa-model-subtitle">
                STANDARD CAPACITY
              </span>

            </th>

            <th className="hepa-model-column">

              <span className="hepa-model-number">
                ECU2
              </span>

              <span className="hepa-model-subtitle">
                HIGH CAPACITY
              </span>

            </th>

          </tr>
        </thead>


        <tbody>

          <tr>
            <th>Inlet / Outlet Plenum</th>
            <td>6″ OD inlet / 4″ OD outlet</td>
            <td>6″ OD inlet / 6″ OD outlet</td>
          </tr>

          <tr>
            <th>Maximum Air Flow</th>
            <td>
              <strong>210 CFM</strong> @ 19 WC
            </td>
            <td>
              <strong>750 CFM</strong> @ 19 WC
            </td>
          </tr>

          <tr>
            <th>Applications</th>
            <td>
              Light to moderate-duty capture of
              smoke, fumes, odor &amp; VOC removal
            </td>
            <td>
              Moderate to heavy-duty capture of
              smoke, fumes, odor &amp; VOC removal
            </td>
          </tr>

          <tr>
            <th>Filter Configuration</th>
            <td>3-stage filtration</td>
            <td>3-stage filtration</td>
          </tr>

          <tr>
            <th>Filter Access</th>
            <td>Easy front door access</td>
            <td>Easy front door access</td>
          </tr>

          <tr>
            <th>Filter Status Display</th>
            <td>
              Individual electronic filter monitoring
              with display &amp; LED alerts
            </td>
            <td>
              Individual electronic filter monitoring
              with display &amp; LED alerts
            </td>
          </tr>

          <tr>
            <th>1st Stage Filter</th>
            <td>
              Deep-pleat pre-filter,
              99% efficient @ 1 micron
            </td>
            <td>
              Deep-pleat pre-filter,
              99% efficient @ 1 micron
            </td>
          </tr>

          <tr>
            <th>2nd Stage Filter</th>
            <td>
              HEPA filter,
              99.97% efficient @ 0.3 micron
            </td>
            <td>
              HEPA filter,
              99.97% efficient @ 0.3 micron
            </td>
          </tr>

          <tr>
            <th>3rd Stage Filter</th>
            <td>
              2 modules × 30 lbs activated carbon
            </td>
            <td>
              2 modules × 40 lbs activated carbon
            </td>
          </tr>

          <tr>
            <th>Configuration</th>
            <td>
              Mobile with 4 castor wheels,
              2 locking
            </td>
            <td>
              Mobile with 4 castor wheels,
              2 locking
            </td>
          </tr>

          <tr>
            <th>Blower Capacity</th>
            <td>Integrated up to 210 CFM</td>
            <td>Integrated up to 750 CFM</td>
          </tr>

          <tr>
            <th>Noise Level</th>
            <td>59 dBA</td>
            <td>60 dBA</td>
          </tr>

          <tr>
            <th>Remote Interface</th>
            <td>
              Integrated 24 VDC remote start/stop
            </td>
            <td>
              Integrated 24 VDC remote start/stop
            </td>
          </tr>

          <tr>
            <th>Gas / VOC Sensor</th>
            <td>
              Calibrated at 600 PPM ethanol
            </td>
            <td>
              Calibrated at 600 PPM ethanol
            </td>
          </tr>

          <tr>
            <th>Dimensions</th>
            <td>
              23″ W × 23″ D × 35″ H
            </td>
            <td>
              24″ W × 35″ D × 52″ H
            </td>
          </tr>

          <tr>
            <th>Weight</th>
            <td>
              200 lbs. with filters installed
            </td>
            <td>
              490 lbs. with filters installed
            </td>
          </tr>

          <tr>
            <th>Catalog Number</th>
            <td>
              <strong>ATS1119</strong>
            </td>
            <td>
              <strong>ATS1126</strong>
            </td>
          </tr>

        </tbody>

      </table>

    </div>


    {/* BOTTOM NOTE */}
    <div className="hepa-comparison-footer">

      <span>
        ATS / HEPA AIR FILTRATION
      </span>

      <span>
        ECU1 — ATS1119
      </span>

      <span>
        ECU2 — ATS1126
      </span>

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

    {/* ================= LEFT CONTENT ================= */}

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


    {/* ================= DOCUMENT LIST ================= */}

    <div className="hepa-download-list">


      {/* =================================================
          ECU1 BROCHURE
      ================================================= */}

      <a
        href="/downloads/ECU1-brochure-V1-11-2019.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hepa-download-item"
      >

        <span>
          01
        </span>

        <div>

          <small>
            PRODUCT BROCHURE
          </small>

          <h3>
            ECU1 HEPA FILTRATION SYSTEM
          </h3>

        </div>

        <strong>
          PDF ↓
        </strong>

      </a>


      {/* =================================================
          ECU1 LAYOUT
      ================================================= */}

      <a
        href="/downloads/diagram-2-system-layout-LL12-LL26-ECU1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hepa-download-item"
      >

        <span>
          02
        </span>

        <div>

          <small>
            SYSTEM LAYOUT
          </small>

          <h3>
            ECU1 HEPA FILTRATION SYSTEM LAYOUT
          </h3>

        </div>

        <strong>
          PDF ↓
        </strong>

      </a>


      {/* =================================================
          ECU2 BROCHURE
      ================================================= */}

      <a
        href="/downloads/ecu2-brochure-v2-11-2023.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hepa-download-item"
      >

        <span>
          03
        </span>

        <div>

          <small>
            PRODUCT BROCHURE
          </small>

          <h3>
            ECU2 HEPA FILTRATION SYSTEM
          </h3>

        </div>

        <strong>
          PDF ↓
        </strong>

      </a>


      {/* =================================================
          ECU2 LAYOUT
      ================================================= */}

      <a
        href="/downloads/ECU2-layout.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hepa-download-item"
      >

        <span>
          04
        </span>

        <div>

          <small>
            SYSTEM LAYOUT
          </small>

          <h3>
            ECU2 HEPA FILTRATION SYSTEM LAYOUT
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