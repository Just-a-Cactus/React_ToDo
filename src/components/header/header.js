import ThemeSwitcher from "../theme-switcher/theme-switcher";
import PropTypes from "prop-types";

const Header = ({ amountFinishedTasks, amountOfAllTasks, toggleTheme, theme }) => {
  Header.propTypes = {
    amountFinishedTasks: PropTypes.number,
    amountOfAllTasks: PropTypes.number,
    onToggleThemeClick: PropTypes.func,
    theme: PropTypes.string,
  };

  return (
  <header className="header">
    <ThemeSwitcher toggleTheme={onToggleThemeClick} theme={theme} />
    <h1>Things to do</h1>
    <span>
      {amountFinishedTasks} from {amountOfAllTasks} done
    </span>
  </header>
);

export default Header;