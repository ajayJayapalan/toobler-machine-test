import axios from "axios";
import { APP_URL } from "./../../utils/constants/URLS";
import { DATA_TYPES } from "./../type";

export const getDashboardStatistics = () => (dispatch) => {
  console.log("========= calling 2 ========")
  axios.get(`${APP_URL}/dashboard-statistics`).then((res) => {
    dispatch({
      type: DATA_TYPES.GET_DASHBOARD_STATISTICS_DATA,
      payload: res.data,
    });
  }).catch(err=>{
    console.log("=======err=========",err)
  });
};
