import {
  SHOW_NOTIFICATION_MODAL,
  HIDE_NOTIFICATION_MODAL,
} from "../actions/notificationModaleActions";

const initialState = {
  isVisible: false,
  removedSerie: null,
};

export default function notificationModalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION_MODAL:
      return {
        isVisible: true,
        removedSerie: action.payload,
      };
    case HIDE_NOTIFICATION_MODAL:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
}
