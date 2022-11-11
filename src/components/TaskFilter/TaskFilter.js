import FilterButton from "../FilterButton/FilterButton";
import PropTypes from "prop-types";
import styled from "styled-components";

const TaskFilter = ({ onFilterClick, buttons, theme }) => {
  let key = 1;

  const buttonList = buttons.map((button) => (
    <FilterButton
      label={button.label}
      name={button.name}
      key={key++}
      onFilterClick={onFilterClick}
      theme={theme}
      isActive={button.active}
    />
  ));
  return <TaskFilterWrapper>{buttonList}</TaskFilterWrapper>;
};

TaskFilter.propTypes = {
  onFilterClick: PropTypes.func,
  buttons: PropTypes.array,
  theme: PropTypes.object,
};

export default TaskFilter;

const TaskFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px ${({ theme }) => theme.borderColor};
  margin-bottom: 10px;
  padding-bottom: 10px;
`;
