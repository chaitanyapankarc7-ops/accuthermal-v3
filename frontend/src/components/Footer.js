import Link from "next/link";

export default function Footer() {
  return (
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
            <Link href="/products/hepa-air-filtration">HEPA Filtration</Link>
            <Link href="/products/thermcal">Dry Block Calibrators</Link>
          </div>
          <div>
            <b>Explore</b>
            <Link href="/applications">Applications</Link>
            <Link href="/support">Support &amp; Service</Link>
          </div>
          <div>
            <b>Contact</b>
            <a href="tel:6093263190">609-326-3190</a>
            <a href="mailto:sales@accuthermal.com">sales@accuthermal.com</a>
            <span style={{ fontSize: "12px" }}>Hainesport, New Jersey, USA</span>
          </div>
        </div>
        <div className="legal">© ACCURATE THERMAL SYSTEMS LLC. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
}
