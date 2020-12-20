import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./from-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {label && <FormInputLabel value={otherProps.value}>{label}</FormInputLabel>}
  </GroupContainer>
);

export default FormInput;
