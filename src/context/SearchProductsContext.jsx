"use client";
import { createContext, useState } from "react";

export const SearchProductsContext = createContext({});

function SearchProductsProvider(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const propContext = {
    products,
    setProducts,
    loading,
    setLoading,
  };

  return (
    <SearchProductsContext.Provider value={propContext}>
      {props.children}
    </SearchProductsContext.Provider>
  );
}

export default SearchProductsProvider;
