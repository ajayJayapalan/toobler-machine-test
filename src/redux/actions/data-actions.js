import axios from "axios";
import { APP_URL } from "./../../utils/constants/URLS";
import { DATA_TYPES } from "./../type";

export const getDashboardStatistics = () => (dispatch) => {
  axios.get(`${APP_URL}/dashboard-statistics`).then((res) => {
    dispatch({
      type: DATA_TYPES.GET_DASHBOARD_STATISTICS_DATA,
      payload: res.data,
    });
  }).catch(err=>{
    console.error("=======error @getDashboardStatistics=========",err)
  });
};

export const getDashboardUserList = (pageNumber=1) => (dispatch) => {
  axios.get(`${APP_URL}/all-dashboard-users?_page=${pageNumber}&_limit=8`).then((res) => {
    dispatch({
      type: DATA_TYPES.GET_DASHBOARD_USER_LIST,
      payload: res.data,
    });
  }).catch(err=>{
    console.error("=======error @getDashboardUserList=========",err)
  });
};


