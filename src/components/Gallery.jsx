import React, { useState } from "react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cozy interior of K.spot Café",
      category: "interior",
      title: "Warm and welcoming interior",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Iced Caramel Macchiato",
      category: "drinks",
      title: "Signature Iced Caramel Macchiato",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chicken Teriyaki Rice Meal",
      category: "food",
      title: "Popular Chicken Teriyaki Rice Meal",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Barista preparing coffee",
      category: "preparation",
      title: "Expert coffee preparation",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fresh glazed donuts",
      category: "pastries",
      title: "Fresh glazed donuts",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Perfect cappuccino",
      category: "drinks",
      title: "Creamy cappuccino with latte art",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Café exterior",
      category: "exterior",
      title: "K.spot Café storefront",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Filipino breakfast",
      category: "food",
      title: "Authentic Filipino silog meals",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1555507036-ab794f4ade2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Chocolate croissant",
      category: "pastries",
      title: "Buttery chocolate croissants",
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Iced coffee float",
      category: "drinks",
      title: "Refreshing iced coffee float",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cozy seating area",
      category: "interior",
      title: "Comfortable seating arrangements",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fresh fruit smoothie",
      category: "drinks",
      title: "Tropical fruit smoothies",
    },
  ];

  const filterCategories = [
    { id: "all", label: "All Photos", icon: "📷" },
    { id: "interior", label: "Interior", icon: "🏠" },
    { id: "drinks", label: "Drinks", icon: "☕" },
    { id: "food", label: "Food", icon: "🍽️" },
    { id: "pastries", label: "Pastries", icon: "🧁" },
    { id: "preparation", label: "Preparation", icon: "👨‍🍳" },
    { id: "exterior", label: "Exterior", icon: "🏢" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>Gallery</h2>
          <p className="gallery-subtitle">
            A visual journey through K.spot Café
          </p>
        </div>

        <div className="gallery-filters">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${
                activeFilter === category.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image)}
            >
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <h3>{image.title}</h3>
                <span className="view-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-info">
          <div className="info-cards">
            <div className="info-card">
              <span className="info-icon">📸</span>
              <h3>Capture Memories</h3>
              <p>Share your K.spot experience on social media and tag us!</p>
            </div>
            <div className="info-card">
              <span className="info-icon">🌟</span>
              <h3>Instagram Worthy</h3>
              <p>Every corner of our café is designed to be photogenic.</p>
            </div>
            <div className="info-card">
              <span className="info-icon">☕</span>
              <h3>Behind the Scenes</h3>
              <p>Watch our skilled baristas craft the perfect cup of coffee.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
