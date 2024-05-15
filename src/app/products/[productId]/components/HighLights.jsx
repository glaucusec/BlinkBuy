import React from "react";

function HighLights() {
  return (
    <div className="product-highlights">
      <h1 className="text-xl font-semibold mb-8">Key Highlights</h1>
      <div className="grid grid-cols-2 grid-rows-4 gap-2">
        <div className="flex flex-col gap-1 border-b py-2">
          <h2 className="text-gray-500">Fit</h2>
          <p className="">Regular it</p>
        </div>
        <div className="flex flex-col gap-1 border-b py-2">
          <h2 className="text-gray-500">Fabric</h2>
          <p className="">Cotton Poly Terry</p>
        </div>
        <div className="flex flex-col gap-1 border-b py-2">
          <h2 className="text-gray-500">Neck</h2>
          <p className="">Round Neck</p>
        </div>
        <div className="flex flex-col gap-1 border-b py-2">
          <h2 className="text-gray-500">Sleeve</h2>
          <p className="">Regular Sleeve</p>
        </div>
        <div className="flex flex-col gap-1 border-b py-2">
          <h2 className="text-gray-500">Waist Rise</h2>
          <p className="">Mid-Rise</p>
        </div>
        <div className="flex flex-col gap-1 border-b py-2">
          <h2 className="text-gray-500">Pattern</h2>
          <p className="">Solid</p>
        </div>
        <div className="flex flex-col gap-1 border-b py-2">
          <h2 className="text-gray-500">Bottomwear Length</h2>
          <p className="">Ankle Length</p>
        </div>
        <div className="flex flex-col gap-1 border-b py-2">
          <h2 className="text-gray-500">Waistband</h2>
          <p className="">Elasticated</p>
        </div>
      </div>
    </div>
  );
}

export default HighLights;
