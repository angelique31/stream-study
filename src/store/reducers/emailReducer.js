import { SET_USER_EMAIL, CLEAR_USER_EMAIL } from "../actions/emailActions";

const initialState = {
  email: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    case CLEAR_USER_EMAIL:
      return {
        ...state,
        email: null,
      };
    default:
      return state;
  }
};

export default userReducer;
