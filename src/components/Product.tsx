import React, { forwardRef } from "react";
import { calculateDiscountPercentage } from "../utils/utils";
import BestSeller from "./badges/BestSeller";
import Link from "next/link";

type ProductProps = {
  product__id?: string;
  product__image: string;
  product__name: string;
  product__regular: number;
  product__sale: number;
  product__at__lowest?: boolean;
  bestseller?: boolean;
  padding?: boolean;
};

const Product = forwardRef<HTMLDivElement, ProductProps>(function (
  {
    product__id,
    product__image,
    product__name,
    product__regular,
    product__sale,
    product__at__lowest,
    bestseller,
    padding,
  }: ProductProps,
  ref
) {
  const product__discountPercentage = Math.round(
    calculateDiscountPercentage(product__sale, product__regular)
  );

  return (
    <div className={padding ? "p-2" : ""} ref={ref}>
      <section className="product_className_container">
        <Link href={`/products/${product__id}`} target="_blank">
          <div className="flex flex-col">
            <div className="flex w-full relative aspect-[2/3] image_container">
              <figure className="flex">
                <img
                  className="object-cover relative"
                  src={product__image}
                  alt={product__name}
                />
                {bestseller && <BestSeller />}
              </figure>
            </div>
          </div>
          <section className="product_info flex flex-col pt-2">
            <h3 className="font-medium text-base overflow-hidden whitespace-nowrap max-w-[18ch] lg:max-w-[24ch] xl:max-w-[26ch] text-ellipsis">
              {product__name}
            </h3>
            <article className="product_price">
              <section className="flex flex-row items-start">
                <article className="product_regular pr-1">
                  <span className="font-semibold text-md">
                    ₹{product__regular}
                  </span>
                </article>
                <article className="product_sale pr-1">
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product__sale}
                  </span>
                </article>
                <article className="product_discount">
                  <span className="text-md font-bold text-green-600">
                    {product__discountPercentage}% off
                  </span>
                </article>
              </section>
              <article className="product_lowest">
                <span className="text-md text-green-800">
                  {product__at__lowest ? "Lowest price in last 30 days" : ""}
                </span>
              </article>
            </article>
          </section>
        </Link>
      </section>
    </div>
  );
});
export default Product;
