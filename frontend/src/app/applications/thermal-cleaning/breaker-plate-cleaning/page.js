"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../../../component/Navbar";
import { breakerPlateContent } from "./data";
import "./page.css";

export default function BreakerPlateCleaningPage() {
  const {
    hero,
    problem,
    benefits,
    process,
    polymers,
    temperature,
    hardness,
    manualComparison,
    ovenComparison,
    trial,
    bathModels,
    batchCapacity,
    system,
    contact,
    related,
  } = breakerPlateContent;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("on");
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".breaker-reveal");
    elements.forEach((element) => observer.observe(element));

    return () => elements.forEach((element) => observer.unobserve(element));
  }, []);

  return (
    <>
      <Navbar activePage="applications" />
      <main>
        <header className="breaker-hero">
          <div className="wrap breaker-hero-grid breaker-hero-grid-single">
            <div className="breaker-hero-copy breaker-reveal">
              <div className="eyebrow mono">{hero.eyebrow}</div>
              <h1>{hero.title}</h1>
              <div className="breaker-actions">
                <Link href="/form" className="btn primary">
                  {hero.primaryCta} <span aria-hidden="true">→</span>
                </Link>
                <Link href="/products/fluidized-temperature-baths" className="btn breaker-button-secondary">
                  {hero.secondaryCta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="breaker-section breaker-problem-section" id="manual-cleaning-problem">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{problem.eyebrow}</div>
              <h2>{problem.heading}</h2>
              <p>{problem.intro}</p>
            </div>
            <div className="breaker-problem-grid">
              <div className="breaker-method-card breaker-reveal">
                <span className="breaker-card-label mono">MANUAL CLEANING</span>
                <ul>
                  {problem.manualMethods.map((method) => (
                    <li key={method}>{method}</li>
                  ))}
                </ul>
              </div>
              <div className="breaker-problem-copy breaker-reveal">
                <p>{problem.difficulty}</p>
                <div className="breaker-thermal-callout">
                  <span className="breaker-card-label mono">FLUIDIZED BATH APPROACH</span>
                  <p>{problem.thermalIntro}</p>
                  <p>{problem.thermalOutro}</p>
                </div>
              </div>
            </div>
            <div className="breaker-reach-panel breaker-reveal">
              <div>
                <div className="eyebrow mono">CLEAN THE HOLES YOU CANNOT EASILY REACH</div>
                <h3>Thermal processing does not depend on physically reaching every polymer-filled passage with a tool.</h3>
              </div>
              <div className="breaker-use-list">
                {problem.applications.map((application) => (
                  <span key={application}>{application}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-benefits-section" id="breaker-plate-benefits">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{benefits.eyebrow}</div>
              <h2>{benefits.heading}</h2>
            </div>
            <div className="breaker-benefits-grid">
              {benefits.items.map((benefit, index) => (
                <article className="breaker-benefit-card breaker-reveal" key={benefit.title}>
                  <span className="breaker-card-index mono">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-process-section" id="breaker-plate-process">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{process.eyebrow}</div>
              <h2>{process.heading}</h2>
            </div>
            <div className="breaker-process-grid">
              {process.steps.map((step) => (
                <article className="breaker-process-card breaker-reveal" key={step.step}>
                  <span className="breaker-process-number mono">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="breaker-process-strip breaker-reveal">
              <span>DIRTY PLATE</span>
              <span>LOAD</span>
              <span>BATH</span>
              <span>REMOVE</span>
              <span>AIR BLOW-OFF</span>
              <span>CLEAN HOLES</span>
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-polymer-section" id="breaker-plate-polymers">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{polymers.eyebrow}</div>
              <h2>{polymers.heading}</h2>
              <p>{polymers.intro}</p>
            </div>
            <div className="breaker-polymer-grid">
              {polymers.items.map((polymer, index) => (
                <article className="breaker-polymer-card breaker-reveal" key={polymer.name}>
                  <span className="breaker-card-index mono">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{polymer.name}</h3>
                  <p>{polymer.text}</p>
                  <Link href="/form" className="breaker-inline-cta">
                    {polymer.cta} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
            <div className="breaker-polymer-other breaker-reveal">
              <p>{polymers.otherText}</p>
              <Link href="/form" className="breaker-inline-cta">
                {polymers.otherCta} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-temperature-section" id="breaker-plate-temperature">
          <div className="wrap">
            <div className="breaker-temperature-grid">
              <div className="breaker-section-heading breaker-reveal">
                <div className="eyebrow mono">{temperature.eyebrow}</div>
                <h2>{temperature.heading}</h2>
                <p>{temperature.intro}</p>
                <Link href="/form" className="breaker-inline-cta">
                  {temperature.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="breaker-factor-panel breaker-reveal">
                <span className="breaker-card-label mono">STARTING PROCESS DEPENDS ON</span>
                <ul>
                  {temperature.considerations.map((consideration) => (
                    <li key={consideration}>{consideration}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="breaker-recommendation-panel breaker-reveal">
              {temperature.recommendations.map((recommendation) => (
                <p key={recommendation}>{recommendation}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-hardness-section" id="breaker-plate-hardness">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{hardness.eyebrow}</div>
              <h2>{hardness.heading}</h2>
              <p>{hardness.intro}</p>
            </div>
            <div className="breaker-hardness-grid">
              <div className="breaker-hardness-copy breaker-reveal">
                {hardness.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="breaker-factor-panel breaker-reveal">
                <span className="breaker-card-label mono">THE EFFECT OF CLEANING DEPENDS ON</span>
                <ul>
                  {hardness.factors.map((factor) => (
                    <li key={factor}>{factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-comparison-section" id="breaker-plate-comparison">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{manualComparison.eyebrow}</div>
              <h2>{manualComparison.heading}</h2>
              {manualComparison.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="breaker-comparison-table-wrap breaker-reveal">
              <table className="breaker-comparison-table">
                <thead>
                  <tr>
                    {manualComparison.columns.map((column) => (
                      <th key={column} scope="col">{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {manualComparison.rows.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href="/form" className="breaker-inline-cta breaker-reveal">
              {manualComparison.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="breaker-section breaker-oven-section" id="breaker-plate-heat-transfer">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{ovenComparison.eyebrow}</div>
              <h2>{ovenComparison.heading}</h2>
            </div>
            <div className="breaker-oven-grid">
              <article className="breaker-oven-card breaker-reveal">
                <span className="breaker-card-label mono">BURN-OFF OVEN</span>
                <h3>Hot circulating air</h3>
                <p>{ovenComparison.paragraphs[0]}</p>
                <p>{ovenComparison.paragraphs[1]}</p>
              </article>
              <article className="breaker-oven-card breaker-oven-card-featured breaker-reveal">
                <span className="breaker-card-label mono">FLUIDIZED BATH</span>
                <h3>Hot, moving aluminum oxide</h3>
                <p>{ovenComparison.paragraphs[1]}</p>
                <p>{ovenComparison.paragraphs[2]}</p>
              </article>
            </div>
            <Link href="/form" className="breaker-inline-cta breaker-reveal">
              {ovenComparison.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="breaker-section breaker-trial-section" id="breaker-plate-trial">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{trial.eyebrow}</div>
              <h2>{trial.heading}</h2>
              <p>{trial.intro}</p>
            </div>
            <div className="breaker-trial-grid">
              <ul className="breaker-trial-list breaker-reveal">
                {trial.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="breaker-trial-media breaker-reveal">
                <div className="breaker-media-frame breaker-video-frame">
                  <span className="breaker-media-play" aria-hidden="true">▶</span>
                  <span className="mono">{trial.videoLabel}</span>
                  <small>Featured media slot</small>
                </div>
                <div className="breaker-media-frame breaker-photo-frame">
                  <span className="mono">{trial.photoLabel}</span>
                  <small>Before / after media slot</small>
                </div>
              </div>
            </div>
            <p className="breaker-trial-closing breaker-reveal">{trial.closing}</p>
            <Link href="/applications/thermal-cleaning" className="btn primary breaker-reveal">
              {trial.cta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="breaker-section breaker-models-section" id="breaker-plate-baths">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{bathModels.eyebrow}</div>
              <h2>{bathModels.heading}</h2>
              <p>{bathModels.intro}</p>
            </div>
            <div className="breaker-models-grid">
              {bathModels.models.map((model) => (
                <article className="breaker-model-card breaker-reveal" key={model.name}>
                  <h3>{model.name}</h3>
                  <p>{model.text}</p>
                  <Link href="/products/fluidized-temperature-baths" className="breaker-inline-cta">
                    {model.cta} <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
            <div className="breaker-larger-systems breaker-reveal">
              <div>
                <span className="breaker-card-label mono">LARGER SYSTEMS</span>
                <p>{bathModels.largerText}</p>
              </div>
              <Link href="/products/fluidized-temperature-baths" className="breaker-inline-cta">
                {bathModels.largerCta} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-batch-section" id="breaker-plate-capacity">
          <div className="wrap">
            <div className="breaker-batch-grid">
              <div className="breaker-section-heading breaker-reveal">
                <div className="eyebrow mono">{batchCapacity.eyebrow}</div>
                <h2>{batchCapacity.heading}</h2>
                <p>{batchCapacity.intro}</p>
                <Link href="/form" className="breaker-inline-cta">
                  {batchCapacity.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="breaker-batch-visual breaker-reveal" aria-label="Multi-tier basket with breaker plates">
                <span className="mono">{batchCapacity.photoLabel}</span>
                <div className="breaker-basket-graphic" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <small>Basket / fixture media slot</small>
              </div>
            </div>
            <div className="breaker-batch-factors breaker-reveal">
              {batchCapacity.factors.map((factor) => (
                <span key={factor}>{factor}</span>
              ))}
            </div>
            <p className="breaker-batch-closing breaker-reveal">{batchCapacity.closing}</p>
          </div>
        </section>

        <section className="breaker-section breaker-system-section" id="breaker-plate-system">
          <div className="wrap">
            <div className="breaker-section-heading breaker-reveal">
              <div className="eyebrow mono">{system.eyebrow}</div>
              <h2>{system.heading}</h2>
            </div>
            <div className="breaker-system-grid">
              <div className="breaker-component-list breaker-reveal">
                {system.components.map((component) => (
                  <article key={component.name}>
                    <h3>{component.name}</h3>
                    <p>{component.text}</p>
                  </article>
                ))}
              </div>
              <div className="breaker-system-flow breaker-reveal">
                <span className="breaker-card-label mono">SYSTEM FLOW</span>
                <div className="breaker-flow-diagram">
                  {system.diagram.map((step, index) => (
                    <div key={step}>
                      <span>{step}</span>
                      {index < system.diagram.length - 1 && <b aria-hidden="true">→</b>}
                    </div>
                  ))}
                </div>
                <div className="breaker-system-actions">
                  <Link href="/products/hepa-air-filtration" className="breaker-inline-cta">{system.cta} <span aria-hidden="true">→</span></Link>
                  <Link href="/products/fluidized-temperature-baths" className="breaker-inline-cta">{system.secondaryCta} <span aria-hidden="true">→</span></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-contact-section" id="breaker-plate-contact">
          <div className="wrap">
            <div className="breaker-contact-grid">
              <div className="breaker-section-heading breaker-reveal">
                <div className="eyebrow mono">{contact.eyebrow}</div>
                <h2>{contact.heading}</h2>
                <p>{contact.intro}</p>
                <ul className="breaker-contact-list">
                  {contact.fields.map((field) => (
                    <li key={field}>{field}</li>
                  ))}
                </ul>
              </div>
              <div className="breaker-contact-panel breaker-reveal">
                <div className="breaker-card-label mono">YOUR CLEANING TRIAL</div>
                <h3>{contact.closingHeading}</h3>
                <p>{contact.closing}</p>
                <Link href="/form" className="btn primary">
                  {contact.cta} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="breaker-section breaker-related-section" id="breaker-plate-related">
          <div className="wrap">
            <div className="breaker-related-heading breaker-reveal">
              <div className="eyebrow mono">RELATED APPLICATIONS</div>
              <h2>Continue Exploring Thermal Cleaning</h2>
            </div>
            <div className="breaker-related-grid">
              {related.map((item) => (
                <Link href={item.href} className="breaker-related-card breaker-reveal" key={item.name}>
                  <span>{item.name}</span>
                  <b aria-hidden="true">→</b>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="breaker-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <h3>Accurate Thermal Systems</h3>
              <p>Fluidized temperature baths for polymer removal, thermal processing, and controlled heat transfer.</p>
            </div>
            <div>
              <b>Explore</b>
              <Link href="/applications/thermal-cleaning">Thermal Cleaning</Link>
              <Link href="/applications/extrusion-die-cleaning">Extrusion Die Cleaning</Link>
              <Link href="/applications/extruder-screw-cleaning">Extruder Screw Cleaning</Link>
            </div>
            <div>
              <b>Products</b>
              <Link href="/products/fluidized-temperature-baths">Fluidized Baths</Link>
              <Link href="/products/hepa-air-filtration">HEPA Filtration</Link>
            </div>
            <div>
              <b>Contact</b>
              <a href="tel:6093263190">609-326-3190</a>
              <a href="mailto:sales@accuthermal.com">sales@accuthermal.com</a>
            </div>
          </div>
          <div className="legal">&copy; Accuthermal LLC d/b/a Accurate Thermal Systems.</div>
        </div>
      </footer>
    </>
  );
}
