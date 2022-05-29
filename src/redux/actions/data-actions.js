import axios from "axios";
import { APP_URL } from "./../../utils/constants/URLS";
import { DATA_TYPES } from "./../type";
import { closeOverlay, startLoading, stopLoading } from "./ui-actions";

import {  toast } from 'react-toastify';

export const getDashboardStatistics = () => (dispatch) => {
  dispatch(startLoading());
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
    })
    .finally(() => {
      dispatch(stopLoading());
    });
};

export const getDashboardUserList =
  (pageNumber = 1) =>
  (dispatch) => {
    dispatch(startLoading());
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
      })
      .finally(() => {
        dispatch(stopLoading());
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

export const postNewUserData =
  (postData, pageNumber, newStat, cb = () => {}) =>
  (dispatch) => {
    
    axios
      .post(`${APP_URL}/all-dashboard-users`, postData)
      .then((res) => {
        dispatch(closeOverlay());
        dispatch(getDashboardUserList(pageNumber));
        dispatch(updateUserStats(newStat));
        toast("User Created Succesfully.");
        // clear();
      })
      .catch((error) => {
        toast("Something went wrong when creating user.");
        console.log("====error @postNewUserData====", error);
      })
      .finally(() => {
        cb();
      });
  };

  export const putUpdatedUserData =
  (id, postData, pageNumber, cb = () => {}) =>
  (dispatch) => {
    axios
    .put(`${APP_URL}/all-dashboard-users/${id}`, postData)
    .then((res) => {
      dispatch(closeOverlay());
      dispatch(getDashboardUserList(pageNumber));
      toast("User data updated Succesfully.");
      })
      .catch((error) => {
        toast("Something went wrong when updating user.");
        console.log("====error @postNewUserData====", error);
      })
      .finally(() => {
        cb();
      });
  };

export const deleteUserData = (id, pageNumber, newStat) => (dispatch) => {
  axios
    .delete(`${APP_URL}/all-dashboard-users/${id}`)
    .then((res) => {
      dispatch(getDashboardUserList(pageNumber));
      dispatch(updateUserStats(newStat));
      toast(`You deleted a user with id:${id}`);
    })
    .catch((error) => {
      toast(`User with id:${id} is not deleted.`);
      console.log("====error @deleteUserData====", error);
    });
};

const updateUserStats = (newData) => (dispatch) => {
  axios
    .post(`${APP_URL}/dashboard-statistics`, {
      list: newData,
    })
    .then((res) => {
      dispatch(getDashboardStatistics());
    })
    .catch((err) => {
      console.error("=======error @updateUserStats=========", err);
    });
};
