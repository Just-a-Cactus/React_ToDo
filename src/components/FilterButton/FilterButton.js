import PropTypes from "prop-types";
import styles from "./FilterButton.module.scss";

const FilterButton = ({
  label,
  name,
  onFilterClick,
  isButtonActive,
  theme,
}) => (
  <button
    type="button"
    name={name}
    className={`
    ${styles[theme]}
    ${isButtonActive && theme === "dark" ? styles.darkActive : null}
    ${isButtonActive && theme === "light" ? styles.lightActive : null}
    `}
    onClick={onFilterClick}
  >
    {label}
  </button>
);

FilterButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onFilterClick: PropTypes.func,
  className: PropTypes.string,
};

export default FilterButton;
