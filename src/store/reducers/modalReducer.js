import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modalActions";

const initialState = {
  showModal: false,
  currentVideo: null,
  currentOverview: "",
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        currentVideo: action.payload.videoId,
        currentOverview: action.payload.overview,
        currentPoster: action.payload.posterPath,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        currentVideo: null,
        currentOverview: "",
        currentPoster: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
