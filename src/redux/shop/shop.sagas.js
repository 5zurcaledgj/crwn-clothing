import { takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshopToMap
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import ShopActionTypes from "./shops.types";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionsSnapshopToMap, snapshot);

    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
