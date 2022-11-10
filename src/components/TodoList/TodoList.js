import TodoItem from "../TodoItem/TodoItem";
import PropTypes from "prop-types";
import styles from "./TodoList.module.css";

const TodoList = ({
  tasks,
  filterStatus,
  onTaskClick,
  search,
  onDeleteClick,
  theme,
}) => {
  let key = 100;
  let tasksList;

  const makeItem = (arr) => {
    return arr.map((item) => {
      return (
        <TodoItem
          label={item.label}
          isItemDone={item.done}
          key={key++}
          onTaskClick={onTaskClick}
          isDone={item.done}
          onDeleteClick={onDeleteClick}
          theme={theme}
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
  return <ul className={styles.todoList}>{tasksList}</ul>;
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  filterStatus: PropTypes.string,
  onTaskClick: PropTypes.func,
  search: PropTypes.string,
  onDeleteClick: PropTypes.func,
};

export default TodoList;
