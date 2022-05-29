import { UI_TYPES } from "../type";


export const openOverlay = () => (dispatch) => {
    dispatch({
        type: UI_TYPES.OPEN_OVERLAY,
      });
}
export const closeOverlay = () => (dispatch) => {
    dispatch({
        type: UI_TYPES.CLOSE_OVERLAY,
      });
}