"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";
import { applications } from "./data";
import "./page.css";

export default function Applications() {
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

  return (
    <>
      <Navbar activePage="applications" />

      {/* HERO */}
      <header className="app-hero">
        <div className="wrap">
          <div className="app-hero-content">
            <div className="eyebrow mono" style={{ color: "#fff" }}>
              ACCURATE THERMAL SYSTEMS
            </div>
            <h1>APPLICATIONS &amp; INDUSTRIES</h1>
            <p>
              Start with the process, not the product number. Explore how Accurate Thermal Systems
              equipment supports thermal cleaning, heat treatment, calibration, reactor heating and
              specialized industrial applications.
            </p>
            <div className="app-hero-links">
              <Link href="/" className="btn" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}>
                HOME
              </Link>
              <Link href="/form" className="btn primary" style={{ background: "#fff", color: "var(--red)" }}>
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
        <div className="app-hero-bar"></div>
      </header>

      {/* APPLICATION CARDS */}
      <section className="app-cards-section">
        <div className="wrap">
          <div className="app-section-header reveal">
            <div>
              <div className="eyebrow mono">01 &middot; Applications</div>
              <h2>Start with the process, not the product number.</h2>
            </div>
            <p>
              Select an application to understand the role of the thermal system before moving into
              models, specifications and technical documentation.
            </p>
          </div>

          <div className="app-card-grid reveal">
            {applications.map((app) => (
              <Link key={app.slug} href={`/applications/${app.slug}`} className="app-card">
                <div className="app-card-img">
                  <img src={app.heroImage} alt={app.title} loading="lazy" />
                </div>
                <div className="app-card-body">
                  <span className="app-card-num mono">{app.num}</span>
                  <h3>{app.title}</h3>
                  <p>{app.shortDesc}</p>
                  <span className="app-card-link">
                    Explore <span>&#8594;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMERS */}
      <section className="app-customers-section">
        <div className="wrap">
          <div className="app-section-header reveal">
            <div>
              <div className="eyebrow mono">02 &middot; Customers</div>
              <h2>Trusted across industries.</h2>
            </div>
            <p>
              From medical device manufacturers to petrochemical labs, our systems
              serve precision-critical operations worldwide.
            </p>
          </div>
          <div className="app-customer-logos reveal">
            {[
              { cat: "Thermal Cleaning", count: "24+" },
              { cat: "Shape Setting & Heat Treatment", count: "13+" },
              { cat: "Temperature Calibration", count: "6+" },
              { cat: "Reactor Heating", count: "5+" },
            ].map((c) => (
              <div key={c.cat} className="app-customer-stat">
                <b>{c.count}</b>
                <span>{c.cat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="app-cta-section">
        <div className="wrap app-cta-grid reveal">
          <h2>
            Need a thermal system built around <span>your application?</span>
          </h2>
          <Link href="/form" className="btn primary" style={{ background: "#fff", color: "var(--red)" }}>
            Request a Quote &#8594;
          </Link>
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
