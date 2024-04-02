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
          <p className="product-desc-price">Price : </p>
          <div className="price-sec">
            <div className="price-box">
              <span style={{ textDecoration: "line-through" }}>
                ₹{clickProduct.price}
              </span>
              <p>M.R.P</p>
            </div>
            <div className="price-box">
              <span style={{ color: "#008000" }}>₹{clickProduct.price}</span>
              <p>Selling Price</p>
            </div>
            <div className="price-box">
              <span style={{ color: "red" }}>{clickProduct.price}%off</span>
              <p>Discount</p>
            </div>
          </div>
          <div className="size-sec-wrapper">
            <p className="product-desc-price">Size : </p>
            <div className="size-sec">
              {clickProduct.size.map((size, index) => (
                <button className="size-box" key={index}>
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
