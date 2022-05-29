import React from "react";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import GlassyContainer from "./GlassyContainer";
const useStyles = makeStyles({
  child: {
    margin: "0rem auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

const GlassyCard = ({ children, maxWidth = "1000px" }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.child}
      sx={{
        maxWidth,
      }}
    >
      <GlassyContainer>
        <Box className={classes.container}>{children}</Box>
      </GlassyContainer>
    </Box>
  );
};

export default GlassyCard;
