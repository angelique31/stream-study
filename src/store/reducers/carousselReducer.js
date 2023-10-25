// CarousselReducer.js
import {
  SET_SCROLL_POSITION,
  TOGGLE_LEFT_ARROW,
  TOGGLE_RIGHT_ARROW,
} from "../actions/carousselActions";

const initialState = {
  scrollPosition: 0,
  showLeftArrow: true,
  showRightArrow: true,
};

const carousselReducer = (state = initialState, action) => {
  console.log("Action reçue: ", action.type, "Payload: ", action.payload);
  switch (action.type) {
    case SET_SCROLL_POSITION:
      return { ...state, scrollPosition: action.payload };
    case TOGGLE_LEFT_ARROW:
      return { ...state, showLeftArrow: action.payload };
    case TOGGLE_RIGHT_ARROW:
      return { ...state, showRightArrow: action.payload };
    default:
      return state;
  }
};

export default carousselReducer;
