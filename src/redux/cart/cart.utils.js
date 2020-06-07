export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, count: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  );

  if (existingCartItem.count === 1) {
    return cartItems.filter(
      (cartItem) => cartItem._id !== cartItemToRemove._id
    );
  }

  return cartItems.map((cartItem) =>
    cartItem._id === cartItemToRemove._id
      ? { ...cartItem, count: cartItem.count - 1 }
      : cartItem
  );
};

export const toggleLikeStatus = (favoriteItems, favoriteItemsToAdd) => {
  const existingFavoriteItems = favoriteItems.find(
    (favoriteItem) => favoriteItem.id === favoriteItemsToAdd.id
  );

  if (existingFavoriteItems) {
    return favoriteItems.filter(
      (favoriteItem) => favoriteItem.id !== favoriteItemsToAdd.id
    );
  }

  return [...favoriteItems, favoriteItemsToAdd];
};
