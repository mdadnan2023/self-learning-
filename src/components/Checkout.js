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
      <div className="cart-page">
        <div className="cart-details">
            <h1>Cart Details</h1>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>Remove Product</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img style={{width: "100px", height: "100px"}} src={clickDescProduct.img[0]}alt={clickDescProduct.title}
                  /></td>
                        <td>{clickDescProduct.name}</td>
                        <td>₹ {clickDescProduct.price}</td>
                        <td>
                            <div className="quantity-form">
                                <button className="quantity-button decrement">-</button>
                                <input type="text" className="quantity" value="1" readonly />
                                <button className="quantity-button increment">+</button>
                            </div>
                        </td>
                        <td>₹ {clickDescProduct.price}</td>
                        <td><button className="remove-button">X  Remove</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="cart-summary">
            <h2>Have coupon?</h2>
            <form action="" method="post" className="coupon-form">
                <input type="text" name="coupon" placeholder="Coupon code"/>
                <button type="submit">Apply</button>
            </form>
            <p>Total Products: ₹ {clickDescProduct.price}</p>
            <p>Delivery charges: ₹ 100</p>
            <h3>Grand Total: ₹ {clickDescProduct.price +100}</h3>
            <button className="checkout-button">Place Order</button>
        </div>
    </div>
    </div>
  );
}
