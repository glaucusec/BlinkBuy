"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { SearchProductsContext } from "./SearchProductsContext";

export const QueryContext = createContext("");

export function QueryProvider(props) {
  const { setProducts, setLoading } = useContext(SearchProductsContext);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [query, setQuery] = useState(searchParams.get("q") || "");

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
    // on the initial load, this will push /search to the history, check with pathname.
    if (pathname == "/search")
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
  }, [queryParams, query]);

  const propContext = {
    query,
    queryChangeHandler,
    queryParams,
    queryParamsChangeHandler,
    isChecked,
  };

  return (
    <QueryContext.Provider value={propContext}>
      {props.children}
    </QueryContext.Provider>
  );
}
