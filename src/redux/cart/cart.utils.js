export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);

export const decreaseItemQuantityFromCart = (cartItems, cartItemToDecrease) =>
  1 === cartItemToDecrease.quantity
    ? //remove it in the checkout
      cartItems.filter(cartItem => cartItem.id !== cartItemToDecrease.id)
    : cartItems.map(cartItem =>
        cartItem.id === cartItemToDecrease.id //decrease the quantity of the target item
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1
            }
          : cartItem
      );

export const increaseItemQuantityInCart = (cartItems, cartItemToIncrease) =>
  cartItems.map(cartItem =>
    cartItem.id === cartItemToIncrease.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
      : cartItem
  );
