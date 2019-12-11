import ShopActionTypes from "./shops.types";

export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collectionsMap
});
