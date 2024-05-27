import React from "react";
import DiscountCard from "../../../components/cards/DiscountCard";
import ReviewRating from "../../../components/badges/ReviewRating";
import { calculateDiscountPercentage } from "../../../utils/utils";
import HighLights from "./components/HighLights";
import SelectSizeAndCart from "./components/SelectSizeAndCart";

type ProductType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  discountedPrice: number;
  handle?: string | null;
  reviewsAverage?: number | null;
  reviewsCount?: number | null;
  price: number;
  isActive: boolean | null;
  isBestSeller?: boolean | null;
  published?: boolean | null;
  images: string[];
  sizes: string[];
};

function ProductPanel({ product }: { product: ProductType }) {
  const sizes = product.sizes;

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
      <SelectSizeAndCart sizes={sizes} />
      <HighLights />
    </div>
  );
}

export default ProductPanel;
