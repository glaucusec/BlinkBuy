"use client";
import React from "react";
import Modal from "../components/Modal";

function ShoppingCart() {
  return (
    <Modal isOpen={true} hasCloseBtn={true} position="mr-0">
      <div className="bg-white w-72 right-0 shadow-2xl animate-leftToRightSlide ">
        ShoppingCart
      </div>
    </Modal>
  );
}

export default ShoppingCart;
