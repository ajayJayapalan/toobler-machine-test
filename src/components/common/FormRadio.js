import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import FormContainer from "./FormContainer";

const FormRadio = ({ label, values, radio }) => {
  return (
    <FormContainer label={label}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        {...radio}
      >
        {values.map((radio, id) => (
          <FormControlLabel key={id} {...radio} control={<Radio />} />
        ))}
      </RadioGroup>
    </FormContainer>
  );
};

export default FormRadio;
