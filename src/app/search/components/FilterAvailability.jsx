import React, { useContext } from "react";
import FilterSubHeading from "./FilterSubHeading";
import PriceButton from "../../../components/buttons/PriceButton";
import { QueryContext } from "../../../context/QueryContext";

function FilterAvailability() {
  const { queryParamsChangeHandler, isChecked } = useContext(QueryContext);
  return (
    <div className="filter-availability py-4 border-b border-b-gray-200">
      <FilterSubHeading heading={"Availability"} />
      <div className="filter-availability-buttons ">
        <ul className="filter-availability-list">
          <li className="filter-availability-item">
            <PriceButton
              checked={isChecked("availability", "in-stock")}
              onChange={() =>
                queryParamsChangeHandler("availability", "in-stock")
              }
              labelText={"In Stock"}
            />
          </li>
          <li className="filter-availability-item">
            <PriceButton
              checked={isChecked("availability", "out-of-stock")}
              onChange={() =>
                queryParamsChangeHandler("availability", "out-of-stock")
              }
              labelText={"Out of Stock"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FilterAvailability;
