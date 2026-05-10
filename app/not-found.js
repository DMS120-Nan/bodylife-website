import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-inner">
        <p className="not-found-eyebrow">404</p>
        <h1>This page slipped past us.</h1>
        <p className="not-found-lead">
          The page you are looking for may have moved, been renamed, or
          isn&apos;t available in this region.
        </p>
        <div className="not-found-actions">
          <Link className="primary-button" href="/us">
            Back to home
          </Link>
          <Link className="not-found-secondary" href="/us/products">
            Browse products
          </Link>
        </div>
      </div>
    </section>
  );
}
