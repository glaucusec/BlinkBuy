import React from "react";
import OrderSummary from "./OrderSummary";
import CartItems from "./CartItems";

function CartContent() {
  return (
    <div className="overflow-y-auto px-8 py-4 flex-grow gap-1 bg-white">
      <CartItems />
      <OrderSummary />
    </div>
  );
}

export default CartContent;
