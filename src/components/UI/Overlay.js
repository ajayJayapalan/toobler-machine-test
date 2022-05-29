import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => {
  return createStyles({
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      minHeight: "100vh",
      height: "100%",
      backgroundColor: theme.custom.overlay,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
});

const Overlay = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.overlay}>{children}</Box>;
};

export default Overlay;
