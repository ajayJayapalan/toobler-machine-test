import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import AddUserButton from "./../AddUserButton/AddUserButton";
import DashboardTable from "../DashBoardTable/DashboardTable";
import { getDashboardUserList } from "../../../redux/actions/data-actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    listContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      gap: "1rem",
      padding: theme.spacing(2),
    },
    topContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

const DashboardList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const {
    data: { dashboardUserList },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDashboardUserList());
    // eslint-disable-next-line
  }, []);

  return (
    <Paper className={classes.listContainer}>
      <Box className={classes.topContainer}>
        <Typography
          style={{
            fontWeight: "bold",
          }}
        >
          USERS
        </Typography>
        <AddUserButton>ADD USER</AddUserButton>
      </Box>
      <Box>
        <DashboardTable
          tableHead={dashboardUserList.tableHead}
          tableContent={dashboardUserList.tableContent}
        />
      </Box>
    </Paper>
  );
};

export default DashboardList;
