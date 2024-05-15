import React from "react";
import DiscountCard from "../../../components/cards/DiscountCard";
import SizeButton from "../../../components/buttons/SizeButton";
import ReviewRating from "../../../components/badges/ReviewRating";
import { calculateDiscountPercentage } from "../../../utils/utils";
import HighLights from "./components/HighLights";

function ProductPanel({ product }) {
  const sizes = product.sizes;

  const isSizeAvailable = (size) => {
    return sizes.includes(size);
  };

  const discountPercentage = calculateDiscountPercentage(
    product.price,
    product.discountedPrice
  );

  return (
    <div className="mb-2">
      <h1 className="font-bold text-xl">{product.title}</h1>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="flex flex-row gap-4 items-center">
            <span className="font-bold text-2xl">
              ₹{product.discountedPrice}
            </span>
            <span className="text-xl font-bold text-green-600">
              {discountPercentage}% off
            </span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <span className="text-gray-500">
              MRP: <span className="line-through">₹1999</span>
            </span>
            <span className="text-gray-500">Inclusive of all taxes</span>
          </div>
        </div>
        {/* Only shows the rating badge if it's available. */}
        {product.reviewsCount && product.reviewsAverage && (
          <div className="flex items-center justify-center">
            <ReviewRating
              reviewsCount={product.reviewsCount}
              reviewsAverage={product.reviewsAverage}
            />
          </div>
        )}
      </div>
      <div className="offers-list py-2 flex flex-row gap-2 overflow-x-auto no-scrollbar max-w-full">
        <DiscountCard />
        <DiscountCard />
        <DiscountCard />
        <DiscountCard />
      </div>
      <div className="bg-[#b0ffc9] my-2 py-2 flex justify-center items-center">
        <span className="text-blinkblue font-semibold text-sm">
          Sale ends in: 09h: 42m : 21s
        </span>
      </div>
      <div className="size-section">
        <div className="flex flex-row justify-between mb-3">
          <h1 className="text-xl font-semibold">Select Size</h1>
          <p>Size Guide</p>
        </div>
        <div className="flex flex-row gap-2 mb-3">
          {["S", "M", "L", "XL", "XXL", "XXXL"].map((size, index) => {
            return (
              <SizeButton
                key={index}
                size={size}
                available={isSizeAvailable(size)}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-[#f0e4b6] mb-4 py-3 flex justify-center items-center">
        <span className="text-blinkblue font-semibold text-sm">
          Lowest Price in the last <span className="font-bold">30 days</span>
        </span>
      </div>
      <div className="product-add-to-cart-button mb-4">
        <button className="p-4 border border-blinkblue bg-blinkblue rounded-full w-full">
          <span className="text-white text-lg font-bold">Add to Cart</span>
        </button>
      </div>
      <HighLights />
    </div>
  );
}

export default ProductPanel;
