import React from "react";
import { IconFilter } from "@tabler/icons-react";
import SearchPageFilter from "./filter/SearchPageFilter";
import SearchPageProductGrid from "./filter/SearchPageProductGrid";

function SearchPage({ searchParams }) {
  return (
    <div className="search-container">
      <div className="search-grid grid grid-flow-row grid-cols-2">
        <div className="col-span-2 py-4">
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="text-gray-600">484 Items</h2>
            </div>
            <div>
              <span className="border border-gray-500 flex flex-row gap-1 px-2 py-1">
                <IconFilter />
                <span className="text-gray-600">Sort By: </span>
                <span className="text-black font-semibold">Featured</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-[3fr_9fr] gap-4">
          <SearchPageFilter />
          <SearchPageProductGrid />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
