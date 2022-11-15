import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";

const AddNewItem = ({
  onNewItemClick,
  onNewItemAdd,
  isHidden,
  onCancelPress,
}) => {
  const [newTask, setNewTask] = useState("");

  const handleNewItemChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Escape") setNewTask("");
    onCancelPress(e);
  };

  return (
    <AddNewItemWrapper
      onKeyDown={handleKeyPress}
      onSubmit={(e) => {
        e.preventDefault();
        onNewItemAdd(newTask);
        setNewTask("");
      }}
    >
      <label className={isHidden ? "hidden" : null} onClick={onNewItemClick}>
        + Add new item
      </label>
      <input
        type="text"
        placeholder="Add new item"
        onChange={handleNewItemChange}
        value={newTask}
      />
    </AddNewItemWrapper>
  );
};

AddNewItem.propTypes = {
  onCancelPress: PropTypes.func,
  prepareToAddNewItem: PropTypes.func,
  addNewItem: PropTypes.func,
  isHidden: PropTypes.bool,
};

export default AddNewItem;

const AddNewItemWrapper = styled.form`
  label.hidden ~ input {
    display: block;
  }

  label.hidden {
    display: none;
  }

  input {
    display: none;
    width: 100%;
    background-color: ${({ theme }) => theme.inputColor};
    color: inherit;
    border-radius: 10px;
    border-color: transparent;
    text-align: center;
    margin-bottom: 5px;
    font-size: 18px;
  }

  input:focus {
    outline: none;
  }

  label {
    font-size: 18px;
    color: ${({ theme }) => theme.inputTextColor};
    display: flex;
    justify-content: center;
  }

  label:hover {
    color: inherit;
    cursor: pointer;
  }
`;
