import { combineReducers } from "redux";
import tooltipReducer from "./tooltipReducer";
import modalReducer from "./modalReducer";
import notificationModalReducer from "./notificationModaleReducer";
import searchReducer from "./searchResultsReducer";

const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  modal: modalReducer,
  notificationModal: notificationModalReducer,
  search: searchReducer,
});
// console.log("Root reducer:", rootReducer);
export default rootReducer;
