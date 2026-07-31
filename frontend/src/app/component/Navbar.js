import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="wrap nav">

        {/* BRAND */}
        <Link className="brand" href="/">
          ACCURATE <span>THERMAL</span> SYSTEMS
        </Link>

        {/* NAVIGATION */}
        <div className="links">

          {/* PRODUCTS DROPDOWN */}
          <div className="nav-dropdown">

            <Link href="/products" className="nav-dropdown-trigger">
              PRODUCTS
              <span className="nav-chevron">⌄</span>
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

          <Link href="/#applications">APPLICATIONS</Link>
          <Link href="/#technology">TECHNOLOGY</Link>
          <Link href="/#industries">INDUSTRIES</Link>
          <Link href="/#resources">RESOURCES</Link>

        </div>

        {/* CTA */}
        <Link className="nav-cta" href="/#contact">
          Request a Quote
        </Link>

      </div>
    </nav>
  );
}