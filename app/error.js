"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("App error boundary:", error);
  }, [error]);

  return (
    <section className="not-found-page">
      <div className="not-found-inner">
        <p className="not-found-eyebrow">Something broke</p>
        <h1>This page failed to load.</h1>
        <p className="not-found-lead">
          Try again. If it keeps happening, email{" "}
          <a href="mailto:support@bodylifeofficial.com">support@bodylifeofficial.com</a>
          {" "}
          and we will fix it.
        </p>
        <div className="not-found-actions">
          <button className="primary-button" onClick={() => reset()} type="button">
            Try again
          </button>
          <Link className="not-found-secondary" href="/us">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
