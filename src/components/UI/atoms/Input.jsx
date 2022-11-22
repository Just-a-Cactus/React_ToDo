import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Input = ({ type, ...props }) => {
  switch (type) {
    case "text":
      return <StyledInputText type={type} {...props}></StyledInputText>;
    case "checkbox":
      return <StyledInputCheckbox type={type} {...props}></StyledInputCheckbox>;
    default:
      return null;
  }
};

export default Input;

const StyledInputText = styled.input`
  width: 100%;
  display: ${(props) => props.display ?? "inherit"};
  font-size: ${(props) => props.fontSize ?? "inherit"};
  background-color: ${({ theme }) => theme.inputColor};
  color: inherit;
  border-radius: 10px;
  border-color: transparent;
  text-align: center;
  margin-top: 10px;
  padding-right: 30px;
  padding-left: 30px;

  &:focus {
    outline: none;
  }
`;

const StyledInputCheckbox = styled.input`
  display: ${(props) => props.display ?? "inherit"};
`;

Input.propTypes = {
  type: PropTypes.string.isRequired,
};
