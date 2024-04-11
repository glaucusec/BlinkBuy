import React from "react";
import calculateDiscountPercentage from "../services/PercentageCalculator";

function Product({
  product__image,
  product__name,
  product__regular,
  product__sale,
}) {
  const product__discountPercentage = Math.round(
    calculateDiscountPercentage(product__sale, product__regular)
  );

  return (
    <div>
      <section className="product_class_container">
        <div>
          <div>
            <a href="">
              <div className="flex flex-col">
                <div className="flex w-full relative aspect-[2/3] image_container">
                  <figure className="flex">
                    <img
                      className="object-cover"
                      src={product__image}
                      alt={product__name}
                    />
                  </figure>
                </div>
              </div>
              <section className="product_info flex flex-col">
                <h3 className="font-semibold text-base overflow-hidden whitespace-nowrap max-w-[18ch] text-ellipsis">
                  {product__name}
                </h3>
                <article className="product_price">
                  <section className="flex flex-row items-start">
                    <article className="product_regular pr-1">
                      <span className="font-semibold text-md">
                        {product__regular}
                      </span>
                    </article>
                    <article className="product_sale pr-1">
                      <span className="text-sm text-gray-500 line-through">
                        {product__sale}
                      </span>
                    </article>
                    <article className="product_sale">
                      <span className="text-md font-bold text-green-600">
                        {product__discountPercentage}% off
                      </span>
                    </article>
                  </section>
                </article>
              </section>
            </a>
          </div>
        </div>
      </section>
      {/* <div class="item-image h-5/6">
        <img class="object-cover w-full h-full" src={product__image} alt="" />
      </div>
      <div class="item-desc">
        <h2 class="pt-4 font-semibold text-base">{product__name}</h2>
        <div class="flex flex-row justify-items-center item-price gap-1">
          <p class="sale-price font-semibold text-md">₹{product__regular}</p>
          <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
            ₹{product__sale}
          </p>
          <p class="dicount-percentage text-lg font-bold text-green-600">
            46% off
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default Product;
