import React from "react";

import item1 from "../../assets/images/men/item1.webp";
import item2 from "../../assets/images/men/item2.webp";
import item3 from "../../assets/images/men/item3.webp";
import item4 from "../../assets/images/men/item4.avif";
import item5 from "../../assets/images/men/item5.avif";
import item6 from "../../assets/images/men/item6.webp";

function Men() {
  return (
    <div id="mens-section" class="container mx-auto">
      <div
        id="mens-section-header"
        class="flex flex-col justify-center items-center"
      >
        <h2 class="text-2xl font-bold">Shop for Men</h2>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div class="flex flex-col justify-center items-center">
          <img src={item1} alt="T-Shirts" />
          <h3 class="">T-Shirts</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item2} alt="T-Shirts" />
          <h3 class="">Oversized Tees</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item3} alt="T-Shirts" />
          <h3 class="">Joggers</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item4} alt="T-Shirts" />
          <h3 class="">Co-Ord Sets</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item5} alt="T-Shirts" />
          <h3 class="">Hoodies</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img src={item6} alt="T-Shirts" />
          <h3 class="">Shorts</h3>
        </div>
      </div>
    </div>
  );
}

export default Men;
