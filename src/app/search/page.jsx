import React from "react";
import ProductGrid from "./ProductGrid";
import SortBy from "./components/SortBy";

import ProductFilter from "./ProductFilter";

function SearchPage() {
  return (
    <div className="search-container md:px-2 lg:px-8 xl:px-12">
      <div className="flex flex-row justify-between items-center py-4 sticky">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-semibold">Mens</h1>
          <h2 className="text-gray-600">484 Items</h2>
        </div>
        <div className="hidden md:block">
          <SortBy />
        </div>
      </div>
      <div className="search-grid grid grid-flow-row grid-cols-2">
        <div className="col-span-2 grid grid-cols-1 md:grid-cols-[3fr_9fr] gap-4 xl:gap-8">
          <ProductFilter />
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
