// reducers/rootReducer.js
import { combineReducers } from "redux";
import tooltipReducer from "./tooltipReducer";
import modalReducer from "./modalReducer";
import carousselReducer from "./carousselReducer";

const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  modal: modalReducer,
  caroussel: carousselReducer,
});
// console.log("Root reducer:", rootReducer);
export default rootReducer;
