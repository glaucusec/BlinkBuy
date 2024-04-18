import React from "react";
import item1 from '../../assets/images/popular-items/item1.webp'
import item2 from '../../assets/images/popular-items/item2.webp'
import item3 from '../../assets/images/popular-items/item3.webp'
import item4 from '../../assets/images/popular-items/item4.webp'


function PopularItems() {
  return (
    <div className="popular-items container mx-auto my-16">
      <div
        id="popular-item-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">Most Popular</h2>
        <p className="flex justify-center items-center text-lg text-gray-500">
          Check out now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 py-4">
        <div className="rounded-lg overflow-hidden">
          <img
            src={item1}
            alt="Fashion Joggers"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={item2}
            alt="Summer Co-Ords"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img
            src={item3}
            alt="Oversized T-Shirts"
          />
        </div>
        <div className="rounded-lg overflow-hidden">
          <img src={item4} />
        </div>
      </div>
    </div>
  );
}

export default PopularItems;
