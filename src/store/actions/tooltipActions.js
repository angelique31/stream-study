// store/actions/TooltipActions.js

export const SHOW_TOOLTIP = "SHOW_TOOLTIP";
export const HIDE_TOOLTIP = "HIDE_TOOLTIP";
export const SHOW_INFOS_TOOLTIP = "SHOW_INFOS_TOOLTIP";
export const HIDE_INFOS_TOOLTIP = "HIDE_INFOS_TOOLTIP";

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
