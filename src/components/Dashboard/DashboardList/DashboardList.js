import React from "react";

import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import AddUserButton from "./../AddUserButton/AddUserButton";
import DashboardTable from "../DashBoardTable/DashboardTable";

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
        <DashboardTable />
      </Box>
    </Paper>
  );
};

export default DashboardList;
