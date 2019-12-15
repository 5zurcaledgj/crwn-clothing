import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});

export const decreaseItemQuantityFromCart = item => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: item
});

export const increaseItemQuantityInCart = item => ({
  type: CartActionTypes.INCREASE_ITEM_QUANTITY,
  payload: item
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART
});
