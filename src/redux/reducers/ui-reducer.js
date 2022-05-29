import {  UI_TYPES } from "../type";

const initialState = {
  isOverlayVisible: false,
};

export default function UIReducer(state = initialState, action) {
  switch (action.type) {
    case UI_TYPES.OPEN_OVERLAY:
      return {
        isOverlayVisible: true,
      };
    case UI_TYPES.CLOSE_OVERLAY:
      return {
        isOverlayVisible: false,
      };

    default:
      return { ...state };
  }
}
