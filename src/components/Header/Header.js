import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import PropTypes from "prop-types";

const Header = ({
  amountFinishedTasks,
  amountOfAllTasks,
  onToggleThemeClick,
  theme,
}) => (
  <header className="header">
    <ThemeSwitcher onToggleThemeClick={onToggleThemeClick} theme={theme} />
    <h1>Things to do</h1>
    <span>
      {amountFinishedTasks} from {amountOfAllTasks} done
    </span>
  </header>
);

Header.propTypes = {
  amountFinishedTasks: PropTypes.number,
  amountOfAllTasks: PropTypes.number,
  onToggleThemeClick: PropTypes.func,
  theme: PropTypes.string,
};

export default Header;
