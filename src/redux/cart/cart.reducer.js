import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  removeItemFromCart,
  decreaseItemQuantityFromCart,
  increaseItemQuantityInCart
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  totalQuantity: 0
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: decreaseItemQuantityFromCart(state.cartItems, action.payload)
      };
    case CartActionTypes.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: increaseItemQuantityInCart(state.cartItems, action.payload)
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default CartReducer;
