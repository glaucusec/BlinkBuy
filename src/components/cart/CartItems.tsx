import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

function CartItems() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="">
      {cartItems.map((item) => (
        <CartItem cartItem={item} />
      ))}
    </div>
  );
}

export default CartItems;
