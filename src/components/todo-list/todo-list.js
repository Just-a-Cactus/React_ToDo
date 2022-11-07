import TodoItem from "../todo-item/todo-item";
import PropTypes from "prop-types";

const TodoList = ({ tasks, filterStatus, makeDone, search, onDelete }) => {
  TodoList.propTypes = {
    tasks: PropTypes.array,
    filterStatus: PropTypes.string,
    makeDone: PropTypes.func,
    search: PropTypes.string,
    onDelete: PropTypes.func,
  };

  let key = 100;
  let tasksList = "";

  const makeItem = (arr) => {
    return arr.map((item) => {
      let clazz = "TodoItem";
      clazz += item.done ? " done" : "";
      return (
        <TodoItem
          label={item.label}
          clazz={clazz}
          key={key++}
          makeDone={makeDone}
          isDone={item.done}
          onDelete={onDelete}
        />
      );
    });
  };

  const filterElement = (el) => {
    if (el.label.toLowerCase().indexOf(search.toLowerCase()) > -1) return el;
  };

  if (search) {
    tasksList = makeItem(
      tasks.filter((el) => {
        return filterElement(el);
      })
    );
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
  return <ul className="TodoList">{tasksList}</ul>;
};

export default TodoList;
