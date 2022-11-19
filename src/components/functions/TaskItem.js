import { useEffect, useState } from "react";

const TaskItemHook = (
  labelText,
  onTaskClick,
  isDone,
  onDeleteClick,
  onEditClick,
  onSaveClick
) => {
  const [temp, setTemp] = useState("");

  useEffect(() => {
    if (temp === "") setTemp(labelText);
  }, [temp, labelText]);

  const handleCancelEdit = (e) => {
    if (e.code === "Escape") {
      setTemp("");
      onSaveClick(labelText, labelText);
    }
  };

  return { temp, handleCancelEdit, setTemp };
};

export default TaskItemHook;
