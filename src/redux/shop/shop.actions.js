import ShopActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap,
});

export const searchCollections = (searchItem) => ({
  type: ShopActionTypes.SEARCH_COLLECTIONS,
  payload: searchItem,
});

export const getItemQuickView = (item) => ({
  type: ShopActionTypes.ITEM_QUICK_VIEW,
  payload: item,
});
