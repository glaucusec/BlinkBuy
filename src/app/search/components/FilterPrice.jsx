import React, { useContext } from "react";
import FilterSubHeading from "./FilterSubHeading";
import PriceButton from "../../../components/buttons/PriceButton";
import { QueryContext } from "../../../context/QueryContext";

let priceRanges = [
  { labelText: "Less Than ₹500", query: "0-500" },
  { labelText: "₹ 501 - ₹ 1,000", query: "500-1000" },
  { labelText: "₹ 1,001 - ₹ 1,500", query: "1001-1500" },
  { labelText: "₹ 1,501 - ₹ 2,000", query: "1501-2000" },
  { labelText: "More Than ₹2000", query: "2000-" },
];

function FilterPrice() {
  const { queryParamsChangeHandler, isChecked } = useContext(QueryContext);

  return (
    <div className="filter-price py-4 border-b border-b-gray-200">
      <FilterSubHeading heading={"Price Range"} />
      <div className="filter-price-list-wrapper ">
        <ul className="filter-price-list">
          {priceRanges.map((priceRange, index) => (
            <li key={index} className="filter-price-item">
              <PriceButton
                onChange={() =>
                  queryParamsChangeHandler("priceRanges", priceRange.query)
                }
                labelText={priceRange.labelText}
                checked={isChecked("priceRanges", priceRange.query)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterPrice;
