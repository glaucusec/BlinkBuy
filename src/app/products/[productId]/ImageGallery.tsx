"use client";
import React, { useState } from "react";
import Image from "next/image";

import PrevButton from "../../../components/buttons/PrevButton";
import NextButton from "../../../components/buttons/NextButton";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageGallery({ images }: { images: string[] }) {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const settings = {
    dots: false,
    inifinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="slider-container relative">
      <PrevButton onClick={sliderRef?.slickPrev} />
      <NextButton onClick={sliderRef?.slickNext} />
      <Slider ref={setSliderRef} {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <Image
                src={image}
                width={800}
                height={800}
                style={{ objectFit: "contain" }}
                alt="Image"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageGallery;
