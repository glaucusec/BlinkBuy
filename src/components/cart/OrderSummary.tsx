import React from "react";

function OrderSummary() {
  return (
    <div className="bg-white py-3">
      <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-500">Total MRP</p>
        <p></p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-500">Bag Discount</p>
        <p></p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-500">Coupon Discount</p>
        <p></p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-500">Shipping Charge</p>
        <p className="text-sm text-green-500 font-semibold">Free</p>
      </div>
      <span className="block border-2 border-b-black border-dotted mb-2"></span>
      <div className="flex justify-between mb-2">
        <p className="text-md font-semibold">Total Payable</p>
        <p></p>
      </div>
    </div>
  );
}

export default OrderSummary;
