"use client";

import React, { useState } from "react";
import { IconFilter } from "@tabler/icons-react";

function SortBy() {
  const [showOption, setShowOption] = useState(false);

  return (
    <React.Fragment>
      <span
        onClick={() => setShowOption((prev) => !prev)}
        className="cursor-pointer border border-gray-300 flex flex-row justify-center items-center gap-1 px-2 py-1"
      >
        <IconFilter />
        <span className="text-gray-600">Sort By: </span>
        <span className="text-black font-semibold">Featured</span>
      </span>
      {/* <div className="h-screen w-screen bg-transparent z-30">

      </div> */}
      <div
        className={`${
          showOption ? "" : "hidden"
        } absolute w-auto z-30 border rounded-xl p-5 bg-white shadow-2xl`}
      >
        <ul>
          <li className="w-full cursor-pointer border-b border-gray-200 rounded-t-lg">
            <div className="flex items-center ps-1">
              <input
                id="list-radio-featured"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="list-radio-featured"
                className="w-full py-3 ms-2 text-sm font-medium "
              >
                Featured
              </label>
            </div>
          </li>
          <li className="w-full cursor-pointer border-b border-gray-200 rounded-t-lg">
            <div className="flex items-center ps-1">
              <input
                id="list-radio-new-arrivals"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="list-radio-new-arrivals"
                className="w-full py-3 ms-2 text-sm font-medium "
              >
                New Arrivals
              </label>
            </div>
          </li>
          <li className="w-full cursor-pointer border-b border-gray-200 rounded-t-lg">
            <div className="flex items-center ps-1">
              <input
                id="list-radio-low-to-high"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="list-radio-low-to-high"
                className="w-full py-3 ms-2 text-sm font-medium "
              >
                Price Low to High
              </label>
            </div>
          </li>
          <li className="w-full cursor-pointer border-b border-gray-200 rounded-t-lg">
            <div className="flex items-center ps-1">
              <input
                id="list-radio-high-to-low"
                type="radio"
                value=""
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                htmlFor="list-radio-high-to-low"
                className="w-full py-3 ms-2 text-sm font-medium "
              >
                Price High to Low
              </label>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default SortBy;
