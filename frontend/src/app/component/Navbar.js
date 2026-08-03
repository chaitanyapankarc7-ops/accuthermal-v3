"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ activePage, setActiveApp }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAppClick = (appIndex) => {
    setMenuOpen(false);
    if (setActiveApp) {
      setActiveApp(appIndex);
      const el = document.getElementById("applications");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/?app=${appIndex}`;
    }
  };

  return (
    <>
      <nav>
        <div className="wrap nav">
          {/* BRAND LOGO */}
          <Link className="brand" href="/">
            <img src="/assets/images/ats-logo.png" alt="Accurate Thermal Systems" className="nav-logo" />
          </Link>

          {/* NAVIGATION LINKS */}
          <div className="links">

            <Link href="/" className={activePage === "home" ? "active" : ""}>
  HOME
</Link>
            {/* PRODUCTS DROPDOWN */}
            <div className="nav-dropdown">
              <Link href="/products" className={activePage === "products" ? "active" : ""}>
                PRODUCTS <span className="nav-chevron">⌄</span>
              </Link>
              <div className="nav-dropdown-menu">
                <Link href="/products" className="dropdown-all">
                  <span>00</span>
                  <div>
                    <b>All Products</b>
                    <small>Explore ATS thermal systems</small>
                  </div>
                </Link>
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
                    <small>Temperature calibration</small>
                  </div>
                </Link>
                <Link href="/products/hepa-air-filtration">
                  <span>03</span>
                  <div>
                    <b>HEPA Air Filtration</b>
                    <small>Process air filtration</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* APPLICATIONS DROPDOWN */}
            <div className="nav-dropdown">
              <Link href="/#applications" className={activePage === "applications" ? "active" : ""}>
                APPLICATIONS <span className="nav-chevron">⌄</span>
              </Link>
              <div className="nav-dropdown-menu">
                <Link href="/#applications" className="dropdown-all" onClick={() => handleAppClick(0)}>
                  <span>00</span>
                  <div>
                    <b>All Applications</b>
                    <small>Explore ATS process capabilities</small>
                  </div>
                </Link>
                <a href="#applications" onClick={(e) => { e.preventDefault(); handleAppClick(0); }}>
                  <span>01</span>
                  <div>
                    <b>Tool and Parts Cleaning</b>
                    <small>Remove plastics and organic compounds</small>
                  </div>
                </a>
                <a href="#applications" onClick={(e) => { e.preventDefault(); handleAppClick(1); }}>
                  <span>02</span>
                  <div>
                    <b>Nitinol Shape Setting</b>
                    <small>Controlled heating for medical devices</small>
                  </div>
                </a>
                <a href="#applications" onClick={(e) => { e.preventDefault(); handleAppClick(3); }}>
                  <span>03</span>
                  <div>
                    <b>Reactor Heating</b>
                    <small>Thermal support for process vessels</small>
                  </div>
                </a>
                <a href="#applications" onClick={(e) => { e.preventDefault(); handleAppClick(2); }}>
                  <span>04</span>
                  <div>
                    <b>Temperature Calibration</b>
                    <small>Stable environments for sensors</small>
                  </div>
                </a>
              </div>
            </div>

            <Link href="/#contact" className={activePage === "contact" ? "active" : ""}>CONTACT</Link>
            <Link href="/#resources" className={activePage === "support" ? "active" : ""}>SUPPORT</Link>
            <Link href="/#technology" className={activePage === "videos" ? "active" : ""}>VIDEOS</Link>
            <Link href="/#resources" className={activePage === "shop" ? "active" : ""}>SHOP</Link>

            <div className="nav-dropdown">
              <a href="#" className="nav-dropdown-trigger">
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

          {/* CTA & SEARCH */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/#contact" className="nav-cta">
              GET A QUOTE
            </Link>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "18px", cursor: "pointer", color: "#00a7e8" }}>
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>

          {/* HAMBURGER FOR MOBILE */}
          <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* MOBILE NAV OVERLAY */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-links" style={{ overflowY: "auto", maxHeight: "100vh", padding: "100px 20px 40px" }}>
          <span className="mobile-header-link">Products</span>
          <Link href="/products" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>All Products</Link>
          <Link href="/products/fluidized-temperature-baths" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Fluidized Temperature Baths</Link>
          <Link href="/products/thermcal" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Dry Block Calibrators</Link>
          <Link href="/products/hepa-air-filtration" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>HEPA Filtration</Link>
          
          <span className="mobile-header-link">Applications</span>
          <a href="#" className="mobile-sub-link" onClick={(e) => { e.preventDefault(); handleAppClick(0); }}>Tool and Parts Cleaning</a>
          <a href="#" className="mobile-sub-link" onClick={(e) => { e.preventDefault(); handleAppClick(1); }}>Nitinol Shape Setting</a>
          <a href="#" className="mobile-sub-link" onClick={(e) => { e.preventDefault(); handleAppClick(3); }}>Reactor Heating</a>
          <a href="#" className="mobile-sub-link" onClick={(e) => { e.preventDefault(); handleAppClick(2); }}>Temperature Calibration</a>

          <span className="mobile-header-link">Navigation</span>
          <Link href="/#contact" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/#resources" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Support</Link>
          <Link href="/#technology" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Videos</Link>
          <Link href="/#resources" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Shop</Link>

          <span className="mobile-header-link" style={{ marginTop: "15px" }}>More</span>
          <Link href="/#systems" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Calibration Services</Link>
          <Link href="/#resources" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>Resources</Link>
          <Link href="/#about" className="mobile-sub-link" onClick={() => setMenuOpen(false)}>About</Link>
          
          <Link href="/#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>GET A QUOTE</Link>
        </div>
      </div>
    </>
  );
}