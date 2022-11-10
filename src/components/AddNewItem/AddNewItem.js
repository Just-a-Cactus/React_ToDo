import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./AddNewItem.module.css";

const AddNewItem = ({
  onNewItemClick,
  onNewItemAdd,
  isHidden,
  onCancelPress,
  theme,
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
    <form
      className={styles.addNewItemForm}
      onKeyDown={handleKeyPress}
      onSubmit={(e) => {
        e.preventDefault();
        onNewItemAdd(newTask);
        setNewTask("");
      }}
    >
      <label
        className={isHidden ? styles.hiddenLabel : styles.label}
        onClick={onNewItemClick}
      >
        + Add new item
      </label>
      <input
        className={theme === "dark" ? styles.inputDark : styles.inputLight}
        type="text"
        placeholder="Add new item"
        onChange={handleNewItemChange}
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
