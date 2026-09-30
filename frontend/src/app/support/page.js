"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./page.css";

const SUPPORT_PILLARS = [
  {
    num: "01",
    title: "Application Engineering",
    text: "Bring us the process before you buy the equipment. We size the bath, media, temperature range and cycle time around your tooling, polymer and throughput.",
  },
  {
    num: "02",
    title: "Measurement Accuracy",
    text: "Questions on temperature measurement, sensor selection, uncertainty or drift? Talk to an engineer who has calibrated these instruments for three decades.",
  },
  {
    num: "03",
    title: "Post-Sales Troubleshooting",
    text: "Already running an ATS system and not getting the performance you expected? We will help isolate the cause — sensor, media, setpoint or process.",
  },
];

const RMA_STEPS = [
  {
    num: "01",
    title: "Request an RMA",
    text: "Contact us and we will issue an RMA number for your equipment. Call 609-326-3190 and choose the option for service, or use the form below.",
  },
  {
    num: "02",
    title: "Ship and service",
    text: "Send the instrument to us with the RMA number in place. Our technicians diagnose the fault, then perform the repair or recalibration.",
  },
  {
    num: "03",
    title: "Return and recalibrate",
    text: "Your unit comes back with documentation of the work performed, so you know exactly where it stands before it goes back on the line.",
  },
];

const CAL_STATS = [
  { value: "ISO 17025", label: "Compliant scope" },
  { value: "Low", label: "Measurement uncertainty" },
  { value: "Fast", label: "Turnaround" },
  { value: "Economical", label: "Pricing per instrument" },
];

const CAL_INSTRUMENTS = [
  "Dry Block Calibrators",
  "Thermometers",
  "Temperature Sensors & Systems",
  "RTDs",
  "PRTs",
  "Thermocouples",
  "Laboratory Equipment",
  "Indicators",
];

const DOWNLOADS = [
  {
    title: "Calibration Services Brochure",
    meta: "Uncertainties, accreditation and equipment detail",
    href: "/downloads/temperature-calibration-services-brochure.pdf",
  },
  {
    title: "Sample Calibration Certificate",
    meta: "A typical certificate we issue with every job",
    href: "/downloads/sample-calibration-certificate.pdf",
  },
];

