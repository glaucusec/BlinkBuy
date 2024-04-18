import React from "react";

import item1 from "../../assets/images/men/item1.webp";
import item2 from "../../assets/images/men/item2.webp";
import item3 from "../../assets/images/men/item3.webp";
import item4 from "../../assets/images/men/item4.avif";
import item5 from "../../assets/images/men/item5.avif";
import item6 from "../../assets/images/men/item6.webp";

function Men() {
  return (
    <div id="mens-section" className="container mx-auto">
      <div
        id="mens-section-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">Shop for Men</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div className="flex flex-col justify-center items-center">
          <img src={item1} alt="T-Shirts" />
          <h3 className="">T-Shirts</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item2} alt="T-Shirts" />
          <h3 className="">Oversized Tees</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item3} alt="T-Shirts" />
          <h3 className="">Joggers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item4} alt="T-Shirts" />
          <h3 className="">Co-Ord Sets</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item5} alt="T-Shirts" />
          <h3 className="">Hoodies</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item6} alt="T-Shirts" />
          <h3 className="">Shorts</h3>
        </div>
      </div>
    </div>
  );
}

export default Men;
