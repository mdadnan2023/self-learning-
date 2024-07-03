import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";

import { useParams } from "react-router-dom";
import productDetails from "../data/productDetails";

export default function ProductDescription() {
  const { productId } = useParams();
  const clickProduct = productDetails.find((prod) => prod.id == productId);

  const [mainProduct, setMainProduct] = useState(clickProduct);

  const handlePrice = (size) => {
    if (size === "S") {
      setMainProduct(prevProduct => ({...prevProduct,price: prevProduct.price - 80}));
      setMainProduct(prevProduct =>({...prevProduct,quantity: prevProduct.quantity - 2}));
    }
    if (size === "M") {
      setMainProduct(prevProduct => ({...prevProduct,price: prevProduct.price - 20}));
    }
    if (size === "XL") {
      setMainProduct(prevProduct => ({...prevProduct,price: prevProduct.price + 80}));
    }

  };



  return (
    <div className="tc ma0 pa4 min-vh-100">
      <div class="product-description-main">
        <div className="product-image-slider w-50 p-4">
          <div className="product-image-wrapper">
            <div className="sidebar-img-sec">
              {mainProduct.img.map((image, index) => (
                <figure class="sidebar-img-wrapper" key={index}>
                  <img src={image} alt="new" />
                </figure>
              ))}
            </div>
            <Swiper
              spaceBetween={30}
              pagination={{ clickable: true }}
              className="mySwiper swiper-card-wrapper"
            >
              {mainProduct.img.map((image, index) => (
                <SwiperSlide className="swiper-card" key={index}>
                  <img src={image} alt="new" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            style={{
              width: "100%",
              marginTop: "16px",
              border: "1px solid #DE3163",
            }}
            type="button"
            className="cart-btn"
          >
            ADD TO WISHLIST 🤍
          </button>
        </div>
        <div className="product-description w-50">
          <h1 className="product-desc-title">
            {mainProduct.brand} {mainProduct.name}
          </h1>
          <h3 className="product-desc-price">Price : </h3>
          <div className="price-sec">
            <div className="price-box">
              <span style={{ textDecoration: "line-through" }}>
                ₹{mainProduct.price}
              </span>
              <p>M.R.P</p>
            </div>
            <div className="price-box">
              <span style={{ color: "#008000" }}>
                ₹{mainProduct.price * (40 / 100)}
              </span>
              <p>Selling Price</p>
            </div>
            <div className="price-box">
              <span style={{ color: "red" }}>40%off</span>
              <p>Discount</p>
            </div>
          </div>
          <div className="size-sec-wrapper">
            <h3 className="product-desc-price">Size : </h3>
            <div className="size-sec">
              {mainProduct.size.map((size, index) => (
                <button onClick={() => handlePrice(size)} className="size-box" key={index}>
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="quantity-sec-wrapper mt-5">
            <h3 className="product-desc-price">Available Quantity : <span className="avail-num">{mainProduct.quantity}</span></h3>
          </div>
          <div className="quantity-sec-wrapper mt-5">
            <h3 className="product-desc-price">
              Product Details :
              <p className="product-desc-detail">{mainProduct.description}</p>
            </h3>
          </div>
          <div className="btn-sec">
            <button type="button" className="cart-btn">
              <Link style={{color: "#FFFFFF"}} to={`/checkout/${mainProduct.id}`}>BUY NOW</Link>
            </button>
            <button type="button" className="cart-btn">
              <Link style={{color: "#FFFFFF"}} to={`/checkout/${mainProduct.id}`}>ADD TO CART</Link>
            </button>
          </div>
          <div className="quantity-sec-wrapper mt-5">
            <h3 className="product-desc-price">
              Offers :
              <ul className="offer-list">
                <li>
                  Bank Offer5% Cashback on Flipkart Axis Bank Card{" "}
                  <span>T&C</span>
                </li>
                <li>
                  Bank OfferGet ₹25* instant discount for the 1st Flipkart Order
                  using Flipkart UPI <span>T&C</span>
                </li>
                <li>
                  Bank Offer₹2000 Off On SBI Credit Card Transactions{" "}
                  <span>T&C</span>
                </li>
                <li>
                  Special PriceGet extra ₹4901 off (price inclusive of
                  cashback/coupon) <span>T&C</span>
                </li>
              </ul>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
