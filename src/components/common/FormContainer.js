import React from "react";
import { Box } from "@mui/material";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: ".3rem",
    },
    label: {},
  })
);

const FormContainer = ({ label = "Label", children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.formContainer}>
      <div className={classes.label}>{label}</div>
      {children}
    </Box>
  );
};

export default FormContainer;
