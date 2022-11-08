import PropTypes from "prop-types";

const FilterButton = ({ label, name, onFilterClick, className }) => (
  <button
    type="button"
    name={name}
    className={className}
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
