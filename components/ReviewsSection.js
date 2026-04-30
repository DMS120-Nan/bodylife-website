function getStars(rating) {
  return "*".repeat(rating);
}

export function ReviewsSection({ region }) {
  return (
    <section className="section reviews-section">
      <div className="section-heading">
        <p className="eyebrow">Reviews</p>
        <h2>What customers are saying.</h2>
      </div>
      <div className="reviews-grid">
        {region.pdp.reviews.map((review) => (
          <article className="review-card" key={`${review.name}-${review.region}`}>
            <p className="review-stars" aria-label={`${review.rating} star review`}>
              {getStars(review.rating)}
            </p>
            <p className="review-text">&quot;{review.text}&quot;</p>
            <div className="review-meta">
              <strong>{review.name}</strong>
              <span>{review.region}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
