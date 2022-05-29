import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import { createStyles } from "@mui/styles";
import { getUserTileIcon } from "../../../utils/helper/dashboard-stat-image-finder";

const useStyles = makeStyles((theme) => {
  return createStyles({
    userTile: {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
      display: "flex",
      flexDirection: "column",
      border: "2px solid rgba(255, 255, 255, 0)",
      gap: "1rem",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.custom.primary,
        color: theme.custom.white,
        border: "2px solid rgba(255, 255, 255, 0.5)",
        boxShadow: "5px 6px 21px rgba(251, 70, 107, 0.5)",
        "& img": {
          filter: "brightness(0) invert(1)",
        },
      },
    },
    bottomBox: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minWidth: "10rem",
    },
  });
});

const UserCountTile = ({ totalHeadText = "", totalNumber = "", id }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.userTile}>
      <Typography>{totalHeadText}</Typography>
      <Box className={classes.bottomBox}>
        <Typography>{totalNumber}</Typography>
        <Box
          component="img"
          sx={{
            height: 37,
          }}
          alt={`${totalHeadText.toLowerCase()} icon.`}
          src={getUserTileIcon(id)}
        />
      </Box>
    </Paper>
  );
};

export default UserCountTile;
