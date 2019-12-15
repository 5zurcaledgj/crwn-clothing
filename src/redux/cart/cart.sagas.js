import { takeLatest, call, put, all } from "redux-saga/effects";

import userActionTypes from "../user/user.types";

import { clearCart } from "./cart.actions";

export function* cleartCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, cleartCartOnSignOut);
}
export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
