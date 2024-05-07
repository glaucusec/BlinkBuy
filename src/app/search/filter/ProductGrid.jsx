"use client";
import React, { useContext } from "react";
import Product from "../../../components/Product";
import { QueryContext } from "../../../context/QueryContext";

function ProductGrid() {
  const { loading, setLoading, products } = useContext(QueryContext);

  if (loading) {
    return "Loading...";
  }

  return (
    <div className="search-products-container max-h-screen overflow-y-scroll no-scrollbar">
      <div className="search-products-grid grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => {
          return (
            <Product
              key={p.id}
              product__id={p.id}
              product__image={p.images[0]}
              product__name={p.title}
              product__sale={p.price}
              product__regular={p.discountedPrice}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductGrid;
