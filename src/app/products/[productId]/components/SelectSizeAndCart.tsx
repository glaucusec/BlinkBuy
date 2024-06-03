"use client";
import React, { useState, useContext } from "react";
import ProductSize from "./ProductSize";
import LowestPriceBadge from "./LowestPriceBadge";
import { CartContext } from "../../../../context/CartContext";
import { ProductType } from "../../../../lib/types";

type SelectSizeAndCartProps = {
  sizes: string[];
  product: ProductType;
};

function SelectSizeAndCart({ sizes, product }: SelectSizeAndCartProps) {
  const { addItemToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("");

  const isSizeAvailable = (size: string) => {
    return sizes.includes(size);
  };

  const addToCartHandler = () => {
    // send the relevant product data for the cart items.
    const newProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      discountedPrice: product.discountedPrice,
      image: product.images[0],
      size: selectedSize,
    };
    addItemToCart(newProduct, selectedSize);
  };

  const changeSizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <button
          onClick={addToCartHandler}
          className="p-4 border border-blinkblue bg-blinkblue rounded-full w-full"
        >
          <span className="text-white text-lg font-bold">Add to Cart</span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default SelectSizeAndCart;
