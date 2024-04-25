import React from "react";
import RadioButton from "../../../components/Forms/RadioButton";
import FilterSubHeading from "./FilterSubHeading";
import CheckBox from "../../../components/Forms/CheckBox";

let filterCategories = [
  "Less Than ₹500",
  "₹ 501 - ₹ 1,000",
  "₹ 1,001 - ₹ 1,500",
  "₹ 1,501 - ₹ 2,000",
  "More Than ₹2000",
];

let colors = [
  "Arctic Wolf",
  "Black",
  "Cannoli",
  "Dark Oak",
  "Green",
  "Heather",
  "Midnight Blue",
  "Oat Milk",
  "Royal Blue",
];

let sizes = ["S", "M", "L", "XL", "XXL", "XXXL"];

function SearchPageFilter() {
  return (
    <div className="filter-container flex flex-col">
      <div className="filter-header pb-4 border-b border-b-gray-200">
        <h1 className="text-xl font-semibold">Filter</h1>
      </div>

      <div className="filter-price py-4 border-b border-b-gray-200">
        <FilterSubHeading heading={"Price Range"} />
        <div className="filter-price-buttons ">
          <ul className="">
            {filterCategories.map((category) => (
              <li>
                <RadioButton label={category} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="filter-color py-4 border-b border-b-gray-200">
        <FilterSubHeading heading={"Color"} />
        <div className="max-h-60 overflow-y-scroll no-scrollbar ">
          <ul>
            {colors.map((color) => (
              <li>
                <CheckBox label={color} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="filter-sizes py-4 border-b border-b-gray-200">
        <FilterSubHeading heading={"Sizes"} />
        <div className="filter-size-buttons">
          <ul className="">
            {sizes.map((size) => (
              <li>
                <CheckBox label={size} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="filter-availability py-4 border-b border-b-gray-200">
        <FilterSubHeading heading={"Availability"} />
        <div className="filter-availability-buttons ">
          <ul>
            <li>
              <RadioButton label={"In Stock"} />
            </li>
            <li>
              <RadioButton label={"Out of Stock"} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchPageFilter;
