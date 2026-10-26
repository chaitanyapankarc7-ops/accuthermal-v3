"use client";

/* Vimeo thumbnails are served from their CDN. The static export does not run
   the Next image optimizer, so a plain lazy-loaded image is the right tool. */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import videos from "./videos.json";
import "./page.css";

const INITIAL_COUNT = 12;
const LOAD_STEP = 12;
const DESCRIPTION_LIMIT = 280;

const numberFormat = new Intl.NumberFormat("en-US");

const years = videos
  .map((video) => Number(video.date.slice(0, 4)))
  .filter((year) => Number.isFinite(year));
const yearRange = `${Math.min(...years)}\u2013${Math.max(...years)}`;

function reducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function VideosPage() {
  const [activeId, setActiveId] = useState(videos[0].id);
  const [hasSelected, setHasSelected] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [expanded, setExpanded] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const playerRef = useRef(null);

  const active = videos.find((video) => video.id === activeId) || videos[0];
  const shown = Math.min(visibleCount, videos.length);
  const visibleVideos = videos.slice(0, visibleCount);
  const canExpand = active.description.length > DESCRIPTION_LIMIT;
  const description =
    active.description ||
    "Watch this thermal cleaning demonstration from the Accurate Thermal Systems video archive.";

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("on");
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".vid-page .reveal");
    elements.forEach((element) => io.observe(element));

    return () => elements.forEach((element) => io.unobserve(element));
  }, []);

  function selectVideo(video) {
    setActiveId(video.id);
    setHasSelected(true);
    setExpanded(false);
    setAnnouncement(`Now playing: ${video.title}`);

    requestAnimationFrame(() => {
      const player = playerRef.current;
      if (!player) return;

      const rect = player.getBoundingClientRect();
      const fullyVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!fullyVisible) {
        player.scrollIntoView({
          behavior: reducedMotion() ? "auto" : "smooth",
          block: "start",
        });
      }
    });
  }

  function handleCardClick(event, video) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    selectVideo(video);
  }

  function loadMore() {
    setVisibleCount((count) => Math.min(count + LOAD_STEP, videos.length));
  }

  const playerParams = [
    `autoplay=${hasSelected ? 1 : 0}`,
    "title=0",
    "byline=0",
    "portrait=0",
    "dnt=1",
  ].join("&");
  const embedJoin = active.embed.includes("?") ? "&" : "?";

  return (
    <main className="vid-page">
      <header className="vid-hero">
        <div className="wrap vid-hero-inner">
          <div className="vid-hero-copy">
            <div className="vid-label mono">Accurate Thermal Systems / Media</div>
            <h1>
              Video <span>Library</span>
            </h1>
            <p>
              Watch thermal cleaning work. {videos.length} demonstrations show fluidized baths
              removing polymers, resins and organic buildup from tooling, dies, spinnerets and
              production hardware. No solvents. No scraping. No damage to the part.
            </p>
            <div className="buttons">
              <a className="btn primary" href="#library">
                Browse the library
              </a>
              <Link className="btn" href="/applications/thermal-cleaning">
                Thermal cleaning applications
              </Link>
            </div>
          </div>

          <aside className="vid-hero-panel" aria-label="Video archive summary">
            <div className="vid-hero-panel-top mono">
              <span>ATS / Video archive</span>
              <span className="vid-panel-dot" aria-hidden="true" />
            </div>
            <div className="vid-hero-stat">
              <b>{videos.length}</b>
              <span>Videos in the archive</span>
            </div>
            <div className="vid-hero-stat">
              <b>{yearRange}</b>
              <span>Cleaning demonstrations</span>
            </div>
            <div className="vid-hero-stat">
              <b>Fluidized</b>
              <span>Baths, tooling and polymers</span>
            </div>
          </aside>
        </div>
      </header>

      <section
        className="vid-featured"
        id="player"
        ref={playerRef}
        aria-labelledby="vid-active-title"
      >
        <div className="wrap">
          <div className="vid-featured-frame reveal">
            <div className="vid-featured-media">
              <div className="vid-player">
                <iframe
                  key={`${active.id}-${hasSelected ? "play" : "idle"}`}
                  src={`${active.embed}${embedJoin}${playerParams}`}
                  title={active.title}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  loading="eager"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            <aside className="vid-featured-copy">
              <div className="vid-now mono">
                <span className="vid-live-dot" aria-hidden="true" />
                Now playing
              </div>
              <h2 id="vid-active-title">{active.title}</h2>

              <div className="vid-meta mono">
                <span>{active.dateLabel}</span>
                <span>{active.durationLabel}</span>
                <span>{numberFormat.format(active.plays)} plays</span>
              </div>

              <div className={`vid-desc${expanded ? " is-expanded" : ""}`}>
                <p>{description}</p>
              </div>

              {canExpand && (
                <button
                  type="button"
                  className="vid-read-more"
                  aria-expanded={expanded}
                  onClick={() => setExpanded((value) => !value)}
                >
                  {expanded ? "Show less" : "Read more"}
                </button>
              )}

              <a
                className="vid-vimeo-link"
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on Vimeo <span aria-hidden="true">↗</span>
              </a>
              <p className="vid-player-hint mono">
                Select any video below to play it here.
              </p>
            </aside>
          </div>

          <p className="visually-hidden" aria-live="polite">
            {announcement}
          </p>
        </div>
      </section>

      <section className="vid-library" id="library" aria-labelledby="vid-library-title">
        <div className="wrap">
          <div className="section-top vid-section-top reveal">
            <div>
              <div className="vid-label mono">The archive / {videos.length} videos</div>
              <h2 id="vid-library-title">Thermal cleaning, demonstrated.</h2>
            </div>
            <p>
              Browse the complete ATS Vimeo channel — from breaker plates and extrusion dies to
              spinnerets, static mixers and small precision parts. Every video is a real cleaning
              cycle, sorted newest first.
            </p>
          </div>

          <div className="vid-toolbar mono reveal">
            <span>
              Showing {shown} of {videos.length}
            </span>
            <span>Newest first</span>
          </div>

          <div className="vid-grid" id="video-grid">
            {visibleVideos.map((video) => {
              const isActive = video.id === activeId;

              return (
                <a
                  key={video.id}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`vid-card${isActive ? " is-active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={(event) => handleCardClick(event, video)}
                >
                  <div className="vid-thumb">
                    <img
                      src={video.thumbnail}
                      alt=""
                      width="960"
                      height="540"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="vid-play" aria-hidden="true">
                      <span />
                    </span>
                    <span className="vid-duration mono">{video.durationLabel}</span>
                  </div>
                  <div className="vid-card-body">
                    <h3 className="vid-card-title">
                      <span className="visually-hidden">Play </span>
                      {video.title}
                    </h3>
                    <div className="vid-card-meta mono">
                      <span>{video.dateLabel}</span>
                      <span>{numberFormat.format(video.plays)} plays</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {shown < videos.length ? (
            <div className="vid-load-wrap">
              <button
                type="button"
                className="vid-load-btn"
                onClick={loadMore}
                aria-controls="video-grid"
              >
                Load more videos <span aria-hidden="true">↓</span>
              </button>
              <p className="vid-load-count mono" aria-live="polite">
                Showing {shown} of {videos.length}
              </p>
            </div>
          ) : (
            <p className="vid-load-count vid-load-done mono" aria-live="polite">
              All {videos.length} videos loaded.
            </p>
          )}
        </div>
      </section>

      <section className="vid-cta">
        <div className="wrap vid-cta-inner">
          <div>
            <div className="vid-label mono">Complimentary sample cleaning</div>
            <h2>Have a part you would like to see cleaned?</h2>
            <p>
              Send us an example of your tooling. We will run a sample cleaning in a fluidized
              temperature bath, produce a video of your part being cleaned, and ship it back —
              usually within two days of receipt.
            </p>
          </div>
          <div className="vid-cta-actions">
            <Link className="btn primary" href="/form">
              Request a sample cleaning
            </Link>
            <Link className="btn vid-btn-dark" href="/applications/thermal-cleaning">
              Thermal cleaning applications
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
