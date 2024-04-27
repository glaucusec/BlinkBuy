"use client";

import React, { useState } from "react";
import SearchPageProductGrid from "./filter/SearchPageProductGrid";
import SortBy from "./filter/SortBy";

import SearchPageFilter from "./filter/SearchPageFilter";

function SearchPage({ searchParams }) {
  const [products, setProducts] = useState([]);

  return (
    <div className="search-container">
      <div className="flex flex-row justify-between items-center py-4">
        <div>
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
