"use client";
import ShoppingCart from "./ShoppingCart";
import { ReactNode, createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState(false);

  const value = {
    cartOpen,
    setCartOpen,
  };
  return (
    <CartContext.Provider value={value}>
      {children}
      <ShoppingCart />
    </CartContext.Provider>
  );
}
