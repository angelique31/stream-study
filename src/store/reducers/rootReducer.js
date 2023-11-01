// reducers/rootReducer.js
import { combineReducers } from "redux";
import tooltipReducer from "./tooltipReducer";
import modalReducer from "./modalReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  modal: modalReducer,
  list: listReducer,
});
// console.log("Root reducer:", rootReducer);
export default rootReducer;
