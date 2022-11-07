import PropTypes from "prop-types";
import { useState } from "react";

const AddNewItem = ({
  prepareToAddNewItem,
  addNewItem,
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


    let className = "";
    className += isHidden ? " hidden" : "";

  return (
    <form
      className="addNewItem"
      onKeyDown={onCancelPress}
      onSubmit={(e) => {
        e.preventDefault();
        addNewItem(newTask);
        setNewTask("");
      }}
    >
      <label className={className} onClick={prepareToAddNewItem}>
        + Add new item
      </label>
      <input
        type="text"
        placeholder="Add new item"
        onChange={onChange}
        value={newTask}
      />
    </form>
  );
};

AddNewItem.propTypes = {
  onCancelPress: PropTypes.func,
  prepareToAddNewItem: PropTypes.func,
  addNewItem: PropTypes.func,
  isHidden: PropTypes.bool,
};

export default AddNewItem;