"use client";

import Navbar from "../../component/Navbar";

export default function ThermCal() {
  return (
    <main>
      <Navbar />
      <section style={{ padding: "180px 20px 100px", textAlign: "center", color: "#fff", background: "#071421", minHeight: "100vh" }}>
        <div className="wrap">
          <div className="eyebrow mono" style={{ color: "#00a7e8", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>ATS / PRODUCTS</div>
          <h1 style={{ fontSize: "48px", margin: "20px 0", fontFamily: "Manrope", fontWeight: "800" }}>ThermCal Calibrators</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto 40px", color: "#aebcc7", lineHeight: "1.8" }}>
            Precision dry block temperature calibrators providing a stable, uniform, and portable temperature source for sensor calibration and verification.
          </p>
          <a href="/#contact" className="nav-cta" style={{ display: "inline-block", textDecoration: "none" }}>Request a Quote</a>
        </div>
      </section>
    </main>
  );
}
