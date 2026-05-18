import Image from "next/image";
import { getAggregateRating } from "./ProductRating";

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#8a7a5c" stroke="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  );
}

function getStars(rating) {
  return Array.from({ length: rating }, (_, i) => <StarIcon key={i} />);
}

export function ReviewsSection({ region }) {
  const { average, count } = getAggregateRating(region.pdp.reviews);

  return (
    <section className="section reviews-section">
      <div className="section-heading reviews-section-heading">
        <div>
          <p className="eyebrow">Reviews</p>
          <h2>What people with sensitive needs are saying.</h2>
        </div>
        {count > 0 ? (
          <div className="reviews-aggregate" aria-label={`Average rating ${average} out of 5 from ${count} reviews`}>
            <div className="reviews-aggregate-stars" aria-hidden="true">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <div className="reviews-aggregate-meta">
              <strong>{average} / 5</strong>
              <span>from {count} verified reviews</span>
            </div>
          </div>
        ) : null}
      </div>
      <div className="reviews-grid">
        {region.pdp.reviews.map((review) => (
          <article className="review-card" key={`${review.name}-${review.region}`}>
            <div className="review-stars" aria-label={`${review.rating} star review`}>
              {getStars(review.rating)}
            </div>
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
