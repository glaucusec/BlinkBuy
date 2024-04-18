import React from "react";

import item1 from "../../assets/images/women/item1.avif";
import item2 from "../../assets/images/women/item2.avif";
import item3 from "../../assets/images/women/item3.avif";
import item4 from "../../assets/images/women/item4.avif";
import item5 from "../../assets/images/women/item5.avif";
import item6 from "../../assets/images/women/item6.avif";

function Women() {
  return (
    <div id="womens-section" className="container mx-auto">
      <div
        id="womens-section-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">Shop for Women</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mt-4">
        <div className="flex flex-col justify-center items-center">
          <img src={item1} alt="T-Shirts" />
          <h3 className="">Oversized T-Shirts</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item2} alt="T-Shirts" />
          <h3 className="">Co-Ord Sets</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item3} alt="T-Shirts" />
          <h3 className="">Joggers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item4} alt="T-Shirts" />
          <h3 className="">T-Shirts</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item5} alt="T-Shirts" />
          <h3 className="">Shorts</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={item6} alt="T-Shirts" />
          <h3 className="">T-Shirt Dresses</h3>
        </div>
      </div>
    </div>
  );
}

export default Women;
