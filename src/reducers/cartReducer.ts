type ActionType = {
  type: string;
  payload: CartItemType | CartStateType | { id: string; size: string };
};

type CartItemType = {
  id: string;
  image: string;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  size: string;
};

type CartStateType = {
  cartItemsCount: number;
  cartItems: CartItemType[];
};

export const INITIAL_STATE: CartStateType = {
  cartItemsCount: 0,
  cartItems: [],
};

export const ACTIONS = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  INCREMENT_PRODUCT_QUANTITY: "INCREMENT_PRODUCT_QUANTITY",
  DECREMENT_PRODUCT_QUANTITY: "DECREMENT_PRODUCT_QUANTITY",
};

export const cartReducer = (state: CartStateType, action: ActionType): CartStateType => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT: {
      const payload = action.payload as CartItemType;
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id && item.size === payload.size
      );

      if (existingProductIndex !== -1) {
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          cartItemsCount: state.cartItemsCount + 1,
          cartItems: updatedCartItems,
        };
      }

      return {
        cartItemsCount: state.cartItemsCount + 1,
        cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
      };
    }
    case ACTIONS.INCREMENT_PRODUCT_QUANTITY: {
      const payload = action.payload as { id: string; size: string };
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id && item.size === payload.size
      );

      if (existingProductIndex !== -1) {
        const updatedCartItems = state.cartItems.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          cartItemsCount: state.cartItemsCount + 1,
          cartItems: updatedCartItems,
        };
      }

      return state;
    }
    case ACTIONS.DECREMENT_PRODUCT_QUANTITY: {
      const payload = action.payload as { id: string; size: string };
      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id && item.size === payload.size
      );

      if (existingProductIndex !== -1) {
        const updatedCartItems = state.cartItems
          .map((item, index) => {
            if (index === existingProductIndex) {
              const newQuantity = item.quantity - 1;
              return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
            }
            return item;
          })
          .filter((item): item is CartItemType => item !== null);

        return {
          ...state,
          cartItemsCount: state.cartItemsCount - 1,
          cartItems: updatedCartItems,
        };
      }

      return state;
    }
    case ACTIONS.REMOVE_PRODUCT: {
      const payload = action.payload as { id: string; size: string };
      let quantityOfProductRemoved = 0;
      const updatedProducts = state.cartItems.filter((item) => {
        if (item.id === payload.id && item.size === payload.size) {
          quantityOfProductRemoved = item.quantity;
          return false;
        } else {
          return true;
        }
      });
      return {
        cartItemsCount: state.cartItemsCount - quantityOfProductRemoved,
        cartItems: updatedProducts,
      };
    }
    default:
      return state;
  }
};
