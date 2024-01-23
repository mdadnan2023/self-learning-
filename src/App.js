import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/homepage.js";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Searching from "./components/Searching.js";
import productDetails from "./data/productDetails.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Searching />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://codesandbox.io/p/sandbox/react-router-product-detail-pages-dynamic-links-tmcjc?file=%2Fsrc%2FProductDetail.js