import React, { forwardRef } from "react";
import { calculateDiscountPercentage } from "../utils/utils";
import BestSeller from "./badges/BestSeller";
import Link from "next/link";
import Image from "next/image";

type ProductProps = {
  id?: string;
  image_url: string;
  title: string;
  discounted_price: number;
  price: number;
  lowest_price?: boolean;
  bestseller?: boolean | null;
  padding?: boolean;
};

const Product = forwardRef<HTMLDivElement, ProductProps>(function (
  {
    id,
    image_url,
    title,
    discounted_price,
    price,
    lowest_price,
    bestseller,
    padding,
  }: ProductProps,
  ref
) {
  const product__discountPercentage = Math.round(
    calculateDiscountPercentage(price, discounted_price)
  );

  return (
    <div className={padding ? "p-2" : ""} ref={ref}>
      <section className="product_className_container">
        <Link href={`/products/${id}`} target="_blank">
          <div className="flex flex-col">
            <div className="flex w-full relative aspect-[2/3] image_container">
              <figure className="flex">
                <Image
                  width={315}
                  height={210}
                  className="object-cover relative"
                  src={image_url}
                  alt={title}
                />
                {bestseller && <BestSeller />}
              </figure>
            </div>
          </div>
          <section className="product_info flex flex-col pt-2">
            <h3 className="font-medium text-base overflow-hidden whitespace-nowrap max-w-[18ch] lg:max-w-[24ch] xl:max-w-[26ch] text-ellipsis">
              {title}
            </h3>
            <article className="product_price">
              <section className="flex flex-row items-start">
                <article className="product_regular pr-1">
                  <span className="font-semibold text-md">
                    ₹{discounted_price}
                  </span>
                </article>
                <article className="product_sale pr-1">
                  <span className="text-sm text-gray-500 line-through">
                    ₹{price}
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
                  {lowest_price ? "Lowest price in last 30 days" : ""}
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
