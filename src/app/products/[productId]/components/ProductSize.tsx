"use client";
import React from "react";
import SizeButton from "../../../../components/buttons/SizeButton";

type ProductSizeProps = {
  isSizeAvailable: (size: string) => boolean;
  changeSizeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedSize: string;
};

function ProductSize({
  isSizeAvailable,
  changeSizeHandler,
  selectedSize,
}: ProductSizeProps) {
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
