import React from "react";
import { useParams } from "react-router-dom";
import productDetails from "../data/productDetails";

export default function Checkout() {
  const { productDescId } = useParams();
  const clickDescProduct = productDetails.find(
    (prod) => prod.id == productDescId
  );
  console.log("productDescId:", productDescId);
  console.log("productDetails:", productDetails);
  console.log("clickDescProduct:", clickDescProduct);
  return (
    <div>
      <h1>{clickDescProduct.price}</h1>
    </div>
  );
}
