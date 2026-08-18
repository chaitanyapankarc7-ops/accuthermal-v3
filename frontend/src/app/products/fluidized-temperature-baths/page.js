"use client";

import "./page.css";
import Navbar from "../../component/Navbar";
import Image from "next/image";

export default function FluidizedTemperatureBaths() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-grid"></div>

        <div className="hero-container">

          {/* LEFT */}

          <div className="hero-left">

            <span className="hero-tag">
              ACCURATE THERMAL SYSTEMS
            </span>

            <h1>
              FLUIDIZED
              <br />
              TEMPERATURE
              <br />
              <span>BATHS</span>
            </h1>

            <p>
              Precision engineered thermal processing equipment delivering
              rapid heat transfer, exceptional temperature uniformity and
              industrial reliability.
            </p>

            <div className="hero-buttons">

              <a href="#overview" className="btn-primary">
                Explore Models
              </a>

              <a href="#contact" className="btn-secondary">
                Request Quote
              </a>

            </div>

            <div className="hero-stats">

              <div className="stat">
                <h2>600°C</h2>
                <span>Maximum Temperature</span>
              </div>

              <div className="stat">
                <h2>8</h2>
                <span>Available Models</span>
              </div>

              <div className="stat">
                <h2>±1°C</h2>
                <span>Temperature Stability</span>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="hero-right">

            <div className="glow"></div>

            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>

            <div className="floating-card card1">
              PID CONTROL
            </div>

            <div className="floating-card card2">
              STAINLESS STEEL
            </div>

            <div className="floating-card card3">
              MADE IN USA
            </div>

            <Image
              src="/assets/images/fluidized/hero-machine.png"
              alt="Fluidized Temperature Bath"
              width={650}
              height={650}
              className="hero-machine"
              priority
            />

          </div>

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

    {/* LARGE VIDEO */}

    <div className="process-video">

<video
  controls
  muted
  playsInline
  preload="metadata"
  className="process-video-player"
>
  <source
    src="/videos/MVI_6338.mp4"
    type="video/mp4"
  />
</video>


      {/* Video technical overlay */}

      <div className="video-corner video-corner-top">
        ATS / PROCESS DEMONSTRATION
      </div>

      <div className="video-corner video-corner-bottom">
        FLUIDIZED TEMPERATURE BATH
      </div>

    </div>


    {/* ================= SIDE INFORMATION ================= */}

    <div className="process-side">

      <div className="process-side-image">

        <Image
          src="/assets/images/fluidized/hero-machine.png"
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

</>
  );
}