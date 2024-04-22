"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

import LeftButton from "../../components/Button/LeftButton";
import RightButton from "../../components/Button/RightButton";

import images from "../../data/PrimaryBannerData";

function PrimaryBanner() {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
  };
  return (
    <div id="primary-banner-section" className="my-4 relative ">
      <LeftButton clickAction={sliderRef?.slickPrev} />
      <RightButton clickAction={sliderRef?.slickNext} />

      <Slider ref={setSliderRef} {...settings}>
        {images.map((img, index) => {
          return (
            <div key={img.image__id}>
              <Image
                src={img.image__url}
                alt="Banner Image 2"
                className="w-full"
                width={400}
                height={100}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PrimaryBanner;
