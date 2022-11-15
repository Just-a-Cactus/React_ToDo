import PropTypes from "prop-types";
import styled from "styled-components";

const FilterButton = ({ label, name, onFilterClick, isActive }) => (
  <FilterButtonWrapper
    type="button"
    name={name}
    className={isActive ? "active" : null}
    onClick={onFilterClick}
  >
    {label}
  </FilterButtonWrapper>
);

FilterButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onFilterClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default FilterButton;

const FilterButtonWrapper = styled.button`
  border-radius: 10px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.color};
  cursor: pointer;
  font-size: 20px;

  & + & {
    margin-left: 10px;
  }

  :hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.inputColor};
  }

  &.active {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.inputColor};
  }
`;
