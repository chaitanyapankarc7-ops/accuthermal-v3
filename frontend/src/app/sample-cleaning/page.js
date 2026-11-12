import Link from "next/link";
import "./page.css";

const FORM_URL = "https://accuthermal.com/wp-content/uploads/2018/11/Sample-parts-cleaning-form.pdf";

export default function SampleCleaningPage() {
  return (
    <main className="sample-page">
      <section className="sample-hero">
        <div className="sample-grid" aria-hidden="true" />
        <div className="wrap sample-hero-inner">
          <div>
            <h1>Sample Cleaning</h1>
            <p>Send us an example of your tooling for a complimentary sample cleaning. We’ll clean it, produce a video of the result, and send the parts back.</p>
            <div className="sample-actions"><a className="btn primary" href={FORM_URL} target="_blank" rel="noreferrer">Download the sample cleaning form <span aria-hidden="true">↗</span></a><Link className="btn sample-secondary" href="/applications/thermal-cleaning">Explore thermal cleaning <span aria-hidden="true">→</span></Link></div>
          </div>
        </div>
      </section>

      <section className="sample-overview"><div className="wrap sample-overview-grid"><h2>Send the part. See the result.</h2><div><p>We use a fluidized temperature bath to remove organic material from tooling and metal parts.</p><a className="sample-inline-link" href={FORM_URL} target="_blank" rel="noreferrer">Download and complete the sample cleaning form ↗</a></div></div></section>

      <section className="sample-checklist"><div className="wrap"><h2>Before you ship.</h2><div className="sample-checklist-grid"><span>Up to 3 parts</span><span>4 in. diameter max</span><span>8 in. length max</span><span>15 lb. per part max</span><span>Include the completed form</span><span>Ship to “Attention: Sample cleaning”</span></div></div></section>

      <section className="sample-steps"><div className="wrap"><div className="sample-section-head"><h2>What to send.</h2><p>Complete the official form and include it with your shipment so the team has the details needed to run the test.</p></div><div className="sample-step-list"><div><strong>1</strong><h3>Complete the form</h3><p>Include your company, return address, contact details, part type, polymer, steel type, and current cleaning method.</p></div><div><strong>2</strong><h3>Ship your parts</h3><p>Send no more than three parts. Keep each part to 4 inches in diameter and 8 inches in length or under, with a maximum weight of 15 pounds per part.</p></div><div><strong>3</strong><h3>Review the results</h3><p>Sample cleanings are targeted for a three-business-day turnaround. A video report link is emailed within a day or two of completion.</p></div></div></div></section>

      <section className="sample-address"><div className="wrap sample-address-inner"><div><h2>Where to send the parts.</h2><p>Include the completed form with the shipment and address it to “Attention: Sample cleaning.”</p></div><address>Accurate Thermal Systems LLC<br />4104 Sylon Blvd<br />Hainesport, NJ 08036<br />609-326-3190</address></div></section>
    </main>
  );
}
