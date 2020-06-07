import CartActionTypes from './cart.types';
import {
  addItemToCart,
  removeItemFromCart,
  toggleLikeStatus,
} from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  favoriteItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.TOGGLE_FAVORITE:
      return {
        ...state,
        favoriteItems: toggleLikeStatus(state.favoriteItems, action.payload),
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ALL_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    case CartActionTypes.REMOVE_FAVORITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (favoriteItem) => favoriteItem._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
