import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
  collections: null,
  searchCollections: [],
  itemQuickView: [],
  height: 0,
  isFetching: false,
  errorMessge: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ShopActionTypes.SEARCH_COLLECTIONS:
      return {
        ...state,
        searchCollections: action.payload,
      };
    case ShopActionTypes.ITEM_QUICK_VIEW:
      return {
        ...state,
        itemQuickView: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
