export const INITIAL_STATE = {
  cartItemsCount: 0,
  cartItems: [],
};

export const ACTIONS = {
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
  INCREMENT_PRODUCT_QUANTITY: "INCREMENT_PRODUCT_QUANTITY",
  DECREMENT_PRODUCT_QUANTITY: "DECREMENT_PRODUCT_QUANTITY",
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      const existingProductIndex = state.cartItems.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingProductIndex !== -1) {
        const updatedCartItems = state.cartItems.map((item, index) => {
          return index == existingProductIndex
            ? { ...item, quantity: item.quantity + 1 || 1 }
            : item;
        });

        return {
          cartItemsCount: state.cartItemsCount + 1,
          cartItems: updatedCartItems,
        };
      }

      return {
        cartItemsCount: state.cartItemsCount + 1,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case ACTIONS.INCREMENT_PRODUCT_QUANTITY:

    case ACTIONS.DECREMENT_PRODUCT_QUANTITY:

    case ACTIONS.REMOVE_PRODUCT:

    default:
      return state;
  }
};
