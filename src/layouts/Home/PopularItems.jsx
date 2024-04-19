import React, { useState } from "react";
import Slider from "react-slick";

import LeftButton from "../../components/Button/LeftButton";
import RightButton from "../../components/Button/RightButton";

import RightArrowIcon from "../../components/icons/RightArrowIcon";

import images from "../../data/PopularItemsData";
import PopularItemCard from "../../components/Cards/PopularItemCard";

function PopularItems() {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 200,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
          swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="popular-items container mx-auto my-16">
      <div
        id="popular-item-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">Most Popular</h2>
        <p className="flex justify-center items-center text-lg text-gray-500">
          Check out now
          <RightArrowIcon />
        </p>
      </div>
      {/* For screen sizes 'lg' or more */}
      <div className="hidden lg:grid grid-cols-4 gap-6 py-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://peqwlppfbyknhzenqdpb.supabase.co/storage/v1/object/public/assests/images/popular-items/item1.webp"
            alt="Fashion Joggers"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://peqwlppfbyknhzenqdpb.supabase.co/storage/v1/object/public/assests/images/popular-items/item2.webp"
            alt="Summer Co-Ords"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://peqwlppfbyknhzenqdpb.supabase.co/storage/v1/object/public/assests/images/popular-items/item3.webp"
            alt="Oversized T-Shirts"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img src="https://peqwlppfbyknhzenqdpb.supabase.co/storage/v1/object/public/assests/images/popular-items/item4.webp" />
        </div>
      </div>
      {/* For screen sizes 'sm' to 'lg' (excluding 'lg') */}
      <div className="lg:hidden relative">
        <LeftButton clickAction={sliderRef?.slickPrev} />
        <RightButton clickAction={sliderRef?.slickNext} />
        <Slider ref={setSliderRef} {...settings}>
          {images.map((image, index, arr) => {
            return (
              <PopularItemCard
                key={image.image__id}
                image__url={image.image__url}
                image__alt__text={image.image__alt__text}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default PopularItems;
