"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";


const modelData = [
  { num: "01", name: "FTBLL12", desc: "Fluidized temperature bath for controlled thermal applications." },
  { num: "02", name: "FTBLL12W", desc: "Explore applications, technical data and product documentation." },
  { num: "03", name: "FTBLL26", desc: "Fluidized thermal platform for demanding process applications." },
  { num: "04", name: "FTBLL27", desc: "Explore system information and application guidance." },
  { num: "05", name: "FTBLL47", desc: "Fluidized temperature bath within the ATS FTB product family." },
  { num: "06", name: "FTBSL6", desc: "Explore product details, applications and technical resources." },
  { num: "07", name: "FTBSL15", desc: "ATS fluidized temperature bath for thermal processing workflows." },
  { num: "08", name: "FTBSL25", desc: "Explore engineering information and application suitability." },
];

const selectorData = [
  { num: "01", title: "Thermal Cleaning", desc: "Thermal removal of organic material from tooling, machinery and industrial components." },
  { num: "02", title: "Nitinol Processing", desc: "Controlled heating for shape setting, annealing and specialized material processing." },
  { num: "03", title: "Temperature Calibration", desc: "Stable thermal environments for temperature sensors and instrumentation." },
  { num: "04", title: "Heat Treatment", desc: "Controlled thermal processing for materials, components and research workflows." },
  { num: "05", title: "Reactor Heating", desc: "Thermal support for laboratory and process reactor applications." },
  { num: "06", title: "Research & Testing", desc: "Flexible thermal platforms for development, testing and specialized laboratory work." },
];

