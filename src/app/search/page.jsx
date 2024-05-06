"use client";

import React, { useState } from "react";
import SearchPageProductGrid from "./filter/ProductGrid";
import SortBy from "./filter/SortBy";

import SearchPageFilter from "./filter/ProductFilter";

function SearchPage() {
  return (
    <div className="search-container md:px-8 lg:px-10 xl:px-12">
      <div className="flex flex-row justify-between items-center py-4 sticky">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-semibold">Mens</h1>
          <h2 className="text-gray-600">484 Items</h2>
        </div>
        <div>
          <SortBy />
        </div>
      </div>
      <div className="search-grid grid grid-flow-row grid-cols-2">
        <div className="col-span-2 grid grid-cols-[3fr_9fr] gap-4">
          <SearchPageFilter />
          <SearchPageProductGrid />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
