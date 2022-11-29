import PropTypes from "prop-types";
import styled from "styled-components";
import Button from "../atoms/Button";

const Filter = ({ buttons, setIsActive, setButtons }) => {
  let key = 1;

  const handleFilterClick = (e) => {
    const newState = [...buttons];
    newState.map((el) => {
      if (el.name === e.target.name) {
        setIsActive(el.name);
        return (el.active = true);
      } else return (el.active = false);
    });
    setButtons([...newState]);
  };

  return (
    <StyledFilter>
      {buttons.map((button) => (
        <Button
          type={"button"}
          key={key++}
          name={button.name}
          onClick={handleFilterClick}
          isActive={button.active}
        >
          {button.label}
        </Button>
      ))}
    </StyledFilter>
  );
};

Filter.propTypes = {
  setIsActive: PropTypes.func,
  setButtons: PropTypes.func,
  buttons: PropTypes.array,
};

export default Filter;

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
`;
