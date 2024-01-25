import React from "react";
import first from "../components/assets/first.jpg"
import second from "../components/assets/second.jpg"
import third from "../components/assets/third.jpg"
import fourth from "../components/assets/fourth.jpg"
import fifth from "../components/assets/fifth.jpg"

export default function slider() {
  return (
    <div className="tc ma0 pa4">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="slider-img" src={fourth} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="slider-img" src={second} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="slider-img" src={third} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="slider-img" src={first} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="slider-img" src={fifth} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
