import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import productDetails from "../data/productDetails";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const clickDescProduct = productDetails.find((prod) => prod.id == productId);

  const [quantity, setQuantity] = useState(1);
  const [emptyCart, setEmptyCart] = useState(false);

  const incrementQty = () => {
    setQuantity(quantity + 1);
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const deleteCart = () => {
    setEmptyCart(true);
  };

  if (emptyCart) {
    return (
      <>
        <h1>Cart is empty</h1>
        <Link to="/">Go to Homepage</Link>
      </>
    );
  }

  const fireAlert = () => {
    
    Swal.fire({
        title: 'Press OK to proceed and CANCEL for decline',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        icon: 'warning'
    }
    ).then((result) => {
        if (result.isConfirmed) {

            Swal.fire('Your order is confirm', '', 'success');
            navigate("/");

        } else
            Swal.fire(' Cancelled', '', 'error')

    })
    

}

  return (
    <>
      <div className="cart-page mt-20">
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
                <td>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={clickDescProduct.img[0]}
                    alt={clickDescProduct.title}
                  />
                </td>
                <td>{clickDescProduct.name}</td>
                <td>₹ {clickDescProduct.price}</td>
                <td>
                  <div className="quantity-form">
                    <button
                      onClick={decrementQty}
                      className="quantity-button decrement"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="quantity"
                      value={quantity}
                      readonly
                    />
                    <button
                      onClick={incrementQty}
                      className="quantity-button increment"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>₹ {clickDescProduct.price}</td>
                <td>
                  <button onClick={deleteCart} className="remove-button">
                    X Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="cart-summary">
          <h2>Have coupon?</h2>
          <form action="" method="post" className="coupon-form">
            <input type="text" name="coupon" placeholder="Coupon code" />
            <button type="submit">Apply</button>
          </form>
          <p>Total Products: ₹ {clickDescProduct.price * quantity}</p>
          <p>Delivery charges: ₹ 100</p>
          <h3>Grand Total: ₹ {clickDescProduct.price * quantity + 100}</h3>
          <button onClick={fireAlert} className="checkout-button">Place Order</button>
        </div>
      </div>
    </>
  );
}
