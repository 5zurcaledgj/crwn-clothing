import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = emailAndPasswordd => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPasswordd
});

export const signInSuccess = user => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const signInFailure = error => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const checkIfSignedIn = () => ({
  type: userActionTypes.CHECK_IF_SIGNED_IN
});

export const signOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = error => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

export const signUpStart = userData => ({
  type: userActionTypes.SIGN_UP_START,
  payload: userData
});

export const signUpSuccess = userData => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: userData
});

export const signUpFailure = error => ({
  type: userActionTypes.SIGNUP_FAILURE,
  payload: error
});
