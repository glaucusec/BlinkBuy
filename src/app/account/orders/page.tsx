import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={"/empty_cart.gif"}
        alt="empty-cart"
        width={150}
        height={150}
      />
      <span className="mb-8 font-semibold"> No Orders found</span>
      <button className="border-blinkblue w-60 bg-blinkblue text-white rounded-full p-2">
        Start Shopping
      </button>
    </div>
  );
}

export default page;