export default function Products() {
  const [progressWidth, setProgressWidth] = useState("0%");
  

  // Scroll progress handler
  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (h > 0) {
        setProgressWidth(`${(window.scrollY / h) * 100}%`);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver reveals
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((x) => io.observe(x));

    return () => {
      elements.forEach((x) => io.unobserve(x));
    };
  }, []);

  // Card 3D tilt handler
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 3}deg) rotateY(${x * 3}deg) translateY(-7px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <>
      <div className="progress" style={{ width: progressWidth }}></div>


      {/* NAV */}
      <Navbar activePage="products" />

      {/* HERO */}
      <header className="hero">
        <div className="wrap hero-inner">
          <div>
            <div className="eyebrow mono">ATS / PRODUCT SYSTEMS</div>
            <h1>
              ENGINEERED
              <br />
              AROUND THE
              <br />
              <span>PROCESS.</span>
            </h1>
            <p>
              Explore thermal systems designed for controlled heating, temperature calibration, thermal
              cleaning, heat treatment, testing, research and demanding industrial applications.
            </p>
            <div className="hero-actions">
              <a href="#fluidized" className="btn primary">
                Explore Systems →
              </a>
              <Link href="/#contact" className="btn">
                Talk to an Engineer
              </Link>
            </div>
          </div>
          <div className="blueprint">
            <div className="blueprint-frame"></div>
            <div className="orbit"></div>
            <div className="machine"></div>
            <span className="measure one">PRODUCT FAMILY / FTB</span>
            <span className="measure two">THERMAL SYSTEM</span>
            <span className="measure three">ATS ENGINEERED PLATFORM</span>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="intro">
        <div className="wrap intro-grid reveal">
          <div>
            <div className="eyebrow mono">01 · Product portfolio</div>
            <h2>Start with what the process needs.</h2>
          </div>
          <div className="intro-copy">
            Accurate Thermal Systems develops equipment for applications where temperature stability,
            uniform heating and dependable thermal performance matter. The product experience is
            organized around two primary system families: fluidized temperature baths for thermal
            processing, cleaning and calibration applications, and dry block equipment for temperature
            calibration workflows.
          </div>
        </div>
      </section>

      {/* FLUIDIZED BATH */}
      <section className="family" id="fluidized">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow mono">02 · Fluidized temperature baths</div>
              <h2>A different way to move heat.</h2>
            </div>
            <p>
              Fluidized temperature baths use heated media and controlled airflow to create a dry
              thermal environment around immersed components. The technology supports applications
              including thermal cleaning, heat treatment, calibration, testing, reactor heating and
              specialized material processing.
            </p>
          </div>

          <div className="family-catalog reveal">
            {/* LEFT TITLE */}
            <div className="catalog-heading">
              <span className="mono catalog-series">ATS / FTB SERIES</span>
              <h3>
                Fluidized
                <br />
                Temperature Baths
              </h3>
              <p>
                Engineered thermal systems for controlled heating, cleaning, calibration, testing and
                specialized industrial processing.
              </p>
            </div>

            {/* CENTER PRODUCT */}
            <div className="catalog-machine">
              <div className="catalog-orbit orbit-one"></div>
              <div className="catalog-orbit orbit-two"></div>
              <img
                src="/assets/images/products/fluidizedbath.png"
                alt="Accurate Thermal Systems Fluidized Temperature Bath"
                className="catalog-product"
              />
              <span className="catalog-line line-one"></span>
              <span className="catalog-line line-two"></span>
            </div>

            {/* RIGHT APPLICATIONS */}
            <div className="catalog-apps">
              <span className="mono catalog-label">APPLICATION MATRIX</span>
              <div className="catalog-app">
                <span>01</span>
                <b>Thermal Cleaning</b>
              </div>
              <div className="catalog-app">
                <span>02</span>
                <b>Temperature Calibration</b>
              </div>
              <div className="catalog-app">
                <span>03</span>
                <b>Heat Treatment</b>
              </div>
              <div className="catalog-app">
                <span>04</span>
                <b>Reactor Heating</b>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="catalog-footer mono">
              <span>ATS / FLUIDIZED TEMPERATURE BATH</span>
              <span>08 MODELS AVAILABLE →</span>
            </div>
          </div>
        </div>
      </section>

      {/* THERMCAL */}
      <section className="family thermcal-family" id="thermcal">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow mono">04 · Dry block temperature calibrators</div>
              <h2>Precision temperature calibration.</h2>
            </div>
            <p>
              ThermCal dry block calibrators provide a controlled temperature source for calibration
              workflows involving temperature sensors and related instrumentation.
            </p>
          </div>

          <div className="family-catalog thermcal-catalog reveal">
            {/* LEFT TITLE */}
            <div className="catalog-heading">
              <span className="mono catalog-series">ATS / THERMCAL SERIES</span>
              <h3>
                ThermCal
                <br />
                Dry Block
                <br />
                Calibrators
              </h3>
              <p>
                Compact temperature calibration systems designed for controlled thermal performance in
                laboratory, field and industrial calibration workflows.
              </p>
            </div>

            {/* CENTER PRODUCT */}
            <div className="catalog-machine thermcal-machine">
              <div className="catalog-orbit orbit-one"></div>
              <div className="catalog-orbit orbit-two"></div>
              <img
                src="/assets/images/products/ats-thermcal400.png"
                alt="Accurate Thermal Systems ThermCal 400 Dry Block Temperature Calibrator"
                className="catalog-product thermcal-catalog-product"
              />
              <span className="catalog-line line-one"></span>
              <span className="catalog-line line-two"></span>
            </div>

            {/* RIGHT APPLICATIONS */}
            <div className="catalog-apps">
              <span className="mono catalog-label">APPLICATION MATRIX</span>
              <div className="catalog-app">
                <span>01</span>
                <b>Sensor Calibration</b>
              </div>
              <div className="catalog-app">
                <span>02</span>
                <b>Temperature Verification</b>
              </div>
              <div className="catalog-app">
                <span>03</span>
                <b>Laboratory Calibration</b>
              </div>
              <div className="catalog-app">
                <span>04</span>
                <b>Field Calibration</b>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="catalog-footer mono">
              <span>ATS / THERMCAL DRY BLOCK CALIBRATORS</span>
              <a href="#">EXPLORE THERMCAL →</a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
    HEPA AIR FILTRATION
========================================================= */}

