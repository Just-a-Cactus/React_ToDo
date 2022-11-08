import FilterButton from "../filter-button/filter-button";
import PropTypes from "prop-types";

const TaskFilter = ({ onFilterClick, buttons }) => {
  let key = 1;

  const buttonList = buttons.map((button) => (
    <FilterButton
      label={button.label}
      name={button.name}
      key={key++}
      onFilterClick={onFilterClick}
      className={button.active ? "filterButton active" : "filterButton"}
    />
  ));
  return <div className="taskFilter">{buttonList}</div>;
};

TaskFilter.propTypes = {
  onFilterClick: PropTypes.func,
  buttons: PropTypes.array,
};

export default TaskFilter;
