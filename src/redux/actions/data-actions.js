import axios from "axios";
import { APP_URL } from "./../../utils/constants/URLS";
import { DATA_TYPES } from "./../type";
import { closeOverlay } from "./ui-actions";

export const getDashboardStatistics = () => (dispatch) => {
  axios
    .get(`${APP_URL}/dashboard-statistics`)
    .then((res) => {
      dispatch({
        type: DATA_TYPES.GET_DASHBOARD_STATISTICS_DATA,
        payload: res.data.list,
      });
    })
    .catch((err) => {
      console.error("=======error @getDashboardStatistics=========", err);
    });
};

export const getDashboardUserList =
  (pageNumber = 1) =>
  (dispatch) => {
    axios
      .get(`${APP_URL}/all-dashboard-users?_page=${pageNumber}&_limit=8`)
      .then((res) => {
        const totalLength = res.headers["x-total-count"];
        dispatch({
          type: DATA_TYPES.GET_DASHBOARD_USER_LIST,
          payload: res.data,
        });
        updatePageNumber(pageNumber, totalLength, dispatch);
      })
      .catch((err) => {
        console.error("=======error @getDashboardUserList=========", err);
      });
  };

export const updatePageNumber = (pageNumber, totalLength, dispatch) => {
  dispatch({
    type: DATA_TYPES.UPDATE_PAGENUMBER,
    payload: {
      pageNumber,
      totalLength,
    },
  });
};

export const postNewUserData = (postData, pageNumber, newStat) => (dispatch) => {
  axios
    .post(`${APP_URL}/all-dashboard-users`, postData)
    .then((res) => {
      dispatch(closeOverlay());
      dispatch(getDashboardUserList(pageNumber));
      dispatch(updateUserStats(newStat));
    })
    .catch((error) => {
      console.log("====error @postNewUserData====", error);
    });
};

export const deleteUserData = (id, pageNumber, newStat) => (dispatch) => {
  axios
    .delete(`${APP_URL}/all-dashboard-users/${id}`)
    .then((res) => {
      dispatch(getDashboardUserList(pageNumber));
      dispatch(updateUserStats(newStat));
    })
    .catch((error) => {
      console.log("====error @deleteUserData====", error);
    });
};

const updateUserStats = (newData) => (dispatch) => {
  axios
    .post(`${APP_URL}/dashboard-statistics`,{
      list: newData,
    })
    .then((res) => {
      dispatch(getDashboardStatistics());
    })
    .catch((err) => {
      console.error("=======error @updateUserStats=========", err);
    });
}
