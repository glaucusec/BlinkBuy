"use client";

import { createContext, useState } from "react";
import { useSearchParams } from "next/navigation";

export const QueryContext = createContext("");

export function QueryProvider(props) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const queryChangeHandler = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <QueryContext.Provider value={{ query, queryChangeHandler }}>
      {props.children}
    </QueryContext.Provider>
  );
}
