import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const businessHours = [
    { day: "Monday", hours: "7:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "7:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "7:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "7:00 AM - 8:00 PM" },
    { day: "Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "7:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "7:00 AM - 8:00 PM" },
  ];

  const contactMethods = [
    {
      icon: "📞",
      title: "Phone",
      info: "0915 280 0790",
      description: "Call us for reservations, takeout, or delivery orders",
    },
    {
      icon: "📍",
      title: "Address",
      info: "Zamora Street, Brgy. Zone 1, Sogod, 6606 Southern Leyte",
      description: "Plus Code: 9XMH+VW Sogod, Southern Leyte",
    },
    {
      icon: "📱",
      title: "Social Media",
      info: "facebook.com/kspotcafe",
      description: "Follow us for updates, specials, and events",
    },
    {
      icon: "✉️",
      title: "Services",
      info: "Dine-in • Takeout • Delivery",
      description: "Available daily until 8:00 PM",
    },
  ];

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p className="contact-subtitle">
            We'd love to hear from you and serve you soon!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <span className="contact-icon">{method.icon}</span>
                  <div className="contact-details">
                    <h3>{method.title}</h3>
                    <p className="contact-main-info">{method.info}</p>
                    <p className="contact-description">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-grid">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="hours-row">
                    <span className="day">{schedule.day}</span>
                    <span className="hours">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="hours-note">
                <span className="note-icon">💡</span>
                <p>
                  Open daily! Perfect for morning coffee, lunch meetings, or
                  evening treats.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Tell us about your inquiry, feedback, or special requests..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  <span className="btn-icon">📨</span>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h3>Find Us</h3>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <span className="map-icon">🗺️</span>
                <h4>K.spot Café Location</h4>
                <p>Zamora Street, Brgy. Zone 1</p>
                <p>Sogod, 6606 Southern Leyte</p>
                <p className="plus-code">
                  Plus Code: 9XMH+VW Sogod, Southern Leyte
                </p>
                <div className="map-buttons">
                  <button
                    className="map-btn"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/search/9XMH%2BVW+Sogod,+Southern+Leyte/",
                        "_blank"
                      )
                    }
                  >
                    📍 Open in Google Maps
                  </button>
                  <button
                    className="map-btn secondary"
                    onClick={() =>
                      window.open(
                        "https://waze.com/ul?q=Sogod%20Southern%20Leyte%20Zamora%20Street",
                        "_blank"
                      )
                    }
                  >
                    🚗 Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="location-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🚗</span>
              <div className="highlight-content">
                <h4>Easy Parking</h4>
                <p>Convenient parking available near our location</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚶‍♀️</span>
              <div className="highlight-content">
                <h4>Walking Distance</h4>
                <p>Centrally located in Sogod's main area</p>
              </div>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🏪</span>
              <div className="highlight-content">
                <h4>Local Landmark</h4>
                <p>Well-known spot in the community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
