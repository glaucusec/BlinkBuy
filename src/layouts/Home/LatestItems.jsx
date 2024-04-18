import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";

import Product from "../../components/Product";

import products from "../../data/LatestItemsData";
import LeftButton from "../../components/Button/LeftButton";
import RightButton from "../../components/Button/RightButton";

function LatestItems() {
  const [sliderRef, setSliderRef] = useState(null);

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div className="latest-items container mx-auto">
      <div
        id="latest-item-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">See the Latest</h2>
        <p className="flex justify-center items-center text-lg text-gray-500">
          Handpicked for you
        </p>
      </div>

      <div className="latest-items-wrapper  relative">
        <LeftButton clickAction={sliderRef?.slickPrev} />
        <RightButton clickAction={sliderRef?.slickNext} />

        <Slider ref={setSliderRef} {...settings}>
          {products.map((p, index) => {
            return (
              <Product
                key={p.product__id}
                product__image={p.product__image}
                product__name={p.product__name}
                product__regular={p.product__regular}
                product__sale={p.product__sale}
                product__at__lowest={p.product__at__lowest}
              />
            );
          })}
        </Slider>
      </div>
      <div className="flex justify-center my-14">
        <button className="border rounded-full border-blue-950 px-20 py-1">
          <a href="#" className="font-semibold text-blue-950">
            Shop all products
          </a>
        </button>
      </div>
    </div>
  );
}

export default LatestItems;