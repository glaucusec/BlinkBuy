"use client";
import React, { useContext } from "react";
import Product from "../../components/Product";
import { SearchProductsContext } from "../../context/SearchProductsContext";
import Spinner from "../../components/Spinner";

function ProductGrid() {
  const { loading, products } = useContext(SearchProductsContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="search-products-grid grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 overflow-y-auto no-scrollbar">
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
  );
}

export default ProductGrid;
