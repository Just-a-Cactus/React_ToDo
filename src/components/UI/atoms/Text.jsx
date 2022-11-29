import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Text = ({ tag, children, ...props }) => {
  switch (tag) {
    case "h1":
      return <StyledH1 {...props}>{children}</StyledH1>;
    case "span":
      return <StyledSpan {...props}>{children}</StyledSpan>;
    case "p":
      return <StyledP {...props}>{children}</StyledP>;
    case "label":
      return <StyledLabel {...props}>{children}</StyledLabel>;
    default:
      return <StyledP {...props}>{children}</StyledP>;
  }
};

export default Text;

const StyledH1 = styled.h1`
  margin: 0 0 5px 0;
  font-size: 36px;
`;
const StyledSpan = styled.span`
  color: ${(props) => props.color ?? props.theme.inputTextColor};
  font-size: ${(props) => props.fontSize ?? "inherit"};
`;
const StyledP = styled.p`
  font-size: ${(props) => props.fontSize ?? "inherit"};
`;

const StyledLabel = styled.label`
  margin-top: 10px;
  display: ${(props) => props.display ?? "inherit"};
  font-size: ${(props) => props.fontSize ?? "inherit"};
  color: ${(props) =>
    props.checked
      ? props.theme.inputTextColor
      : props.color ?? props.theme.inputTextColor};
  justify-content: center;
  position: relative;
  cursor: pointer;
  padding-left: ${(props) => props.pLeft ?? ""};
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};

  :hover {
    color: ${(props) => (props.checked ? "" : "inherit")};
    cursor: pointer;
  }

  :before {
    content: "";
    display: ${(props) => (props.checkbox ? "block" : "none")};
    width: ${(props) => (props.checked ? "5px" : "16px")};
    height: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
      props.checked ? props.theme.color : props.theme.inputTextColor};
    border-top-color: ${(props) => (props.checked ? "transparent" : "")};
    border-left-color: ${(props) => (props.checked ? "transparent" : "")};
    border-radius: ${(props) => (props.checked ? "0" : "5px")};
    position: absolute;
    left: ${(props) => (props.checked ? "7px" : "0")};
    top: ${(props) => (props.checked ? "0" : "4px")};
    transform: ${(props) => (props.checked ? "rotate(45deg)" : "rotate(0deg)")};
    transition: all 0.12s, border-color 0.08s;
  }
`;

Text.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
};
