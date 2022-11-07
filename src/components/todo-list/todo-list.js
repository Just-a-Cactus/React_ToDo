import TodoItem from "../todo-item/todo-item";
import PropTypes from "prop-types";

const TodoList = ({ tasks, filterStatus, onTaskClick, search, onDeleteClick }) => {
  TodoList.propTypes = {
    tasks: PropTypes.array,
    filterStatus: PropTypes.string,
    onTaskClick: PropTypes.func,
    search: PropTypes.string,
    onDeleteClick: PropTypes.func,
  };

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
    switch (filterStatus) {
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
