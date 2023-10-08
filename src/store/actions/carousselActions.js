// CarousselActions.js
export const SET_SCROLL_POSITION = "SET_SCROLL_POSITION";
export const TOGGLE_LEFT_ARROW = "TOGGLE_LEFT_ARROW";
export const TOGGLE_RIGHT_ARROW = "TOGGLE_RIGHT_ARROW";

export const setScrollPosition = (position) => ({
  type: SET_SCROLL_POSITION,
  payload: position,
});

export const toggleLeftArrow = (isVisible) => ({
  type: TOGGLE_LEFT_ARROW,
  payload: isVisible,
});

export const toggleRightArrow = (isVisible) => ({
  type: TOGGLE_RIGHT_ARROW,
  payload: isVisible,
});
