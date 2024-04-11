import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useState } from "react";
import Slider from "react-slick";

import Product from "../../components/Product";

import products from "../../data/LatestItemsData";

function LatestItems() {
  const [sliderRef, setSliderRef] = useState(null);

  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div class="latest-items container mx-auto">
      <div
        id="latest-item-header"
        class="flex flex-col justify-center items-center"
      >
        <h2 class="text-2xl font-bold">See the Latest</h2>
        <p class="flex justify-center items-center text-lg text-gray-500">
          Handpicked for you
        </p>
      </div>

      <div class="latest-items-wrapper my-16 relative">
        <a class="z-10 prev shadow-xl cursor-pointer absolute top-1/2 w-auto p-2 transition duration-600 ease-out rounded-full bg-white hover:bg-transparent left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </a>

        <Slider {...settings}>
          {products.map((p, index) => {
            return (
              <Product
                product__image={p.product__image}
                product__name={p.product__name}
                product__regular={p.product__regular}
                product__sale={p.product__sale}
              />
            );
          })}
        </Slider>

        <a
          class="next shadow-xl cursor-pointer absolute top-1/2 w-auto p-2 transition duration-600 ease-out rounded-full bg-white hover:bg-transparent right-4"
          onclick="plusSlides(1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
      <div class="flex justify-center">
        <button class="border rounded-full border-blue-950 px-20 py-1">
          <a href="#" class="font-semibold text-blue-950">
            See all products
          </a>
        </button>
      </div>
    </div>
  );
}

export default LatestItems;
