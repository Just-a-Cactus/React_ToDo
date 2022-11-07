import ThemeSwitcher from "../theme-switcher/theme-switcher";
import PropTypes from "prop-types";

const Header = ({ need, all, toggleTheme, theme }) => {
  Header.propTypes = {
    need: PropTypes.number,
    all: PropTypes.number,
    toggleTheme: PropTypes.func,
    theme: PropTypes.string,
  };

  return (
    <header className="Header">
      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      <h1>Things to do</h1>
      <span>
        {need} from {all} done
      </span>
    </header>
  );
};
export default Header;
