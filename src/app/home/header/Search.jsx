"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  // const createQueryString = useCallback(
  //   (name, value) => {
  //     const params = new URLSearchParams(searchParams);
  //     params.set(name, value);

  //     return params.toString();
  //   },
  //   [searchParams]
  // );
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      router.push(`/search?q=${searchTerm}`);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const searchInputChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      onChange={searchInputChangeHandler}
      type="text"
      className="md:max-w-[100px] lg:max-w-full border-none focus:outline-none hidden md:block"
      placeholder="Search..."
      value={searchTerm}
    />
  );
}
