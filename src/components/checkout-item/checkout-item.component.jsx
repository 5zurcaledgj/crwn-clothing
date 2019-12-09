import React from "react";
import { connect } from "react-redux";

import {
  removeItemFromCart,
  decreaseItemQuantityFromCart,
  increaseItemQuantityInCart
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  decreaseQuantity,
  increaseQuantity
}) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => increaseQuantity(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: cartItem => dispatch(removeItemFromCart(cartItem)),
  decreaseQuantity: cartItem =>
    dispatch(decreaseItemQuantityFromCart(cartItem)),
  increaseQuantity: cartItem => dispatch(increaseItemQuantityInCart(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
