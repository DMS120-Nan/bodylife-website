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
        <p className="not-found-eyebrow">Something went wrong</p>
        <h1>We couldn&apos;t load this page.</h1>
        <p className="not-found-lead">
          Try refreshing — and if it keeps happening, email us at
          {" "}
          <a href="mailto:support@bodylifeofficial.com">support@bodylifeofficial.com</a>
          {" "}
          and we&apos;ll fix it.
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
