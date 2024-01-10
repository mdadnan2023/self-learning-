import React from "react";
import "./App.css";
import Search from "./components/Search";
import initialDetails from "./data/initialDetails";
import productDetails from "./data/productDetails";
import Searching from "./components/Searching";

function App() {
  return (
    <div className="tc ma0 pa4 min-vh-100">
      <Searching product={productDetails} />
      {/* <Search details={initialDetails} /> */}
    </div>
  );
}

export default App;
