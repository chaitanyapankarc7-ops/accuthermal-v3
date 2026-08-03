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
{/* ================= PRODUCT OVERVIEW ================= */}

<section className="overview-section" id="overview">

    <div className="overview-grid"></div>

    <div className="overview-container">

        {/* LEFT CONTENT */}

        <div className="overview-left">

            <span className="overview-tag">
                01 / PRODUCT OVERVIEW
            </span>

            <h2>
                ENGINEERED
                <br />
                FOR
                <br />
                INDUSTRIAL
                <br />
                PRECISION.
            </h2>

            <p className="overview-description">

                Accurate Thermal Systems Fluidized Temperature Baths are
                engineered to deliver rapid, highly uniform dry heating using
                fluidized aluminum oxide media. Designed for demanding
                laboratory and industrial environments, the system combines
                precision PID temperature control, stainless steel
                construction, and exceptional thermal stability for reliable
                and repeatable process performance.

            </p>

            <div className="overview-highlights">

                <div className="highlight-card">

                    <div className="highlight-number">
                        01
                    </div>

                    <div>

                        <h4>
                            Dry Heating Technology
                        </h4>

                        <p>
                            Cleaner and safer operation without molten salts
                            while maintaining excellent thermal efficiency.
                        </p>

                    </div>

                </div>


                <div className="highlight-card">

                    <div className="highlight-number">
                        02
                    </div>

                    <div>

                        <h4>
                            Fluidized Aluminum Oxide Media
                        </h4>

                        <p>
                            Provides rapid and extremely uniform heat transfer
                            across the entire working zone.
                        </p>

                    </div>

                </div>


                <div className="highlight-card">

                    <div className="highlight-number">
                        03
                    </div>

                    <div>

                        <h4>
                            Precision PID Control
                        </h4>

                        <p>
                            Advanced digital closed-loop control maintains
                            accurate temperatures with excellent repeatability.
                        </p>

                    </div>

                </div>


                <div className="highlight-card">

                    <div className="highlight-number">
                        04
                    </div>

                    <div>

                        <h4>
                            Industrial Stainless Steel Build
                        </h4>

                        <p>
                            Rugged construction designed for continuous
                            laboratory and industrial operation.
                        </p>

                    </div>

                </div>

            </div>

        </div>

        

        {/* ================= RIGHT BLUEPRINT ================= */}

<div className="overview-right">

    <div className="blueprint-frame">

        {/* Background Grid */}

        <div className="blueprint-bg"></div>

        {/* MACHINE */}

        <Image
            src="/assets/images/fluidized/temp.png"
            alt="ATS Fluidized Temperature Bath"
            width={700}
            height={700}
            className="overview-machine"
            priority
        />

        {/* ================================================= */}
        {/* PID CONTROLLER */}
        {/* ================================================= */}

        

        {/* ================================================= */}
        {/* STAINLESS BODY */}
        {/* ================================================= */}

        <div className="blueprint-label body">

            <div className="bp-dot"></div>

            <div className="bp-line"></div>

            <div className="bp-card">

                <span>ATS-02</span>

                <h4>Stainless Steel Body</h4>

                <p>
                    Heavy-duty corrosion resistant construction designed
                    for continuous industrial use.
                </p>

            </div>

        </div>

        {/* ================================================= */}
        {/* CHAMBER */}
        {/* ================================================= */}

        <div className="blueprint-label chamber">

            <div className="bp-dot"></div>

            <div className="bp-line"></div>

            <div className="bp-card">

                <span>ATS-03</span>

                <h4>Fluidized Chamber</h4>

                <p>
                    Provides rapid and highly uniform heat transfer
                    using fluidized aluminum oxide media.
                </p>

            </div>

        </div>

        {/* ================================================= */}
        {/* AIR FLOW */}
        {/* ================================================= */}

        <div className="blueprint-label airflow">

            <div className="bp-dot"></div>

            <div className="bp-line"></div>

            <div className="bp-card">

                <span>ATS-04</span>

                <h4>Precision Air Flow</h4>

                <p>
                    Engineered airflow system maintains consistent
                    media fluidization for optimum performance.
                </p>

            </div>

        </div>

    </div>

</div>

</div>

{/* ================= BOTTOM STRIP ================= */}

<div className="overview-bottom">

    <div className="bottom-item">

        <h3>Rapid Heat Transfer</h3>

        <p>
            Fluidized media delivers faster thermal response than
            conventional dry heating systems.
        </p>

    </div>

    <div className="bottom-item">

        <h3>Uniform Temperature</h3>

        <p>
            Outstanding temperature consistency across the complete
            working area.
        </p>

    </div>

    <div className="bottom-item">

        <h3>Industrial Reliability</h3>

        <p>
            Designed for continuous laboratory and production
            environments.
        </p>

    </div>

    <div className="bottom-item">

        <h3>Safer Dry Heating</h3>

        <p>
            Eliminates molten salts while providing a cleaner and
            safer operating process.
        </p>

    </div>

</div>

</section>
        




{/* ================= VIDEO ================= */}

<section className="video-section">

<div className="video-header">

<span>
02 / PROCESS IN ACTION
</span>

<h2>

SEE THE
<br/>

SYSTEM
<br/>

IN ACTION.

</h2>

<p>

Watch how ATS Fluidized Temperature Baths deliver
rapid heat transfer, precise temperature control,
and industrial reliability.

</p>

</div>


<div className="video-wrapper">

<video

autoPlay

muted

loop

playsInline

className="ats-video"

>

<source
src="/assets/videos/fluidized-demo.mp4"
type="video/mp4"
/>

</video>

<div className="video-overlay"></div>

</div>

<div className="video-features">

<div>

<h3>600°C</h3>

<span>MAXIMUM TEMPERATURE</span>

</div>

<div>

<h3>FAST</h3>

<span>HEAT TRANSFER</span>

</div>

<div>

<h3>PID</h3>

<span>DIGITAL CONTROL</span>

</div>

<div>

<h3>USA</h3>

<span>ENGINEERED</span>

</div>

</div>

{/* ================= BOTTOM FEATURES ================= */}

<div className="overview-bottom">

    <div className="bottom-card">

        <div className="bottom-icon">
            01
        </div>

        <h3>Rapid Heat Transfer</h3>

        <p>
            Fluidized aluminum oxide media delivers significantly faster
            and more uniform heat transfer than conventional dry heating
            methods.
        </p>

    </div>


    <div className="bottom-card">

        <div className="bottom-icon">
            02
        </div>

        <h3>Precision Temperature Control</h3>

        <p>
            Advanced PID regulation continuously maintains stable process
            temperatures with outstanding repeatability.
        </p>

    </div>


    <div className="bottom-card">

        <div className="bottom-icon">
            03
        </div>

        <h3>Industrial Grade Construction</h3>

        <p>
            Built using premium stainless steel and high-quality
            industrial components for continuous operation.
        </p>

    </div>


    <div className="bottom-card">

        <div className="bottom-icon">
            04
        </div>

        <h3>Cleaner Dry Heating</h3>

        <p>
            Eliminates the handling of molten salts while providing a
            safer, cleaner and more efficient heating process.
        </p>

    </div>

</div>

</section>

</>
  );
}