<section className="family hepa-family" id="hepa">
  <div className="wrap">

    {/* SECTION INTRO */}
    <div className="section-top reveal">
      <div>
        <div className="eyebrow mono">
          05 · HEPA air filtration
        </div>

        <h2>
          Cleaner air around the process.
        </h2>
      </div>

      <p>
        HEPA air filtration systems are designed to capture smoke,
        particulates, fumes and VOCs generated during thermal cleaning
        and demanding industrial processes.
      </p>
    </div>


    {/* HEPA PRODUCT CATALOG */}
    <div className="family-catalog hepa-catalog reveal">

      {/* LEFT TITLE */}
      <div className="catalog-heading">

        <span className="mono catalog-series">
          ATS / HEPA SERIES
        </span>

        <h3>
          HEPA Air
          <br />
          Filtration
          <br />
          Systems
        </h3>

        <p>
          Industrial filtration systems engineered for smoke,
          particulate, fume and VOC capture around thermal cleaning
          and manufacturing processes.
        </p>

      </div>


      {/* CENTER PRODUCT */}
      <div className="catalog-machine hepa-machine">

        <div className="catalog-orbit orbit-one"></div>
        <div className="catalog-orbit orbit-two"></div>

        <img
          src="/assets/images/products/hepa-filtration.png"
          alt="Accurate Thermal Systems HEPA Air Filtration System"
          className="catalog-product hepa-catalog-product"
        />

        <span className="catalog-line line-one"></span>
        <span className="catalog-line line-two"></span>

      </div>


      {/* RIGHT APPLICATIONS */}
      <div className="catalog-apps">

        <span className="mono catalog-label">
          APPLICATION MATRIX
        </span>

        <div className="catalog-app">
          <span>01</span>
          <b>Smoke Capture</b>
        </div>

        <div className="catalog-app">
          <span>02</span>
          <b>Fume Filtration</b>
        </div>

        <div className="catalog-app">
          <span>03</span>
          <b>Particulate Removal</b>
        </div>

        <div className="catalog-app">
          <span>04</span>
          <b>VOC Control</b>
        </div>

      </div>


      {/* BOTTOM */}
      <div className="catalog-footer mono">

        <span>
          ATS / HEPA AIR FILTRATION
        </span>

        <a href="#">
          EXPLORE HEPA →
        </a>

      </div>

    </div>

  </div>
</section>


      

      {/* MODELS */}
      <section className="models-dark">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow mono">04 · FTB model explorer</div>
              <h2>Find the system that fits.</h2>
            </div>
            <p>
              Move from the product family into individual models. The next step is to populate each page
              with verified model-specific specifications and real ATS photography.
            </p>
          </div>

          <div className="model-grid">
            {modelData.map((model) => (
              <a
                key={model.num}
                href="#"
                className="model-card reveal"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <span className="model-number mono">{model.num}</span>
                <h3>{model.name}</h3>
                <p>{model.desc}</p>
                <span className="model-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION SELECTOR */}
      <section className="selector">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow mono">05 · Explore by application</div>
              <h2>Know the job, but not the model?</h2>
            </div>
            <p>
              Technical buyers do not always begin with a product number. Explore the thermal
              requirement first, then move toward the appropriate equipment family and engineering
              conversation.
            </p>
          </div>

          <div className="selector-grid reveal">
            {selectorData.map((sel) => (
              <article key={sel.num} className="selector-card">
                <small className="mono">{sel.num}</small>
                <h3>{sel.title}</h3>
                <p>{sel.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM */}
      <section className="custom">
        <div className="wrap custom-grid reveal">
          <div>
            <div className="eyebrow mono" style={{ color: "white" }}>
              06 · Custom engineering
            </div>
            <h2>
              WHEN THE
              <br />
              CATALOG
              <br />
              ISN'T ENOUGH.
            </h2>
          </div>
          <div>
            <p>
              Some thermal applications cannot be solved by selecting a standard model. When working
              volume, temperature requirements or process conditions demand something different, the
              conversation should move from product selection to engineering.
            </p>
            <Link href="/#contact" className="btn">
              Discuss Your Application →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final">
        <div className="wrap final-grid reveal">
          <h2>
            Need help choosing the <span>right thermal system?</span>
          </h2>
          <Link href="/#contact" className="btn primary">
            Talk to an Engineer →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <h3>Accurate Thermal Systems</h3>
              <p>
                Laboratory and industrial temperature products, application engineering, service and
                support.
              </p>
            </div>
            <div>
              <b>Products</b>
              <a href="#fluidized">Fluidized Baths</a>
              <a href="#thermcal">ThermCal</a>
            </div>
            <div>
              <b>Explore</b>
              <Link href="/#applications">Applications</Link>
              <Link href="/#technology">Technology</Link>
              <Link href="/#industries">Industries</Link>
            </div>
            <div>
              <b>Contact</b>
              <a href="tel:6093263190">609-326-3190</a>
              <a href="mailto:sales@accuthermal.com">sales@accuthermal.com</a>
              <span>Hainesport, New Jersey, USA</span>
            </div>
          </div>
          <div className="legal">© Accuthermal LLC d/b/a Accurate Thermal Systems.</div>
        </div>
      </footer>
    </>
  );
}
