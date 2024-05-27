"use client";
import React from "react";
import { IconX } from "@tabler/icons-react";
import Modal from "./Modal";

type ShoppingCartProps = {
  cartOpen: boolean;
  toggleCart: (bool: boolean) => void;
  cartItemCount: number;
};

function ShoppingCart({
  cartOpen,
  toggleCart,
  cartItemCount,
}: ShoppingCartProps) {
  return (
    <Modal isOpen={cartOpen} position="mr-0">
      <div className="bg-white w-[388px] xl:w-[520px]">
        <div className="p-3 flex flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold">
            Shopping Cart ({cartItemCount})
          </h1>
          <IconX
            className="cursor-pointer"
            stroke={3}
            onClick={() => toggleCart(false)}
          />
        </div>
      </div>
    </Modal>
  );
}

export default ShoppingCart;
