
import PropTypes from "prop-types";

const FilterButton = ({ label, name, onFilterClick, clazz }) => {
  FilterButton.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onFilterClick: PropTypes.func,
    className: PropTypes.string,
  };

const FilterButton = ({ label, name, onFilterClick, className }) => (
  <button type="button" name={name} className={className} onClick={onFilterClick}>
    {label}
  </button>
);

export default FilterButton;