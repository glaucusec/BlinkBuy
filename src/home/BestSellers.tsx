import React from "react";
import prisma from "../lib/prisma";
import Product from "../components/Product";

async function fetchLatestItems() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        reviewsCount: "desc",
      },
      include: {
        images: true,
      },
      take: 8,
    });

    const updatedProducts = products.reduce((acc, product) => {
      const updatedProduct = { ...product, image: product.images[0].url };
      delete updatedProduct.images;
      acc.push(updatedProduct);
      return acc;
    }, []);

    return updatedProducts;
  } catch (err) {
    console.log(err);
  }
}

async function BestSellers() {
  const products = await fetchLatestItems();
  return (
    <div className="latest-items mt-16">
      <div
        id="latest-item-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">Our BestSellers</h2>
        <p className="flex justify-center items-center text-lg text-gray-500">
          Don't miss out Top Selling styles
        </p>
      </div>
      <div className="grid grid-rows-2 gap-2 grid-cols-2 lg:grid-cols-4 mx-2 mt-4">
        {products.map((product, index) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              image_url={product.image}
              title={product.title}
              discounted_price={product.discountedPrice}
              price={product.price}
              lowest_price={true}
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
