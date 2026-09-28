"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { getApplicationRecommendations, PERSONALISED_REASON } from "../lib/recommendations";
import { recordView } from "../lib/search-history";
import "./ApplicationRecommendations.css";

const subscribe = () => () => {};

/* False during prerender and on the first client render, true afterwards.
   Reading this visitor's local history before hydration would reorder the rails
   relative to the prerendered HTML. */
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}

function ApplicationCard({ item }) {
  return (
    <Link href={item.href} className="rec-card">
      <span className="rec-card-num mono">{item.num}</span>

      <div className="rec-card-body">
        <h3>{item.title}</h3>
        <p>{item.shortDesc || item.subtitle}</p>

        {item.reason && <span className="rec-card-reason">{item.reason}</span>}
      </div>

      <span className="rec-card-go" aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
}

function ProductCard({ product }) {
  return (
    <div className="rec-product">
      <div className="rec-product-body">
        <h3>{product.name}</h3>
        <p>{product.subtitle}</p>

        {product.keywords.length > 0 && (
          <ul className="rec-product-tags">
            {product.keywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        )}

        {product.reason && <span className="rec-product-reason">{product.reason}</span>}
      </div>

      <div className="rec-product-actions">
        <Link href={product.href} className="rec-product-link">
          View product <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link href="/form" className="rec-product-quote">
          Get a quote
        </Link>
      </div>
    </div>
  );
}

function Rail({ eyebrow, title, lede, items, className = "" }) {
  if (items.length === 0) return null;

  return (
    <section className={`rec-rail ${className}`.trim()}>
      <div className="rec-rail-head reveal">
        <div className="eyebrow mono">{eyebrow}</div>
        <h2>{title}</h2>
        {lede && <p>{lede}</p>}
      </div>

      <div className={`rec-grid rec-grid-${Math.min(items.length, 3)} reveal`}>
        {items.map((item) => (
          <ApplicationCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function ApplicationRecommendations({ slug, title }) {
  const hydrated = useHydrated();

  useEffect(() => {
    if (slug) recordView(slug);
  }, [slug]);

  const { similar, more, products } = useMemo(
    () => getApplicationRecommendations(slug, { personalize: hydrated }),
    [slug, hydrated]
  );

  const isPersonalised = more.some((item) => item.reason === PERSONALISED_REASON);

  return (
    <div className="rec">
      {products.length > 0 && (
        <section className="rec-rail rec-rail-equipment">
          <div className="rec-rail-head reveal">
            <div className="eyebrow mono">Get the equipment</div>
            <h2>Run {title.toLowerCase()} on ATS systems.</h2>
            <p>The equipment engineers specify for this application.</p>
          </div>

          <div className="rec-products reveal">
            {products.map((product) => (
              <ProductCard key={product.href} product={product} />
            ))}
          </div>
        </section>
      )}

      <Rail
        className="rec-rail-similar"
        eyebrow="Similar applications"
        title="Visitors also look at"
        lede="Applications that overlap with this one."
        items={similar}
      />

      <Rail
        className="rec-rail-more"
        eyebrow="More applications"
        title={isPersonalised ? "Picked for you" : "Explore more"}
        lede={
          isPersonalised
            ? "Based on the applications you have been viewing and searching for."
            : "The rest of the ATS application library."
        }
        items={more}
      />
    </div>
  );
}
