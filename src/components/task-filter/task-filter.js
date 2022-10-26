import FilterButton from "../filter-button/filter-button";

const TaskFilter = ({ onFilterClick, buttons }) => {
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
