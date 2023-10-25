// reducers/rootReducer.js
import { combineReducers } from "redux";
import tooltipReducer from "./tooltipReducer";
import modalReducer from "./modalReducer";

const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  modal: modalReducer,
});
// console.log("Root reducer:", rootReducer);
export default rootReducer;
