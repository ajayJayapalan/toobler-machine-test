import React from "react";

import { Box } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
  return createStyles({
    galssy: {
      width: "auto",
      height: "auto",
      padding: theme.spacing(2),
      border: `1px solid ${theme.custom.glassyBorder}`,
      borderRadius: theme.spacing(1),
      backgroundColor: theme.custom.glassyBg,
      backdropFilter: "blur(10px)",
    },
  });
});

const GlassyContainer = ({ children, ...restProps }) => {
  const classes = useStyles();

  return <Box className={classes.galssy}>{children}</Box>;
};

export default GlassyContainer;
