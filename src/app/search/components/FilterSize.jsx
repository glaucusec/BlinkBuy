import React, { useContext } from "react";
import FilterSubHeading from "./FilterSubHeading";
import SizeButton from "../../../components/buttons/SizeButton";
import { QueryContext } from "../../../context/QueryContext";

let sizes = [
  { id: "#1", labelText: "S", query: "s" },
  { id: "#2", labelText: "M", query: "m" },
  { id: "#3", labelText: "L", query: "l" },
  { id: "#4", labelText: "XL", query: "xl" },
  { id: "#5", labelText: "XXL", query: "xxl" },
  { id: "#6", labelText: "XXXL", query: "xxxl" },
];

function FilterSize() {
  const { queryParamsChangeHandler, isChecked } = useContext(QueryContext);
  return (
    <div className="filter-sizes py-4 border-b border-b-gray-200">
      <FilterSubHeading heading={"Sizes"} />
      <div className="filter-size-buttons">
        <ul className="filter-size-list grid gap-2  md:grid-cols-3 lg:grid-cols-4">
          {sizes.map((size) => (
            <li
              key={size.id}
              className="filter-size-item flex items-center justify-center"
            >
              <SizeButton
                size={size.labelText}
                checked={isChecked("sizes", size.query)}
                onClick={() => queryParamsChangeHandler("sizes", size.query)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FilterSize;
