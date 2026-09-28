"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  search,
  tokenize,
  highlightParts,
  getContextualSuggestions,
  getDefaultSuggestions,
} from "../../lib/search";
import { getQueryCount, recordQuery } from "../../lib/search-history";
import { ENTRY_TYPES } from "../../data/search-index";

const URL_DEBOUNCE_MS = 250;

function Highlighted({ text, tokens }) {
  const parts = useMemo(() => highlightParts(text, tokens), [text, tokens]);

  return parts.map((part, i) =>
    part.match ? <mark key={i}>{part.text}</mark> : <span key={i}>{part.text}</span>
  );
}

export default function SearchResults() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlQuery = searchParams.get("q") || "";
  const [value, setValue] = useState(urlQuery);
  const [lastUrlQuery, setLastUrlQuery] = useState(urlQuery);
  const skipUrlSync = useRef(false);

  /* Back/forward or a shared link changes the URL. Adjusting state during
     render is React's documented alternative to a setState-in-effect. */
  if (lastUrlQuery !== urlQuery) {
    setLastUrlQuery(urlQuery);
    setValue(urlQuery);
  }

  useEffect(() => {
    if (skipUrlSync.current) {
      skipUrlSync.current = false;
      return;
    }

    if (value === urlQuery) return;

    const timer = setTimeout(() => {
      const next = value.trim() ? `/search?q=${encodeURIComponent(value.trim())}` : "/search";
      router.replace(next, { scroll: false });
    }, URL_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [value, urlQuery, router]);

  function onChange(event) {
    skipUrlSync.current = true;
    setValue(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    skipUrlSync.current = true;

    const trimmed = value.trim();
    if (trimmed) recordQuery(trimmed);

    router.replace(trimmed ? `/search?q=${encodeURIComponent(trimmed)}` : "/search", {
      scroll: false,
    });
  }

  const trimmed = value.trim();
  const tokens = useMemo(() => tokenize(trimmed), [trimmed]);

  const results = useMemo(
    () => (trimmed ? search(trimmed, { limit: 0, boost: getQueryCount(trimmed) }) : []),
    [trimmed]
  );

  const groups = useMemo(() => {
    const out = [];

    for (const entry of results) {
      const label = ENTRY_TYPES[entry.type] || "Page";
      let group = out.find((g) => g.label === label);
      if (!group) {
        group = { label, type: entry.type, items: [] };
        out.push(group);
      }
      group.items.push(entry);
    }

    return out;
  }, [results]);

  const suggested = useMemo(
    () => (trimmed ? [] : getContextualSuggestions(pathname, 6) || getDefaultSuggestions(6)),
    [trimmed, pathname]
  );

  return (
    <div className="search-page-body">
      <form className="search-page-field" onSubmit={onSubmit} role="search">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          type="search"
          className="search-page-input"
          value={value}
          onChange={onChange}
          placeholder="Try “die cleaning”, “fume” or “FTBLL27”"
          aria-label="Search"
          autoComplete="off"
          spellCheck="false"
        />
      </form>

      {!trimmed && (
        <section className="search-page-section">
          <h2 className="search-page-h2">Start with one of these</h2>
          <ul className="search-page-list">
            {suggested.map((entry) => (
              <li key={entry.id}>
                <Link href={entry.href} className="search-page-hit">
                  <span className="search-page-badge">{ENTRY_TYPES[entry.type] || "Page"}</span>
                  <b>{entry.title}</b>
                  {entry.subtitle && <small>{entry.subtitle}</small>}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {trimmed && results.length === 0 && (
        <section className="search-page-section">
          <p className="search-page-none">
            No results for <b>{trimmed}</b>. Try a broader term, or ask us directly.
          </p>
          <Link href="/form" className="btn primary">
            Request a quote
          </Link>
        </section>
      )}

      {trimmed && results.length > 0 && (
        <>
          <p className="search-page-count">
            {results.length} {results.length === 1 ? "result" : "results"} for &ldquo;{trimmed}&rdquo;
          </p>

          {groups.map((group) => (
            <section className="search-page-section" key={group.label}>
              <h2 className="search-page-h2">
                {group.label}
                <span>{group.items.length}</span>
              </h2>
              <ul className="search-page-list">
                {group.items.map((entry) => (
                  <li key={entry.id}>
                    <Link
                      href={entry.href}
                      className="search-page-hit"
                      target={entry.type === "download" ? "_blank" : undefined}
                      rel={entry.type === "download" ? "noopener noreferrer" : undefined}
                      onClick={() => recordQuery(trimmed)}
                    >
                      <span className="search-page-badge">{group.label}</span>
                      <b>
                        <Highlighted text={entry.title} tokens={tokens} />
                      </b>
                      {entry.subtitle && (
                        <small>
                          <Highlighted text={entry.subtitle} tokens={tokens} />
                        </small>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      )}
    </div>
  );
}
