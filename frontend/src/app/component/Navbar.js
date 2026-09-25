"use client";

import { useState } from "react";
import Link from "next/link";
import { applications } from "../applications/data";

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="wrap nav">

          {/* BRAND LOGO */}
          <Link className="brand" href="/">
            <img
              src="/assets/images/ats-logo.png"
              alt="Accurate Thermal Systems"
              className="nav-logo"
            />
          </Link>

          {/* ================= NAVIGATION ================= */}
          <div className="links">

            {/* HOME */}
            <Link
              href="/"
              className={activePage === "home" ? "active" : ""}
            >
              HOME
            </Link>


            {/* ================= APPLICATIONS ================= */}
            <div className="nav-dropdown">

              <a
                href="#"
                className={`nav-dropdown-trigger ${
                  activePage === "applications" ? "active" : ""
                }`}
                onClick={(e) => e.preventDefault()}
              >
                APPLICATIONS <span className="nav-chevron">⌄</span>
              </a>

              <div className="nav-dropdown-menu">

                {applications.map((app) => (
                  <Link key={app.slug} href={`/applications/${app.slug}`}>
                    <span>{app.num}</span>
                    <div>
                      <b>{app.title}</b>
                      <small>{app.navSubtitle}</small>
                    </div>
                  </Link>
                ))}

                <Link href="/applications/thermal-cleaning/breaker-plate-cleaning">
                  <span>07</span>
                  <div>
                    <b>Breaker Plate Cleaning</b>
                    <small>Thermal cleaning for polymer-filled holes</small>
                  </div>
                </Link>

              </div>
            </div>


            {/* ================= PRODUCTS ================= */}
            <div className="nav-dropdown">

              {/* Products is ONLY a dropdown trigger.
                  There is NO /products landing page. */}
              <a
                href="#"
                className={`nav-dropdown-trigger ${
                  activePage === "products" ? "active" : ""
                }`}
                onClick={(e) => e.preventDefault()}
              >
                PRODUCTS <span className="nav-chevron">⌄</span>
              </a>

              <div className="nav-dropdown-menu">

                <Link href="/products/fluidized-temperature-baths">
                  <span>01</span>
                  <div>
                    <b>Fluidized Temperature Baths</b>
                    <small>Thermal processing systems</small>
                  </div>
                </Link>

                <Link href="/products/thermcal">
                  <span>02</span>
                  <div>
                    <b>ThermCal Dry Block Calibrators</b>
                    <small>Temperature calibration systems</small>
                  </div>
                </Link>

                <Link href="/products/hepa-air-filtration">
                  <span>03</span>
                  <div>
                    <b>HEPA Air Filtration</b>
                    <small>Process air filtration systems</small>
                  </div>
                </Link>

              </div>
            </div>


            {/* ================= MAIN LINKS ================= */}

            <Link
              href="/#contact"
              className={activePage === "contact" ? "active" : ""}
            >
              CONTACT
            </Link>

            <Link
              href="/#resources"
              className={activePage === "support" ? "active" : ""}
            >
              SUPPORT
            </Link>

            <Link
              href="/#technology"
              className={activePage === "videos" ? "active" : ""}
            >
              VIDEOS
            </Link>

            <Link
              href="/#resources"
              className={activePage === "shop" ? "active" : ""}
            >
              SHOP
            </Link>


            {/* ================= MORE ================= */}
            <div className="nav-dropdown">

              <a
                href="#"
                className="nav-dropdown-trigger"
                onClick={(e) => e.preventDefault()}
              >
                + MORE <span className="nav-chevron">⌄</span>
              </a>

              <div className="nav-dropdown-menu">

                <Link href="/#systems">
                  <span>01</span>
                  <div>
                    <b>Calibration Services</b>
                    <small>ATS validation & support</small>
                  </div>
                </Link>

                <Link href="/#resources">
                  <span>02</span>
                  <div>
                    <b>Resources</b>
                    <small>Technical library and brochures</small>
                  </div>
                </Link>

                <Link href="/#about">
                  <span>03</span>
                  <div>
                    <b>About ATS</b>
                    <small>Engineering experience & company history</small>
                  </div>
                </Link>

              </div>
            </div>

          </div>


          {/* ================= CTA + SEARCH ================= */}
          <div
            className="nav-actions"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >

            <Link href="/form" className="nav-cta">
              GET A QUOTE
            </Link>

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                marginLeft: "18px",
                cursor: "pointer",
                color: "#00a7e8",
              }}
            >
              <circle cx="11" cy="11" r="8" />
              <line
                x1="21"
                y1="21"
                x2="16.65"
                y2="16.65"
              />
            </svg>

          </div>


          {/* ================= MOBILE HAMBURGER ================= */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="mobile-close-x">
            <span></span>
            <span></span>
          </span>
        </button>

        <div
          className="mobile-links"
          style={{
            overflowY: "auto",
            maxHeight: "100vh",
            padding: "100px 20px 40px",
          }}
        >

          {/* APPLICATIONS */}
          <span className="mobile-header-link">
            APPLICATIONS
          </span>

          {applications.map((app) => (
            <Link
              key={app.slug}
              href={`/applications/${app.slug}`}
              className="mobile-sub-link"
              onClick={() => setMenuOpen(false)}
            >
              {app.title}
            </Link>
          ))}

          <Link
            href="/applications/thermal-cleaning/breaker-plate-cleaning"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Breaker Plate Cleaning
          </Link>


          {/* PRODUCTS */}
          <span className="mobile-header-link">
            PRODUCTS
          </span>

          <Link
            href="/products/fluidized-temperature-baths"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Fluidized Temperature Baths
          </Link>

          <Link
            href="/products/thermcal"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            ThermCal Dry Block Calibrators
          </Link>

          <Link
            href="/products/hepa-air-filtration"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            HEPA Air Filtration
          </Link>


          {/* NAVIGATION */}
          <span className="mobile-header-link">
            NAVIGATION
          </span>

          <Link
            href="/"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/#contact"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/#resources"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Support
          </Link>

          <Link
            href="/#technology"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Videos
          </Link>

          <Link
            href="/#resources"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>


          {/* MORE */}
          <span
            className="mobile-header-link"
            style={{ marginTop: "15px" }}
          >
            MORE
          </span>

          <Link
            href="/#systems"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Calibration Services
          </Link>

          <Link
            href="/#resources"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Resources
          </Link>

          <Link
            href="/#about"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            About ATS
          </Link>


          {/* CTA */}
          <Link
            href="/form"
            className="mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            GET A QUOTE
          </Link>

        </div>
      </div>
    </>
  );
}