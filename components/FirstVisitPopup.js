"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "bodylife-popup-seen";
const TRIGGER_DELAY_MS = 45_000;
const SCROLL_TRIGGER_RATIO = 0.5;

export function FirstVisitPopup({ region }) {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const dismissedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let seen = false;
    try {
      seen = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }

    if (seen) {
      dismissedRef.current = true;
      return;
    }

    let triggered = false;

    function show() {
      if (triggered || dismissedRef.current) return;
      triggered = true;
      setIsVisible(true);
    }

    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= SCROLL_TRIGGER_RATIO) {
        show();
      }
    }

    const timer = window.setTimeout(show, TRIGGER_DELAY_MS);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    function onKey(event) {
      if (event.key === "Escape") {
        dismiss();
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isVisible]);

  function dismiss() {
    dismissedRef.current = true;
    setIsVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          region: region?.code || "us",
          source_page: "popup"
        })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to subscribe right now.");
      }

      setStatus("success");
      try {
        window.localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* noop */
      }
    } catch (submitError) {
      setError(submitError.message || "Unable to subscribe right now.");
      setStatus("error");
    }
  }

  if (!isVisible) return null;

  return (
    <div
      className="popup-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div className="popup-card">
        <button
          aria-label="Close popup"
          className="popup-close"
          onClick={dismiss}
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M6 6L18 18M18 6L6 18" />
          </svg>
        </button>
        {status === "success" ? (
          <div className="popup-content">
            <p className="eyebrow">Welcome in</p>
            <h2 id="popup-title">Look out for the letter.</h2>
            <p className="popup-lead">
              We&apos;ll send your 10% off code shortly. Quiet writing only —
              we don&apos;t do noise.
            </p>
            <button className="primary-button popup-cta" onClick={dismiss} type="button">
              Continue browsing
            </button>
          </div>
        ) : (
          <div className="popup-content">
            <p className="eyebrow">A small invitation</p>
            <h2 id="popup-title">10% off, and a quiet letter every month.</h2>
            <p className="popup-lead">
              We write one short note a month — skin science we&apos;re reading,
              routine ideas, and the occasional early access. Subscribe and we&apos;ll
              send 10% off your first order.
            </p>
            <form className="popup-form" onSubmit={handleSubmit} noValidate>
              <label className="sr-only" htmlFor="popup-email">
                Email
              </label>
              <input
                autoComplete="email"
                className="popup-input"
                id="popup-email"
                inputMode="email"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
              />
              <button
                className="primary-button popup-cta"
                disabled={status === "submitting"}
                type="submit"
              >
                {status === "submitting" ? "Sending..." : "Send my code"}
              </button>
            </form>
            {status === "error" ? (
              <p className="popup-error">{error}</p>
            ) : null}
            <button className="popup-decline" onClick={dismiss} type="button">
              No thanks
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
