const FilterButton = ({ label, name, onFilterClick, clazz }) => {
  return (
    <button type="button" name={name} className={clazz} onClick={onFilterClick}>
      {label}
    </button>
  );
};
export default FilterButton;
