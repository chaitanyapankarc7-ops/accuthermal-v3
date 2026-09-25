"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../component/Navbar";
import BeforeAfterGallery from "../../component/BeforeAfterGallery";
import { getApplicationBySlug, applications } from "../data";
import "./page.css";

export default function ApplicationDetail() {
  const params = useParams();
  const app = getApplicationBySlug(params.slug);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("on");
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => io.observe(el));
    return () => els.forEach((el) => io.unobserve(el));
  }, []);

  if (!app) {
    return (
      <>
        <Navbar />
        <div style={{ padding: "200px 0", textAlign: "center" }}>
        <h1>Application not found</h1>
        <Link href="/" className="btn primary" style={{ marginTop: "20px" }}>
          Back to Home
        </Link>
        </div>
      </>
    );
  }

  const extendedContent = app.extendedContent;

  return (
    <>
      <Navbar activePage="applications" />

      {/* HERO */}
      <header className="app-detail-hero">
        <div className="wrap">
          <div className="app-detail-hero-content">
            <h1>{extendedContent?.hero?.title || app.title}</h1>
            {extendedContent?.hero?.subtitle && (
              <p className="app-detail-hero-subtitle">{extendedContent.hero.subtitle}</p>
            )}
            {extendedContent?.hero?.description && (
              <div className="app-detail-hero-description">
                {extendedContent.hero.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            )}
            <div className="app-detail-tags">
              {app.tags.map((tag) => (
                <span key={tag} className="app-tag mono">{tag}</span>
              ))}
            </div>
            <div className="app-detail-hero-btns">
              <Link href="/form" className="btn primary" style={{ background: "#fff", color: "var(--red)" }}>
                {extendedContent?.hero?.primaryCta || "Request a Quote"} &#8594;
              </Link>
              <Link href="/products/fluidized-temperature-baths" className="btn" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
                {extendedContent?.hero?.secondaryCta || "View Products"}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="app-detail-overview">
        <div className="wrap">
          <div className="app-detail-grid reveal">
            <div className="app-detail-content">
              <div className="eyebrow mono">{extendedContent?.overview?.eyebrow || "01 / APPLICATION OVERVIEW"}</div>
              <h2>{extendedContent?.overview?.heading || app.title}</h2>
              {extendedContent?.overview ? (
                <>
                  <p>{app.description[0]}</p>
                  <ul className="app-buildup-list">
                    {extendedContent.overview.buildupAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                  {app.description.slice(1).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </>
              ) : (
                app.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))
              )}
            </div>
            {app.beforeAfter?.length > 0 ? (
              <BeforeAfterGallery items={app.beforeAfter} />
            ) : extendedContent?.overview ? (
              <div className="app-detail-image-placeholder">
                <div className="app-image-slot app-extended-image-slot app-screw-overview-card">
                  <span className="mono">EXTRUDER SCREW CLEANING</span>
                  <strong>Clean complex geometry without extensive manual scraping.</strong>
                  <small>Thermal processing / fluidized bath</small>
                </div>
              </div>
            ) : app.detailImage ? (
              <div className="app-detail-image-placeholder">
                <div className="app-detail-image-frame">
                  <Image
                    src={app.detailImage.src}
                    alt={app.detailImage.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                  />
                </div>
              </div>
            ) : (
              <div className="app-detail-image-placeholder">
                <div className="app-image-slot">
                  <span>Application Image</span>
                  <small>Add Later</small>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section className="app-detail-benefits">
        <div className="wrap">
          <div className={`app-detail-benefits-grid reveal${extendedContent?.benefits ? " app-extended-benefits-grid" : ""}`}>
            <div className="app-benefits-left">
              <div className="eyebrow mono">{extendedContent?.benefits?.eyebrow || "02 / KEY BENEFITS"}</div>
              <h2>{extendedContent?.benefits?.heading || `Why choose ${app.title}?`}</h2>
            </div>
            {extendedContent?.benefits ? (
              <div className="app-benefit-details-grid">
                {extendedContent.benefits.items.map((benefit, i) => (
                  <article className="app-benefit-detail-card" key={benefit.title}>
                    <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.text}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="app-benefits-right">
                {app.benefits.map((benefit, i) => (
                  <div key={i} className="app-benefit-item">
                    <span className="app-benefit-check">&#10003;</span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMPLEX GEOMETRY — same pattern as KEY BENEFITS, single-column */}
      {app.complexGeometry && (
        <section className="app-detail-benefits">
          <div className="wrap">
            <div className="app-detail-benefits-grid reveal">
              <div className="app-benefits-left">
                <div className="eyebrow mono">
                  {extendedContent ? "03 / HARD-TO-REACH AREAS" : `03 / ${app.complexGeometry.heading.toUpperCase()}`}
                </div>
                <h2>{app.complexGeometry.heading}</h2>
              </div>
              <div className="app-benefits-right">
                <p>{app.complexGeometry.text}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROCESS STEPS — reuses .app-benefit-item card pattern from Key Benefits */}
      {app.process && (
        <section className="app-detail-benefits">
          <div className="wrap">
            <div className="app-section-header reveal">
              <div>
                <div className="eyebrow mono">{extendedContent?.process?.eyebrow || "04 / HOW THE PROCESS WORKS"}</div>
                <h2>{extendedContent?.process?.heading || "How the Cleaning Process Works"}</h2>
              </div>
              {extendedContent?.process && (
                <p>Cycle settings follow the screw, polymer, bath depth, and cleaning target.</p>
              )}
            </div>
            <div className="app-detail-benefits-grid reveal" style={{ gridTemplateColumns: "1fr", gap: "20px" }}>
              <div className="app-benefits-right" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {app.process.map((p) => (
                  <div key={p.step} className="app-benefit-item">
                    <span className="app-benefit-check mono">{p.step}</span>
                    <div>
                      <b>{p.title}</b>
                      <p>{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {extendedContent?.process?.media && (
              <div className="app-screw-process-media reveal">
                <div className="app-screw-process-media-visual">
                  <Image
                    src={extendedContent.process.media.src}
                    alt={extendedContent.process.media.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 360px"
                  />
                  <span className="app-screw-media-label">
                    {extendedContent.process.media.label}
                  </span>
                </div>
                <div className="app-screw-process-media-copy">
                  <div className="eyebrow mono">PROCESS SEQUENCE</div>
                  <p>Load, heat, cool, and finish with light cleanup.</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* THERMAL CLEANING IN ACTION */}
      {app.video && (
        <section className="app-detail-video">
          <div className="wrap">
            <div className="app-section-header reveal">
              <div>
                <div className="eyebrow mono">05 / SEE IT IN ACTION</div>
                <h2>{app.video.heading}</h2>
              </div>
              <p>{app.video.text}</p>
            </div>
            {app.video.src ? (
              <div className={`app-video-slot reveal ${videoPlaying ? "video-playing" : ""}`}>
                <video
                  className="app-video-player"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={app.video.poster}
                  onPlay={() => setVideoPlaying(true)}
                >
                  <source src={app.video.src} type="video/mp4" />
                </video>

                {!videoPlaying && (
                  <button
                    type="button"
                    className="app-video-overlay"
                    onClick={(e) => {
                      const video = e.currentTarget
                        .closest(".app-video-slot")
                        ?.querySelector("video");

                      if (video) {
                        video.play();
                      }
                    }}
                    aria-label={`Play video: ${app.video.title || app.title}`}
                  >
                    <span className="app-video-play" aria-hidden="true">&#9654;</span>
                    <span className="app-video-title">{app.video.title}</span>
                    <small>Watch the process</small>
                  </button>
                )}
              </div>
            ) : (
              <div className="app-video-slot reveal">
                <span className="app-video-play" aria-hidden="true">&#9654;</span>
                <span className="app-video-title">Video Placeholder</span>
                <small>{app.video.placeholder || "Video coming soon"}</small>
              </div>
            )}
          </div>
        </section>
      )}

      {extendedContent?.polymers && (
        <section className="app-extended-section app-polymer-section">
          <div className="wrap">
            <div className="app-extended-section-header reveal">
              <div>
                <div className="eyebrow mono">{extendedContent.polymers.eyebrow}</div>
                <h2>{extendedContent.polymers.heading}</h2>
              </div>
              <p>{extendedContent.polymers.intro}</p>
            </div>
            <div className="app-polymer-grid reveal">
              {extendedContent.polymers.items.map((polymer, i) => (
                <article className="app-polymer-card" key={polymer.name}>
                  <span className="app-polymer-index mono">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{polymer.name}</h3>
                  <p>{polymer.text}</p>
                  <Link href="/form" className="app-inline-cta">
                    {polymer.cta} <span>&#8594;</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {extendedContent?.screwLength && (
        <section className="app-extended-section app-screw-length-section">
          <div className="wrap">
            <div className="app-extended-section-header reveal">
              <div>
                <div className="eyebrow mono">{extendedContent.screwLength.eyebrow}</div>
                <h2>{extendedContent.screwLength.heading}</h2>
              </div>
              <p>{extendedContent.screwLength.paragraphs[0]}</p>
            </div>
            <div className="app-screw-length-layout reveal">
              <div className="app-screw-length-copy">
                {extendedContent.screwLength.paragraphs.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <Link href="/form" className="app-inline-cta">
                  {extendedContent.screwLength.cta} <span>&#8594;</span>
                </Link>
              </div>
              <div className="app-depth-panel">
                <div className="app-depth-panel-label">BATH WORKING DEPTH</div>
                <div className="app-depth-visual">
                  <div className="app-depth-line"></div>
                  <div className="app-depth-screw">
                    <span></span><span></span><span></span><span></span><span></span>
                  </div>
                  <div className="app-depth-measure">
                    <span>POSITION 01</span>
                    <span>POSITION 02</span>
                    <span>POSITION 03</span>
                  </div>
                </div>
                <p>Use sectional processing or a deeper bath to reduce loading positions.</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {extendedContent?.sectionalCleaning && (
        <section className="app-extended-section app-sectional-section">
          <div className="wrap">
            <div className="app-extended-section-header reveal">
              <div>
                <div className="eyebrow mono">{extendedContent.sectionalCleaning.eyebrow}</div>
                <h2>{extendedContent.sectionalCleaning.heading}</h2>
              </div>
              <p>{extendedContent.sectionalCleaning.intro}</p>
            </div>
            <div className="app-sectional-layout reveal">
              <div className="app-sectional-copy">
                <p>{extendedContent.sectionalCleaning.occasional}</p>
                <p>{extendedContent.sectionalCleaning.frequent}</p>
                <Link href="/form" className="app-inline-cta">
                  {extendedContent.sectionalCleaning.cta} <span>&#8594;</span>
                </Link>
              </div>
              <div className="app-factor-panel">
                <span className="app-factor-panel-label">POSITION FACTORS</span>
                <ul>
                  {extendedContent.sectionalCleaning.factors.map((factor) => (
                    <li key={factor}>{factor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {extendedContent?.surfaceTreatment && (
        <section className="app-extended-section app-guidance-section">
          <div className="wrap">
            <div className="app-extended-section-header app-extended-section-header-single reveal">
              <div>
                <div className="eyebrow mono">{extendedContent.surfaceTreatment.eyebrow}</div>
                <h2>{extendedContent.surfaceTreatment.heading}</h2>
              </div>
            </div>
            <div className="app-guidance-card reveal">
              {extendedContent.surfaceTreatment.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {extendedContent?.temperature && (
        <section className="app-extended-section app-temperature-section">
          <div className="wrap">
            <div className="app-extended-section-header reveal">
              <div>
                <div className="eyebrow mono">{extendedContent.temperature.eyebrow}</div>
                <h2>{extendedContent.temperature.heading}</h2>
              </div>
              <p>{extendedContent.temperature.paragraphs[0]}</p>
            </div>
            <div className="app-temperature-layout reveal">
              <div className="app-temperature-copy">
                <p>{extendedContent.temperature.paragraphs[1]}</p>
                <p>{extendedContent.temperature.closing}</p>
                <Link href="/form" className="app-inline-cta">
                  {extendedContent.temperature.cta} <span>&#8594;</span>
                </Link>
              </div>
              <div className="app-temperature-factors">
                <span className="app-factor-panel-label">IMPORTANT CONSIDERATIONS</span>
                <ul>
                  {extendedContent.temperature.considerations.map((consideration) => (
                    <li key={consideration}>{consideration}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {extendedContent?.manualComparison && (
        <section className="app-extended-section app-comparison-section">
          <div className="wrap">
            <div className="app-extended-section-header app-extended-section-header-single reveal">
              <div>
                <div className="eyebrow mono">{extendedContent.manualComparison.eyebrow}</div>
                <h2>{extendedContent.manualComparison.heading}</h2>
              </div>
            </div>
            <div className="app-comparison-wrap reveal">
              <table className="app-comparison-table">
                <thead>
                  <tr>
                    {extendedContent.manualComparison.columns.map((column) => (
                      <th key={column}>{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {extendedContent.manualComparison.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={`${row[0]}-${i}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link href="/form" className="app-inline-cta reveal">
              {extendedContent.manualComparison.cta} <span>&#8594;</span>
            </Link>
          </div>
        </section>
      )}

      {extendedContent?.ovenComparison && (
        <section className="app-extended-section app-oven-section">
          <div className="wrap">
            <div className="app-extended-section-header app-extended-section-header-single reveal">
              <div>
                <div className="eyebrow mono">{extendedContent.ovenComparison.eyebrow}</div>
                <h2>{extendedContent.ovenComparison.heading}</h2>
              </div>
            </div>
            <div className="app-oven-comparison reveal">
              <article className="app-oven-column">
                <span className="app-oven-label">BURN-OFF OVEN</span>
                <h3>Hot circulating air</h3>
                <p>{extendedContent.ovenComparison.paragraphs[0]}</p>
                <p>{extendedContent.ovenComparison.paragraphs[1]}</p>
              </article>
              <article className="app-oven-column app-oven-column-featured">
                <span className="app-oven-label">FLUIDIZED BATH</span>
                <h3>Heated, moving aluminum oxide</h3>
                <p>{extendedContent.ovenComparison.paragraphs[2]}</p>
                <p>{extendedContent.ovenComparison.paragraphs[3]}</p>
              </article>
            </div>
            <Link href="/form" className="app-inline-cta reveal">
              {extendedContent.ovenComparison.cta} <span>&#8594;</span>
            </Link>
          </div>
        </section>
      )}

      {/* RELATED PRODUCTS */}
      <section className="app-detail-products">
        <div className="wrap">
          <div className="eyebrow mono reveal">{extendedContent ? "12 / RELATED PRODUCTS" : "06 / RELATED PRODUCTS"}</div>
          <div className="app-detail-product-grid reveal">
            {app.relatedProducts.map((product) => (
              <Link key={product.name} href={product.link} className="app-detail-product-card">
                <h3>{product.name}</h3>
                <span className="app-detail-product-link">
                  Learn More <span>&#8594;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="app-detail-customers">
        <div className="wrap">
          <div className="app-section-header reveal">
            <div>
              <div className="eyebrow mono">{extendedContent ? "13 / CUSTOMERS" : "07 / CUSTOMERS"}</div>
              <h2>Trusted by industry leaders.</h2>
            </div>
            <p>
              Medical, chemical, and industrial teams rely on our systems.
            </p>
          </div>
          <div className="app-detail-customer-placeholder reveal">
            <div className="app-customer-slot">
              <span>Customer Logos</span>
              <small>Add from /assets/images/customers/{app.customerCategory}/</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="app-detail-cta">
        <div className="wrap app-detail-cta-inner reveal">
          <div>
            <div className="eyebrow mono" style={{ color: "#fff" }}>{app.ctaTitle}</div>
            <h2>{app.ctaText}</h2>
          </div>
          <Link href="/form" className="btn primary" style={{ background: "#fff", color: "var(--red)" }}>
            Request a Quote &#8594;
          </Link>
        </div>
      </section>

      {/* OTHER APPLICATIONS */}
      <section className="app-detail-other">
        <div className="wrap">
          <div className="eyebrow mono reveal">EXPLORE MORE APPLICATIONS</div>
          <div className="app-detail-other-grid reveal">
            {applications
              .filter((a) => a.slug !== app.slug)
              .map((a) => (
                <Link key={a.slug} href={`/applications/${a.slug}`} className="app-detail-other-card">
                  <span className="app-detail-other-num mono">{a.num}</span>
                  <h3>{a.title}</h3>
                  <p>{a.shortDesc}</p>
                  <span className="app-detail-other-link">
                    Explore <span>&#8594;</span>
                  </span>
                </Link>
              ))}
          </div>
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
              <Link href="/products/fluidized-temperature-baths">Fluidized Baths</Link>
              <Link href="/products/thermcal">Dry Block Calibrators</Link>
              <Link href="/products/hepa-air-filtration">HEPA Filtration</Link>
            </div>
            <div>
              <b>Applications</b>
              {applications.map((application) => (
                <Link key={application.slug} href={`/applications/${application.slug}`}>
                  {application.title}
                </Link>
              ))}
            </div>
            <div>
              <b>Contact</b>
              <a href="tel:6093263190">609-326-3190</a>
              <a href="mailto:sales@accuthermal.com">sales@accuthermal.com</a>
              <span>Hainesport, New Jersey, USA</span>
            </div>
          </div>
          <div className="legal">&copy; Accuthermal LLC d/b/a Accurate Thermal Systems.</div>
        </div>
      </footer>
    </>
  );
}
