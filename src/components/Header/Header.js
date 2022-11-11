import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import PropTypes from "prop-types";
import styled from "styled-components";

const Header = ({
  amountFinishedTasks,
  amountOfAllTasks,
  onToggleThemeClick,
  isChecked,
}) => (
  <HeaderWrapper>
    <ThemeSwitcher
      onToggleThemeClick={onToggleThemeClick}
      checked={isChecked}
    />
    <h1>Things to do</h1>
    <span>
      {amountFinishedTasks} from {amountOfAllTasks} done
    </span>
  </HeaderWrapper>
);

Header.propTypes = {
  amountFinishedTasks: PropTypes.number,
  amountOfAllTasks: PropTypes.number,
  onToggleThemeClick: PropTypes.func,
  isChecked: PropTypes.bool,
};

export default Header;

const HeaderWrapper = styled.form`
  text-align: center;
  padding-bottom: 10px;

  h1 {
    margin: 0 0 5px 0;
    font-size: 36px;
  }

  span {
    color: ${({ theme }) => theme.inputTextColor};
  }
`;
