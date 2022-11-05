import ThemeSwitcher from "../theme-switcher/theme-switcher";

const Header = ({ need, all, onToggleThemeClick, theme }) => {
  return (
    <header className="Header">
      <ThemeSwitcher onToggleThemeClick={onToggleThemeClick} theme={theme} />
      <h1>Things to do</h1>
      <span>
        {need} from {all} done
      </span>
    </header>
  );
};
export default Header;
