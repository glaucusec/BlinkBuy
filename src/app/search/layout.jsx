import React from "react";
import SortByButton from "./filter/SortByButton";

import SearchPageFilter from "./filter/SearchPageFilter";

function layout({ children }) {
  return (
    <div className="container mx-auto pb-16">
      <div className="search-container">
        <div className="flex flex-row justify-between items-center py-4">
          <div>
            <h2 className="text-gray-600">484 Items</h2>
          </div>
          <div>
            <SortByButton />
          </div>
        </div>
        <div className="search-grid grid grid-flow-row grid-cols-2">
          <div className="col-span-2 grid grid-cols-[3fr_9fr] gap-4">
            <SearchPageFilter />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
