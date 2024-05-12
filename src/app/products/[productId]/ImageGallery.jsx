"use client";
import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageGallery({ images }) {
  const settings = {
    dots: false,
    inifinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index} className="h-screen">
              {
                <Image
                  src={image}
                  width={800}
                  height={800}
                  style={{ objectFit: "contain" }}
                />
              }
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageGallery;
