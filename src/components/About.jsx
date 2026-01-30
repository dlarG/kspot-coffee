import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About K.spot Café</h2>
          <p className="about-subtitle">Where Every Cup Tells a Story</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-story">
              <h3>Our Story</h3>
              <p>
                Nestled in the heart of Sogod, Southern Leyte, K.spot Café has
                become more than just a coffee shop—it's a cherished gathering
                place for our community. Since opening our doors, we've been
                dedicated to creating a warm, welcoming space where locals and
                visitors alike can enjoy exceptional coffee, delicious meals,
                and genuine Filipino hospitality.
              </p>
              <p>
                Our passionate team believes that great coffee brings people
                together. Whether you're starting your morning with a perfectly
                crafted iced caramel macchiato, enjoying a hearty chicken
                teriyaki rice meal with friends, or simply seeking a cozy corner
                to relax, K.spot Café is your home away from home.
              </p>
            </div>

            <div className="about-values">
              <h3>What Makes Us Special</h3>
              <div className="values-grid">
                <div className="value-item">
                  <span className="value-icon">☕</span>
                  <h4>Quality Coffee</h4>
                  <p>
                    We source the finest beans and craft each cup with care and
                    precision.
                  </p>
                </div>
                <div className="value-item">
                  <span className="value-icon">😊</span>
                  <h4>Friendly Service</h4>
                  <p>
                    Our smiling staff treats every customer like family,
                    ensuring a warm experience.
                  </p>
                </div>
                <div className="value-item">
                  <span className="value-icon">🏠</span>
                  <h4>Cozy Atmosphere</h4>
                  <p>
                    A comfortable space designed for relaxation, conversation,
                    and connection.
                  </p>
                </div>
                <div className="value-item">
                  <span className="value-icon">💰</span>
                  <h4>Affordable Excellence</h4>
                  <p>
                    Premium quality at prices that welcome everyone to enjoy
                    great food and drinks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1547&q=80"
              alt="Coffee preparation at K.spot Café"
              className="about-main-image"
            />
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">5.0</span>
            <span className="stat-label">Star Rating</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">23</span>
            <span className="stat-label">Happy Reviews</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Daily</span>
            <span className="stat-label">Fresh Service</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Local</span>
            <span className="stat-label">Community Hub</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
