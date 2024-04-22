import React from "react";
import Image from "next/image";

function Men() {
  return (
    <div id="mens-section" className="my-12">
      <div
        id="mens-section-header"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-2xl font-bold">Shop for Men</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/men/item1.webp"}
            alt="T-Shirts"
            height={202.663}
            width={202.663}
          />
          <h3 className="">T-Shirts</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/men/item2.webp"}
            alt="T-Shirts"
            height={202.663}
            width={202.663}
          />
          <h3 className="">Oversized Tees</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/men/item3.webp"}
            alt="T-Shirts"
            height={202.663}
            width={202.663}
          />
          <h3 className="">Joggers</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/men/item4.avif"}
            alt="T-Shirts"
            height={202.663}
            width={202.663}
          />
          <h3 className="">Co-Ord Sets</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={"/men/item5.avif"}
            alt="T-Shirts"
            height={202.663}
            width={202.663}
          />
          <h3 className="">Hoodies</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/men/item6.webp"
            alt="T-Shirts"
            height={202.663}
            width={202.663}
          />
          <h3 className="">Shorts</h3>
        </div>
      </div>
    </div>
  );
}

export default Men;
