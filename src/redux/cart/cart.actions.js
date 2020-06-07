import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const removeAllItem = () => ({
  type: CartActionTypes.CLEAR_ALL_ITEM_FROM_CART,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const addToFavorite = (item) => ({
  type: CartActionTypes.TOGGLE_FAVORITE,
  payload: item,
});

export const removeFavoriteItem = (item) => ({
  type: CartActionTypes.REMOVE_FAVORITE,
  payload: item,
});
