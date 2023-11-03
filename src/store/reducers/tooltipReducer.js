// store/reducers/tooltipReducer.js

import {
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
  SHOW_INFOS_TOOLTIP,
  HIDE_INFOS_TOOLTIP,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
} from "../actions/tooltipActions";

const initialState = {
  tooltipVisible: false,
  infosTooltipVisible: false,
  myList: [],
};

const tooltipReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TOOLTIP:
      return { ...state, tooltipVisible: true };
    case HIDE_TOOLTIP:
      return { ...state, tooltipVisible: false };
    case SHOW_INFOS_TOOLTIP:
      return { ...state, infosTooltipVisible: true };
    case HIDE_INFOS_TOOLTIP:
      return { ...state, infosTooltipVisible: false };
    case ADD_TO_LIST:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case REMOVE_FROM_LIST:
      return {
        ...state,

        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default tooltipReducer;
