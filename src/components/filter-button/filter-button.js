const FilterButton = ({ label, name, onFilterClick, className }) => {
  return (
    <button
      type="button"
      name={name}
      className={className}
      onClick={onFilterClick}
    >
      {label}
    </button>
  );
};
export default FilterButton;
