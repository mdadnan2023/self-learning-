import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/homepage/homepage.js";
import Navbar from "./components/navbar/navbar.jsx";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Filtering from "./components/Filtering.js";
import productDetails from "./data/productDetails.js";
import Error from "./components/Error.js";
import ProductDetail from "./components/ProductDetail.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product"
            element={<Filtering product={productDetails} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

// https://codesandbox.io/p/sandbox/react-router-product-detail-pages-dynamic-links-tmcjc?file=%2Fsrc%2FProductDetail.js
