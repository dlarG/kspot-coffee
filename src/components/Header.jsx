import React, { useState } from "react";

const Header = ({ activeSection, setActiveSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>K.spot Café</h1>
          <span className="tagline">Where Coffee Meets Community</span>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          {navigationItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveSection(item.id);
                setIsMobileMenuOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
