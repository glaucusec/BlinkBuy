"use client";

import React, { useEffect, useContext } from "react";
import FilterSubHeading from "./FilterSubHeading";
import { useRouter } from "next/navigation";
import { QueryContext } from "../../../context/QueryContext";
import SizeButton from "../../../components/buttons/SizeButton";
import PriceButton from "../../../components/buttons/PriceButton";
import ColorButton from "../../../components/buttons/ColorButton";

let priceRanges = [
  { id: "#1", labelText: "Less Than ₹500", query: "0-500" },
  { id: "#2", labelText: "₹ 501 - ₹ 1,000", query: "50-1000" },
  { id: "#3", labelText: "₹ 1,001 - ₹ 1,500", query: "1001-1500" },
  { id: "#4", labelText: "₹ 1,501 - ₹ 2,000", query: "1501-2000" },
  { id: "#5", labelText: "More Than ₹2000", query: "2000-" },
];

let colors = [
  {
    id: "#1",
    labelText: "Aloe Green",
    query: "aloe-green",
    hexCode: "#cfd2b2",
  },
  {
    id: "#2",
    labelText: "Apricot Crush",
    query: "apricot-crush",
    hexCode: "#c57240",
  },
  {
    id: "#3",
    labelText: "Aqua Gray",
    query: "aqua-gray",
    hexCode: "#92998b",
  },
  {
    id: "#4",
    labelText: "Artic Wolf",
    query: "artic-wolf",
    hexCode: "#ddd3c9",
  },
  {
    id: "#5",
    labelText: "Astro Dust",
    query: "astro-dust",
    hexCode: "#b44141",
  },
  {
    id: "#6",
    labelText: "Avocado",
    query: "avocado",
    hexCode: "#62653a",
  },
  {
    id: "#7",
    labelText: "Baby Leaf",
    query: "baby-leaf",
    hexCode: "#737436",
  },
  {
    id: "#8",
    labelText: "Black",
    query: "black",
    hexCode: "#000000",
  },
  {
    id: "#9",
    labelText: "Blush",
    query: "blush",
    hexCode: "#f0cfc3",
  },
  {
    id: "#10",
    labelText: "Cannoli",
    query: "cannoli",
    hexCode: "#f2f0e3",
  },
  {
    id: "#11",
    labelText: "Charcoal Melange",
    query: "charcoal-melange",
    hexCode: "#6e6d74",
  },
  {
    id: "#12",
    labelText: "Circular Gray",
    query: "circular-gray",
    hexCode: "#b6b6b6",
  },
  {
    id: "#13",
    labelText: "Charcoal Melange",
    query: "charcoal-melange",
    hexCode: "#6e6d74",
  },
  {
    id: "#14",
    labelText: "Circus Blue",
    query: "circus-blue",
    hexCode: "#a3e7fd",
  },
  {
    id: "#15",
    labelText: "Cranberry Juice",
    query: "cranberry-juice",
    hexCode: "#52111b",
  },
  {
    id: "#16",
    labelText: "Dark Oak",
    query: "dark-oak",
    hexCode: "#181812",
  },
  {
    id: "#18",
    labelText: "Digital Lavander",
    query: "digital-lavender",
    hexCode: "#c4afca",
  },
];

let sizes = [
  { id: "#1", labelText: "S", query: "s" },
  { id: "#2", labelText: "M", query: "m" },
  { id: "#3", labelText: "L", query: "l" },
  { id: "#4", labelText: "XL", query: "xl" },
  { id: "#5", labelText: "XXL", query: "xxl" },
  { id: "#6", labelText: "XXXL", query: "xxxl" },
];

function ProductFilter({}) {
  const router = useRouter();

  const {
    query,
    queryParams,
    queryParamsChangeHandler,
    setProducts,
    setLoading,
  } = useContext(QueryContext);

  const handleFilterChange = (filterType, value) => {
    queryParamsChangeHandler(filterType, value);
  };

  const isChecked = (filterType, value) =>
    queryParams[filterType].includes(value);

  // GraphQL Query and Fetch API Options
  const graphqQuery = `
    query {
      products(q: "${query}") {
        id
        title
        discountedPrice
        reviewsAverage
        reviewsCount
        price
        isActive
        images 
      }
    }`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: graphqQuery }),
  };

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

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch("/api/graphql", requestOptions);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseJson = await response.json();
        const data = await responseJson.data;
        setProducts(data.products);
        setLoading(false);
      } catch (err) {
        console.error("There was a problem with the GraphQL request:", err);
      }
    }

    fetchData();
  }, [queryParams, router, query]);

  return (
    <div className="hidden md:block filter-wrapper max-h-screen overflow-y-scroll no-scrollbar">
      {/* <div className="bg-blue-900 text-white bottom-0 fixed w-full z-50 ">
        Abhishek
      </div> */}
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
                  <PriceButton
                    labelText={priceRange.labelText}
                    checked={isChecked("priceRanges", priceRange.query)}
                    onChange={() =>
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
            <ul className="filter-color-list grid md: grid-cols-3 lg:grid-cols-4">
              {colors.map((color) => (
                <li key={color.id} className="filter-color-item">
                  <ColorButton
                    labelText={color.labelText}
                    hexCode={color.hexCode}
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
            <ul className="filter-size-list grid gap-2  md:grid-cols-3 lg:grid-cols-4">
              {sizes.map((size) => (
                <li
                  key={size.id}
                  className="filter-size-item flex items-center justify-center"
                >
                  <SizeButton
                    size={size.labelText}
                    checked={isChecked("sizes", size.query)}
                    onClick={() => handleFilterChange("sizes", size.query)}
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
                <PriceButton
                  checked={isChecked("availability", "in-stock")}
                  onClick={() => handleFilterChange("availability", "in-stock")}
                  labelText={"In Stock"}
                />
              </li>
              <li className="filter-availability-item">
                <PriceButton
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

export default ProductFilter;
