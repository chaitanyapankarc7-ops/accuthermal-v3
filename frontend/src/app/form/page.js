"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactFormPage() {
  const [department, setDepartment] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/enquiries/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            department,
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            company: company.trim(),
            source: "contact-page",
          }),
        }
      );

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        const validationErrors = Array.isArray(result.errors)
          ? result.errors
              .map((item) => item.message)
              .filter(Boolean)
              .join(" ")
          : "";

        throw new Error(
          validationErrors ||
            result.message ||
            `Request failed with status ${response.status}.`
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setSubmitError(
        error.message ||
          "Unable to submit your request. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
                    Choose a Department{" "}
                    <span className="req">(Required)</span>
                  </label>

                  <select
                    id="department"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a department
                    </option>

                    <option value="sales">Sales</option>

                    <option value="technical-support">
                      Technical Support
                    </option>
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="first-name">
                      Name <span className="req">(Required)</span>
                    </label>

                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      placeholder="First"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      autoComplete="given-name"
                      maxLength={100}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label
                      htmlFor="last-name"
                      className="visually-hidden"
                    >
                      Last Name <span className="req">(Required)</span>
                    </label>

                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      placeholder="Last"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      autoComplete="family-name"
                      maxLength={100}
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
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">
                    Phone <span className="req">(Required)</span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(000) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    maxLength={20}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="company">
                    Company or Organization{" "}
                    <span className="req">(Required)</span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    autoComplete="organization"
                    maxLength={150}
                    required
                  />
                </div>

                <div className="form-captcha">
                  <span className="captcha-box">
                    <input
                      type="checkbox"
                      id="captcha"
                      name="captcha"
                      required
                    />

                    <label htmlFor="captcha">
                      I&apos;m not a robot
                    </label>
                  </span>

                  <span className="captcha-badge">reCAPTCHA</span>
                </div>

                {submitError && (
                  <p className="form-error" role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn primary form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit →"}
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
                <a href="mailto:sales@accuthermal.com">
                  sales@accuthermal.com
                </a>
                <br />
                Phone: <a href="tel:6093263190">609-326-3190</a>
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
    </>
  );
}