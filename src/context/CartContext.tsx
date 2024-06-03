"use client";
import ShoppingCart from "../components/cart/ShoppingCart";
import {
  ReactNode,
  createContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import { ACTIONS, INITIAL_STATE, cartReducer } from "../reducers/cartReducer";
import { CartItemType } from "../lib/types";

type CartProviderContext = {
  cartOpen: boolean;
  toggleCart: (bool: boolean) => void;
  addItemToCart: (product: CartItemTypeExceptQuantity, productSize: string) => void;
  removeItemFromCart: (id: string, size: string) => void;
  incrementItemQuantity: (id: string, size: string) => void;
  decrementItemQuantity: (id: string, size: string) => void;
  cartItemsCount: number;
  cartItems: CartItemType[];
};

type CartItemTypeExceptQuantity = Omit<CartItemType, "quantity">;

export const CartContext = createContext({} as CartProviderContext);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  useEffect(() => {
    const cartStorage = localStorage.getItem("cart-storage");
    if (!cartStorage || cartStorage == null) return;
    const storedCartItems = JSON.parse(cartStorage);
    if (storedCartItems && storedCartItems.cartItems.length > 0)
      dispatch({ type: "default", payload: storedCartItems });
  }, []);

  useEffect(() => {
    if (state.cartItems.length >= 0)
      localStorage.setItem("cart-storage", JSON.stringify(state));
  }, [state]);

  const toggleCart = (bool: boolean) => {
    setCartOpen(bool);
  };

  const addItemToCart = (product: CartItemTypeExceptQuantity, productSize: string) => {
    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: { ...product, size: productSize },
    });
  };

  const removeItemFromCart = (id: string, size: string) => {
    dispatch({ type: ACTIONS.REMOVE_PRODUCT, payload: { id: id, size: size } });
  };

  const incrementItemQuantity = (id: string, size: string) => {
    dispatch({
      type: ACTIONS.INCREMENT_PRODUCT_QUANTITY,
      payload: { id: id, size: size },
    });
  };

  const decrementItemQuantity = (id: string, size: string) => {
    dispatch({
      type: ACTIONS.DECREMENT_PRODUCT_QUANTITY,
      payload: { id: id, size: size },
    });
  };

  const value: CartProviderContext = {
    cartOpen,
    toggleCart,
    addItemToCart,
    removeItemFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    cartItemsCount: state.cartItemsCount,
    cartItems: state.cartItems,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
      <ShoppingCart cartOpen={cartOpen} />
    </CartContext.Provider>
  );
}
