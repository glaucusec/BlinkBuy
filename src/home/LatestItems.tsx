"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import Product from "../components/Product";
import PrevButton from "../components/buttons/PrevButton";
import NextButton from "../components/buttons/NextButton";

function LatestItems() {
  const [latestProducts, setLatestProducts] = useState([]);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
    ],
  };

  useEffect(() => {
    async function fetchLatestItems() {
      try {
        const response = await fetch("/api/graphql/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            {
              latest_items {
                id
                title
                discountedPrice
                price
                image
              }
            }`,
          }),
        });
        const JsonResponse = await response.json();
        const data = JsonResponse.data;
        setLatestProducts(data.latest_items);
      } catch (err) {
        console.log(err);
      }
    }

    fetchLatestItems();
  }, []);

  return (
    <div className="latest-items p-2">
      <div
        id="latest-item-header"
        className="flex flex-col justify-center items-center pb-12"
      >
        <h2 className="text-2xl font-bold">See the Latest</h2>
        <p className="head flex justify-center items-center text-lg text-gray-500">
          Handpicked for you
        </p>
      </div>

      <div className="latest-items-wrapper relative">
        <Slider ref={setSliderRef} {...settings}>
          {latestProducts.map((p) => {
            return (
              <Product
                key={p.id}
                id={p.id}
                image_url={p.image}
                title={p.title}
                discounted_price={p.discountedPrice}
                price={p.price}
                lowest_price={true}
                padding={true}
                bestseller={true}
              />
            );
          })}
        </Slider>
        <PrevButton onClick={sliderRef?.slickPrev} />
        <NextButton onClick={sliderRef?.slickNext} />
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
