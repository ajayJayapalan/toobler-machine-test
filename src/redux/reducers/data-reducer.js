import { generateStats } from "../../utils/helper/helper-function";
import { DATA_TYPES } from "./../type";

const initialState = {
  dashboardStatistics: generateStats(),
  dashboardUserList: {
    tableHead:["Sl No","Name","Email","Gender","Actions","Status"],
    tableContent: [],
    pagination:{
      pageNumber: 1,
      totalLength: 100,
    },
  },
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_TYPES.GET_DASHBOARD_STATISTICS_DATA:
      return {
        ...state,
        dashboardStatistics: action.payload,
      };
    case DATA_TYPES.GET_DASHBOARD_USER_LIST:
      return {
        ...state,
        dashboardUserList: {
          ...state.dashboardUserList,
          tableContent: action.payload,
        },
      };
    case DATA_TYPES.UPDATE_PAGENUMBER:
      return {
        ...state,
        dashboardUserList: {
          ...state.dashboardUserList,
          pagination: action.payload,
        },
      };
    
    default:
      return { ...state };
  }
}
