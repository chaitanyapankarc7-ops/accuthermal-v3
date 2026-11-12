import Link from "next/link";
import "./ResourcePage.css";

export function ResourceHero({ title, description, actions = [], showMark = true }) {
  return (
    <section className="resource-hero">
      <div className="wrap resource-hero-grid">
        <div className="resource-hero-copy">
          <h1>{title}</h1>
          <p>{description}</p>
          {actions.length > 0 && <div className="resource-actions">{actions.map((action) => (
            action.href.startsWith("http") ? <a key={action.href} href={action.href} target="_blank" rel="noreferrer" className={`btn ${action.variant || ""}`}>{action.label} <span aria-hidden="true">→</span></a> : <Link key={action.href} href={action.href} className={`btn ${action.variant || ""}`}>{action.label} <span aria-hidden="true">→</span></Link>
          ))}</div>}
        </div>
        {showMark && <div className="resource-hero-mark" aria-hidden="true"><span>ATS</span><strong>RESOURCE<br />LIBRARY</strong></div>}
      </div>
    </section>
  );
}

export function ResourceSection({ title, intro, children, tone = "paper" }) {
  return <section className={`resource-section resource-section-${tone}`}><div className="wrap"><div className="resource-section-head"><div><h2>{title}</h2>{intro && <p>{intro}</p>}</div></div>{children}</div></section>;
}

export function ResourceCard({ title, meta, description, href, label = "OPEN RESOURCE" }) {
  const content = <><div className="resource-card-top"><span className="resource-card-meta mono">{meta}</span><span className="resource-card-arrow" aria-hidden="true">↗</span></div><h3>{title}</h3><p>{description}</p><span className="resource-card-link">{label} <span aria-hidden="true">→</span></span></>;
  return href.startsWith("http") ? <a className="resource-card" href={href} target="_blank" rel="noreferrer">{content}</a> : <Link className="resource-card" href={href}>{content}</Link>;
}

export function ResourceCta({ title, text, href = "/form", label = "TALK TO AN ENGINEER" }) {
  return <section className="resource-cta"><div className="wrap resource-cta-inner"><div><h2>{title}</h2><p>{text}</p></div><Link href={href} className="btn primary">{label} <span aria-hidden="true">→</span></Link></div></section>;
}
