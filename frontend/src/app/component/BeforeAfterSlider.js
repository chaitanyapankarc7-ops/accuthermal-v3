"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./BeforeAfterSlider.css";

export default function BeforeAfterSlider({
  before,
  after,
  initialPosition = 50,
  aspectRatio = "16 / 10",
  fit = "contain",
  className = "",
}) {
  const stageRef = useRef(null);
  const frameRef = useRef(0);
  const interactedRef = useRef(false);

  const [position, setPosition] = useState(initialPosition);
  const [dragging, setDragging] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!entered) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (interactedRef.current) return;
    const timers = [
      setTimeout(() => {
        if (!interactedRef.current) setPosition(initialPosition + 7);
      }, 1100),
      setTimeout(() => {
        if (!interactedRef.current) setPosition(initialPosition);
      }, 1900),
    ];
    return () => timers.forEach((t) => clearTimeout(t));
  }, [entered, initialPosition]);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  const updateFromClientX = useCallback((clientX) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    if (rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    interactedRef.current = true;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => updateFromClientX(e.clientX));
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => updateFromClientX(e.clientX));
  };

  const endDrag = (e) => {
    setDragging(false);
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 1 : 5;
    let next;
    switch (e.key) {
      case "ArrowLeft":
      case "ArrowDown":
        next = position - step;
        break;
      case "ArrowRight":
      case "ArrowUp":
        next = position + step;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = 100;
        break;
      default:
        return;
    }
    e.preventDefault();
    interactedRef.current = true;
    setPosition(Math.min(100, Math.max(0, next)));
  };

  const sizes = "(max-width: 900px) 100vw, 1200px";
  const imgStyle = { objectFit: fit };

  return (
    <div className={`bas ${entered ? "bas-in" : ""} ${className}`}>
      <div
        ref={stageRef}
        className={`bas-stage ${dragging ? "bas-dragging" : ""}`}
        style={{ aspectRatio }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="bas-fill" aria-hidden="true" />

        <div className="bas-layer">
          <Image
            src={before.src}
            alt={before.alt}
            fill
            sizes={sizes}
            style={imgStyle}
            draggable={false}
          />
        </div>

        <div
          className="bas-layer bas-after"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <Image
            src={after.src}
            alt={after.alt}
            fill
            sizes={sizes}
            style={imgStyle}
            draggable={false}
          />
        </div>

        <span className="bas-label bas-label-before">Before</span>
        <span className="bas-label bas-label-after">After</span>

        <div className="bas-divider" style={{ left: `${position}%` }}>
          <button
            type="button"
            className="bas-handle"
            role="slider"
            aria-orientation="horizontal"
            aria-label="Before and after comparison"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            aria-valuetext={`${Math.round(position)}% after image visible`}
            onKeyDown={onKeyDown}
            onClick={(e) => e.preventDefault()}
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
    </div>
  );
}
