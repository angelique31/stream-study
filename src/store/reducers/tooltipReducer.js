// store/reducers/tooltipReducer.js

import {
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
  SHOW_INFOS_TOOLTIP,
  HIDE_INFOS_TOOLTIP,
} from "../actions/tooltipActions";

const initialState = {
  tooltipVisible: false,
  infosTooltipVisible: false,
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
    default:
      return state;
  }
};

export default tooltipReducer;
