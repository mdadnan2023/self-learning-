import React from "react";
import "./App.css";
import Search from "./components/Search";
import initialDetails from "./data/initialDetails";
import productDetails from "./data/productDetails";
import Searching from "./components/Searching";
import Buttons from "./components/Button";

function App() {

  const menuItems = [...new Set(productDetails.map((val) => val.category))];
  // const filterItem = ((currcat) =>{
  //   const newItem = productDetails.filter((newval) =>{
  //     return newval.category === currcat;
  //   });
  //   // setItem(newItem);
  // })

  return (
    <div className="tc ma0 pa4 min-vh-100">
      <Searching product={productDetails} />
      <Buttons menuItems ={menuItems} />
      {/* <Search details={initialDetails} /> */}
    </div>
  );
}

export default App;
