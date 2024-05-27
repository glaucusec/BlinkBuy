"use client";
import React, { useState } from "react";
import ProductSize from "./ProductSize";
import LowestPriceBadge from "./LowestPriceBadge";

function SelectSizeAndCart({ sizes }: { sizes: string[] }) {
  const [selectedSize, setSelectedSize] = useState("");

  const isSizeAvailable = (size: string) => {
    return sizes.includes(size);
  };

  const changeSizeHandler = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <React.Fragment>
      <div className="size-section">
        <div className="flex flex-row justify-between mb-3">
          <h1 className="text-xl font-semibold">Select Size</h1>
          <p>Size Guide</p>
        </div>
        <ProductSize
          isSizeAvailable={isSizeAvailable}
          changeSizeHandler={changeSizeHandler}
          selectedSize={selectedSize}
        />
      </div>
      <LowestPriceBadge />
      <div className="product-add-to-cart-button mb-4">
        <button className="p-4 border border-blinkblue bg-blinkblue rounded-full w-full">
          <span className="text-white text-lg font-bold">Add to Cart</span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default SelectSizeAndCart;
