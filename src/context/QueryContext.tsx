"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { QueryParamsType, QueryContextPropsType } from "../lib/types";

export const QueryContext = createContext<QueryContextPropsType | undefined>(
  undefined
);

export function QueryProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [q, setQuery] = useState(searchParams.get("q") || "");

  // helper function for parsing the queryParams
  const splitQueryParam = (param: string | null) =>
    param ? param.split(",") : [];

  const [queryParams, setQueryParams] = useState({
    priceRanges: splitQueryParam(searchParams.get("priceRanges")),
    colors: splitQueryParam(searchParams.get("colors")),
    sizes: splitQueryParam(searchParams.get("sizes")),
    availability: splitQueryParam(searchParams.get("availability")),
  });

  const queryParamsChangeHandler = (
    filterType: keyof QueryParamsType,
    value: string
  ) => {
    setQueryParams((prevState) => ({
      ...prevState,
      [filterType]: prevState[filterType].includes(value)
        ? prevState[filterType].filter((item) => item != value)
        : [...prevState[filterType], value],
    }));
  };

  const queryChangeHandler = (newQuery: string) => {
    setQuery(newQuery);
  };

  const isChecked = (filterType: keyof QueryParamsType, value: string) =>
    queryParams[filterType].includes(value);

  useEffect(() => {
    const nonEmptyParams = Object.entries(queryParams)
      .filter(([key, value]) => value.length > 0)
      .reduce(
        (acc, [key, value]) => {
          acc[key] = value.join(",");
          return acc;
        },
        { q: q } as Record<string, string> // default object, url will have query as the first parameter
      );

    const newSearchParams = new URLSearchParams(nonEmptyParams).toString();
    // on the initial load, this will push /search to the history, check with pathname.
    if (pathname == "/search")
      router.push(`/search?${newSearchParams}`, {
        scroll: false,
      });
  }, [queryParams, q]);

  const propContext: QueryContextPropsType = {
    q,
    queryChangeHandler,
    queryParams,
    queryParamsChangeHandler,
    isChecked,
  };

  return (
    <QueryContext.Provider value={propContext}>
      {children}
    </QueryContext.Provider>
  );
}
