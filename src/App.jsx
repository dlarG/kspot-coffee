import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import OrderModal from "./components/OrderModal";
import Gallery from "./components/Gallery";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showOrderModal, setShowOrderModal] = useState(false);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <Hero
            setActiveSection={setActiveSection}
            setShowOrderModal={setShowOrderModal}
          />
        );
      case "about":
        return <About />;
      case "menu":
        return <Menu setShowOrderModal={setShowOrderModal} />;
      case "reviews":
        return <Reviews />;
      case "gallery":
        return <Gallery />;
      case "contact":
        return <Contact />;
      default:
        return (
          <Hero
            setActiveSection={setActiveSection}
            setShowOrderModal={setShowOrderModal}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>{renderActiveSection()}</main>
      {showOrderModal && <OrderModal setShowOrderModal={setShowOrderModal} />}
    </div>
  );
}

export default App;
