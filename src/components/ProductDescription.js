import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

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
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper swiper-card-wrapper"
          >
            {productDetails.map(
              (prod) =>
                prod.id === parseInt(productId) && (
                  <SwiperSlide className="swiper-card" key={prod.id}>
                    {Array.isArray(prod.img) &&
                      prod.img.map((image, index) => (
                        <img
                          className="photo"
                          src={image}
                          alt="new"
                          key={index}
                        />
                      ))}
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
        <div className="product-description w-50">
          <h1 className="product-desc-title">{clickProduct.name}</h1>
          <h1 className="product-desc-title">{clickProduct.price}</h1>
        </div>
      </div>
    </div>
  );
}
