import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Input from "../atoms/Input";
import Text from "../atoms/Text";

const Form = ({ tag, newTask, onChange, onClick, ...props }) => {
  switch (tag) {
    case "addNew":
      return (
        <StyledForm {...props}>
          {newTask !== undefined ? (
            <Input
              type={"text"}
              fontSize={".9rem"}
              placeholder={"Add new item"}
              onChange={onChange}
              value={newTask}
            />
          ) : (
            <Text
              tag={"label"}
              fontSize={".9rem"}
              display={"flex"}
              onClick={onClick}
            >
              + Add new item
            </Text>
          )}
        </StyledForm>
      );
    default:
      return null;
  }
};

export default Form;

const StyledForm = styled.form``;

Text.propTypes = {
  tag: PropTypes.string,
  newTask: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
};
