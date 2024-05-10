"use client";

import { useEffect, useState, useContext } from "react";
import { QueryContext } from "../context/QueryContext";

function useProductsFetch(pageNumber) {
  const { q, queryParams } = useContext(QueryContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [initalLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  // GraphQL Query and Fetch API Options
  const graphqQuery = `
    query {
        products(q: "${q}", take: 12, page: ${pageNumber}) {
            results {   
                id
                title
                discountedPrice
                reviewsAverage
                reviewsCount
                price
                isActive
                images 
            },
            hasMore
        }
    }`;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: graphqQuery }),
      signal,
    };

    async function fetchData() {
      try {
        products && products.length > 0
          ? setLoading(true)
          : setInitialLoading(true);

        setError(false);
        const response = await fetch("/api/graphql", requestOptions);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseJson = await response.json();
        const productsData = await responseJson.data.products;
        setProducts((prevData) => [...prevData, ...productsData.results]);
        setHasMore(productsData.results.length > 0);
        products && products.length > 0
          ? setLoading(false)
          : setInitialLoading(false);
      } catch (err) {
        if (err.name == "AbortError") setError(err);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [q, queryParams, pageNumber]);

  return [products, hasMore, loading, initalLoading, error];
}

export default useProductsFetch;
