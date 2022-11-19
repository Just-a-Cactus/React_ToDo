import React from "react";
import styled from "styled-components";

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  align-self: ${(props) => props.alignSelf ?? null};
  border-radius: 10px;
  border-color: transparent;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) =>
    props.isActive ? props.theme.inputColor : props.theme.color};
  background-color: ${(props) =>
    props.isActive ? props.theme.color : props.theme.inputColor};

  & + & {
    margin-left: 10px;
  }

  @media (hover: hover) {
    :hover {
      color: ${(props) => props.theme.inputColor};
      background-color: ${(props) => props.theme.color};
    }
  }
`;
