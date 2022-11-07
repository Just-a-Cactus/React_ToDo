import TodoItem from "../todo-item/todo-item";

const TodoList = ({ tasks, isActive, onTaskClick, search, onDeleteClick }) => {
  let key = 100;
  let tasksList = "";

  const makeItem = (arr) => {
    return arr.map((item) => {
      let className = "todoItem";
      className += item.done ? " done" : "";
      return (
        <TodoItem
          label={item.label}
          className={className}
          key={key++}
          onTaskClick={onTaskClick}
          isDone={item.done}
          onDeleteClick={onDeleteClick}
        />
      );
    });
  };

  const filterElement = (el) => {
    if (el.label.toLowerCase().indexOf(search.toLowerCase()) > -1) return el;
  };

  if (search) {
    tasksList = makeItem(tasks.filter((el) => filterElement(el)));
  } else {
    switch (isActive) {
      case "done":
        tasksList = makeItem(tasks.filter((el) => el.done));
        break;
      case "active":
        tasksList = makeItem(tasks.filter((el) => !el.done));
        break;
      default:
        tasksList = makeItem(tasks);
        break;
    }
  }
  return <ul className="todoList">{tasksList}</ul>;
};

export default TodoList;
