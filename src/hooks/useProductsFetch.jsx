"use client";

import { useEffect, useState, useContext } from "react";
import { QueryContext } from "../context/QueryContext";

function useProductsFetch(pageNumber) {
  const { q, queryParams } = useContext(QueryContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [totalHits, setTotalHits] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  // Remove the old products when the query is changed.
  useEffect(() => {
    setProducts([]);
  }, [q, queryParams]);

  // GraphQL Query and Fetch API Options
  const graphqQuery = `
    query($colors: [String!], $sizes: [String!], $prices: [String!]) {
        products(q: "${q}", take: 12, page: ${pageNumber}, colors: $colors, sizes: $sizes, prices: $prices) {
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
            hasMore,
            totalHits
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
      body: JSON.stringify({
        query: graphqQuery,
        variables: {
          colors: queryParams.colors,
          sizes: queryParams.sizes,
          prices: queryParams.priceRanges,
        },
      }),
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
        setTotalHits(productsData.totalHits);
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

  return [products, hasMore, loading, initialLoading, totalHits, error];
}

export default useProductsFetch;
