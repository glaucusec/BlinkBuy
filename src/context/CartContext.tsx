"use client";
import ShoppingCart from "../components/cart/ShoppingCart";
import { ReactNode, createContext, useState, useReducer } from "react";
import { ProductType } from "../lib/types";
import { ACTIONS, INITIAL_STATE, cartReducer } from "../reducers/cartReducer";

type CartProviderProps = {
  children: ReactNode;
};

type EssentialProductType = Pick<
  ProductType,
  "id" | "title" | "price" | "discountedPrice"
> & { image: string };

type CartProviderContext = {
  cartOpen: boolean;
  toggleCart: (bool: boolean) => void;
};

export const CartContext = createContext({} as CartProviderContext);

export default function CartProvider({ children }: CartProviderProps) {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  console.log(state.cartItems);

  const toggleCart = (bool: boolean) => {
    setCartOpen(bool);
  };
  const addItemToCart = (
    product: EssentialProductType,
    productSize: string
  ) => {
    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: { ...product, size: productSize },
    });
  };

  const value: CartProviderContext = {
    cartOpen,
    toggleCart,
    addItemToCart,
    cartItemsCount: state.cartItemsCount,
    cartItems: state.cartItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <ShoppingCart
        cartOpen={cartOpen}
        toggleCart={toggleCart}
        cartItemsCount={state.cartItemsCount}
      />
    </CartContext.Provider>
  );
}
