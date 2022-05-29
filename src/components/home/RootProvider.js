import React from "react";

import { Provider as ReduxProvider } from "react-redux";
import {  ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme/theme";
import store from "../../redux/store";


const RootProvider = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
