import React from "react";
import "../src/index.css";
import Home from "./components/Home";
import OfferPage from "./components/OfferPage";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="grid grid-cols-12">
      <Home />

      <OfferPage />
      <Menu/>
      
    </div>
  );
};

export default App;
