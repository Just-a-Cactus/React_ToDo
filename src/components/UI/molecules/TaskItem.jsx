import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../atoms/Text";
import Input from "../atoms/Input";
import Svg from "../atoms/Svg";
import { useEffect, useState } from "react";

const TaskItem = ({ labelText, isDone, isEdit, tasks, setTasks }) => {
  const [temp, setTemp] = useState("");

  const handleTaskClick = (e) => {
    const newState = [...tasks];
    newState.map((el) => {
      if (el.label === e.target.id) {
        return (el.done = !el.done);
      }
      return 0;
    });
    setTasks([...newState]);
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const handleEditClick = (e) => {
    const newState = tasks.map((el) => {
      if (el.label === e.currentTarget.getAttribute("data-name"))
        el.isEdit = true;
      return el;
    });
    setTasks([...newState]);
  };

  const handleSaveClick = (oldLabel, newLabel) => {
    const newState = tasks.map((el) => {
      if (el.label === oldLabel) {
        el.isEdit = false;
        el.label = newLabel;
      }
      return el;
    });
    setTasks([...newState]);
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const handleCancelEdit = (e) => {
    if (e.code === "Escape") {
      setTemp("");
      handleSaveClick(labelText, labelText);
    }
  };

  const handleDeleteClick = (e) => {
    const newState = [...tasks].filter(
      (el) => el.label !== e.currentTarget.getAttribute("data-name")
    );
    setTasks([...newState]);
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const itemShow = (
    <>
      <span>
        <Input
          type="checkbox"
          id={labelText}
          onChange={handleTaskClick}
          checked={isDone}
          display={"none"}
        />
        <Text
          fontSize={".9rem"}
          pLeft={"30px"}
          tag={"label"}
          checked={isDone}
          checkbox={true}
          htmlFor={labelText}
          color={"inherit"}
        >
          {labelText}
        </Text>
      </span>
      <Svg icon={"edit"} onClick={handleEditClick} data-name={labelText} />
      <Svg icon={"trash"} onClick={handleDeleteClick} data-name={labelText} />
    </>
  );

  const itemEdit = (
    <>
      <Input
        type="text"
        id={labelText}
        value={temp}
        fontSize={".9rem"}
        onChange={(e) => setTemp(e.target.value)}
        onKeyDown={handleCancelEdit}
      />
      <Svg
        icon={"done"}
        onClick={() =>
          handleSaveClick(labelText, document.getElementById(labelText).value)
        }
      />
    </>
  );

  useEffect(() => {
    if (temp === "") setTemp(labelText);
  }, [temp, labelText]);

  return (
    <li>
      <StyledTaskItem
        onSubmit={(e) => {
          e.preventDefault();
          handleSaveClick(labelText, e.target[labelText].value);
        }}
      >
        {isEdit ? itemEdit : itemShow}
      </StyledTaskItem>
    </li>
  );
};

TaskItem.propTypes = {
  labelText: PropTypes.string,
  onTaskClick: PropTypes.func,
  isDone: PropTypes.bool,
  onDeleteClick: PropTypes.func,
};

export default TaskItem;

const StyledTaskItem = styled.form`
  display: flex;
  align-items: end;

  & :first-child {
    flex-grow: 1;
  }

  @media (hover: hover) {
    :hover {
      border-bottom: 1px solid ${({ theme }) => theme.borderColor};
    }
  }
  border-bottom: 1px solid transparent;
`;
