import TodoItem from "../TodoItem/TodoItem";
import PropTypes from "prop-types";
import styled from "styled-components";

const TodoList = ({
  tasks,
  filterStatus,
  onTaskClick,
  search,
  onDeleteClick,
  onEditClick,
  onSaveClick,
}) => {
  let key = 100;
  let tasksList;

  const makeItem = (arr) =>
    arr.map((item) => (
      <TodoItem
        label={item.label}
        key={key++}
        onTaskClick={onTaskClick}
        isDone={item.done}
        isEdit={item.isEdit}
        onDeleteClick={onDeleteClick}
        onEditClick={onEditClick}
        onSaveClick={onSaveClick}
      />
    ));

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
  return <TodoListWrapper>{tasksList}</TodoListWrapper>;
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  filterStatus: PropTypes.string,
  onTaskClick: PropTypes.func,
  search: PropTypes.string,
  onDeleteClick: PropTypes.func,
};

export default TodoList;

const TodoListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
