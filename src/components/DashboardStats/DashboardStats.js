import React, { useEffect } from "react";
import UserCountTile from "./UserCountTile";

import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@mui/styles";
// import { getDashboardStatistics } from "./../../apis/dashBoardServices";
import { getDashboardStatistics } from "./../../redux/actions/data-actions";

const useStyles = makeStyles({
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
  },
});

const DashboardStats = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    data: { dashboardStatistics },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDashboardStatistics());
  }, []);

  return (
    <div className={classes.statsContainer}>
      {dashboardStatistics.map((data) => (
        <UserCountTile key={data.id} id={data.id} totalHeadText={data.text} totalNumber={data.count} />
      ))}
    </div>
  );
};

export default DashboardStats;
