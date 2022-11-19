import { useState } from "react";

const AddNewItemHook = (onNewItemAdd) => {
  const [newTask, setNewTask] = useState(undefined);

  const handleNewItemChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Escape") setNewTask(undefined);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTask) onNewItemAdd(newTask);
    setNewTask(undefined);
  };
  const handleLabelClick = () => setNewTask("");

  return {
    newTask,
    handleNewItemChange,
    handleKeyPress,
    handleFormSubmit,
    handleLabelClick,
  };
};

export default AddNewItemHook;
