import React from "react";
import products from "../../../data/LatestItemsData";
import Product from "../../../components/Product";

function SearchPageProductGrid() {
  return (
    <div className="search-products-container max-h-screen overflow-y-scroll no-scrollbar">
      <div className="search-products-grid grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => {
          return (
            <Product
              product__image={p.product__image}
              product__name={p.product__name}
              product__sale={p.product__sale}
              product__regular={p.product__regular}
            />
          );
        })}
        {products.map((p) => {
          return (
            <Product
              product__image={p.product__image}
              product__name={p.product__name}
              product__sale={p.product__sale}
              product__regular={p.product__regular}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchPageProductGrid;
