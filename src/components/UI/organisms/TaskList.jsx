import PropTypes from "prop-types";
import styled from "styled-components";
import TaskItem from "../molecules/TaskItem";

const TaskList = ({ tasks, setTasks, filterStatus, searchValue }) => {
  let key = 100;

  const filterElement = (el) =>
    el.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ? el : null;

  const handleEditClick = (e) => {
    const newState = tasks.map((el) => {
      if (el.label === e.currentTarget.getAttribute("data-name"))
        el.isEdit = true;
      return el;
    });
    setTasks([...newState]);
  };

  const handleDeleteClick = (e) => {
    const newState = [...tasks].filter(
      (el) => el.label !== e.currentTarget.getAttribute("data-name")
    );
    setTasks([...newState]);
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const handleTaskClick = (e) => {
    const newState = [...tasks];
    newState.map((el) => {
      if (el.label === e.target.id) {
        return (el.done = !el.done);
      }
      return 0;
    });
    setTasks([...newState]);
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const handleSaveClick = (oldLabel, newLabel) => {
    const newState = tasks.map((el) => {
      if (el.label === oldLabel) {
        el.isEdit = false;
        el.label = newLabel;
      }
      return el;
    });
    setTasks([...newState]);
    localStorage.setItem("tasks", JSON.stringify([...newState]));
  };

  const makeItem = (arr) =>
    arr.map((item) => (
      <TaskItem
        key={key++}
        labelText={item.label}
        isDone={item.done}
        isEdit={item.isEdit}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        onTaskClick={handleTaskClick}
        onSaveClick={handleSaveClick}
      />
    ));

  if (!searchValue) {
    if (filterStatus === "done")
      return (
        <StyledTaskList>
          {makeItem(tasks.filter((el) => el.done))}
        </StyledTaskList>
      );
    else if (filterStatus === "active")
      return (
        <StyledTaskList>
          {makeItem(tasks.filter((el) => !el.done))}
        </StyledTaskList>
      );
    return <StyledTaskList>{makeItem(tasks)}</StyledTaskList>;
  } else
    return (
      <StyledTaskList>
        {makeItem(tasks.filter((el) => filterElement(el)))}
      </StyledTaskList>
    );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  filterStatus: PropTypes.string,
  onTaskClick: PropTypes.func,
  searchValue: PropTypes.string,
  onDeleteClick: PropTypes.func,
};

export default TaskList;

const StyledTaskList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
