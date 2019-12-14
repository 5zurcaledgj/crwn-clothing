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
