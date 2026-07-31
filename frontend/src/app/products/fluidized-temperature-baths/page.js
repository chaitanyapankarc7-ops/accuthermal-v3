"use client";

import Navbar from "../../component/Navbar";

const applications = [
  {
    number: "01",
    title: "Thermal Cleaning",
    description:
      "Remove paint, oil, grease, epoxy, plastic, varnish, insulation, rubber, adhesives, food and plant material from tooling, machinery and industrial components.",
    models: "FTBSL6, FTBLL12, FTBLL12W, FTBLL26, FTBLL27, FTBLL47",
  },
  {
    number: "02",
    title: "Heat Treatment & Medical Device Processing",
    description:
      "Fast and uniform heating for annealing, tempering, shape setting, high-temperature quenching and specialized material processing.",
    models: "FTBSL6, FTBSL15, FTBSL25",
  },
  {
    number: "03",
    title: "Calibration, Testing & Reactor Heating",
    description:
      "Calibration of temperature sensors and systems, thermal failure mode testing, and heating coils and vessels for endothermic and exothermic reactions.",
    models: "Select model based on application volume and heat load.",
  },
];

const models = [
  { name: "FTBLL12", diameter: '9.5"', depth: '12"', load: "25 lb" },
  { name: "FTBLL12W", diameter: '13.5"', depth: '13"', load: "50 lb" },
  { name: "FTBLL26", diameter: '9.5"', depth: '28"', load: "50 lb" },
  { name: "FTBLL27", diameter: '17.7"', depth: '28"', load: "130 lb" },
  { name: "FTBLL47", diameter: '17.7"', depth: '47"', load: "200 lb" },
  { name: "FTBSL6", diameter: '5.3"', depth: '6"', load: "1.5 lb" },
  { name: "FTBSL15", diameter: '7.0"', depth: '15"', load: "8 lb" },
  { name: "FTBSL25", diameter: '7.0"', depth: '25"', load: "15 lb" },
];

const specs = [
  ["FTBLL12", "±1.0°C", "150 min", "4.5 kW", "25 lb"],
  ["FTBLL12W", "±1.5°C", "200 min", "6.8 kW", "50 lb"],
  ["FTBLL26", "±1.0°C", "180 min", "6.2 kW", "50 lb"],
  ["FTBLL27", "±5.0°C", "240 min", "12.9 kW", "130 lb"],
  ["FTBLL47", "±5.0°C", "220 min", "18 kW", "200 lb"],
  ["FTBSL6", "±0.2°C", "70 min", "1.9 kW", "1.5 lb"],
  ["FTBSL15", "±0.3°C", "150 min", "4 kW", "8 lb"],
  ["FTBSL25", "±0.4°C", "180 min", "6 kW", "15 lb"],
];

const features = [
  "Proven and reliable fluidized bath technology",
  "Fully automatic fluidizing air control",
  "Advanced PID temperature control",
  "Independent over-temperature protection",
  "Bath lid designed to reduce media and heat loss",
  "Insulated construction for reliable and safe operation",
  "Stainless steel top cover and tank",
  "RS485 interface with Windows PC software",
  "Advanced temperature validation software",
  "Manufactured in the USA",
];

