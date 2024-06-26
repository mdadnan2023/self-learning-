import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productDetails from "../data/productDetails";

export default function Checkout() {
  const { productId } = useParams();
  const clickDescProduct = productDetails.find(
    (prod) => prod.id == productId
  );
  console.log("productId:", productId);
  console.log("productDetails:", productDetails);
  console.log("clickDescProduct:", clickDescProduct);
  return (
    <div>
      <h1>{clickDescProduct.price}</h1>
      <h2>{clickDescProduct.name}</h2>
    </div>
  );
}
