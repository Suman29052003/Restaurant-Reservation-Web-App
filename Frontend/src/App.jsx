import React from "react";
import "../src/index.css";
import Home from "./components/Home";
import OfferPage from "./components/OfferPage";
import Menu from "./components/Menu";
import About from "./components/About";

const App = () => {
  return (
    <div className="grid grid-cols-12">
      <Home />
      <OfferPage />
      <Menu />
      <About />
    </div>
  );
};

export default App;
