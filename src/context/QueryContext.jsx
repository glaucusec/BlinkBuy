"use client";

import { createContext, useState } from "react";
import { useSearchParams } from "next/navigation";

export const QueryContext = createContext("");

export function QueryProvider(props) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // helper function for parsing the queryParams
  const splitQueryParam = (param) => (param ? param.split(",") : []);

  const [queryParams, setQueryParams] = useState({
    priceRanges: splitQueryParam(searchParams.get("priceRanges")),
    colors: splitQueryParam(searchParams.get("colors")),
    sizes: splitQueryParam(searchParams.get("sizes")),
    availability: splitQueryParam(searchParams.get("availability")),
  });

  const queryParamsChangeHandler = (filterType, value) => {
    setQueryParams((prevState) => ({
      ...prevState,
      [filterType]: prevState[filterType].includes(value)
        ? prevState[filterType].filter((item) => item != value)
        : [...prevState[filterType], value],
    }));
  };

  const queryChangeHandler = (newQuery) => {
    setQuery(newQuery);
  };

  const propContext = {
    query,
    queryChangeHandler,
    queryParams,
    queryParamsChangeHandler,
    loading,
    setLoading,
    products,
    setProducts,
  };

  return (
    <QueryContext.Provider value={propContext}>
      {props.children}
    </QueryContext.Provider>
  );
}
