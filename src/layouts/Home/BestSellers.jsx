import React from "react";
import bestSellerProducts from "../../data/BestSellersData";
import Product from "../../components/Product";

function BestSellers() {
  return (
    <div className="latest-items container mx-auto mt-16">
      <div
        id="latest-item-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">Our BestSellers</h2>
        <p className="flex justify-center items-center text-lg text-gray-500">
          Don't miss out Top Selling styles
        </p>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 lg:grid-cols-4">
        {bestSellerProducts.map((p, index) => {
          return (
            <Product
              key={p.product__id}
              product__image={p.product__image}
              product__name={p.product__name}
              product__regular={p.product__regular}
              product__sale={p.product__sale}
            />
          );
        })}
      </div>
      <div className="flex justify-center my-14">
        <button className="border rounded-full border-blue-950 px-20 py-1">
          <a href="#" className="font-semibold text-blue-950">
            Shop all products
          </a>
        </button>
      </div>
    </div>
  );
}

export default BestSellers;
