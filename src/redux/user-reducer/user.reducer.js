import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.GOOGLE_SIGN_IN_START:
    case userActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        currentUser: action.payload
      };
    case userActionTypes.SIGN_IN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
