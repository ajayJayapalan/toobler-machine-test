import { UI_TYPES } from "../type";

const initialState = {
  isOverlayVisible: false,
  isLoading: false,
};

export default function UIReducer(state = initialState, action) {
  switch (action.type) {
    case UI_TYPES.OPEN_OVERLAY:
      return {
        ...state,
        isOverlayVisible: true,
      };
    case UI_TYPES.CLOSE_OVERLAY:
      return {
        ...state,
        isOverlayVisible: false,
      };
    case UI_TYPES.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case UI_TYPES.STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return { ...state };
  }
}
