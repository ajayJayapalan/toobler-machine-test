import React from "react";
import FormContainer from "./FormContainer";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      outline: "none",
      border: "2px solid #DCDCEE",
      borderRadius: ".3rem",
      padding: `${theme.spacing(1.2)}`,
    },
  })
);

const FormInput = ({ label, ...rest }) => {
  const classes = useStyles();

  return (
    <FormContainer label={label}>
      <input
        className={classes.input}
        placeholder="Please enter here."
        {...rest}
      />
    </FormContainer>
  );
};

export default FormInput;
