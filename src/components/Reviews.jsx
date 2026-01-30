import React from "react";

const Reviews = () => {
  const reviews = [
    {
      name: "Maria Santos",
      rating: 5,
      date: "January 2026",
      review:
        "Amazing coffee and the friendliest staff! The iced caramel macchiato is absolutely perfect. The atmosphere is so cozy and welcoming. This has become my daily coffee spot!",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Juan Dela Cruz",
      rating: 5,
      date: "December 2025",
      review:
        "Best chicken teriyaki rice meal in Sogod! The portion is generous and the price is very reasonable. Staff always greets you with a smile. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "December 2025",
      review:
        "As a tourist visiting Sogod, K.spot Café exceeded my expectations. The local barako coffee is exceptional and the service is incredibly fast. The cozy ambiance makes you want to stay longer!",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Roberto Mendez",
      rating: 5,
      date: "November 2025",
      review:
        "Perfect place for breakfast meetings! The Filipino silog meals are authentic and delicious. Great value for money and the staff is always accommodating.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Anna Garcia",
      rating: 5,
      date: "November 2025",
      review:
        "Love their pastries! The glazed donuts are fresh and perfectly sweet. Combined with their excellent coffee, it makes for a wonderful afternoon treat. The place has such a warm atmosphere.",
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      name: "Mark Torres",
      rating: 5,
      date: "October 2025",
      review:
        "Outstanding service and quality! Whether it's for dine-in, takeout, or delivery, K.spot never disappoints. The seafood pasta is a must-try. This place truly represents the best of Filipino hospitality.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : ""}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <h2>What Our Customers Say</h2>
          <div className="overall-rating">
            <span className="rating-number">5.0</span>
            <div className="rating-stars">{renderStars(5)}</div>
            <span className="rating-text">Based on 23 reviews</span>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="reviewer-avatar"
                  />
                  <div className="reviewer-details">
                    <h3 className="reviewer-name">{review.name}</h3>
                    <span className="review-date">{review.date}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="review-text">{review.review}</p>
            </div>
          ))}
        </div>

        <div className="reviews-summary">
          <div className="summary-stats">
            <div className="stat">
              <span className="stat-icon">😊</span>
              <div className="stat-content">
                <span className="stat-number">100%</span>
                <span className="stat-label">Happy Customers</span>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">⚡</span>
              <div className="stat-content">
                <span className="stat-number">Fast</span>
                <span className="stat-label">Service</span>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">💰</span>
              <div className="stat-content">
                <span className="stat-number">Great</span>
                <span className="stat-label">Value</span>
              </div>
            </div>
            <div className="stat">
              <span className="stat-icon">🏠</span>
              <div className="stat-content">
                <span className="stat-number">Cozy</span>
                <span className="stat-label">Atmosphere</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviews-cta">
          <h3>Experience K.spot Café yourself!</h3>
          <p>
            Join our community of satisfied customers and taste the difference.
          </p>
          <div className="social-proof">
            <span>
              📱 Follow us on Facebook: <strong>facebook.com/kspotcafe</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
