import React from "react";
import { Form, Input, Button } from "antd";
import { StyledInput, StyledForm,StyledButton } from "./StyledComponents";
const FormData = (props) => {
  return (
    <StyledForm onFinish={props.getRecipe}>
      <StyledInput allowClear
        type="text"
        name="recipeName"
        onChange={(e) => props.setQuery(e.target.value)}
      />
      <StyledButton htmlType="submit" type="primary">Search</StyledButton>
    </StyledForm>
  );
};
export default FormData;
