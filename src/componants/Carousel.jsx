import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../images/demo.jpg"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img
            src={image}
            alt=""
            className="container"
            style={{ maxHeight: 400 }}
          />
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="container"
            style={{ maxHeight: 400 }}
          />
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="container"
            style={{ maxHeight: 400 }}
          />
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="container"
            style={{ maxHeight: 400 }}
          />
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="container"
            style={{ maxHeight: 400 }}
          />
        </div>
        <div>
          <img
            src={image}
            alt=""
            className="container"
            style={{ maxHeight: 400 }}
          />
        </div>
      </Slider>
    </div>
  );
}
