import FilterButton from "../filter-button/filter-button";

const TaskFilter = ({ onFilterClick, buttons }) => {
  let key = 1;

  const buttonList = buttons.map((button) => {
    let className = "filter-button";
    if (button.active) className += " active";

    return (
      <FilterButton
        label={button.label}
        name={button.name}
        key={key++}
        onFilterClick={onFilterClick}
        className={className}
      />
    );
  });
  return <div className="task-filter">{buttonList}</div>;
};
export default TaskFilter;
