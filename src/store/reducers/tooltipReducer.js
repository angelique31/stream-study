import {
  SHOW_TOOLTIP,
  HIDE_TOOLTIP,
  SHOW_INFOS_TOOLTIP,
  HIDE_INFOS_TOOLTIP,
  ADD_TO_LIST,
  REMOVE_FROM_LIST,
  RESTORE_SERIE,
} from "../actions/tooltipActions";

const initialState = {
  tooltipVisible: false,
  infosTooltipVisible: false,
  myList: [],
  removedSerie: {},
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
      if (state.myList.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case REMOVE_FROM_LIST:
      return {
        ...state,

        myList: state.myList.filter((item) => item.id !== action.payload.id),
        removedSerie: action.payload,
      };
    case RESTORE_SERIE:
      // Vérifiez si myList contient déjà la série
      if (state.myList.some((item) => item.id === action.payload.id)) {
        return state; // Si oui, retournez simplement l'état actuel
      }
      return {
        ...state,
        // myList: [...state.myList, state.removedSerie],
        myList: [...state.myList, action.payload],
        removedSerie: {}, // Réinitialisez removedSerie
      };
    default:
      return state;
  }
};

export default tooltipReducer;
