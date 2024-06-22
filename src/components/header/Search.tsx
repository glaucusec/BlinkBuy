"use client";

import React, { useContext, useState, useEffect } from "react";
import { QueryContext } from "../../context/QueryContext";
import { usePathname, useRouter } from "next/navigation";
import { IconSearch, IconX } from "@tabler/icons-react";

type QueryParams = {
  priceRanges: string[];
  colors: string[];
  sizes: string[];
  availability: string[];
};

type QueryContextProps = {
  q: string;
  queryChangeHandler: (newQuery: string) => void;
  queryParams: QueryParams;
  queryParamsChangeHandler: (
    filterType: keyof QueryParams,
    value: string
  ) => void;
  isChecked: (filterType: keyof QueryParams, value: string) => boolean;
};

export default function Search() {
  const { q, queryChangeHandler } = useContext(
    QueryContext
  ) as QueryContextProps;

  const router = useRouter();
  const pathname = usePathname();
  const [inputValue, setInputValue] = useState(q);
  const [showSearchBox, setShowSearchBox] = useState(false); // search box for smaller screens

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      queryChangeHandler(inputValue);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [inputValue]);

  const searchInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && pathname !== "/search") {
      router.push("/search");
    }
    if (e.target.value == "" && pathname == "/search") {
      router.push("/");
    }
    setInputValue(e.target.value);
  };

  const clearQueryHandler = () => {
    setInputValue("");
    router.push("/");
  };

  return (
    <div className="md:border-2 border-solid flex justify-between items-center gap-2 p-1 ">
      <IconSearch
        onClick={() => setShowSearchBox((prev) => !prev)}
        className="cursor-pointer"
        height={20}
        width={20}
      />
      {showSearchBox && (
        <div className="flex flex-row gap-3 items-center absolute bg-gray-100 border border-gray-100 h-12 top-14 left-0 w-full md:hidden">
          <IconSearch className="cursor-pointer" height={20} width={20} />
          <input
            onChange={searchInputChangeHandler}
            placeholder="Search..."
            className="bg-gray-100 w-full h-full outline-none"
          />
        </div>
      )}
      <input
        onChange={searchInputChangeHandler}
        type="text"
        className="md:max-w-[100px] lg:max-w-full border-none focus:outline-none hidden md:block"
        placeholder="Search..."
        value={inputValue}
      />
      {inputValue && (
        <IconX
          onClick={clearQueryHandler}
          height={20}
          width={20}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}
