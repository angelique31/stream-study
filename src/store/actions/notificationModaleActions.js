export const SHOW_NOTIFICATION_MODAL = "SHOW_NOTIFICATION_MODAL";
export const HIDE_NOTIFICATION_MODAL = "HIDE_NOTIFICATION_MODAL";

export const showNotificationModal = (serie) => ({
  type: SHOW_NOTIFICATION_MODAL,
  payload: serie,
});

export const hideNotificationModal = () => ({
  type: HIDE_NOTIFICATION_MODAL,
});
