import React, { useState } from "react";
import productDetails from "../../data/productDetails.js";
import Filtering from "../Filtering.js";
import Buttons from "../Button.js";
import Slider from "../Slider.js";

// import Searching from "../Searching.js";


export default function Home() {
  const [item, setItem] = useState(productDetails);
  const menuItems = [...new Set(productDetails.map((val) => val.category))];

  const filterItem = (curcat) => {
    const newItem = productDetails.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div>
      <div className="tc ma0 pa4 min-vh-100">
        <Slider/>
        <Buttons
          menuItems={menuItems}
          filterItem={filterItem}
          setItem={setItem}
        />
        <Filtering product={item} />
      </div>
    </div>
  );
}
