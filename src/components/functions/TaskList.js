import TaskItem from "../UI/molecules/TaskItem";

const TaskListHook = (
  tasks,
  filterStatus,
  onTaskClick,
  searchValue,
  onDeleteClick,
  onEditClick,
  onSaveClick
) => {
  let key = 100;

  const filterElement = (el) =>
    el.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ? el : null;

  const makeItem = (arr) =>
    arr.map((item) => (
      <TaskItem
        labelText={item.label}
        key={key++}
        onTaskClick={onTaskClick}
        isDone={item.done}
        isEdit={item.isEdit}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        onSaveClick={onSaveClick}
      />
    ));

  return makeItem(
    !searchValue
      ? filterStatus !== "done" && filterStatus !== "active"
        ? tasks
        : tasks.filter((el) => (filterStatus === "done" ? el.done : !el.done))
      : tasks.filter((el) => filterElement(el))
  );
};

export default TaskListHook;
