"use client";
import React, { useEffect, useRef } from "react";
import Product from "../../components/Product";
import Spinner from "../../components/Spinner";
import useProductsFetch from "../../hooks/useProductsFetch";

function ProductGrid() {
  const [products, loading, error] = useProductsFetch();
  const finalCardRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "100px",
      threshold: 1,
    };
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
      }
    }, options);

    if (finalCardRef.current) observer.observe(finalCardRef.current);
    return () => {
      if (finalCardRef.current) observer.unobserve(finalCardRef.current);
    };
  }, [products]);

  if (loading) return <Spinner />;

  return (
    <div className="search-products-grid grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 overflow-y-auto no-scrollbar">
      {products.map((p, index, products) => {
        if (index === products.length - 1) {
          return (
            <Product
              ref={finalCardRef}
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
    </div>
  );
}

export default ProductGrid;
