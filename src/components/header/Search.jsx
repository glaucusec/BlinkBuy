"use client";

import React, { useContext, useState, useEffect } from "react";
import { QueryContext } from "../../context/QueryContext";
import { usePathname, useRouter } from "next/navigation";

export default function Search() {
  const queryContext = useContext(QueryContext);
  const searchTerm = queryContext.query;
  const setSearchTerm = queryContext.queryChangeHandler;

  const router = useRouter();
  const pathname = usePathname();
  const [inputValue, setInputValue] = useState(searchTerm);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [inputValue, setSearchTerm]);

  const searchInputChangeHandler = (e) => {
    if (e.target.value && pathname !== "/search") {
      router.push("/search");
    }
    if (e.target.value == "" && pathname == "/search") {
      router.push("/");
    }
    setInputValue(e.target.value);
  };

  return (
    <input
      onChange={searchInputChangeHandler}
      type="text"
      className="md:max-w-[100px] lg:max-w-full border-none focus:outline-none hidden md:block"
      placeholder="Search..."
      value={inputValue}
    />
  );
}
