export const ADD_TO_MY_LIST = "ADD_TO_MY_LIST";

export const addToMyList = (video) => ({
  type: ADD_TO_MY_LIST,
  payload: video,
});
