export const SHOW_TOOLTIP = "SHOW_TOOLTIP";
export const HIDE_TOOLTIP = "HIDE_TOOLTIP";

export const SHOW_INFOS_TOOLTIP = "SHOW_INFOS_TOOLTIP";
export const HIDE_INFOS_TOOLTIP = "HIDE_INFOS_TOOLTIP";

export const ADD_TO_LIST = "ADD_TO_LIST";
export const REMOVE_FROM_LIST = "REMOVE_FROM_LIST";

export const RESTORE_SERIE = "RESTORE_SERIE";

export const showTooltip = () => ({
  type: SHOW_TOOLTIP,
});

export const hideTooltip = () => ({
  type: HIDE_TOOLTIP,
});

export const showInfosTooltip = () => ({
  type: SHOW_INFOS_TOOLTIP,
});

export const hideInfosTooltip = () => ({
  type: HIDE_INFOS_TOOLTIP,
});

export const addToList = (itemId) => ({
  type: ADD_TO_LIST,
  payload: itemId,
});

export const removeFromList = (serie) => ({
  type: REMOVE_FROM_LIST,
  payload: serie,
});

export const restoreSerie = (serie) => ({
  type: RESTORE_SERIE,
  payload: serie,
});
