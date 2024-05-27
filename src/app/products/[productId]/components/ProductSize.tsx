"use client";
import React from "react";
import SizeButton from "../../../../components/buttons/SizeButton";

function ProductSize({ isSizeAvailable, changeSizeHandler, selectedSize }) {
  return (
    <div className="flex flex-row gap-2 mb-3 justify-around">
      {["S", "M", "L", "XL", "XXL", "XXXL"].map((size, index) => (
        <SizeButton
          key={index}
          size={size}
          available={isSizeAvailable(size)}
          changeSizeHandler={changeSizeHandler}
          selectedSize={selectedSize}
        />
      ))}
    </div>
  );
}

export default ProductSize;
