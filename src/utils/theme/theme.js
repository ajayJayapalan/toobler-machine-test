import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F33D63",
    },
    secondary: {
      main: "#545ABA",
    },
    text: {
      primary: "#4f4f4f",
      secondary: "#94979B",
    },
  },
  custom: {
    primary: "#F33D63",
    secondary: "#545ABA",

    primaryText: "#4f4f4f",
    secondaryText: "#94979B",

    glassyBg: "#ffffff20",
    glassyBorder: "#ffffff50",
  },
  typography: {
    fontFamily: "Nunito",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
