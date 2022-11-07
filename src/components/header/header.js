import ThemeSwitcher from "../theme-switcher/theme-switcher";

const Header = ({ amountFinishedTasks, amountOfAllTasks, onToggleThemeClick, theme }) => (
  <header className="Header">
    <ThemeSwitcher toggleTheme={onToggleThemeClick} theme={theme} />
    <h1>Things to do</h1>
    <span>
      {amountFinishedTasks} from {amountOfAllTasks} done
    </span>
  </header>
);

export default Header;