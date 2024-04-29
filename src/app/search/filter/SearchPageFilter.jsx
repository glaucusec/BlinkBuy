"use client";

import React, { useEffect, useState, useContext } from "react";
import RadioButton from "../../../components/forms/RadioButton";
import FilterSubHeading from "./FilterSubHeading";
import CheckBox from "../../../components/forms/CheckBox";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { QueryContext } from "../../../context/QueryContext";

let priceRanges = [
  { id: "#1", labelText: "Less Than ₹500", query: "0-500" },
  { id: "#2", labelText: "₹ 501 - ₹ 1,000", query: "50-1000" },
  { id: "#3", labelText: "₹ 1,001 - ₹ 1,500", query: "1001-1500" },
  { id: "#4", labelText: "₹ 1,501 - ₹ 2,000", query: "1501-2000" },
  { id: "#5", labelText: "More Than ₹2000", query: "2000-" },
];

let colors = [
  { id: "#1", labelText: "Arctic Wolf", query: "artic-wolf" },
  { id: "#2", labelText: "Black", query: "black" },
  { id: "#3", labelText: "Cannoli", query: "cannoli" },
  { id: "#4", labelText: "Dark Oak", query: "dark-oak" },
  { id: "#5", labelText: "Green", query: "green" },
  { id: "#6", labelText: "Heather", query: "heather" },
  { id: "#7", labelText: "Midnight Blue", query: "midnight-blue" },
  { id: "#8", labelText: "Oat Milk", query: "oat-milk" },
  { id: "#9", labelText: "Royal Blue", query: "royal-blue" },
];

let sizes = [
  { id: "#1", labelText: "S", query: "s" },
  { id: "#2", labelText: "M", query: "m" },
  { id: "#3", labelText: "L", query: "l" },
  { id: "#4", labelText: "XL", query: "xl" },
  { id: "#5", labelText: "XXL", query: "xxl" },
  { id: "#6", labelText: "XXXL", query: "xxxl" },
];

function SearchPageFilter({}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = useContext(QueryContext).query;

  const splitQueryParam = (param) => (param ? param.split(",") : []);

  const [queryParams, setQueryParams] = useState({
    priceRanges: splitQueryParam(searchParams.get("priceRanges")),
    colors: splitQueryParam(searchParams.get("colors")),
    sizes: splitQueryParam(searchParams.get("sizes")),
    availability: splitQueryParam(searchParams.get("availability")),
  });

  const handleFilterChange = (filterType, value) => {
    setQueryParams((prevState) => ({
      ...prevState,
      [filterType]: prevState[filterType].includes(value)
        ? prevState[filterType].filter((item) => item != value)
        : [...prevState[filterType], value],
    }));
  };

  const isChecked = (filterType, value) =>
    queryParams[filterType].includes(value);

  useEffect(() => {
    const nonEmptyParams = Object.entries(queryParams)
      .filter(([key, value]) => value.length > 0)
      .reduce(
        (acc, [key, value]) => {
          acc[key] = value.join(",");
          return acc;
        },
        { q: query } // default object, url will have query as the first parameter
      );

    const newSearchParams = new URLSearchParams(nonEmptyParams).toString();
    router.push(`/search?${newSearchParams}`, "", { scroll: false });
  }, [queryParams, router, query]);

  return (
    <div className="filter-wrapper max-h-screen overflow-y-scroll no-scrollbar">
      <div className="filter-container flex flex-col">
        <div className="filter-header pb-4 border-b border-b-gray-200">
          <h1 className="text-xl font-semibold">Filter</h1>
        </div>
        {/* filter - price range */}
        <div className="filter-price py-4 border-b border-b-gray-200">
          <FilterSubHeading heading={"Price Range"} />
          <div className="filter-price-list-wrapper ">
            <ul className="filter-price-list">
              {priceRanges.map((priceRange) => (
                <li key={priceRange.id} className="filter-price-item">
                  <RadioButton
                    labelText={priceRange.labelText}
                    checked={isChecked("priceRanges", priceRange.query)}
                    onClick={() =>
                      handleFilterChange("priceRanges", priceRange.query)
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* filter color */}
        <div className="filter-color py-4 border-b border-b-gray-200">
          <FilterSubHeading heading={"Color"} />
          <div className="filter-color-list-wrapper max-h-60 overflow-y-scroll no-scrollbar">
            <ul className="filter-color-list">
              {colors.map((color) => (
                <li key={color.id} className="filter-color-item">
                  <CheckBox
                    labelText={color.labelText}
                    checked={isChecked("colors", color.query)}
                    onChange={() => handleFilterChange("colors", color.query)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filter-sizes py-4 border-b border-b-gray-200">
          <FilterSubHeading heading={"Sizes"} />
          <div className="filter-size-buttons">
            <ul className="filter-size-list">
              {sizes.map((size) => (
                <li key={size.id} className="filter-size-item">
                  <CheckBox
                    labelText={size.labelText}
                    checked={isChecked("sizes", size.query)}
                    onChange={() => handleFilterChange("sizes", size.query)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="filter-availability py-4 border-b border-b-gray-200">
          <FilterSubHeading heading={"Availability"} />
          <div className="filter-availability-buttons ">
            <ul className="filter-availability-list">
              <li className="filter-availability-item">
                <RadioButton
                  checked={isChecked("availability", "in-stock")}
                  onClick={() => handleFilterChange("availability", "in-stock")}
                  labelText={"In Stock"}
                />
              </li>
              <li className="filter-availability-item">
                <RadioButton
                  checked={isChecked("availability", "out-of-stock")}
                  onClick={() =>
                    handleFilterChange("availability", "out-of-stock")
                  }
                  labelText={"Out of Stock"}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPageFilter;
