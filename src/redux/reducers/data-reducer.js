import { DATA_TYPES } from "./../type";

const initialState = {
  dashboardStatistics: [],
  loading: false,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_TYPES.GET_DASHBOARD_STATISTICS_DATA:
      return {
        ...state,
        dashboardStatistics: action.payload,
      };
    default:
      return { ...state };
  }
}
