import React from "react";

import { Provider as ReduxProvider } from "react-redux";

import { makeStyles } from "@mui/styles";
import GlassyContainer from "./../UI/GlassyContainer";

import { Box, ThemeProvider } from "@mui/material";
import { theme } from "./../../utils/theme/theme";
import store from "../../redux/store";

const useStyles = makeStyles({
  root: {
    background: "#545ABA",
    width: "100%",
    minHeight: "100vh",
    paddingTop: "5rem",
  },
  child: {
    maxWidth: "1000px",
    margin: "0rem auto",
  },
  dashboardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
});

const HomeWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <Box className={classes.root}>
          <Box className={classes.child}>
            <GlassyContainer>
              <Box className={classes.dashboardContainer}>{children}</Box>
            </GlassyContainer>
          </Box>
        </Box>
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default HomeWrapper;
