import React, { useContext } from "react";
import { IconX } from "@tabler/icons-react";
import { CartContext } from "../../context/CartContext";

function CartHeader() {
  const { toggleCart, cartItemsCount } = useContext(CartContext);
  return (
    <div className="w-full bg-white mb-1 shadow-xl">
      <div className="px-8 py-4 flex flex-row justify-between items-center">
        <h1 className="text-2xl font-semibold">
          {cartItemsCount > 0
            ? `Shopping Cart (${cartItemsCount})`
            : "Shopping Cart"}
        </h1>
        <IconX
          className="cursor-pointer"
          stroke={3}
          onClick={() => toggleCart(false)}
        />
      </div>
    </div>
  );
}

export default CartHeader;
