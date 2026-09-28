"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  search,
  tokenize,
  highlightParts,
  getContextualSuggestions,
  getDefaultSuggestions,
} from "../lib/search";
import { getRecent, getPopular, getQueryCount, recordQuery } from "../lib/search-history";
import { ENTRY_TYPES } from "../data/search-index";
import "./SearchOverlay.css";

const MAX_SUGGESTIONS = 8;

const OPEN_EVENT = "ats:open-search";

/** Opens the overlay from anywhere on the page, e.g. the mobile menu, which
    sits outside the Navbar's action cluster. */
export function openSearch() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

function groupByType(entries) {
  const groups = [];

  for (const entry of entries) {
    const label = ENTRY_TYPES[entry.type] || "Page";
    let group = groups.find((g) => g.label === label);
    if (!group) {
      group = { label, type: entry.type, items: [] };
      groups.push(group);
    }
    group.items.push(entry);
  }

  return groups;
}

function Highlighted({ text, tokens }) {
  const parts = useMemo(() => highlightParts(text, tokens), [text, tokens]);

  return parts.map((part, i) =>
    part.match ? (
      <mark key={i}>{part.text}</mark>
    ) : (
      <span key={i}>{part.text}</span>
    )
  );
}

export default function SearchOverlay() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const triggerRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const listId = useId();
  const titleId = useId();

  const trimmed = query.trim();
  const tokens = useMemo(() => tokenize(trimmed), [trimmed]);

  /* No query: recency, then popularity, then what relates to this page. */
  const idleGroups = useMemo(() => {
    if (trimmed) return [];

    const recent = getRecent(4);
    const popular = getPopular(3).filter((q) => !recent.includes(q));
    const contextual = getContextualSuggestions(pathname, 5).length
      ? getContextualSuggestions(pathname, 5)
      : getDefaultSuggestions(5);

    const groups = [];
    if (recent.length) groups.push({ label: "Recent", kind: "query", items: recent });
    if (popular.length) groups.push({ label: "Popular", kind: "query", items: popular });
    if (contextual.length) {
      groups.push({ label: "Related to this page", kind: "entry", items: contextual });
    }
    return groups;
    /* `open` is a deliberate dep: history is read lazily when the panel opens,
       not on every keystroke. localStorage is not a reactive source. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, trimmed, open]);

  /* With a query: ranked results, boosted slightly if this exact search was
     made before. */
  const results = useMemo(
    () => (trimmed ? search(trimmed, { limit: MAX_SUGGESTIONS, boost: getQueryCount(trimmed) }) : []),
    [trimmed]
  );

  const resultGroups = useMemo(() => groupByType(results), [results]);

  /* Flat list is what the keyboard actually walks. */
  const navigable = useMemo(
    () => (trimmed ? results : idleGroups.flatMap((g) => g.items)),
    [trimmed, results, idleGroups]
  );

  /* Reset the highlight when the result set changes. Adjusting state during
     render is React's documented alternative to a setState-in-effect. */
  const [lastQuery, setLastQuery] = useState(trimmed);
  if (lastQuery !== trimmed) {
    setLastQuery(trimmed);
    setActiveIndex(0);
  }

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const openPanel = useCallback(() => {
    setOpen(true);
  }, []);

  /* Ctrl/Cmd+K from anywhere. */
  useEffect(() => {
    function onKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((wasOpen) => !wasOpen);
        return;
      }

      if (event.key === "Escape" && open) {
        event.preventDefault();
        close();
      }
    }

    function onOpenRequest() {
      setOpen(true);
    }

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener(OPEN_EVENT, onOpenRequest);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener(OPEN_EVENT, onOpenRequest);
    };
  }, [open, close]);

  /* Focus moves into the panel on open and back to the trigger on close. */
  const wasOpen = useRef(false);

  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      if (inputRef.current) inputRef.current.focus();

      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }

    if (wasOpen.current) {
      wasOpen.current = false;
      if (triggerRef.current) triggerRef.current.focus();
    }
  }, [open]);

  const go = useCallback(
    (entry) => {
      const target = typeof entry === "string" ? entry : entry.href;
      if (!target) return;

      if (trimmed) recordQuery(trimmed);

      const isDownload = typeof entry === "object" && entry.type === "download";
      setOpen(false);
      setQuery("");

      if (isDownload) {
        window.open(target, "_blank", "noopener,noreferrer");
        return;
      }

      router.push(target);
    },
    [router, trimmed]
  );

  function onInputKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (navigable.length ? (i + 1) % navigable.length : 0));
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (navigable.length ? (i - 1 + navigable.length) % navigable.length : 0));
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const target = navigable[activeIndex];

      if (target) {
        go(target);
        return;
      }

      /* Nothing highlighted — send the visitor to the full results page. */
      if (trimmed) {
        recordQuery(trimmed);
        setOpen(false);
        setQuery("");
        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      }
      return;
    }

    if (event.key === "Tab") {
      /* Keep focus inside the dialog. */
      const focusable = panelRef.current?.querySelectorAll("input, a, button");
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    }
  }

  function onBackdropClick(event) {
    if (event.target === event.currentTarget) close();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="nav-search-btn"
        onClick={open ? close : openPanel}
        aria-label="Search"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <svg
          width="18"
          height="18"
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
      </button>

      {open && (
        <div className="search-overlay" onClick={onBackdropClick}>
          <div
            ref={panelRef}
            className="search-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <h2 id={titleId} className="sr-only">
              Search Accurate Thermal Systems
            </h2>

            <div className="search-field">
              <svg
                width="18"
                height="18"
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
                ref={inputRef}
                type="search"
                className="search-input"
                placeholder="Search equipment, applications, documents…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onInputKeyDown}
                role="combobox"
                aria-expanded="true"
                aria-controls={listId}
                aria-autocomplete="list"
                aria-activedescendant={
                  navigable.length ? `${listId}-option-${activeIndex}` : undefined
                }
                autoComplete="off"
                spellCheck="false"
              />

              <button type="button" className="search-clear" onClick={close} aria-label="Close search">
                ESC
              </button>
            </div>

            <div id={listId} className="search-results" role="listbox" aria-label="Search results">
              {trimmed && results.length === 0 && (
                <p className="search-empty">
                  No matches for <b>{trimmed}</b>.
                </p>
              )}

              {trimmed &&
                resultGroups.map((group) => (
                  <div className="search-group" key={group.label}>
                    <span className="search-group-label">{group.label}</span>
                    {group.items.map((entry) => {
                      const index = navigable.indexOf(entry);
                      return (
                        <div
                          key={entry.id}
                          id={`${listId}-option-${index}`}
                          role="option"
                          aria-selected={index === activeIndex}
                          className={`search-row ${index === activeIndex ? "is-active" : ""}`}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => go(entry)}
                        >
                          <b>
                            <Highlighted text={entry.title} tokens={tokens} />
                          </b>
                          {entry.subtitle && (
                            <small>
                              <Highlighted text={entry.subtitle} tokens={tokens} />
                            </small>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}

              {!trimmed &&
                idleGroups.map((group) => (
                  <div className="search-group" key={group.label}>
                    <span className="search-group-label">{group.label}</span>
                    {group.items.map((item) => {
                      const index = navigable.indexOf(item);

                      if (group.kind === "query") {
                        return (
                          <div
                            key={item}
                            id={`${listId}-option-${index}`}
                            role="option"
                            aria-selected={index === activeIndex}
                            className={`search-row search-row-query ${index === activeIndex ? "is-active" : ""}`}
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => setQuery(item)}
                          >
                            <b>{item}</b>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.id}
                          id={`${listId}-option-${index}`}
                          role="option"
                          aria-selected={index === activeIndex}
                          className={`search-row ${index === activeIndex ? "is-active" : ""}`}
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => go(item)}
                        >
                          <b>{item.title}</b>
                          {item.subtitle && <small>{item.subtitle}</small>}
                        </div>
                      );
                    })}
                  </div>
                ))}
            </div>

            {trimmed && results.length > 0 && (
              <button
                type="button"
                className="search-all"
                onClick={() => {
                  recordQuery(trimmed);
                  setOpen(false);
                  setQuery("");
                  router.push(`/search?q=${encodeURIComponent(trimmed)}`);
                }}
              >
                View all results for &ldquo;{trimmed}&rdquo;
                <span aria-hidden="true">&rarr;</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
