import ThemeSwitcher from "../theme-switcher/theme-switcher";

const Header = ({ need, all, toggleTheme, theme }) => {
  return (
    <header className="header">
      <ThemeSwitcher toggleTheme={toggleTheme} theme={theme} />
      <h1>Things to do</h1>
      <span>
        {need} from {all} done
      </span>
    </header>
  );
};
export default Header;
