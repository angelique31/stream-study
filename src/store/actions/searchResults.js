export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const clearSearchResults = () => ({
  type: "CLEAR_SEARCH_RESULTS",
});
