import React from "react";

import { makeStyles } from "@mui/styles";

import { Box } from "@mui/material";
import GlassyCard from "../UI/GlassyCard";

const useStyles = makeStyles({
  root: {
    background: "#545ABA",
    width: "100%",
    minHeight: "100vh",
    padding: "5rem 0rem",
    position: "relative",
  }
});

const HomeWrapper = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <GlassyCard>{children}</GlassyCard>
    </Box>
  );
};

export default HomeWrapper;
