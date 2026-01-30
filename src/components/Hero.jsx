import React from "react";

const Hero = ({ setActiveSection, setShowOrderModal }) => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Cozy café interior"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Welcome to K.spot Café</h1>
          <p className="hero-subtitle">
            Your neighborhood haven for exceptional coffee, delicious meals, and
            warm hospitality
          </p>
          <div className="hero-highlights">
            <div className="highlight">
              <span>5.0 Stars • 23 Reviews</span>
            </div>
            <div className="highlight">
              <span>₱1–200 per person</span>
            </div>
            <div className="highlight">
              <span>Open Daily • Closes 8:00 PM</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <button
            className="cta-button primary"
            onClick={() => setActiveSection("menu")}
          >
            View Menu
          </button>
          <button
            className="cta-button secondary"
            onClick={() => setShowOrderModal(true)}
          >
            Order Online
          </button>
          <button
            className="cta-button tertiary"
            onClick={() => setActiveSection("contact")}
          >
            Get Directions
          </button>
        </div>
      </div>

      <div className="hero-footer">
        <div className="location-quick-info">
          <span className="location-icon">📍</span>
          <span>Zamora Street, Brgy. Zone 1, Sogod, Southern Leyte</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
