import Link from "next/link";
import { getAllApplications } from "../../lib/recommendations";
import "./page.css";

export const metadata = {
  title: "Applications | Accurate Thermal Systems",
  description:
    "Explore every application for fluidized temperature baths and precision thermal systems: polymer removal, heat treatment, reactor heating, and temperature calibration.",
};

const CATEGORIES = [
  { id: "thermal-cleaning", label: "Thermal Cleaning" },
  { id: "shape-setting", label: "Shape Setting & Heat Treatment" },
  { id: "reactor-heating", label: "Reactor Heating" },
  { id: "calibration", label: "Temperature Calibration" },
];

export default function ApplicationsIndexPage() {
  const applications = getAllApplications();

  return (
    <main className="apps-index">
      <header className="apps-index-hero">
        <div className="wrap">
          <div className="eyebrow mono">APPLICATIONS</div>
          <h1>Thermal solutions, built around your process.</h1>
          <p>
            Every application below runs on fluidized temperature baths and precision thermal
            instrumentation. Pick the one closest to your process to see the equipment, the method,
            and the results.
          </p>
        </div>
      </header>

      {CATEGORIES.map((category) => {
        const cards = applications.filter((app) => app.category === category.id);
        if (cards.length === 0) return null;

        return (
          <section className="apps-index-section" key={category.id}>
            <div className="wrap">
              <div className="apps-index-section-head">
                <h2>{category.label}</h2>
                <span className="mono">
                  {`${cards.length} ${cards.length === 1 ? "application" : "applications"}`}
                </span>
              </div>

              <div className="apps-index-grid">
                {cards.map((app) => (
                  <Link key={app.slug} href={app.href} className="apps-index-card">
                    <span className="apps-index-num mono">{app.num}</span>
                    <h3>{app.title}</h3>
                    <p>{app.shortDesc}</p>
                    <span className="apps-index-link">
                      Explore <span aria-hidden="true">&#8594;</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="apps-index-cta">
        <div className="wrap">
          <div className="apps-index-cta-inner">
            <div>
              <h2>Not sure which process fits?</h2>
              <p>
                Tell us about your tooling, polymer, and temperature range and we will size the
                right bath and media for the job.
              </p>
            </div>
            <Link href="/form" className="btn primary">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
