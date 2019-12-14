import ShopActionTypes from "./shops.types";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: errorMessage
});
