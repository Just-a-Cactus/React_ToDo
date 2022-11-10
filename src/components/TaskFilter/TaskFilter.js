import FilterButton from "../FilterButton/FilterButton";
import PropTypes from "prop-types";
import styles from "./TaskFilter.module.css";

const TaskFilter = ({ onFilterClick, buttons, theme }) => {
  let key = 1;

  const buttonList = buttons.map((button) => (
    <FilterButton
      label={button.label}
      name={button.name}
      key={key++}
      onFilterClick={onFilterClick}
      isButtonActive={button.active}
      theme={theme}
    />
  ));
  return <div className={styles.taskFilter}>{buttonList}</div>;
};

TaskFilter.propTypes = {
  onFilterClick: PropTypes.func,
  buttons: PropTypes.array,
};

export default TaskFilter;
