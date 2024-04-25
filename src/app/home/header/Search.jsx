"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function Search() {
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

  const searchInputChangeHandler = (e) => {
    const term = e.target.value;

    if (pathname !== "/search") {
      router.push("/search");
    }
    if (term === "") {
      router.push("/");
    }
  };

  return (
    <input
      onChange={searchInputChangeHandler}
      type="text"
      className="md:max-w-[100px] lg:max-w-full border-none focus:outline-none hidden md:block"
      placeholder="Search..."
      defaultValue={searchParams.get("query")?.toString()}
    />
  );
}
