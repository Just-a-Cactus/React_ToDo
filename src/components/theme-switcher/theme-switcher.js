import "./theme-switcher.css";

const ThemeSwitcher = ({ onToggleThemeClick, theme }) => {
  return (
    <div className={"ThemeSwitcher"}>
      <input
        type="checkbox"
        id="day-night"
        checked={theme === "light"}
        readOnly
      />
      <label htmlFor="day-night" onClick={onToggleThemeClick}>
        <div className="celestial sun"></div>
        <div className="celestial moon">
          <div className="craters">
            <div className="crater"></div>
            <div className="crater"></div>
            <div className="crater"></div>
            <div className="crater"></div>
            <div className="crater"></div>
          </div>
        </div>
        <div className="decorations">
          <div className="decoration"></div>
          <div className="decoration"></div>
          <div className="decoration"></div>
          <div className="decoration"></div>
        </div>
        <div className="mountains">
          <div></div>
          <div></div>
        </div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
