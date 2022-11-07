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

  let clazz = "";
  clazz += isHidden ? " hidden" : "";

  return (
    <form
      className="AddNewItem"
      onKeyDown={onPress}
      onSubmit={(e) => {
        e.preventDefault();
        addNewItem(newTask);
        setNewTask("");
      }}
    >
      <label className={clazz} onClick={prepareToAddNewItem}>
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

export default AddNewItem;