"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./component/Navbar";
const appData = [
  [
    "01",
    "Thermal Cleaning",
    "Remove organic material such as paint, oil, grease, epoxy, plastic, varnish, insulation, rubber and adhesives from industrial tooling and components using a controlled thermal process.",
    ["TOOLING", "EXTRUSION", "MAINTENANCE"],
  ],
  [
    "02",
    "Nitinol Shape Setting",
    "Use controlled thermal processing for Nitinol medical-device components, shape setting, annealing and other applications that require uniform heating.",
    ["NITINOL", "MEDICAL DEVICES", "ANNEALING"],
  ],
  [
    "03",
    "Temperature Calibration",
    "Create a stable thermal source for calibration and testing of temperature sensors, probes, thermometers, controllers and related instrumentation.",
    ["SENSORS", "LABORATORY", "TESTING"],
  ],
  [
    "04",
    "Reactor Heating",
    "Provide controlled heating around laboratory or process reactors used for research, development and temperature-dependent reactions.",
    ["RESEARCH", "REACTORS", "PROCESS HEAT"],
  ],
  [
    "05",
    "Heat Treatment",
    "Support annealing, tempering, shape setting and other thermal operations where rapid and uniform heating is required.",
    ["ANNEALING", "MATERIALS", "PROCESSING"],
  ],
];

