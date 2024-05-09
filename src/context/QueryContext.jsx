"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
export const QueryContext = createContext("");

export function QueryProvider(props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [q, setQuery] = useState(searchParams.get("q") || "");

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

  useEffect(() => {
    const nonEmptyParams = Object.entries(queryParams)
      .filter(([key, value]) => value.length > 0)
      .reduce(
        (acc, [key, value]) => {
          acc[key] = value.join(",");
          return acc;
        },
        { q: q } // default object, url will have query as the first parameter
      );

    const newSearchParams = new URLSearchParams(nonEmptyParams).toString();
    // on the initial load, this will push /search to the history, check with pathname.
    if (pathname == "/search")
      router.push(`/search?${newSearchParams}`, {
        scroll: false,
        shallow: true,
      });
  }, [queryParams, q]);

  const propContext = {
    q,
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