export default function FluidizedTemperatureBaths() {
  return (
    <main className="ftb-page">
      <Navbar />

      {/* HERO */}
      <section className="ftb-hero">
        <div className="ftb-container ftb-hero-grid">

          <div className="ftb-hero-copy">
            <div className="ftb-breadcrumb">
              HOME / PRODUCTS / FLUIDIZED TEMPERATURE BATHS
            </div>

            <div className="ftb-kicker">
              ATS / FLUIDIZED THERMAL SYSTEMS
            </div>

            <h1>
              FLUIDIZED
              <br />
              TEMPERATURE
              <br />
              <span>BATHS.</span>
            </h1>

            <p>
              Stable, uniform and rapidly responsive thermal environments
              engineered for cleaning, calibration, heat treatment, medical
              device processing, testing and reactor heating.
            </p>

            <div className="ftb-actions">
              <a href="#models" className="ftb-btn primary">
                EXPLORE MODELS →
              </a>

              <a href="/#contact" className="ftb-btn secondary">
                REQUEST A QUOTE
              </a>
            </div>

            <div className="ftb-stats">
              <div>
                <strong>08</strong>
                <span>MODELS AVAILABLE</span>
              </div>

              <div>
                <strong>200 LB</strong>
                <span>MAX LOAD CAPACITY</span>
              </div>

              <div>
                <strong>USA</strong>
                <span>MANUFACTURED</span>
              </div>
            </div>
          </div>

          <div className="ftb-hero-machine">
            <div className="ftb-orbit orbit-a" />
            <div className="ftb-orbit orbit-b" />

            <span className="ftb-tech-label label-one">
              FLUIDIZED MEDIA
            </span>

            <span className="ftb-tech-label label-two">
              PID CONTROL
            </span>

            <img
              src="/assets/images/products/fluidizedbath.png"
              alt="Accurate Thermal Systems Fluidized Temperature Bath"
            />
          </div>

        </div>
      </section>

      {/* STICKY PRODUCT NAV */}
      <nav className="ftb-subnav">
        <a href="#overview">OVERVIEW</a>
        <a href="#applications">APPLICATIONS</a>
        <a href="#technology">HOW IT WORKS</a>
        <a href="#models">MODELS</a>
        <a href="#specifications">SPECIFICATIONS</a>
        <a href="#features">FEATURES</a>
        <a href="#resources">RESOURCES</a>
      </nav>

      {/* OVERVIEW */}
      <section id="overview" className="ftb-section ftb-overview">
        <div className="ftb-container ftb-split">

          <div>
            <div className="ftb-section-number">01 / OVERVIEW</div>

            <h2>
              ENGINEERED FOR
              <br />
              CONTROLLED HEAT.
            </h2>
          </div>

          <div className="ftb-body">
            <p>
              Accurate Thermal Systems manufactures fluidized temperature
              baths for applications requiring a stable and uniform
              temperature environment.
            </p>

            <p>
              Fluidized baths have been used for decades to remove organic
              material from extrusion tooling and metal components. They are
              also used for medical device shape setting, sensor calibration,
              heat treatment, reactor heating and specialized testing.
            </p>

            <p>
              Compared with conventional ovens and furnaces, fluidized baths
              provide rapid heat transfer, faster processing and excellent
              temperature uniformity while immersed objects remain clean and
              dry.
            </p>
          </div>

        </div>
      </section>

      {/* APPLICATIONS */}
      <section id="applications" className="ftb-section ftb-applications">
        <div className="ftb-container">

          <div className="ftb-heading">
            <div>
              <div className="ftb-section-number">02 / APPLICATIONS</div>
              <h2>
                BUILT AROUND
                <br />
                THE PROCESS.
              </h2>
            </div>

            <p>
              One thermal platform supporting demanding cleaning,
              manufacturing, calibration and research workflows.
            </p>
          </div>

          <div className="ftb-app-grid">
            {applications.map((app) => (
              <article className="ftb-app-card" key={app.number}>

                <span className="ftb-card-number">
                  {app.number}
                </span>

                <h3>{app.title}</h3>

                <p>{app.description}</p>

                <div className="ftb-recommended">
                  RECOMMENDED MODELS
                  <strong>{app.models}</strong>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="technology" className="ftb-technology">
        <div className="ftb-container">

          <div className="ftb-heading dark">
            <div>
              <div className="ftb-section-number">
                03 / HOW IT WORKS
              </div>

              <h2>
                HOW FLUIDIZED
                <br />
                BATH TECHNOLOGY
                <br />
                WORKS.
              </h2>
            </div>

            <p>
              Compressed air transforms heated aluminum oxide media into a
              fluid-like thermal environment capable of transferring heat
              rapidly and uniformly.
            </p>
          </div>

          <div className="ftb-tech-grid">

            <div className="ftb-diagram">

              <div className="ftb-airflow">
                ↑ ↑ ↑ ↑ ↑
              </div>

              <div className="ftb-media">
                <span>ALUMINUM OXIDE MEDIA</span>
              </div>

              <div className="ftb-plate">
                POROUS PLATE
              </div>

              <div className="ftb-air">
                ↑ ↑ ↑ ↑ ↑
                <span>COMPRESSED AIR</span>
              </div>

            </div>

            <div className="ftb-video-card">

            <video controls playsInline preload="metadata">
  <source src="/videos/MVI_6338.mp4" type="video/mp4" />
  Your browser does not support video playback.
</video>

              <div className="ftb-video-copy">
                <span>ATS / TECHNOLOGY</span>
                <h3>How Does a Fluidized Bath Work?</h3>
                <p>
                  See fluidized temperature bath technology operating in a
                  real ATS system.
                </p>
              </div>

            </div>

          </div>

          <div className="ftb-how-copy">
            <p>
              A fluidized bath contains a lower air chamber separated from the
              working chamber by a porous plate. Aluminum oxide media fills the
              working chamber while compressed air enters below the plate.
            </p>

            <p>
              As air travels through the media, the particles become fluidized
              and continuously circulate. Heat introduced into the bath is
              distributed throughout this moving media, creating stable and
              highly uniform thermal conditions.
            </p>

            <p>
              The resulting liquid-like behavior allows immersed components to
              heat rapidly without using molten salts or liquid heat-transfer
              media.
            </p>
          </div>

        </div>
      </section>

      {/* MODELS */}
      <section id="models" className="ftb-section ftb-models">
        <div className="ftb-container">

          <div className="ftb-heading">
            <div>
              <div className="ftb-section-number">
                04 / PRODUCT RANGE
              </div>

              <h2>
                EIGHT MODELS.
                <br />
                ONE TECHNOLOGY.
              </h2>
            </div>

            <p>
              Select a system according to working volume, heat load,
              temperature performance and application requirements.
            </p>
          </div>

          <div className="ftb-model-grid">

            {models.map((model) => (
              <article className="ftb-model-card" key={model.name}>

                <span>ATS</span>

                <h3>{model.name}</h3>

                <img
                  src="/assets/images/products/fluidizedbath.png"
                  alt={`ATS ${model.name}`}
                />

                <dl>
                  <div>
                    <dt>DIAMETER</dt>
                    <dd>{model.diameter}</dd>
                  </div>

                  <div>
                    <dt>DEPTH</dt>
                    <dd>{model.depth}</dd>
                  </div>

                  <div>
                    <dt>MAX LOAD</dt>
                    <dd>{model.load}</dd>
                  </div>
                </dl>

              </article>
            ))}

          </div>

        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section id="specifications" className="ftb-section ftb-specifications">
        <div className="ftb-container">

          <div className="ftb-heading">
            <div>
              <div className="ftb-section-number">
                05 / SPECIFICATIONS
              </div>

              <h2>
                DETAILED
                <br />
                PERFORMANCE.
              </h2>
            </div>

            <p>
              Core performance specifications across the ATS fluidized
              temperature bath range.
            </p>
          </div>

          <div className="ftb-table-wrap">
            <table>
              <thead>
                <tr>
                  <th>MODEL</th>
                  <th>STABILITY @ 500°C</th>
                  <th>HEAT-UP TO 600°C</th>
                  <th>POWER</th>
                  <th>MAX LOAD</th>
                </tr>
              </thead>

              <tbody>
                {specs.map((row) => (
                  <tr key={row[0]}>
                    {row.map((value, index) => (
                      <td key={index}>{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="ftb-spec-note">
            Temperature, electrical and performance requirements vary by
            configuration. Refer to ATS technical documentation before system
            selection.
          </p>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="ftb-section ftb-features">
        <div className="ftb-container ftb-feature-layout">

          <div>
            <div className="ftb-section-number">
              06 / ENGINEERING
            </div>

            <h2>
              WHY ATS
              <br />
              FLUIDIZED
              <br />
              BATHS?
            </h2>
          </div>

          <div className="ftb-feature-grid">
            {features.map((feature, index) => (
              <div className="ftb-feature" key={feature}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{feature}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="ftb-resources">
        <div className="ftb-container">

          <div className="ftb-section-number">
            07 / TECHNICAL LIBRARY
          </div>

          <div className="ftb-resource-grid">

            <div className="ftb-resource-title">
              <h2>
                TECHNICAL
                <br />
                RESOURCES.
              </h2>
            </div>

            <div className="ftb-resource-column">
              <span>BROCHURES</span>

              <a href="#">FTBLL12 / FTBLL26 / FTBLL12W →</a>
              <a href="#">FTBLL27 / FTBLL47 →</a>
              <a href="#">FTBSL15 / FTBSL25 →</a>
              <a href="#">FTBSL6 →</a>
            </div>

            <div className="ftb-resource-column">
              <span>SAFETY DATA</span>

              <a href="#">Brown Aluminum Oxide →</a>
              <a href="#">White Activated Alumina →</a>
            </div>

            <div className="ftb-resource-column">
              <span>REQUEST FORMS</span>

              <a href="#">Sample Cleaning →</a>
              <a href="#">Sample Heat Treatment →</a>
            </div>

            <div className="ftb-resource-cta">
              <span>NEED HELP SELECTING A SYSTEM?</span>

              <h3>
                TALK TO AN
                <br />
                ATS ENGINEER.
              </h3>

              <a href="/#contact">
                REQUEST A QUOTE →
              </a>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}