export default function Home() {
  const [progressWidth, setProgressWidth] = useState("0%");
  const [activeApp, setActiveApp] = useState(0);
  const [bubbles, setBubbles] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    "/assets/images/imgs.jpeg",
    "/assets/images/pictures_2.jpeg",
    "/assets/images/pictures_3.jpeg"
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  
  const appTitleRef = useRef(null);

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

  // URL parameters listener for active App selection
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const appParam = params.get("app");
      if (appParam !== null) {
        const index = parseInt(appParam, 10);
        if (!isNaN(index) && index >= 0 && index < appData.length) {
          setActiveApp(index);
          const el = document.getElementById("applications");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    }
  }, []);

  // Generate fluidization bubbles
  useEffect(() => {
    const generatedBubbles = Array.from({ length: 65 }).map((_, i) => ({
      id: i,
      left: `${4 + Math.random() * 92}%`,
      delay: `${-Math.random() * 5}s`,
      duration: `${2.2 + Math.random() * 4}s`,
      size: `${3 + Math.random() * 7}px`,
    }));
    setBubbles(generatedBubbles);
  }, []);

  // Hero slideshow interval timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500); // Crossfade every 4.5 seconds
    return () => clearInterval(timer);
  }, [heroImages.length]);


  // Animate app title on active tab switch
  useEffect(() => {
    if (appTitleRef.current) {
      appTitleRef.current.animate(
        [
          { opacity: 0, transform: "translateY(12px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 350 }
      );
    }
  }, [activeApp]);

  // Card 3D tilt handler
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 2.5}deg) rotateY(${x * 2.5}deg) translateY(-5px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  const currentApp = appData[activeApp];

  return (
    <>
      <div className="progress" style={{ width: progressWidth }}></div>
      
      <Navbar setActiveApp={setActiveApp} />

      <header className="hero">
        <div className="wrap hero-inner">
          <div>
            <h1>
              <span className="word">
                <i>Better by</i>
              </span>
              <br />
              <span className="word">
                <i style={{ animationDelay: ".08s" }}>
                  <span className="half-color-text">degree.</span>
                </i>
              </span>
            </h1>
            <p>
              Thermal systems for calibration, cleaning, heat treatment, Nitinol processing, reactor
              heating, research and demanding industrial applications.
            </p>
            <div className="buttons">
              <a className="btn primary" href="#systems">
                Explore Systems →
              </a>
              <a className="btn" href="#contact">
                Talk to an Engineer
              </a>
            </div>
          </div>
          <div className="blueprint" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "700px", position: "relative" }}>
            {heroImages.map((src, idx) => (
              <img 
                key={src}
                src={src} 
                alt={`Accurate Thermal Systems Products ${idx + 1}`} 
                style={{
                  width: "auto",
                  height: "100%",
                  maxHeight: "700px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  filter: "drop-shadow(0 20px 50px rgba(0, 0, 0, 0.45))",
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  opacity: currentImageIndex === idx ? 1 : 0,
                  transition: "opacity 1s ease-in-out",
                  pointerEvents: currentImageIndex === idx ? "auto" : "none",
                }} 
              />
            ))}
          </div>




        </div>
        <div className="hero-index">
          <div className="wrap mono">
            <span>ATS / THERMAL SYSTEMS</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </header>

      <div className="signal" style={{ display: "none" }}></div>


      <section className="intro" id="about" style={{ display: "none" }}>

        <div className="wrap">
          <div className="intro-grid reveal">
            <div>
              <div className="eyebrow mono">Accurate Thermal Systems</div>
              <h2>Built around temperature stability, uniformity and application performance.</h2>
            </div>
            <div className="intro-copy">
              Accurate Thermal Systems manufactures fluidized temperature baths and dry block
              calibrators, while supporting thermal cleaning, heat treatment, temperature
              calibration, testing and reactor-heating applications. The experience is designed
              around the engineer's task: understand the process, evaluate the system and reach
              technical information quickly.
            </div>
          </div>
          <div className="facts reveal">
            <div className="fact">
              <b>40+ years</b>
              <span>Combined engineering experience</span>
            </div>
            <div className="fact">
              <b>−100°C to 1200°C</b>
              <span>Custom application capability</span>
            </div>
            <div className="fact">
              <b>USA</b>
              <span>Designed and manufactured</span>
            </div>
          </div>
        </div>
      </section>

      <section className="systems" id="systems">

        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow mono">01 · Product systems</div>
              <h2>Equipment that earns its place in the process.</h2>
            </div>
            <p>
              Explore thermal systems engineered around temperature control, process performance and
              demanding industrial applications.
            </p>
          </div>

          {/* PRODUCT 01 — FLUIDIZED TEMPERATURE BATH */}
          <div className="system-story reveal">
            <div className="system-visual">
              <img
                src="/assets/images/products/fluidizedbath.png"
                alt="Accurate Thermal Systems Fluidized Temperature Bath"
                className="system-product-img"
              />
            </div>
            <div className="system-copy">
              <span className="num">SYSTEM / FTB</span>
              <h3>Fluidized Temperature Baths</h3>
              <p>
                Accurate Thermal Systems manufactures a complete line of fluidized temperature baths with an operating range of -100 to 1100°C to meet a wide range of applications requiring a stable and uniform temperature environment.
              </p>
              <div className="specs">
                <div>
                  <b>Thermal Cleaning</b>
                  <small>Tooling & components</small>
                </div>
                <div>
                  <b>Calibration</b>
                  <small>Sensors & systems</small>
                </div>
                <div>
                  <b>Heat Treatment</b>
                  <small>Materials & devices</small>
                </div>
              </div>
              <div className="buttons">
                <Link className="btn primary" href="/products">
                  Explore FTB Models →
                </Link>
              </div>
            </div>
          </div>

          {/* PRODUCT 02 — THERMCAL 400 */}
          <div className="system-story thermcal-story reveal">
            <div className="system-copy thermcal-copy">
              <span className="num">SYSTEM / THERMCAL</span>
              <h3>Dry Block Temperature Calibrators</h3>
              <p>
                ThermCal dry block temperature calibrators offer high accuracy and stability for field or laboratory use at an economical cost and are used to calibrate all types of temperature sensors, switches, and thermometers.
              </p>
              <div className="specs">
                <div>
                  <b>Calibration</b>
                  <small>Temperature sensors</small>
                </div>
                <div>
                  <b>Laboratory</b>
                  <small>Controlled testing</small>
                </div>
                <div>
                  <b>Field Use</b>
                  <small>Portable calibration</small>
                </div>
              </div>
              <div className="buttons">
                <Link className="btn primary" href="/products">
                  Explore ThermCal →
                </Link>
              </div>
            </div>
            <div className="system-visual thermcal-visual">
              <span className="thermcal-ring ring-one"></span>
              <span className="thermcal-ring ring-two"></span>
              <img
                src="/assets/images/products/ats-thermcal400.png"
                alt="Accurate Thermal Systems ThermCal 400 Dry Block Temperature Calibrator"
                className="thermcal-product-img"
              />
              <span className="product-marker mono">ATS / THERMCAL 400</span>
            </div>
          </div>
        </div>
      </section>

      <section className="applications" id="applications" style={{ display: "none" }}>
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow mono">02 · Applications</div>
              <h2>Start with the process, not the product number.</h2>
            </div>
            <p>
              Select an application to understand the role of the thermal system before moving into
              models, specifications and technical documentation.
            </p>
          </div>
          <div className="app-stage reveal">
            <div className="app-nav">
              {appData.map((data, index) => (
                <button
                  key={index}
                  className={activeApp === index ? "active" : ""}
                  onClick={() => setActiveApp(index)}
                >
                  <span>{data[0]}</span>
                  <b>{data[1]}</b>
                  <span>→</span>
                </button>
              ))}
            </div>
            <div className="app-view">
              <div className="big" id="appnum">
                {currentApp[0]}
              </div>
              <div className="eyebrow mono">Application focus</div>
              <h3 id="apptitle" ref={appTitleRef}>
                {currentApp[1]}
              </h3>
              <p id="appdesc">{currentApp[2]}</p>
              <div className="app-meta" id="appmeta">
                {currentApp[3].map((meta, i) => (
                  <span key={i}>{meta}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="technology" id="technology">
        <div className="wrap tech-grid">
          <div className="tech-copy reveal">
            <div className="eyebrow mono">03 · Fluidization technology</div>
            <h2>See the heat-transfer principle in motion.</h2>
            <p>
              Compressed air enters beneath a porous plate and passes through heated aluminum-oxide
              media. As the media fluidizes, it moves around immersed objects and provides a dry
              thermal environment with rapid heat transfer.
            </p>
            <p>The animation visualizes the principle instead of using decorative motion with no purpose.</p>
          </div>
          <div className="fluid reveal">
            <div className="media" id="media">
              {bubbles.map((b) => (
                <i
                  key={b.id}
                  className="bubble"
                  style={{
                    left: b.left,
                    animationDelay: b.delay,
                    animationDuration: b.duration,
                    width: b.size,
                    height: b.size,
                  }}
                />
              ))}
            </div>
            <div className="heater"></div>
            <div className="airflow">↑ AIRFLOW ↑ AIRFLOW ↑ AIRFLOW ↑</div>
            <span className="tech-label tl1">FLUIDIZED MEDIA</span>
            <span className="tech-label tl2">HEATED ZONE</span>
            <span className="tech-label tl3">AIR DISTRIBUTION</span>
          </div>
        </div>
      </section>

      <section className="models" id="models">
        <div className="wrap">
          <div className="models-head reveal">
            <div>
              <div className="eyebrow mono">04 · System explorer</div>
              <h3>Fluidized bath family</h3>
            </div>
            <span className="mono">Drag / scroll →</span>
          </div>
          <div className="model-track reveal">
            {[
              "FTBLL12",
              "FTBLL12W",
              "FTBLL26",
              "FTBLL27",
              "FTBLL47",
              "FTBSL6",
              "FTBSL15",
              "FTBSL25",
            ].map((modelName) => (
              <div
                key={modelName}
                className="model"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <b>{modelName}</b>
                <span>Fluidized temperature bath</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries" id="industries">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow mono">05 · Industries</div>
              <h2>Thermal engineering across demanding environments.</h2>
            </div>
            <p>
              Application-driven navigation helps technical buyers identify where ATS equipment fits
              before diving into individual product specifications.
            </p>
          </div>
          <div className="industry-grid reveal">
            {[
              {
                num: "01",
                title: "Medical Devices",
                desc: "Nitinol shape setting, annealing and controlled thermal processing.",
              },
              {
                num: "02",
                title: "Plastics & Extrusion",
                desc: "Thermal cleaning of dies, tooling and process components.",
              },
              {
                num: "03",
                title: "Calibration Laboratories",
                desc: "Temperature calibration for sensors and instrumentation.",
              },
              {
                num: "04",
                title: "Research & Development",
                desc: "Flexible thermal platforms for testing and development.",
              },
              {
                num: "05",
                title: "Manufacturing",
                desc: "Heat treatment, maintenance and production support.",
              },
              {
                num: "06",
                title: "Chemical Processing",
                desc: "Reactor heating and controlled process-temperature applications.",
              },
            ].map((ind) => (
              <article
                key={ind.num}
                className="industry"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <small className="mono">{ind.num}</small>
                <h3>{ind.title}</h3>
                <p>{ind.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="custom">
        <div className="wrap custom-grid reveal">
          <div>
            <div className="eyebrow mono" style={{ color: "#fff" }}>
              06 · Custom engineering
            </div>
            <h2>YOUR PROCESS DOESN'T HAVE TO FIT A CATALOG.</h2>
          </div>
          <div>
            <p>
              When standard equipment does not match the required temperature range, working volume or
              application, Accurate Thermal Systems can develop an application-specific thermal solution.
            </p>
            <a className="btn" href="#contact">
              Discuss Your Application →
            </a>
          </div>
        </div>
      </section>

      <section className="resources" id="resources">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="eyebrow mono">07 · Technical resources</div>
              <h2>Information should be easy to reach.</h2>
            </div>
            <p>
              Technical buyers should be able to move from an application to a model, then to
              documentation, support and an engineering conversation without hunting through the site.
            </p>
          </div>
          <div className="resource-list reveal">
            {[
              { num: "01", title: "Fluidized Bath Product Information", cat: "PRODUCT SYSTEMS" },
              { num: "02", title: "Dry Block Calibrator Information", cat: "CALIBRATION" },
              { num: "03", title: "Instruction Manuals & Technical Files", cat: "DOCUMENTATION" },
              { num: "04", title: "Parts, Media & Accessories", cat: "SUPPORT" },
            ].map((res) => (
              <div key={res.num} className="resource">
                <span>{res.num}</span>
                <b>{res.title}</b>
                <small>{res.cat}</small>
                <span>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="wrap cta-grid reveal">
          <h2>
            Need a thermal system built around <span>your application?</span>
          </h2>
          <a className="btn primary" href="mailto:sales@accuthermal.com">
            Talk to an Engineer →
          </a>
        </div>
      </section>

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
              <a href="#systems">Fluidized Baths</a>
              <a href="#systems">Dry Block Calibrators</a>
              <a href="#contact">Custom Systems</a>
            </div>
            <div>
              <b>Explore</b>
              <a href="#applications">Applications</a>
              <a href="#technology">Technology</a>
              <a href="#industries">Industries</a>
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
