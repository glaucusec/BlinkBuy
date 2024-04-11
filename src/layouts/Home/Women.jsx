import React from "react";

import item1 from "../../assets/images/women/item1.avif";
import item2 from "../../assets/images/women/item2.avif";
import item3 from "../../assets/images/women/item3.avif";
import item4 from "../../assets/images/women/item4.avif";
import item5 from "../../assets/images/women/item5.avif";
import item6 from "../../assets/images/women/item6.avif";

function Women() {
  return (
    <div id="womens-section" class="container mx-auto">
      <div
        id="womens-section-header"
        class="flex flex-col justify-center items-center"
      >
        <h2 class="text-2xl font-bold">Shop for Women</h2>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mt-4">
        <div class="flex flex-col justify-center items-center">
          <img src={item1} alt="T-Shirts" />
          <h3 class="">Oversized T-Shirts</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item2} alt="T-Shirts" />
          <h3 class="">Co-Ord Sets</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item3} alt="T-Shirts" />
          <h3 class="">Joggers</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item4} alt="T-Shirts" />
          <h3 class="">T-Shirts</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item5} alt="T-Shirts" />
          <h3 class="">Shorts</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item6} alt="T-Shirts" />
          <h3 class="">T-Shirt Dresses</h3>
        </div>
      </div>
    </div>
  );
}

export default Women;
