function StarIcon({ fill = "var(--gold)" }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={fill} stroke="none" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function getAggregateRating(reviews) {
  if (!reviews || reviews.length === 0) {
    return { average: 0, count: 0 };
  }
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return {
    average: Math.round((total / reviews.length) * 10) / 10,
    count: reviews.length
  };
}

export function ProductRating({ reviews, size = "md", className = "" }) {
  const { average, count } = getAggregateRating(reviews);

  if (count === 0) return null;

  return (
    <div
      className={`product-rating product-rating-${size} ${className}`.trim()}
      aria-label={`Rated ${average} out of 5 from ${count} reviews`}
    >
      <span className="product-rating-stars" aria-hidden="true">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
      </span>
      <span className="product-rating-meta">
        <strong>{average}</strong>
        <span className="product-rating-divider">·</span>
        <span>
          {count} {count === 1 ? "review" : "reviews"}
        </span>
      </span>
    </div>
  );
}
