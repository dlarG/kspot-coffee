import React, { useState } from "react";

const Menu = ({ setShowOrderModal }) => {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const menuCategories = [
    { id: "coffee", label: "Coffee & Drinks", icon: "☕" },
    { id: "meals", label: "Meals", icon: "🍽️" },
    { id: "pastries", label: "Pastries & Donuts", icon: "🧁" },
    { id: "specials", label: "Daily Specials", icon: "⭐" },
  ];

  const menuItems = {
    coffee: [
      {
        name: "Iced Caramel Macchiato",
        description:
          "Rich espresso with vanilla syrup, steamed milk, and caramel drizzle",
        price: "₱120",
        image:
          "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        popular: true,
      },
      {
        name: "Classic Americano",
        description:
          "Bold espresso shots with hot water for a clean, strong coffee taste",
        price: "₱80",
        image:
          "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Creamy Cappuccino",
        description:
          "Perfect balance of espresso, steamed milk, and velvety foam",
        price: "₱100",
        image:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Iced Coffee Float",
        description:
          "Cold brew coffee with vanilla ice cream for a refreshing treat",
        price: "₱140",
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Local Barako Blend",
        description:
          "Strong Filipino coffee beans with a rich, full-bodied flavor",
        price: "₱90",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Tropical Fruit Smoothie",
        description: "Fresh mango, pineapple, and banana blended with ice",
        price: "₱110",
        image:
          "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
    meals: [
      {
        name: "Chicken Teriyaki Rice Meal",
        description:
          "Tender grilled chicken glazed with teriyaki sauce, served with jasmine rice and vegetables",
        price: "₱180",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        popular: true,
      },
      {
        name: "Filipino Breakfast Silog",
        description:
          "Choice of longsilog, tapsilog, or bangsilog with garlic rice and fried egg",
        price: "₱160",
        image:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Grilled Pork Belly",
        description:
          "Succulent pork belly grilled to perfection with rice and ensalada",
        price: "₱200",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Seafood Pasta",
        description:
          "Fresh seafood tossed in creamy white sauce with al dente pasta",
        price: "₱190",
        image:
          "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Veggie Spring Rolls",
        description:
          "Fresh vegetables wrapped in crispy spring roll wrapper, served with sweet chili sauce",
        price: "₱120",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
    pastries: [
      {
        name: "Glazed Donuts (6 pcs)",
        description:
          "Soft and fluffy donuts with sweet glaze, perfect with coffee",
        price: "₱80",
        image:
          "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        popular: true,
      },
      {
        name: "Chocolate Croissant",
        description: "Buttery, flaky croissant filled with rich chocolate",
        price: "₱60",
        image:
          "https://images.unsplash.com/photo-1555507036-ab794f4ade2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Banana Muffin",
        description: "Moist banana muffin topped with walnuts and cinnamon",
        price: "₱50",
        image:
          "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Cheese Danish",
        description:
          "Flaky pastry filled with creamy cheese and topped with fruit",
        price: "₱70",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Local Ensaymada",
        description:
          "Traditional Filipino sweet bread topped with cheese and sugar",
        price: "₱45",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
    specials: [
      {
        name: "Coffee + Pastry Combo",
        description:
          "Any regular coffee with choice of pastry at special price",
        price: "₱130",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        popular: true,
      },
      {
        name: "Student Meal Deal",
        description: "Rice meal + drink + dessert for students with valid ID",
        price: "₱150",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        name: "Weekend Brunch Special",
        description: "All-day breakfast with premium coffee (weekends only)",
        price: "₱200",
        image:
          "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  };

  return (
    <section className="menu">
      <div className="menu-container">
        <div className="menu-header">
          <h2>Our Delicious Menu</h2>
          <p className="menu-subtitle">
            Crafted with love, served with a smile
          </p>
        </div>

        <div className="menu-categories">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                activeCategory === category.id ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        <div className="menu-items">
          <div className="items-grid">
            {menuItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className={`menu-item ${item.popular ? "popular" : ""}`}
              >
                {item.popular && (
                  <span className="popular-badge">Most Popular</span>
                )}
                <div className="item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-content">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <div className="item-footer">
                    <span className="item-price">{item.price}</span>
                    <button
                      className="add-to-order-btn"
                      onClick={() => setShowOrderModal(true)}
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-footer">
          <div className="pricing-note">
            <p>
              💡 <strong>Affordable prices for everyone!</strong> All items
              between ₱45-₱200
            </p>
            <p>
              📞 Call ahead for takeout and delivery:{" "}
              <strong>0915 280 0790</strong>
            </p>
          </div>
          <button
            className="order-online-btn"
            onClick={() => setShowOrderModal(true)}
          >
            🛒 Order Online Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
