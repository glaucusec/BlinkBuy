import React, { useContext } from "react";
import OrderSummary from "./OrderSummary";
import CartItems from "./CartItems";
import { CartContext } from "../../context/CartContext";

function CartContent() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="overflow-y-auto px-8 py-4 flex-grow gap-1 bg-white">
      {cartItems.length == 0 ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold">Your Cart Is Empty!</h1>
          <p className="text-lg font-medium">The best fashion is waiting to be added in your cart!</p>
        </div>
      ) : (
        <>
          <CartItems />
          <OrderSummary />
        </>
      )}
    </div>
  );
}

export default CartContent;
