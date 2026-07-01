import reviewBg from "./assets/bg/review_bg.png";
import sarahImg from "./assets/review_sarah.png";
import michaelImg from "./assets/review_michael.png";

const reviews = [
  {
    id: 1,
    text: "The best dining experience I've had in a long time. Every dish was a masterpiece.",
    name: "Sarah Johnson",
    role: "Food Blogger",
    avatar: sarahImg,
    initials: null,
    stars: 5,
  },
  {
    id: 2,
    text: "Perfect ambience, exceptional service and food that touches your soul. Highly recommended!",
    name: "Michael Lee",
    role: "Google Review",
    avatar: michaelImg,
    initials: null,
    stars: 5,
  },
  {
    id: 3,
    text: "From the welcome to the last bite, everything was beyond amazing. Can't wait to visit again!",
    name: "Emily Brown",
    role: "Local Guide",
    avatar: null,
    initials: "EB",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="rv-stars">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="rv-star-icon">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Review() {
  return (
    <section
      className="review-section"
      style={{ backgroundImage: `url(${reviewBg})` }}
    >
      <div className="rv-bg-overlay" />

      <div className="rv-inner">
        {/* ── Left Panel ── */}
        <div className="rv-left">
          <p className="rv-eyebrow">What Our Guests Say</p>
          <h2 className="rv-headline">
            Loved by<br />Food Lovers
          </h2>
          <p className="rv-subtext">
            From unforgettable flavours to warm hospitality, our guests share
            experiences that inspire us to do better every day.
          </p>
          <div className="rv-rating-row">
            <StarRating count={5} />
            <span className="rv-rating-score">4.8/5</span>
            <span className="rv-rating-sep">·</span>
            <span className="rv-rating-count">Based on 2,450+ Reviews</span>
          </div>
          <a href="#" className="rv-all-reviews-link">
            View All Reviews
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>

        {/* ── Review Cards ── */}
        <div className="rv-cards">
          {reviews.map((review) => (
            <div key={review.id} className="rv-card">
              <span className="rv-quote">&ldquo;</span>
              <StarRating count={review.stars} />
              <p className="rv-card-text">{review.text}</p>
              <div className="rv-reviewer">
                {review.avatar ? (
                  <img src={review.avatar} alt={review.name} className="rv-avatar" />
                ) : (
                  <div className="rv-avatar rv-avatar-initials">
                    {review.initials}
                  </div>
                )}
                <div className="rv-reviewer-info">
                  <span className="rv-reviewer-name">{review.name}</span>
                  <span className="rv-reviewer-role">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Review;

