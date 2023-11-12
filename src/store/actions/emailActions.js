export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const CLEAR_USER_EMAIL = "CLEAR_USER_EMAIL";

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const clearUserEmail = () => ({
  type: CLEAR_USER_EMAIL,
});
