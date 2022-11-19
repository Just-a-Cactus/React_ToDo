import PropTypes from "prop-types";
import styled from "styled-components";
import FilterHook from "../../functions/Filter";

const Filter = ({ onButtonClick, buttons }) => (
  <StyledFilter>{FilterHook(onButtonClick, buttons)}</StyledFilter>
);

Filter.propTypes = {
  onButtonClick: PropTypes.func,
  buttons: PropTypes.array,
};

export default Filter;

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
`;
