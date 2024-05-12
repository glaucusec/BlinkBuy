import React from "react";
import { IconDiscount } from "@tabler/icons-react";

function DiscountCard() {
  return (
    <div className="p-3 border border-[#d7ba6b] rounded-xl flex flex-row gap-2 bg-[#faf6e8] min-w-max">
      <IconDiscount stroke={2} color={"#d7ba6b"} />
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-[#715d0c]">
          Flat 10% Off on ₹ 1497 or above
        </span>
        <span className="text-sm text-gray-500">
          Code: FLAT10 | Offer Valid Sitewide
        </span>
      </div>
    </div>
  );
}

export default DiscountCard;
