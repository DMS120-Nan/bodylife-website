import Image from "next/image";

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
              {review.avatar ? (
                <div className="review-avatar">
                  <Image
                    alt={review.name}
                    className="review-avatar-img"
                    height={44}
                    src={review.avatar}
                    width={44}
                  />
                </div>
              ) : null}
              <div>
                <strong>{review.name}</strong>
                <span>{review.region}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
