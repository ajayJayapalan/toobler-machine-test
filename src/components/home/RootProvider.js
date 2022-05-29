import React from "react";

import { Provider as ReduxProvider } from "react-redux";
import {  ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme/theme";
import store from "../../redux/store";
import MyToast from "../UI/MyToast";


const RootProvider = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        {children}
        <MyToast />
      </ReduxProvider>
    </ThemeProvider>
  );
};

export default RootProvider;
