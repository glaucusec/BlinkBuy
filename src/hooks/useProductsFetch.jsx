"use client";

import { useEffect, useState, useContext } from "react";
import { QueryContext } from "../context/QueryContext";

function useProductsFetch() {
  const { q, queryParams } = useContext(QueryContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // GraphQL Query and Fetch API Options
  const graphqQuery = `
    query {
        products(q: "${q}", take: 12, skip: 0) {
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
        console.log(err.name);
        setError(err);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [q, queryParams]);

  return [products, loading, error];
}

export default useProductsFetch;
