import React from "react";
import Image from "next/image";

function Women() {
  return (
    <div id="womens-section" className="my-12">
      <div
        id="womens-section-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">Shop for Women</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 mt-4">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`/women/item1.avif`}
            alt="T-Shirts"
            width={202.663}
            height={202.663}
          />
          <h3 className="">Oversized T-Shirts</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`/women/item2.avif`}
            alt="T-Shirts"
            width={202.663}
            height={202.663}
          />
          <h3 className="">Co-Ord Sets</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`/women/item3.avif`}
            alt="T-Shirts"
            width={202.663}
            height={202.663}
          />
          <h3 className="">Joggers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`/women/item4.avif`}
            alt="T-Shirts"
            width={202.663}
            height={202.663}
          />
          <h3 className="">T-Shirts</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`/women/item5.avif`}
            alt="T-Shirts"
            width={202.663}
            height={202.663}
          />
          <h3 className="">Shorts</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={`/women/item6.avif`}
            alt="T-Shirts"
            width={202.663}
            height={202.663}
          />
          <h3 className="">T-Shirt Dresses</h3>
        </div>
      </div>
    </div>
  );
}

export default Women;
