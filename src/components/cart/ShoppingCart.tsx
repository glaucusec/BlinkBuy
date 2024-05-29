import React from "react";
import Modal from "../Modal";
import CartHeader from "./CartHeader";
import CartContent from "./CartContent";
import CartFooter from "./CartFooter";

type ShoppingCartProps = {
  cartOpen: boolean;
};

function ShoppingCart({ cartOpen }: ShoppingCartProps) {
  return (
    <Modal isOpen={cartOpen} position="mr-0">
      <div className="bg-gray-200 w-[388px] xl:w-[520px] h-full flex flex-col">
        <CartHeader />
        <CartContent />
        <CartFooter />
      </div>
    </Modal>
  );
}

export default ShoppingCart;
