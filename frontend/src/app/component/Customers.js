"use client";

import { useState, useEffect } from "react";

const customerGroups = [
  {
    label: "CALIBRATION",
    logos: [
      { src: "/assets/images/customers/calibration/ametek.png", alt: "Ametek" },
      { src: "/assets/images/customers/calibration/ashcroft-logo-lg.png", alt: "Ashcroft" },
      { src: "/assets/images/customers/calibration/NIH.png", alt: "NIH" },
      { src: "/assets/images/customers/calibration/phillips66.png", alt: "Phillips 66" },
      { src: "/assets/images/customers/calibration/raytheon.png", alt: "Raytheon" },
      { src: "/assets/images/customers/calibration/UCT-solutions.png", alt: "UCT Solutions" },
    ],
  },
  {
    label: "REACTOR HEATING",
    logos: [
      { src: "/assets/images/customers/reactor-heating/battelle.png", alt: "Battelle" },
      { src: "/assets/images/customers/reactor-heating/dowdupont-logo.png", alt: "DowDuPont" },
      { src: "/assets/images/customers/reactor-heating/juul.png", alt: "Juul" },
      { src: "/assets/images/customers/reactor-heating/nrel.png", alt: "NREL" },
      { src: "/assets/images/customers/reactor-heating/Vanderbilt.png", alt: "Vanderbilt" },
    ],
  },
  {
    label: "SHAPE SETTING & HEAT TREATMENT",
    logos: [
      { src: "/assets/images/customers/shape-setting/abbott.png", alt: "Abbott" },
      { src: "/assets/images/customers/shape-setting/boston-scientific.png", alt: "Boston Scientific" },
      { src: "/assets/images/customers/shape-setting/cook-medical.png", alt: "Cook Medical" },
      { src: "/assets/images/customers/shape-setting/ethicon-J&J.png", alt: "Ethicon J&J" },
      { src: "/assets/images/customers/shape-setting/fort-wayne-metals.png", alt: "Fort Wayne Metals" },
      { src: "/assets/images/customers/shape-setting/lifetech.png", alt: "LifeTech" },
      { src: "/assets/images/customers/shape-setting/medtronic.png", alt: "Medtronic" },
      { src: "/assets/images/customers/shape-setting/motion-dynamics.png", alt: "Motion Dynamics" },
      { src: "/assets/images/customers/shape-setting/norman-noble.png", alt: "Norman Noble" },
      { src: "/assets/images/customers/shape-setting/resonetics.png", alt: "Resonetics" },
      { src: "/assets/images/customers/shape-setting/stryker.png", alt: "Stryker" },
      { src: "/assets/images/customers/shape-setting/tegra-medical.png", alt: "Tegra Medical" },
      { src: "/assets/images/customers/shape-setting/us-biodesign.png", alt: "US Biodesign" },
    ],
  },
  {
    label: "THERMAL CLEANING",
    logos: [
      { src: "/assets/images/customers/thermal-cleaning/baxter.png", alt: "Baxter" },
      { src: "/assets/images/customers/thermal-cleaning/belden.png", alt: "Belden" },
      { src: "/assets/images/customers/thermal-cleaning/berry-plastics.png", alt: "Berry Plastics" },
      { src: "/assets/images/customers/thermal-cleaning/cooper-standard.jpg", alt: "Cooper Standard" },
      { src: "/assets/images/customers/thermal-cleaning/dynisco.png", alt: "Dynisco" },
      { src: "/assets/images/customers/thermal-cleaning/encore-wire.png", alt: "Encore Wire" },
      { src: "/assets/images/customers/thermal-cleaning/entegris.png", alt: "Entegris" },
      { src: "/assets/images/customers/thermal-cleaning/evonik.png", alt: "Evonik" },
      { src: "/assets/images/customers/thermal-cleaning/general-cable.png", alt: "General Cable" },
      { src: "/assets/images/customers/thermal-cleaning/idex.png", alt: "IDEX" },
      { src: "/assets/images/customers/thermal-cleaning/jm-smucker.png", alt: "JM Smucker" },
      { src: "/assets/images/customers/thermal-cleaning/orbis.png", alt: "Orbis" },
      { src: "/assets/images/customers/thermal-cleaning/parker-hannifin.png", alt: "Parker Hannifin" },
      { src: "/assets/images/customers/thermal-cleaning/polyone-logo.png", alt: "PolyOne" },
      { src: "/assets/images/customers/thermal-cleaning/saint-gobain.png", alt: "Saint-Gobain" },
      { src: "/assets/images/customers/thermal-cleaning/southwire.png", alt: "Southwire" },
      { src: "/assets/images/customers/thermal-cleaning/standridge.png", alt: "Standridge" },
      { src: "/assets/images/customers/thermal-cleaning/teknor.png", alt: "Teknor Apex" },
      { src: "/assets/images/customers/thermal-cleaning/Ti-automotive.png", alt: "TI Automotive" },
      { src: "/assets/images/customers/thermal-cleaning/trajan-scienific.png", alt: "Trajan Scientific" },
      { src: "/assets/images/customers/thermal-cleaning/umass.png", alt: "UMass" },
      { src: "/assets/images/customers/thermal-cleaning/WL-Gore.png", alt: "WL Gore" },
      { src: "/assets/images/customers/thermal-cleaning/zeus.png", alt: "Zeus" },
      { src: "/assets/images/customers/thermal-cleaning/zimmerbiomet.png", alt: "Zimmer Biomet" },
    ],
  },
];

export default function Customers() {
  const [activeGroup, setActiveGroup] = useState(0);

  // Auto-advance the logo groups (crossfade) every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGroup((prev) => (prev + 1) % customerGroups.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="customers" id="customers">
      <div className="wrap">
        <div className="customers-head reveal">
          <div className="eyebrow mono">03 · Customers</div>
          <h2>Satisfied Clients &amp; Customers</h2>
          <p>
            From medical device manufacturing to thermal cleaning and temperature
            calibration, engineers across demanding industries trust ATS thermal
            systems for controlled, repeatable temperature performance.
          </p>
        </div>

        <div className="customers-stage reveal">
          <div className="customers-track">
            {customerGroups.map((group, gi) => (
              <div
                key={gi}
                className={`customer-group ${activeGroup === gi ? "active" : ""}`}
              >
                <span className="customer-group-label mono">{group.label}</span>
                <div className="customer-grid">
                  {group.logos.map((logo, li) => (
                    <div className="customer-logo" key={li}>
                      <img src={logo.src} alt={logo.alt} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="customers-nav">
            {customerGroups.map((group, i) => (
              <button
                key={i}
                className={activeGroup === i ? "active" : ""}
                onClick={() => setActiveGroup(i)}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
