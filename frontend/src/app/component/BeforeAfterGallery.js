"use client";

import { useState } from "react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import "./BeforeAfterGallery.css";

export default function BeforeAfterGallery({
  items,
  aspectRatio = "16 / 10",
  fit = "contain",
}) {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const current = items[index];

  const go = (dir) => setIndex((prev) => (prev + dir + count) % count);

  return (
    <div className="bag">
      <div className="bag-stage" key={index}>
        <BeforeAfterSlider
          before={current.before}
          after={current.after}
          aspectRatio={aspectRatio}
          fit={fit}
        />
      </div>

      <div className="bag-controls">
        <div className="bag-arrows">
          <button
            type="button"
            className="bag-arrow"
            onClick={() => go(-1)}
            aria-label="Previous sample"
          >
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" aria-hidden="true">
              <path
                d="M7.5 1 1.5 7l6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="bag-arrow"
            onClick={() => go(1)}
            aria-label="Next sample"
          >
            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" aria-hidden="true">
              <path
                d="m1.5 1 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing sample {index + 1} of {count}
      </p>
    </div>
  );
}
