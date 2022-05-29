import React from "react";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return createStyles({
    statusStyle: {
      width: ".5rem",
      height: ".5rem",
      borderRadius: "1rem",
      marginRight: "0.5rem",
    },
  });
});

const StatusCircle = ({ isActive = true }) => {
  const classes = useStyles({ isActive });

  return (
    <div
      style={{
        backgroundColor: isActive ? "#23BD57" : "#FB466B",
      }}
      className={classes.statusStyle}
    />
  );
};

export default StatusCircle;
