import PropTypes from "prop-types";
import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = ({ onToggleThemeClick, theme }) => (
  <div className={styles.themeSwitcher}>
    <input
      type="checkbox"
      id="day-night"
      checked={theme === "light"}
      readOnly
      className={styles.input}
    />
    <label
      htmlFor="day-night"
      onClick={onToggleThemeClick}
      className={styles.label}
    >
      <div className={`${styles.celestial} ${styles.sun}`}></div>
      <div className={`${styles.celestial} ${styles.moon}`}>
        <div>
          <div className={styles.crater}></div>
          <div className={styles.crater}></div>
          <div className={styles.crater}></div>
          <div className={styles.crater}></div>
          <div className={styles.crater}></div>
        </div>
      </div>
      <div className={styles.decorations}>
        <div className={styles.decoration}></div>
        <div className={styles.decoration}></div>
        <div className={styles.decoration}></div>
        <div className={styles.decoration}></div>
      </div>
      <div className={styles.mountains}>
        <div></div>
        <div></div>
      </div>
    </label>
  </div>
);

ThemeSwitcher.propTypes = {
  onToggleThemeClick: PropTypes.func,
  theme: PropTypes.string,
};

export default ThemeSwitcher;
