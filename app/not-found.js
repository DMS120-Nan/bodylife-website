import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-inner">
        <p className="not-found-eyebrow">404</p>
        <h1>We can&apos;t find that page.</h1>
        <p className="not-found-lead">
          The link may have changed, or the page might not exist in this
          region. Try one of these.
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