const INTEREST_OPTIONS = [
  { value: "quote", label: "Get a Quote" },
  { value: "fluidized-baths", label: "Fluidized Temperature Baths" },
  { value: "dry-block", label: "Dry Block Temperature Calibrators" },
  { value: "hepa", label: "HEPA Air Filtration" },
  { value: "calibration-services", label: "Calibration Services" },
  { value: "support-service", label: "Product or Application Support and Service" },
  { value: "documentation", label: "Brochures and Documentation" },
  { value: "sample-cleaning", label: "Sample Cleaning" },
  { value: "sample-heat-treatment", label: "Sample Heat Treatment" },
  { value: "other", label: "Other" },
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana",
  "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas",
  "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

export default function SupportPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [message, setMessage] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const quoteRequested = interests.includes("quote");

  const toggleInterest = (value) => {
    setInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !company) return;
    setSubmitted(true);
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("on");
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => io.observe(el));
    return () => els.forEach((el) => io.unobserve(el));
  }, []);

  return (
    <main className="sup-page">
      {/* =====================================================
          HERO
      ===================================================== */}
      <header className="sup-hero">
        <div className="wrap">
          <div className="sup-hero-copy reveal">
            <h1>Support that doesn&apos;t stop at the sale.</h1>
            <p>
              Three decades of combined experience supporting our products and applications, before
              and after the sale. Ask us about your temperature measurement or application and we
              will help you get more accuracy and performance from your equipment.
            </p>
            <div className="buttons">
              <a className="btn primary" href="#contact">
                Request support
              </a>
              <a className="btn" href="tel:6093263190">
                Call 609-326-3190
              </a>
            </div>
          </div>
        </div>

        <div className="sup-hero-media">
          <Image
            src="/assets/images/support/support-image.jpg"
            alt="Accurate Thermal Systems engineers servicing temperature control and calibration equipment"
            width={1471}
            height={596}
            priority
          />
          <div className="sup-hero-chips">
            <span className="mono">ISO 17025 compliant</span>
            <span className="mono">30+ years combined experience</span>
            <span className="mono">RMA service on all ATS equipment</span>
          </div>
        </div>
      </header>

      {/* =====================================================
          01 / PRODUCT & APPLICATION SUPPORT
      ===================================================== */}
      <section className="sup-section sup-support" id="support">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="sup-label mono">01 / Product and application support</div>
              <h2>
                We are happy to assist with your temperature measurement and application questions.
              </h2>
            </div>
            <p>
              Three decades of combined experience means we have already seen the failure you are
              describing. Most support questions are answered on the first call, and the ones that
              are not usually come down to a setpoint, a sensor or a media change.
            </p>
          </div>

          <div className="sup-pillar-grid">
            {SUPPORT_PILLARS.map((pillar) => (
              <article className="sup-pillar reveal" key={pillar.num}>
                <span className="sup-pillar-num mono">{pillar.num}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          02 / PRODUCT SERVICE
      ===================================================== */}
      <section className="sup-section sup-service" id="service">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="sup-label mono">02 / Product service, repair and RMA</div>
              <h2>
                In the unlikely event your ATS product needs repair or calibration.
              </h2>
            </div>
            <p>
              Contact us so we can issue an RMA number, or call 609-326-3190 and choose the option for
              service. Every job is documented before the instrument ships back to you.
            </p>
          </div>

          <ol className="sup-steps">
            {RMA_STEPS.map((step) => (
              <li className="sup-step reveal" key={step.num}>
                <span className="sup-step-num mono">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="sup-callout-grid">
            <div className="sup-callout reveal">
              <div className="sup-label mono">Trade-in and competitive equipment</div>
              <p>
                In some instances, an aging piece of equipment may need a repair that cannot be
                justified economically. In these scenarios, we would happily provide a trade-in
                discount for new replacement equipment. We can also offer a discount for older
                competitor products as well.
              </p>
              <Link className="sup-text-link" href="/form">
                Discuss a trade-in <span aria-hidden="true">&#8594;</span>
              </Link>
            </div>

            <div className="sup-callout sup-callout-dark reveal">
              <div className="sup-label mono">Service line</div>
              <a className="sup-callout-phone" href="tel:6093263190">
                609-326-3190
              </a>
              <p>
                Choose the option for service when you call. For calibration quotations, sample
                cleaning and heat treatment trials, email{" "}
                <a href="mailto:sales@accuthermal.com">sales@accuthermal.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 / NIST TRACEABLE CALIBRATION
      ===================================================== */}
      <section className="sup-section sup-calibration" id="calibration">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="sup-label mono">03 / NIST traceable temperature calibration</div>
              <h2>
                Economical calibration with low measurement uncertainties and a fast turnaround.
              </h2>
            </div>
            <p>
              We offer NIST traceable calibration services on a range of temperature instruments
              and sensors at economical prices with a fast turnaround. Our calibration services are
              ISO17025 compliant and offer low measurement uncertainties.
            </p>
          </div>

          <div className="sup-stats reveal">
            {CAL_STATS.map((stat) => (
              <div className="sup-stat" key={stat.label}>
                <b>{stat.value}</b>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>

          <div className="sup-instruments reveal">
            <div className="sup-label mono">We calibrate</div>
            <div className="sup-instrument-list">
              {CAL_INSTRUMENTS.map((instrument) => (
                <span key={instrument}>{instrument}</span>
              ))}
            </div>
          </div>

          <p className="sup-note reveal">
            All of our measurement and test equipment is calibrated at defined intervals by ISO17025
            primary standards labs, for which we can provide copies of certificates by request.
          </p>

          <div className="sup-downloads">
            {DOWNLOADS.map((download, i) => (
              <a className="sup-download reveal" href={download.href} key={download.href}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <b>{download.title}</b>
                  <small>{download.meta}</small>
                </div>
                <span className="sup-download-ext mono">PDF</span>
                <span className="sup-download-arrow" aria-hidden="true">
                  &#8595;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 / CONTACT
      ===================================================== */}
      <section className="sup-section sup-contact" id="contact">
        <div className="wrap">
          <div className="section-top reveal">
            <div>
              <div className="sup-label mono">04 / Contact us</div>
              <h2>Get a quote, an RMA number, or an answer.</h2>
            </div>
            <p>
              Tell us what you need. If it is a quotation, a service visit or a technical question,
              the same engineers answer both.
            </p>
          </div>

          <div className="sup-form-grid">
            <div className="sup-form-panel reveal">
              {submitted ? (
                <div className="form-success">
                  <span className="form-success-mark">&#10003;</span>
                  <h2>Thank you, {firstName}!</h2>
                  <p>
                    Your request has been received. An Accurate Thermal Systems engineer will contact
                    you shortly at <b>{email}</b>.
                  </p>
                  <Link className="btn primary" href="/">
                    Back to Home &#8594;
                  </Link>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="sup-first-name" className="visually-hidden">
                        First Name <span className="req">(Required)</span>
                      </label>
                      <input
                        id="sup-first-name"
                        type="text"
                        placeholder="First"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="sup-last-name" className="visually-hidden">
                        Last Name <span className="req">(Required)</span>
                      </label>
                      <input
                        id="sup-last-name"
                        type="text"
                        placeholder="Last"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="sup-email">
                      Email <span className="req">(Required)</span>
                    </label>
                    <input
                      id="sup-email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="sup-phone">
                      Phone <span className="req">(Required)</span>
                    </label>
                    <input
                      id="sup-phone"
                      type="tel"
                      placeholder="(000) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="sup-company">
                      Company or Organization <span className="req">(Required)</span>
                    </label>
                    <input
                      id="sup-company"
                      type="text"
                      placeholder="Company name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>

                  <fieldset className="sup-checkgroup">
                    <legend>Area of Interest</legend>
                    <p className="sup-checkgroup-hint">(Select all that apply.)</p>
                    <div className="sup-checkgroup-grid">
                      {INTEREST_OPTIONS.map((option) => (
                        <label className="sup-check" key={option.value}>
                          <input
                            type="checkbox"
                            name="interests"
                            value={option.value}
                            checked={interests.includes(option.value)}
                            onChange={() => toggleInterest(option.value)}
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  {quoteRequested && (
                    <p className="sup-quote-note">
                      If you selected &ldquo;Get a Quote,&rdquo; please provide your company postal
                      address so we may accurately prepare your quotation.
                    </p>
                  )}

                  <div className="form-field">
                    <label htmlFor="sup-address1">
                      Address {quoteRequested && <span className="req">(Required)</span>}
                    </label>
                    <input
                      id="sup-address1"
                      type="text"
                      placeholder="Street Address"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                      required={quoteRequested}
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="sup-address2" className="visually-hidden">
                      Address Line 2
                    </label>
                    <input
                      id="sup-address2"
                      type="text"
                      placeholder="Address Line 2"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </div>
                  <div className="sup-address-row">
                    <div className="form-field">
                      <label htmlFor="sup-city" className="visually-hidden">
                        City
                      </label>
                      <input
                        id="sup-city"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required={quoteRequested}
                      />
                    </div>
                    <div className="form-field sup-field-state">
                      <label htmlFor="sup-state" className="visually-hidden">
                        State / Province / Region
                      </label>
                      <select
                        id="sup-state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required={quoteRequested}
                      >
                        <option value="">State</option>
                        {US_STATES.map((stateName) => (
                          <option key={stateName} value={stateName}>
                            {stateName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field sup-field-zip">
                      <label htmlFor="sup-zip" className="visually-hidden">
                        ZIP / Postal Code
                      </label>
                      <input
                        id="sup-zip"
                        type="text"
                        placeholder="ZIP"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required={quoteRequested}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="sup-message">Message</label>
                    <textarea
                      id="sup-message"
                      rows={5}
                      placeholder="Tell us about your equipment, process or calibration requirements."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  <div className="form-captcha">
                    <span className="captcha-box">
                      <input type="checkbox" id="sup-captcha" required />
                      <label htmlFor="sup-captcha">I&apos;m not a robot</label>
                    </span>
                    <span className="captcha-badge">reCAPTCHA</span>
                  </div>

                  <button type="submit" className="btn primary form-submit">
                    Send message &#8594;
                  </button>
                </form>
              )}
            </div>

            <aside className="contact-info reveal">
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
                <b>Service &amp; Orders:</b>
                <p>
                  Phone: <a href="tel:6093263190">609-326-3190</a>, option #2 for service
                  <br />
                  Fax: 862-229-0407
                </p>
              </div>

              <div className="contact-block">
                <b>Email</b>
                <p>
                  <a href="mailto:sales@accuthermal.com">sales@accuthermal.com</a>
                </p>
              </div>

              <a
                className="btn contact-map-btn"
                href="https://www.google.com/maps/search/?api=1&query=4104+Sylon+Blvd+Hainesport+NJ+08036"
                target="_blank"
                rel="noopener noreferrer"
              >
                Map &amp; Directions &#8594;
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="sup-cta">
        <div className="wrap">
          <div className="sup-cta-inner">
            <div>
              <h2>Not sure where to start?</h2>
              <p>
                Start with the application. It is the fastest way to get the right equipment,
                media and temperature range on the first quote.
              </p>
            </div>
            <div className="buttons">
              <Link className="btn primary" href="/applications">
                Browse applications
              </Link>
              <Link className="btn" href="/products/thermcal">
                Explore products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
