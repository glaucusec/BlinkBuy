"use client";
import FilterPrice from "./components/FilterPrice";
import FilterColor from "./components/FilterColor";
import FilterSize from "./components/FilterSize";
import FilterAvailability from "./components/FilterAvailability";

function ProductFilter() {
  return (
    <div className="hidden md:block filter-wrapper max-h-screen overflow-y-scroll no-scrollbar">
      <div className="filter-container flex flex-col">
        <div className="filter-header pb-4 border-b border-b-gray-200">
          <h1 className="text-xl font-semibold">Filter</h1>
        </div>
        {/* filter price range */}
        <FilterPrice />
        {/* filter color */}
        <FilterColor />
        {/* filter size */}
        <FilterSize />
        {/* filter availability */}
        <FilterAvailability />
      </div>
    </div>
  );
}

export default ProductFilter;
