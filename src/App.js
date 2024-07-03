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
import ProductDescription from "./components/ProductDescription.js";
import Footer from "./components/footer/footer.jsx";
import Checkout from "../src/components/Checkout.js";
import { Soon } from "./components/soon.js";
import Login from "./components/Login.js";
import Signup from "./components/Signup.js";
import firebase from "firebase/compat/app";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Filtering product={productDetails} />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Soon" element={<Soon />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
          <Route path="/product/:productId" element={<ProductDescription />} />
          <Route path="/checkout/:productId" element={<Checkout />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

// https://codesandbox.io/p/sandbox/react-router-product-detail-pages-dynamic-links-tmcjc?file=%2Fsrc%2FProductDetail.js
