import { FORM_TYPES } from "../type";

const initialState = {
  name: "",
  email: "",
  gender: "",
  isActive: "",
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_TYPES.NEW_FORM:
      return {
        ...state,
      };
    case FORM_TYPES.UPDATE_FORM:
      return {
        ...action.payload,
      };

    default:
      return { ...state };
  }
}
