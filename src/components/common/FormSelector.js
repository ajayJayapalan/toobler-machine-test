import React from "react";
import FormContainer from "./FormContainer";

import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    select: {
      outline: "none",
      border: "2px solid #DCDCEE",
      borderRadius: ".3rem",
      padding: `${theme.spacing(1.2)}`,
      "&>option": {
        padding: "1rem",
      },
    },
  })
);

const FormSelector = ({ label, select, options }) => {
  const classes = useStyles();

  return (
    <FormContainer label={label}>
      <select className={classes.select} {...select}>
        {options.map((option, id) => (
          <option key={id} value={option.value}>{option.label}</option>
        ))}
      </select>
    </FormContainer>
  );
};

export default FormSelector;
