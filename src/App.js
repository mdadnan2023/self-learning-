import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/homepage.js";
import Navbar from "./components/navbar/navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

// https://codesandbox.io/p/sandbox/react-router-product-detail-pages-dynamic-links-tmcjc?file=%2Fsrc%2FProductDetail.js