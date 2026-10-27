
import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

const productStats = [
  { label: "01 / AIRFLOW", value: "750 CFM" },
  { label: "02 / FILTRATION", value: "99.97% HEPA" },
  { label: "03 / INSTRUMENT", value: "3-Stage System" },
  { label: "04 / CATALOG", value: "ATS1126" },
];

const quickSpecs = [
  { value: "750 CFM", label: "MAX AIRFLOW" },
  { value: "99.97%", label: "HEPA EFFICIENCY" },
  { value: "60 dBA", label: "NOISE LEVEL" },
  { value: "40 lbs", label: "CARBON MODULES" },
];

const specificationGroups = [
  {
    title: "Airflow & Connections",
    number: "01",
    rows: [
      ["Catalog Number", "ATS1126"],
      ["Inlet / Outlet Plenum", '6″ OD inlet / 6″ OD outlet'],
      ["Maximum Air Flow", "750 CFM @ 19 WC"],
      ["Blower Capacity", "Integrated up to 750 CFM"],
    ],
  },
  {
    title: "Filtration System",
    number: "02",
    rows: [
      ["Filter Configuration", "3-stage filtration"],
      ["1st Stage Filter", "Deep-pleat pre-filter, 99% efficient @ 1 micron"],
      ["2nd Stage Filter", "HEPA filter, 99.97% efficient @ 0.3 micron"],
      ["3rd Stage Filter", "2 modules × 40 lbs activated carbon"],
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
      [
        "Applications",
        "Moderate to heavy-duty smoke, fume, odour and VOC capture",
      ],
      ["Configuration", "Mobile with 4 castor wheels, 2 locking"],
      ["Noise Level", "60 dBA"],
      ["Dimensions (W × D × H)", '24″ × 35″ × 52″'],
      ["Weight", "490 lbs. with filters installed"],
    ],
  },
];

export default function ModelECU2Page() {
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
                  src="/assets/images/heap_air/Screenshot 2026-10-20 022321.png"
                  alt="Accurate Thermal Systems ECU2 HEPA air filtration system"
                  width={800}
                  height={800}
                  priority
                  className="ecu1-product-image"
                />
              </div>

              <div className="ecu1-product-image-label">
                <span>MODEL</span>
                <strong>ECU2</strong>
              </div>

              <span className="ecu1-product-image-index">
                02 / 02
              </span>
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
                ATS1126 / HEPA AIR FILTRATION
              </span>

              <h1>
                ECU<span>2</span>
              </h1>

              <h2>High-Capacity HEPA Air Filtration System</h2>

              <p className="ecu1-product-description">
                A mobile, three-stage filtration system designed
                for moderate to heavy-duty capture of smoke, fumes,
                odours and VOCs. Features integrated blower capacity
                up to 750 CFM and electronic filter monitoring.
              </p>

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

              <div className="ecu1-product-tags">
                <span>3-STAGE FILTRATION</span>
                <span>HIGH CAPACITY</span>
                <span>ATS1126</span>
                <span>24 VDC INTERFACE</span>
              </div>

              <div className="ecu1-product-actions">
                <Link
                  href="/form"
                  className="ecu1-product-button ecu1-product-button-primary"
                >
                  REQUEST A QUOTE <span>↗</span>
                </Link>

                <a
                  href="#ecu2-technical-data"
                  className="ecu1-product-button ecu1-product-button-secondary"
                >
                  TECHNICAL DATA <span>↓</span>
                </a>
              </div>

              <p className="ecu1-product-catalog">
                ACCURATE THERMAL SYSTEMS / CATALOG ATS1126
              </p>
            </div>
          </div>
        </section>

        {/* FOUR-COLUMN SUMMARY */}
        <section className="ecu1-product-summary">
          <div className="ecu1-product-summary-inner">
            {productStats.map((stat) => (
              <div
                className="ecu1-product-summary-item"
                key={stat.label}
              >
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SPECIFICATIONS */}
        <section
          className="ecu1-product-technical"
          id="ecu2-technical-data"
        >
          <div className="ecu1-product-technical-heading">
            <span>PRODUCT DATA / ATS1126</span>
            <h2>Technical Specifications</h2>
            <p>
              Review the ECU2 specifications, filtration stages,
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
            <h2>Capacity for demanding applications.</h2>
            <p>
              ECU2 combines pre-filtration, HEPA filtration and
              higher-capacity activated carbon modules in a mobile
              filtration system.
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
                40 lbs of carbon each.
              </p>
            </article>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="ecu1-product-cta">
          <span>ACCURATE THERMAL SYSTEMS / ECU2</span>
          <h2>Need a higher-capacity filtration system?</h2>
          <p>
            Contact our team to discuss your application and
            request additional product information for ECU2.
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
