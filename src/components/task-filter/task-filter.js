import FilterButton from "../filter-button/filter-button";
import PropTypes from "prop-types";

const TaskFilter = ({ onFilterClick, buttons }) => {
  TaskFilter.propTypes = {
    onFilterClick: PropTypes.func,
    buttons: PropTypes.array,
  };

  let key = 1;

  const buttonList = buttons.map((button) => {
    let clazz = "FilterButton";
    if (button.active) clazz += " active";

    return (
      <FilterButton
        label={button.label}
        name={button.name}
        key={key++}
        onFilterClick={onFilterClick}
        clazz={clazz}
      />
    );
  });
  return <div className="TaskFilter">{buttonList}</div>;
};
export default TaskFilter;
