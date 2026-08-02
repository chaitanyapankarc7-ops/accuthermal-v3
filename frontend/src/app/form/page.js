"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../component/Navbar";

export default function ContactFormPage() {
  const [department, setDepartment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!department || !firstName || !lastName || !email || !phone || !company) return;
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <header className="form-hero">
        <div className="wrap">
          <div className="eyebrow mono">Accurate Thermal Systems</div>
          <h1>Contact Us</h1>
          <p>
            Tell us about your application and an engineer will get back to you
            with the right thermal system for the job.
          </p>
        </div>
      </header>

      <section className="form-section">
        <div className="wrap form-grid">
          <div className="form-panel">
            {submitted ? (
              <div className="form-success">
                <span className="form-success-mark">✓</span>
                <h2>Thank you, {firstName}!</h2>
                <p>
                  Your request has been received. An Accurate Thermal Systems
                  engineer will contact you shortly at <b>{email}</b>.
                </p>
                <Link className="btn primary" href="/">
                  Back to Home →
                </Link>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="department">
                    Choose a Department <span className="req">(Required)</span>
                  </label>
                  <select
                    id="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a department
                    </option>
                    <option value="sales">Sales</option>
                    <option value="technical-support">Technical Support</option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="first-name">
                      Name <span className="req">(Required)</span>
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      placeholder="First"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="last-name" className="visually-hidden">
                      Last Name <span className="req">(Required)</span>
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      placeholder="Last"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">
                    Email <span className="req">(Required)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">
                    Phone <span className="req">(Required)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(000) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="company">
                    Company or Organization <span className="req">(Required)</span>
                  </label>
                  <input
                    id="company"
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                  />
                </div>

                <div className="form-captcha">
                  <span className="captcha-box">
                    <input type="checkbox" id="captcha" required />
                    <label htmlFor="captcha">
                      I'm not a robot
                    </label>
                  </span>
                  <span className="captcha-badge">reCAPTCHA</span>
                </div>

                <button type="submit" className="btn primary form-submit">
                  Submit →
                </button>
              </form>
            )}
          </div>

          <aside className="contact-info">
            <h3>How To Reach Us</h3>

            <div className="contact-block">
              <b>Main Address</b>
              <p>
                Accurate Thermal Systems
                <br />
                4104 Sylon Blvd.
                <br />
                Hainesport, NJ 08036 USA
              </p>
            </div>

            <div className="contact-block">
              <b>To Place an Order:</b>
              <p>
                Email:{" "}
                <a href="mailto:sales@accuthermal.com">sales@accuthermal.com</a>
                <br />
                Phone: <a href="tel:6093263190">609-326-3190</a>, option #2
                <br />
                Fax: 862-229-0407
              </p>
            </div>

            <div className="contact-block">
              <b>Billing &amp; Shipping Address</b>
              <p>
                Accurate Thermal Systems
                <br />
                4104 Sylon Blvd.
                <br />
                Hainesport, NJ 08036 USA
              </p>
            </div>

            <a
              className="btn contact-map-btn"
              href="https://www.google.com/maps/search/?api=1&query=4104+Sylon+Blvd+Hainesport+NJ+08036"
              target="_blank"
              rel="noopener noreferrer"
            >
              Map &amp; Directions →
            </a>
          </aside>
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
              <a href="#systems">Fluidized Baths</a>
              <a href="#systems">Dry Block Calibrators</a>
              <a href="#contact">Custom Systems</a>
            </div>
            <div>
              <b>Explore</b>
              <a href="#applications">Applications</a>
              <a href="#technology">Technology</a>
              <a href="#industries">Industries</a>
            </div>
            <div>
              <b>Contact</b>
              <a href="tel:6093263190">609-326-3190</a>
              <a href="mailto:sales@accuthermal.com">sales@accuthermal.com</a>
              <span>Hainesport, New Jersey, USA</span>
            </div>
          </div>
          <div className="legal">© Accuthermal LLC d/b/a Accurate Thermal Systems.</div>
        </div>
      </footer>
    </>
  );
}
