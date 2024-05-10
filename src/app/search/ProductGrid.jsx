"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useContext,
} from "react";
import Product from "../../components/Product";
import Spinner from "../../components/spinner/Spinner";
import SpinnerIOS from "../../components/spinner/SpinnerIOS";

import useProductsFetch from "../../hooks/useProductsFetch";

import { QueryContext } from "../../context/QueryContext";

function ProductGrid() {
  const { q } = useContext(QueryContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [products, hasMore, loading, initalLoading, error] =
    useProductsFetch(pageNumber);

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      const options = {
        root: null,
        rootMargin: "100px",
        threshold: 1,
      };

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("fetching page number", pageNumber + 1);
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      }, options);
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setPageNumber(1);
    window.scroll({ top: 0, behavior: "smooth" });
  }, [q]);

  if (initalLoading) return <Spinner />;

  return (
    <div className="search-products-grid grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 overflow-y-auto no-scrollbar">
      {products.map((p, index, products) => {
        if (index === products.length - 1) {
          return (
            <Product
              ref={lastElementRef}
              key={p.id}
              product__id={p.id}
              product__image={p.images[0]}
              product__name={p.title}
              product__sale={p.price}
              product__regular={p.discountedPrice}
            />
          );
        }
        return (
          <Product
            key={p.id}
            product__id={p.id}
            product__image={p.images[0]}
            product__name={p.title}
            product__sale={p.price}
            product__regular={p.discountedPrice}
          />
        );
      })}
      {loading && (
        <div className="col-span-2 md:col-span-3 xl:col-span-4 flex justify-center items-center">
          <SpinnerIOS />
        </div>
      )}

      {!hasMore && (
        <div className="col-span-2 md:col-span-3 xl:col-span-4 flex justify-center items-center">
          <section className="bg-gray-200 p-2 text-black-200 rounded-sm">
            No more results
          </section>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
