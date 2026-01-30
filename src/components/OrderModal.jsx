import React, { useState } from "react";

const OrderModal = ({ setShowOrderModal }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderItems, setOrderItems] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    orderType: "pickup", // pickup, delivery
  });

  const popularItems = [
    {
      id: 1,
      name: "Iced Caramel Macchiato",
      price: 120,
      category: "drinks",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 2,
      name: "Chicken Teriyaki Rice Meal",
      price: 180,
      category: "meals",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 3,
      name: "Glazed Donuts (6 pcs)",
      price: 80,
      category: "pastries",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 4,
      name: "Local Barako Blend",
      price: 90,
      category: "drinks",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 5,
      name: "Filipino Breakfast Silog",
      price: 160,
      category: "meals",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      id: 6,
      name: "Coffee + Pastry Combo",
      price: 130,
      category: "specials",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const addToOrder = (item) => {
    const existingItem = orderItems.find(
      (orderItem) => orderItem.id === item.id
    );
    if (existingItem) {
      setOrderItems(
        orderItems.map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem
        )
      );
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setOrderItems(orderItems.filter((item) => item.id !== id));
    } else {
      setOrderItems(
        orderItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // This is a prototype - in a real app, you'd send this to a server
    const orderSummary = {
      items: orderItems,
      customer: customerInfo,
      total: getTotalPrice(),
      orderDate: new Date().toISOString(),
    };

    console.log("Order submitted:", orderSummary);
    alert(
      `Thank you ${
        customerInfo.name
      }! Your order has been received. We'll contact you at ${
        customerInfo.phone
      } shortly. Total: ₱${getTotalPrice()}`
    );
    setShowOrderModal(false);
  };

  const renderStep1 = () => (
    <div className="order-step">
      <h3>Select Items</h3>
      <div className="order-items-grid">
        {popularItems.map((item) => (
          <div key={item.id} className="order-item-card">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h4>{item.name}</h4>
              <p className="item-price">₱{item.price}</p>
              <button className="add-item-btn" onClick={() => addToOrder(item)}>
                + Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {orderItems.length > 0 && (
        <div className="order-summary">
          <h4>Your Order ({orderItems.length} items)</h4>
          <div className="order-list">
            {orderItems.map((item) => (
              <div key={item.id} className="order-item">
                <span className="item-name">{item.name}</span>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="item-total">
                  ₱{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <strong>Total: ₱{getTotalPrice()}</strong>
          </div>
          <button className="next-step-btn" onClick={() => setCurrentStep(2)}>
            Continue to Details →
          </button>
        </div>
      )}
    </div>
  );

  const renderStep2 = () => (
    <div className="order-step">
      <h3>Order Details</h3>
      <form onSubmit={handleSubmitOrder} className="order-form">
        <div className="form-section">
          <h4>Order Type</h4>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="orderType"
                value="pickup"
                checked={customerInfo.orderType === "pickup"}
                onChange={handleCustomerInfoChange}
              />
              <span>🏪 Pickup (Ready in 15-20 mins)</span>
            </label>
            <label>
              <input
                type="radio"
                name="orderType"
                value="delivery"
                checked={customerInfo.orderType === "delivery"}
                onChange={handleCustomerInfoChange}
              />
              <span>🚚 Delivery (+₱30 delivery fee)</span>
            </label>
          </div>
        </div>

        <div className="form-section">
          <h4>Contact Information</h4>
          <div className="form-grid">
            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleCustomerInfoChange}
                required
                placeholder="Your full name"
              />
            </div>
            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={customerInfo.phone}
                onChange={handleCustomerInfoChange}
                required
                placeholder="0915 280 0790"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleCustomerInfoChange}
                placeholder="your.email@example.com"
              />
            </div>
            {customerInfo.orderType === "delivery" && (
              <div className="form-group full-width">
                <label>Delivery Address *</label>
                <textarea
                  name="address"
                  value={customerInfo.address}
                  onChange={handleCustomerInfoChange}
                  required={customerInfo.orderType === "delivery"}
                  placeholder="Complete delivery address within Sogod area"
                  rows="3"
                />
              </div>
            )}
          </div>
        </div>

        <div className="order-summary-final">
          <h4>Order Summary</h4>
          {orderItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>
                {item.quantity}x {item.name}
              </span>
              <span>₱{item.price * item.quantity}</span>
            </div>
          ))}
          <div className="summary-subtotal">
            <span>Subtotal:</span>
            <span>₱{getTotalPrice()}</span>
          </div>
          {customerInfo.orderType === "delivery" && (
            <div className="summary-delivery">
              <span>Delivery Fee:</span>
              <span>₱30</span>
            </div>
          )}
          <div className="summary-total">
            <strong>
              <span>Total:</span>
              <span>
                ₱
                {getTotalPrice() +
                  (customerInfo.orderType === "delivery" ? 30 : 0)}
              </span>
            </strong>
          </div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="back-btn"
            onClick={() => setCurrentStep(1)}
          >
            ← Back to Items
          </button>
          <button type="submit" className="submit-order-btn">
            📞 Place Order
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div
      className="order-modal-overlay"
      onClick={() => setShowOrderModal(false)}
    >
      <div className="order-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Order Online - K.spot Café</h2>
          <button
            className="close-btn"
            onClick={() => setShowOrderModal(false)}
          >
            ✕
          </button>
        </div>

        <div className="modal-steps">
          <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            <span className="step-number">1</span>
            <span className="step-label">Select Items</span>
          </div>
          <div className="step-separator"></div>
          <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
            <span className="step-number">2</span>
            <span className="step-label">Order Details</span>
          </div>
        </div>

        <div className="modal-content">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
        </div>

        <div className="modal-footer">
          <div className="prototype-notice">
            <span className="notice-icon">💡</span>
            <p>
              <strong>Prototype Notice:</strong> This is a demo ordering system.
              For actual orders, please call <strong>0915 280 0790</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
