"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchOverlay, { openSearch } from "./SearchOverlay";

/* The Navbar lives in the root layout, which cannot know which page it is
   rendering, so fall back to the pathname. All routes are prerendered with
   output: "export" and there are no rewrites, so this resolves on the server
   and matches on hydration. */
function activePageFromPath(pathname) {
  if (!pathname) return undefined;
  const section = pathname.split("/").filter(Boolean)[0];
  return section === "applications" || section === "products" || section === "form"
    ? section === "form"
      ? "contact"
      : section
    : section === ""
      ? "home"
      : section;
}

export default function Navbar({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const current = activePage || activePageFromPath(pathname);

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
              className={current === "home" ? "active" : ""}
            >
              HOME
            </Link>


            {/* ================= APPLICATIONS ================= */}
            <Link
              href="/applications"
              className={current === "applications" ? "active" : ""}
            >
              APPLICATIONS
            </Link>


            {/* ================= PRODUCTS ================= */}
            <div className="nav-dropdown">

              {/* Products is ONLY a dropdown trigger.
                  There is NO /products landing page. */}
              <a
                href="#"
                className={`nav-dropdown-trigger ${
                  current === "products" ? "active" : ""
                }`}
                onClick={(e) => e.preventDefault()}
              >
                PRODUCTS <span className="nav-chevron">⌄</span>
              </a>

  <div
  className="nav-dropdown-menu"
  style={{
    zIndex: 10001,
  }}
 >

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
              href="/form"
              className={current === "contact" ? "active" : ""}
            >
              CONTACT
            </Link>

            <Link
              href="/support"
              className={current === "support" ? "active" : ""}
            >
              SUPPORT
            </Link>

            <Link
              href="/#technology"
              className={current === "videos" ? "active" : ""}
            >
              VIDEOS
            </Link>

            <a href="https://shop.accuthermal.com/">
              SHOP
            </a>


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

            <SearchOverlay />

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
          <Link
            href="/applications"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Applications
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
            href="/form"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/support"
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

          <a
            href="https://shop.accuthermal.com/"
            className="mobile-sub-link"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </a>


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


          {/* SEARCH */}
          <span className="mobile-header-link">
            SEARCH
          </span>

          <button
            type="button"
            className="mobile-sub-link mobile-search-btn"
            onClick={() => {
              setMenuOpen(false);
              openSearch();
            }}
          >
            Search the site
          </button>


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