import { all, call } from "redux-saga/effects";
import { fetchCollectionStart } from "./shop/shop.sagas";
import { userSagas } from "./user-reducer/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart), call(userSagas)]);
}
