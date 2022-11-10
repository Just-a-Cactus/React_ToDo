import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = ({
  amountFinishedTasks,
  amountOfAllTasks,
  onToggleThemeClick,
  theme,
}) => (
  <header className={styles.header}>
    <ThemeSwitcher onToggleThemeClick={onToggleThemeClick} theme={theme} />
    <h1 className={styles.title}>Things to do</h1>
    <span className={styles.subtitle}>
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
