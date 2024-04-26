"use client";

import React, { useState } from "react";
import { IconFilter } from "@tabler/icons-react";

const radioOptions = [
  "Featured",
  "New Arrivals",
  "Price Low to High",
  "Price High to Low",
];

function SortByButton() {
  const [showOption, setShowOption] = useState(false);
  console.log(showOption);

  return (
    <React.Fragment>
      <span
        onClick={() => setShowOption((prev) => !prev)}
        className="cursor-pointer border border-gray-500 flex flex-row justify-center items-center gap-1 px-2 py-1"
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
        } absolute w-auto z-30 border rounded-xl p-5 bg-white shadow-2xl transition duration-0 hover:duration-150`}
      >
        <ul>
          <li class="w-full cursor-pointer border-b border-gray-200 rounded-t-lg">
            <div class="flex items-center ps-1">
              <input
                id="list-radio-featured"
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                for="list-radio-featured"
                class="w-full py-3 ms-2 text-sm font-medium "
              >
                Featured
              </label>
            </div>
          </li>
          <li class="w-full cursor-pointer border-b border-gray-200 rounded-t-lg">
            <div class="flex items-center ps-1">
              <input
                id="list-radio-new-arrivals"
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                for="list-radio-new-arrivals"
                class="w-full py-3 ms-2 text-sm font-medium "
              >
                New Arrivals
              </label>
            </div>
          </li>
          <li class="w-full cursor-pointer border-b border-gray-200 rounded-t-lg">
            <div class="flex items-center ps-1">
              <input
                id="list-radio-low-to-high"
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                for="list-radio-low-to-high"
                class="w-full py-3 ms-2 text-sm font-medium "
              >
                Price Low to High
              </label>
            </div>
          </li>
          <li class="w-full cursor-pointer border-b border-gray-200 rounded-t-lg">
            <div class="flex items-center ps-1">
              <input
                id="list-radio-high-to-low"
                type="radio"
                value=""
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              />
              <label
                for="list-radio-high-to-low"
                class="w-full py-3 ms-2 text-sm font-medium "
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

export default SortByButton;
