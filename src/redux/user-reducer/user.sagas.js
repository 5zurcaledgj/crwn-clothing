import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  auth,
  googleProvider,
  createUserProfileDocumnet,
  getCurrentUser
} from "../../firebase/firebase.utils";

import userActionTypes from "./user.types";
import { signInSuccess, signInFailure } from "./user.actions";

export function* getSnapShot(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocumnet, userAuth);
    const userSnapshot = yield userRef.get();

    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithGoogle() {
  // any API call has a chane to fail so always put it in the
  // try catch block to catch the error
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapShot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  // any API call has a chane to fail so always put it in the
  // try catch block to catch the error
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserSignedIn() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;

    yield getSnapShot(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onCheckIfSignedIn() {
  yield takeLatest(userActionTypes.CHECK_IF_SIGNED_IN, isUserSignedIn);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckIfSignedIn)
  ]);
}
