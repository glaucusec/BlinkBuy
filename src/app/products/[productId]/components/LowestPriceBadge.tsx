import React from "react";

function LowestPriceBadge() {
  return (
    <div className="bg-[#f0e4b6] mb-4 py-3 flex justify-center items-center">
      <span className="text-blinkblue font-semibold text-sm">
        Lowest Price in the last <span className="font-bold">30 days</span>
      </span>
    </div>
  );
}

export default LowestPriceBadge;
