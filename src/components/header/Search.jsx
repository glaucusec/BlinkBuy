"use client";

import React, { useContext, useState, useEffect } from "react";
import { QueryContext } from "../../context/QueryContext";
import { usePathname, useRouter } from "next/navigation";
import { IconSearch, IconX } from "@tabler/icons-react";

export default function Search() {
  const { q, queryChangeHandler } = useContext(QueryContext);

  const router = useRouter();
  const pathname = usePathname();
  const [inputValue, setInputValue] = useState(q);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      queryChangeHandler(inputValue);
    }, 300);

    return () => clearTimeout(debounceTimeout);
  }, [inputValue]);

  const searchInputChangeHandler = (e) => {
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
      <IconSearch height={20} width={20} />
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
