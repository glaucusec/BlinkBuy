import React from "react";

function LatestItems() {
  return (
    <div class="latest-items my-16 2xl:mx-52 xl:mx-24">
      <div
        id="latest-item-header"
        class="flex flex-col justify-center items-center"
      >
        <h2 class="text-2xl font-bold">See the Latest</h2>
        <p class="flex justify-center items-center text-lg text-gray-500">
          Handpicked for you
        </p>
      </div>
      <div class="latest-items-wrapper my-16 relative">
        <a class="prev shadow-xl cursor-pointer absolute top-1/2 w-auto p-2 transition duration-600 ease-out rounded-full bg-white hover:bg-transparent left-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </a>
        <div class="latest-items flex gap-4 overflow-x-auto overflow-y-hidden">
          <div class="item">
            <div class="item-image h-5/6">
              <img
                class="object-cover w-full h-full"
                src="../public/images/latest-items/item1.webp"
                alt=""
              />
            </div>
            <div class="item-desc">
              <h2 class="pt-4 font-semibold text-base">
                Klaeinn Cargo Pocket Co-Ord Set
              </h2>
              <div class="flex flex-row justify-items-center item-price gap-1">
                <p class="sale-price font-semibold text-md">₹1399</p>
                <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
                  ₹1299
                </p>
                <p class="dicount-percentage text-lg font-bold text-green-600">
                  46% off
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image h-5/6">
              <img
                class="object-cover h-full w-full"
                src="../public/images/latest-items/item2.webp"
                alt=""
              />
            </div>
            <div class="item-desc">
              <h2 class="pt-4 font-semibold text-base">
                Sapphire Luxury Co-Ord Set
              </h2>
              <div class="flex flex-row justify-items-center item-price gap-1">
                <p class="sale-price font-semibold text-md">₹949</p>
                <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
                  ₹1899
                </p>
                <p class="dicount-percentage text-lg font-bold text-green-600">
                  50% off
                </p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-image h-5/6">
              <img
                class="object-cover w-full h-full"
                src="../public/images/latest-items/item3.webp"
                alt=""
              />
            </div>
            <div class="item-desc">
              <h2 class="pt-4 font-semibold text-base">
                Grey Melange Hermes Utility Shorts
              </h2>
              <div class="flex flex-row justify-items-center item-price gap-1">
                <p class="sale-price font-semibold text-md">₹699</p>
                <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
                  ₹1299
                </p>
                <p class="dicount-percentage text-lg font-semibold text-green-600">
                  46% off
                </p>
              </div>
              <p class="font-semibold text-green-500">
                Lowest price in the last 30 days
              </p>
            </div>
          </div>
          <div class="item">
            <div class="item-image h-5/6">
              <img
                class="object-cover w-full h-full"
                src="../public/images/latest-items/item4.webp"
                alt=""
              />
            </div>
            <div class="item-desc">
              <h2 class="pt-4 font-semibold text-base">Oversized T-Shirt</h2>
              <div class="flex flex-row justify-items-center item-price gap-1">
                <p class="sale-price font-semibold text-md">₹1399</p>
                <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
                  ₹1299
                </p>
                <p class="dicount-percentage text-lg font-semibold text-green-600">
                  46% off
                </p>
              </div>
              <p class="font-semibold text-green-500">
                Lowest price in the last 30 days
              </p>
            </div>
          </div>
          <div class="item">
            <div class="item-image h-5/6">
              <img
                class="object-cover w-full h-full"
                src="../public/images/latest-items/item5.webp"
                alt=""
              />
            </div>
            <div class="item-desc">
              <h2 class="pt-4 font-semibold text-base">Oversized T-Shirt</h2>
              <div class="flex flex-row justify-items-center item-price gap-1">
                <p class="sale-price font-semibold text-md">₹1399</p>
                <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
                  ₹1299
                </p>
                <p class="dicount-percentage text-lg font-semibold text-green-600">
                  46% off
                </p>
              </div>
              <p class="font-semibold text-green-500">
                Lowest price in the last 30 days
              </p>
            </div>
          </div>
          <div class="item">
            <div class="item-image h-5/6">
              <img
                class="object-cover w-full h-full"
                src="../public/images/latest-items/item6.webp"
                alt=""
              />
            </div>
            <div class="item-desc">
              <h2 class="pt-4 font-semibold text-base">Oversized T-Shirt</h2>
              <div class="flex flex-row justify-items-center item-price gap-1">
                <p class="sale-price font-semibold text-md">₹1399</p>
                <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
                  ₹1299
                </p>
                <p class="dicount-percentage text-lg font-semibold text-green-600">
                  46% off
                </p>
              </div>
              <p class="font-semibold text-green-500">
                Lowest price in the last 30 days
              </p>
            </div>
          </div>
          <div class="item">
            <div class="item-image h-5/6">
              <img
                class="object-cover w-full h-full"
                src="../public/images/latest-items/item7.webp"
                alt=""
              />
            </div>
            <div class="item-desc">
              <h2 class="pt-4 font-semibold text-base">Oversized T-Shirt</h2>
              <div class="flex flex-row justify-items-center item-price gap-1">
                <p class="sale-price font-semibold text-md">₹1399</p>
                <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
                  ₹1299
                </p>
                <p class="dicount-percentage text-lg font-semibold text-green-600">
                  46% off
                </p>
              </div>
              <p class="font-semibold text-green-500">
                Lowest price in the last 30 days
              </p>
            </div>
          </div>{" "}
          <div class="item">
            <div class="item-image h-5/6">
              <img
                class="object-cover w-full h-full"
                src="../public/images/latest-items/item8.webp"
                alt=""
              />
            </div>
            <div class="item-desc">
              <h2 class="pt-4 font-semibold text-base">Oversized T-Shirt</h2>
              <div class="flex flex-row justify-items-center item-price gap-1">
                <p class="sale-price font-semibold text-md">₹1399</p>
                <p class="mrp-price flex flex-row justify-center items-center text-sm text-gray-500 line-through">
                  ₹1299
                </p>
                <p class="dicount-percentage text-lg font-semibold text-green-600">
                  46% off
                </p>
              </div>
              <p class="font-semibold text-green-500">
                Lowest price in the last 30 days
              </p>
            </div>
          </div>
        </div>

        <a
          class="next shadow-xl cursor-pointer absolute top-1/2 w-auto p-2 transition duration-600 ease-out rounded-full bg-white hover:bg-transparent right-4"
          onclick="plusSlides(1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
      <div class="flex justify-center">
        <button class="border rounded-full border-blue-950 px-20 py-1">
          <a href="#" class="font-semibold text-blue-950">
            See all products
          </a>
        </button>
      </div>
    </div>
  );
}

export default LatestItems;
