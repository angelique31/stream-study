import { combineReducers } from "redux";
import tooltipReducer from "./tooltipReducer";
import modalReducer from "./modalReducer";
import notificationModalReducer from "./notificationModaleReducer";

const rootReducer = combineReducers({
  tooltip: tooltipReducer,
  modal: modalReducer,
  notificationModal: notificationModalReducer,
});
// console.log("Root reducer:", rootReducer);
export default rootReducer;
