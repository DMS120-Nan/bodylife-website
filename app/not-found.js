import Link from "next/link";

export default function NotFound() {
  return (
    <section className="empty-state">
      <h1>Product not found</h1>
      <p>The product you are looking for is not available.</p>
      <Link className="primary-button" href="/us">
        Return home
      </Link>
    </section>
  );
}
