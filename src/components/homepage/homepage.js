import React from "react";
import productDetails from "../../data/productDetails.js";
import Slider from "../Slider.js";
import Searching from "../Searching.js";


export default function Home() {

  return (
    <div>
      <div className="tc ma0 pa4 min-vh-100">
        <Slider/>
        <Searching product={productDetails}/>
      </div>
    </div>
  );
}
