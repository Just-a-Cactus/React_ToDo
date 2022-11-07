import PropTypes from "prop-types";

const FilterButton = ({ label, name, onFilterClick, clazz }) => {
  FilterButton.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    onFilterClick: PropTypes.func,
    clazz: PropTypes.string,
  };

  return (
    <button type="button" name={name} className={clazz} onClick={onFilterClick}>
      {label}
    </button>
  );
};
export default FilterButton;
