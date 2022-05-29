import { FORM_TYPES } from "../type";

const initialState = {
  id: null,
  name: "",
  email: "",
  gender: "",
  isActive: true,
  isEdit: false,
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_TYPES.NEW_FORM:
      return {
        ...initialState,
      };
    case FORM_TYPES.UPDATE_FORM:
      return {
        ...state,
        ...action.payload,
        isEdit: true,
      };

    default:
      return { ...state };
  }
}
