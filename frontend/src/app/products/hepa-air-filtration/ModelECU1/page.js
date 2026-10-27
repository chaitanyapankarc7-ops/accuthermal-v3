
import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

const productStats = [
  { label: "01 / AIRFLOW", value: "210 CFM" },
  { label: "02 / FILTRATION", value: "99.97% HEPA" },
  { label: "03 / INSTRUMENT", value: "3-Stage System" },
  { label: "04 / CATALOG", value: "ATS1119" },
];

const quickSpecs = [
  { value: "210 CFM", label: "MAX AIRFLOW" },
  { value: "99.97%", label: "HEPA EFFICIENCY" },
  { value: "59 dBA", label: "NOISE LEVEL" },
  { value: "30 lbs", label: "CARBON MODULES" },
];

const specificationGroups = [
  {
    title: "Airflow & Connections",
    number: "01",
    rows: [
      ["Catalog Number", "ATS1119"],
      ["Inlet / Outlet Plenum", '6″ OD inlet / 4″ OD outlet'],
      ["Maximum Air Flow", "210 CFM @ 19 WC"],
      ["Blower Capacity", "Integrated up to 210 CFM"],
    ],
  },
  {
    title: "Filtration System",
    number: "02",
    rows: [
      ["Filter Configuration", "3-stage filtration"],
      ["1st Stage Filter", "Deep-pleat pre-filter, 99% efficient @ 1 micron"],
      ["2nd Stage Filter", "HEPA filter, 99.97% efficient @ 0.3 micron"],
      ["3rd Stage Filter", "2 modules × 30 lbs activated carbon"],
      ["Filter Access", "Easy front door access"],
    ],
  },
  {
    title: "Monitoring & Controls",
    number: "03",
    rows: [
      [
        "Filter Status Display",
        "Individual electronic filter monitoring with display and LED alerts",
      ],
      ["Remote Interface", "Integrated 24 VDC remote start/stop"],
      ["Gas / VOC Sensor", "Calibrated at 600 PPM ethanol"],
    ],
  },
  {
    title: "Construction & Performance",
    number: "04",
    rows: [
      ["Applications", "Light to moderate-duty smoke, fume, odour and VOC capture"],
      ["Configuration", "Mobile with 4 castor wheels, 2 locking"],
      ["Noise Level", "59 dBA"],
      ["Dimensions (W × D × H)", '23″ × 23″ × 35″'],
      ["Weight", "200 lbs. with filters installed"],
    ],
  },
];

