import PropTypes from "prop-types";
import styled from "styled-components";
import TaskListHook from "../../functions/TaskList";

const TaskList = ({
  tasks,
  filterStatus,
  onTaskClick,
  searchValue,
  onDeleteClick,
  onEditClick,
  onSaveClick,
}) => (
  <StyledTaskList>
    {TaskListHook(
      tasks,
      filterStatus,
      onTaskClick,
      searchValue,
      onDeleteClick,
      onEditClick,
      onSaveClick
    )}
  </StyledTaskList>
);

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
