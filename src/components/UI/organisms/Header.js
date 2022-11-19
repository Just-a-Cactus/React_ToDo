import ThemeSwitcher from "../molecules/ThemeSwitcher";
import PropTypes from "prop-types";
import styled from "styled-components";
import Text from "../atoms/Text";

const Header = ({
  amountFinishedTasks,
  amountOfAllTasks,
  onToggleThemeClick,
  isChecked,
}) => (
  <StyledHeader>
    <ThemeSwitcher
      onToggleThemeClick={onToggleThemeClick}
      checked={isChecked}
    />
    <Text tag={"h1"}>Things to do</Text>
    <Text tag={"span"}>
      {amountFinishedTasks} from {amountOfAllTasks} done
    </Text>
  </StyledHeader>
);

Header.propTypes = {
  amountFinishedTasks: PropTypes.number,
  amountOfAllTasks: PropTypes.number,
  onToggleThemeClick: PropTypes.func,
  isChecked: PropTypes.bool,
};

export default Header;

const StyledHeader = styled.form`
  text-align: center;
  padding-bottom: 10px;
`;
