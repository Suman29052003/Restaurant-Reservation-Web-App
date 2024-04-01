import React from "react";
import "../src/index.css";
import Home from "./components/Home";
import OfferPage from "./components/OfferPage";

const App = () => {
  return (
    <div className="grid grid-cols-12">
      <Home />

      <OfferPage />

      
    </div>
  );
};

export default App;
