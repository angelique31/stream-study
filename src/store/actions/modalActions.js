export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (videoId, overview) => ({
  type: OPEN_MODAL,
  payload: { videoId, overview },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
