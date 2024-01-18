import React, { useState } from "react";
import "./App.css";
import productDetails from "./data/productDetails";
import Searching from "./components/Searching";
import Buttons from "./components/Button";

function App() {
  const [item, setItem] = useState(productDetails);
  const menuItems = [...new Set(productDetails.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = productDetails.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className="tc ma0 pa4 min-vh-100">
      <Buttons menuItems={menuItems} filterItem={filterItem} setItem={setItem} />
      <Searching product={item} />
    </div>
  );
}

export default App;