export default function ModelECU1Page() {
  return (
    <>
      <Navbar />

      <main className="ecu1-product-page">
        {/* PRODUCT HERO */}
        <section className="ecu1-product-hero">
          <div className="ecu1-product-hero-inner">
            {/* LEFT: PRODUCT IMAGE */}
            <div className="ecu1-product-image-panel">
              <div className="ecu1-product-image-grid" />

              <span className="ecu1-product-image-kicker">
                ATS / INDUSTRIAL AIR FILTRATION
              </span>

              <div className="ecu1-product-image-frame">
                <Image
                  src="/assets/images/heap_air/Screenshot 2026-10-20 023426.png"
                  alt="Accurate Thermal Systems ECU1 HEPA air filtration system"
                  width={800}
                  height={800}
                  priority
                  className="ecu1-product-image"
                />
              </div>

              <div className="ecu1-product-image-label">
                <span>MODEL</span>
                <strong>ECU1</strong>
              </div>

              <span className="ecu1-product-image-index">01 / 02</span>
            </div>

            {/* RIGHT: PRODUCT DETAILS */}
            <div className="ecu1-product-details">
              <Link
                href="/products/hepa-air-filtration"
                className="ecu1-product-back"
              >
                <span aria-hidden="true">←</span>
                ALL HEPA PRODUCTS
              </Link>

              <span className="ecu1-product-eyebrow">
                ATS1119 / HEPA AIR FILTRATION
              </span>

              <h1>
                ECU<span>1</span>
              </h1>

              <h2>Mobile HEPA Air Filtration System</h2>

              <p className="ecu1-product-description">
                A mobile, three-stage filtration system designed
                for light to moderate-duty capture of smoke, fumes,
                odours and VOCs. Features integrated blower capacity
                up to 210 CFM and electronic filter monitoring.
              </p>

              {/* QUICK METRICS */}
              <div className="ecu1-product-quick-specs">
                {quickSpecs.map((spec) => (
                  <div
                    className="ecu1-product-quick-spec"
                    key={spec.label}
                  >
                    <strong>{spec.value}</strong>
                    <span>{spec.label}</span>
                  </div>
                ))}
              </div>

              {/* PRODUCT TAGS */}
              <div className="ecu1-product-tags">
                <span>3-STAGE FILTRATION</span>
                <span>MOBILE UNIT</span>
                <span>ATS1119</span>
                <span>24 VDC INTERFACE</span>
              </div>

              {/* ACTIONS */}
              <div className="ecu1-product-actions">
                <Link
                  href="/form"
                  className="ecu1-product-button ecu1-product-button-primary"
                >
                  REQUEST A QUOTE <span>↗</span>
                </Link>

                <a
                  href="#ecu1-technical-data"
                  className="ecu1-product-button ecu1-product-button-secondary"
                >
                  TECHNICAL DATA <span>↓</span>
                </a>
              </div>

              <p className="ecu1-product-catalog">
                ACCURATE THERMAL SYSTEMS / CATALOG ATS1119
              </p>
            </div>
          </div>
        </section>

        {/* FOUR-COLUMN SUMMARY STRIP */}
        <section className="ecu1-product-summary">
          <div className="ecu1-product-summary-inner">
            {productStats.map((stat) => (
              <div className="ecu1-product-summary-item" key={stat.label}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL DATA */}
        <section
          className="ecu1-product-technical"
          id="ecu1-technical-data"
        >
          <div className="ecu1-product-technical-heading">
            <span>PRODUCT DATA / ATS1119</span>
            <h2>Technical Specifications</h2>
            <p>
              Review the ECU1 specifications, filtration stages,
              controls and physical details.
            </p>
          </div>

          <div className="ecu1-product-spec-grid">
            {specificationGroups.map((group) => (
              <article
                className="ecu1-product-spec-card"
                key={group.number}
              >
                <div className="ecu1-product-spec-card-heading">
                  <span>{group.number}</span>
                  <h3>{group.title}</h3>
                </div>

                <table className="ecu1-product-spec-table">
                  <tbody>
                    {group.rows.map(([attribute, value]) => (
                      <tr key={attribute}>
                        <th scope="row">{attribute}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            ))}
          </div>

          <p className="ecu1-product-spec-note">
            Confirm application suitability and current technical
            specifications with Accurate Thermal Systems before
            selecting equipment.
          </p>
        </section>

        {/* FILTRATION PROCESS */}
        <section className="ecu1-product-filtration">
          <div className="ecu1-product-filtration-heading">
            <span>FILTRATION / THREE STAGES</span>
            <h2>Designed for multi-stage filtration.</h2>
            <p>
              The ECU1 combines pre-filtration, HEPA filtration
              and activated carbon modules in one mobile system.
            </p>
          </div>

          <div className="ecu1-product-filtration-grid">
            <article>
              <span>01</span>
              <h3>Deep-Pleat Pre-Filter</h3>
              <p>
                First-stage filter rated at 99% efficiency
                at 1 micron.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>HEPA Filter</h3>
              <p>
                Second-stage HEPA filter rated at 99.97%
                efficiency at 0.3 micron.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Activated Carbon</h3>
              <p>
                Two activated carbon modules containing
                30 lbs of carbon each.
              </p>
            </article>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="ecu1-product-cta">
          <span>ACCURATE THERMAL SYSTEMS / ECU1</span>
          <h2>Looking for the right filtration system?</h2>
          <p>
            Contact our team to discuss your application and
            request additional product information.
          </p>

          <div className="ecu1-product-actions">
            <Link
              href="/form"
              className="ecu1-product-button ecu1-product-button-primary"
            >
              CONTACT OUR TEAM <span>↗</span>
            </Link>

            <Link
              href="/products/hepa-air-filtration"
              className="ecu1-product-button ecu1-product-button-secondary"
            >
              ALL HEPA PRODUCTS <span>←</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
