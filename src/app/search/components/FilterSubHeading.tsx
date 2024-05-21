import React from "react";

function FilterSubHeading({ heading }: { heading: string }) {
  return (
    <h2 className="filter-price-header text-lg font-semibold text-gray-600 pb-2">
      {heading}
    </h2>
  );
}

export default FilterSubHeading;
