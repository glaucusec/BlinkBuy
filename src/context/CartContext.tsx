"use client";
import ShoppingCart from "../components/ShoppingCart";
import { ReactNode, createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: ReactNode;
};

type CartProviderContext = {
  cartOpen: boolean;
  toggleCart: (bool: boolean) => void;
  cartItemCount: number;
};

export const CartContext = createContext({} as CartProviderContext);

export default function CartProvider({ children }: CartProviderProps) {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const toggleCart = (bool: boolean) => {
    setCartOpen(bool);
  };

  const cartItemCount = 4;

  const value: CartProviderContext = {
    cartOpen,
    toggleCart,
    cartItemCount,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <ShoppingCart
        cartOpen={cartOpen}
        toggleCart={toggleCart}
        cartItemCount={cartItemCount}
      />
    </CartContext.Provider>
  );
}
