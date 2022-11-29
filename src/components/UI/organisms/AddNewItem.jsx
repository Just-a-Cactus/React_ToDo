import PropTypes from "prop-types";
import { useState } from "react";
import Form from "../molecules/Form";

const AddNewItem = ({ createNewItem, tasks, setTasks }) => {
  const [newTask, setNewTask] = useState(undefined);

  const handleNewItemAdd = (label) => {
    const newItem = createNewItem(label);
    const newState = [...tasks];
    setTasks([...newState, newItem]);
    localStorage.setItem("tasks", JSON.stringify([...newState, newItem]));
  };

  const handleNewItemChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Escape") setNewTask(undefined);
  };

  const handleFormSubmit = (e) => {
    if (newTask) handleNewItemAdd(newTask);
    setNewTask(undefined);
    e.preventDefault();
  };

  const handleLabelClick = () => setNewTask("");

  return (
    <Form
      tag={"addNew"}
      newTask={newTask}
      onKeyDown={handleKeyPress}
      onSubmit={handleFormSubmit}
      onChange={handleNewItemChange}
      onClick={handleLabelClick}
    />
  );
};

AddNewItem.propTypes = {
  createNewItem: PropTypes.func,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};

export default AddNewItem;
