"use client";

import { useEffect, useState } from "react";
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

  return (
    <>
      <Navbar activePage="applications" />

      {/* HERO */}
      <header className="app-detail-hero">
        <div className="wrap">
          <div className="app-detail-hero-content">
            <h1>{app.title}</h1>
            <div className="app-detail-tags">
              {app.tags.map((tag) => (
                <span key={tag} className="app-tag mono">{tag}</span>
              ))}
            </div>
            <div className="app-detail-hero-btns">
              <Link href="/form" className="btn primary" style={{ background: "#fff", color: "var(--red)" }}>
                Request a Quote &#8594;
              </Link>
              <Link href="/products/fluidized-temperature-baths" className="btn" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
                View Products
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
              <div className="eyebrow mono">01 / APPLICATION OVERVIEW</div>
              <h2>{app.title}</h2>
              {app.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {app.beforeAfter?.length > 0 ? (
              <BeforeAfterGallery items={app.beforeAfter} />
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
          <div className="app-detail-benefits-grid reveal">
            <div className="app-benefits-left">
              <div className="eyebrow mono">02 / KEY BENEFITS</div>
              <h2>Why choose {app.title}?</h2>
            </div>
            <div className="app-benefits-right">
              {app.benefits.map((benefit, i) => (
                <div key={i} className="app-benefit-item">
                  <span className="app-benefit-check">&#10003;</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THERMAL CLEANING IN ACTION */}
      {app.video && (
        <section className="app-detail-video">
          <div className="wrap">
            <div className="app-section-header reveal">
              <div>
                <div className="eyebrow mono">03 / SEE IT IN ACTION</div>
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

      {/* RELATED PRODUCTS */}
      <section className="app-detail-products">
        <div className="wrap">
          <div className="eyebrow mono reveal">04 / RELATED PRODUCTS</div>
          <div className="app-detail-product-grid reveal">
            {app.relatedProducts.map((product) => (
              <Link key={product.link} href={product.link} className="app-detail-product-card">
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
              <div className="eyebrow mono">05 / CUSTOMERS</div>
              <h2>Trusted by industry leaders.</h2>
            </div>
            <p>
              From medical device manufacturers to petrochemical labs, our systems
              serve precision-critical operations worldwide.
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
              <Link href="/applications/thermal-cleaning">Thermal Cleaning</Link>
              <Link href="/applications/nitinol-shape-setting">Nitinol Shape Setting</Link>
              <Link href="/applications/reactor-heating">Reactor Heating</Link>
              <Link href="/applications/temperature-calibration">Temperature Calibration</Link>
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
