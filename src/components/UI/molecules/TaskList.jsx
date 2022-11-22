import PropTypes from "prop-types";
import styled from "styled-components";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks, filterStatus, searchValue }) => {
  let key = 100;

  const filterElement = (el) =>
    el.label.toLowerCase().indexOf(searchValue.toLowerCase()) > -1 ? el : null;

  const makeItem = (arr) =>
    arr.map((item) => (
      <TaskItem
        key={key++}
        tasks={tasks}
        setTasks={setTasks}
        labelText={item.label}
        isDone={item.done}
        isEdit={item.isEdit}
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
