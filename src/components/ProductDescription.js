import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useParams } from "react-router-dom";
import productDetails from "../data/productDetails";

export default function ProductDescription() {
  const { productId } = useParams();
  const clickProduct = productDetails.find((prod) => prod.id == productId);

  return (
    <div className="tc ma0 pa4 min-vh-100">
      <div class="product-description-main">
        <div className="product-image-slider w-50">
          <div className="sidebar-img-sec">
            {clickProduct.img.map((image, index) => (
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
            {clickProduct.img.map((image, index) => (
              <SwiperSlide className="swiper-card" key={index}>
                <img src={image} alt="new" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="product-description w-50">
          <h1 className="product-desc-title">
            {clickProduct.brand} {clickProduct.name}
          </h1>
          <h3 className="product-desc-price">Price : </h3>
          <div className="price-sec">
            <div className="price-box">
              <span style={{ textDecoration: "line-through" }}>
                ₹{clickProduct.price}
              </span>
              <p>M.R.P</p>
            </div>
            <div className="price-box">
              <span style={{ color: "#008000" }}>
                ₹{clickProduct.price * (40 / 100)}
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
              {clickProduct.size.map((size, index) => (
                <button className="size-box" key={index}>
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* <div className="quantity-sec-wrapper mt-5">
            <h3 className="product-desc-price">Available Quantity : <span className="avail-num">{clickProduct.quantity}</span></h3>
          </div> */}
          <div className="quantity-sec-wrapper mt-5">
            <h3 className="product-desc-price">
              Product Details :{" "}
              <p className="product-desc-detail">{clickProduct.description}</p>
            </h3>
          </div>
          <div className="btn-sec">
            <button type="button" className="cart-btn">
              BUY NOW
            </button>
            <button type="button" className="cart-btn">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
