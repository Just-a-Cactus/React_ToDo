import PropTypes from "prop-types";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../../../themes/theme";

const ThemeSwitcher = ({ checked, theme, setTheme }) => {
  const handleToggleThemeClick = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <ThemeSwitcherWrapper>
      <input type="checkbox" checked={checked} readOnly />
      <label htmlFor="day-night" onClick={handleToggleThemeClick}>
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
    </ThemeSwitcherWrapper>
  );
};

ThemeSwitcher.propTypes = {
  onToggleThemeClick: PropTypes.func,
  checked: PropTypes.bool,
};

export default ThemeSwitcher;

const ThemeSwitcherWrapper = styled.div`
  --size: 70px;
  --height: calc(var(--size) / 2);
  --padding: calc(var(--size) * 0.04);
  --border-width: calc(var(--size) * 0.02);
  --transition-duration: 250ms;
  --switch-size: calc(
    var(--height) - 2 * var(--padding) - 2 * var(--border-width)
  );
  --pos-left: var(--padding);
  --pos-right: calc(
    var(--size) - var(--switch-size) - var(--padding) - 2 * var(--border-width)
  );
  --shift: calc(var(--height) * 1.25);

  display: flex;
  justify-content: flex-end;

  label {
    width: var(--size);
    height: var(--height);
    border-radius: var(--height);
    border: var(--border-width) solid white;
    position: relative;
    transition: all var(--transition-duration) ease-in-out;
    cursor: pointer;
    overflow: hidden;
  }

  .celestial {
    transition: all var(--transition-duration) ease-in-out;
    width: var(--switch-size);
    height: var(--switch-size);
    border: var(--border-width) solid green;
    display: inline-block;
    position: absolute;
    border-radius: var(--height);
  }

  .sun {
    background-color: #fdc82e;
    border-color: #e3ad0d;
  }

  .moon {
    background-color: #d2cec4;
    border-color: #a9a18f;
    transition-delay: var(--transition-duration);
    top: var(--padding);
    left: var(--pos-left);
    overflow: hidden;
    transform: scale(1);
  }

  .crater {
    background-color: #d2cec4;
    border-color: #a9a18f;
    border-width: calc(max(var(--border-width) * 0.65, 1px));
    border-style: solid;
    position: absolute;
    border-radius: 50%;

    &:nth-child(1) {
      width: calc(var(--switch-size) * 0.15);
      height: calc(var(--switch-size) * 0.15);
      top: calc(var(--switch-size) * 0.7);
      left: calc(var(--switch-size) * 0.4);
    }

    &:nth-child(2) {
      width: calc(var(--switch-size) * 0.3);
      height: calc(var(--switch-size) * 0.3);
      top: calc(var(--switch-size) * 0.1);
      left: calc(var(--switch-size) * -0.05);
    }

    &:nth-child(3) {
      width: calc(var(--switch-size) * 0.1);
      height: calc(var(--switch-size) * 0.1);
      top: calc(var(--switch-size) * 0.2);
      left: calc(var(--switch-size) * 0.6);
    }

    &:nth-child(4) {
      width: calc(var(--switch-size) * 0.1);
      height: calc(var(--switch-size) * 0.1);
      top: calc(var(--switch-size) * 0.3);
      left: calc(var(--switch-size) * 0.25);
    }

    &:nth-child(5) {
      width: calc(var(--switch-size) * 0.2);
      height: calc(var(--switch-size) * 0.2);
      top: calc(var(--switch-size) * 0.5);
      left: calc(var(--switch-size) * 0.8);
    }
  }

  .decoration {
    position: absolute;
    transition: all var(--transition-duration) ease-in-out;
  }

  .mountains {
    position: absolute;
    display: inline-block;
    top: calc(var(--switch-size) * 0.85);
    left: calc(var(--switch-size) * 0.7);

    & :first-child {
      width: calc(var(--switch-size) * 0.9);
      height: calc(var(--switch-size) * 0.9);
      top: calc(var(--switch-size) * 0.1);
    }

    & :last-child {
      width: calc(var(--switch-size) * 0.45);
      height: calc(var(--switch-size) * 0.45);
      top: calc(var(--switch-size) * 0.2);
      left: calc(var(--switch-size) * 0.6);
    }

    > * {
      position: absolute;
      display: inline-block;
      border-width: var(--border-width);
      border-style: solid;
      transform: rotate(45deg);
      transition: all var(--transition-duration) ease-in-out;
      border-top-left-radius: calc(var(--switch-size) * 0.1);
      background-color: white;
      border-color: black;
    }
  }

  input {
    display: none;

    + label {
      border-color: #2a4569;
      background-color: #223349;

      .sun {
        transition-delay: 0ms;
        top: var(--shift);
        left: var(--pos-right);
        transform: scale(0);
      }

      .decoration {
        background-color: white;
        border-radius: 50%;
        width: calc(max(var(--border-width) * 0.75, 2px));
        height: calc(max(var(--border-width) * 0.75, 2px));
        animation: 2s sparkle ease-in-out infinite;
        animation-direction: alternate;

        &:nth-child(1) {
          top: calc(var(--switch-size) * 0.7);
          left: calc(var(--switch-size) * 1.7);
        }

        &:nth-child(2) {
          animation-delay: 300ms;
          animation-duration: 3s;
          top: calc(var(--switch-size) * 0.4);
          left: calc(var(--switch-size) * 1.4);
        }

        &:nth-child(3) {
          animation-delay: 800ms;
          animation-duration: 3.5s;
          top: calc(var(--switch-size) * 0.9);
          left: calc(var(--switch-size) * 2.2);
        }

        &:nth-child(4) {
          animation-delay: 1400ms;
          animation-duration: 2.5s;
          top: calc(var(--switch-size) * 0.3);
          left: calc(var(--switch-size) * 2);
        }
      }

      .mountains > * {
        background-color: #878787;
        border-color: #5c5c5c;
      }
    }

    &:checked {
      + label {
        border-color: #3190bf;
        background-color: #6cbde5;

        .celestial.sun {
          transition-delay: var(--transition-duration);
          top: var(--padding);
          left: var(--pos-right);
          transform: scale(1);
        }

        .moon {
          transition-delay: 0ms;
          left: var(--pos-left);
          top: var(--shift);
          transform: scale(0);
        }

        .decoration {
          background-color: white;
          border-radius: 50%;
          animation: 4s vibe ease-in-out infinite;
          animation-direction: alternate;

          :nth-child(1) {
            border-radius: calc(var(--switch-size) * 0.3);
            height: calc(var(--switch-size) * 0.3);
            width: calc(var(--switch-size) * 0.84);
            top: calc(var(--switch-size) * 0.6);
            left: calc(var(--switch-size) * 0.45);
          }

          :nth-child(2) {
            animation-delay: 300ms;
            animation-duration: 2.5s;
            height: calc(var(--switch-size) * 0.35);
            width: calc(var(--switch-size) * 0.35);
            top: calc(var(--switch-size) * 0.5);
            left: calc(var(--switch-size) * 0.35);
          }

          :nth-child(3) {
            animation-delay: 800ms;
            animation-duration: 3.5s;
            height: calc(var(--switch-size) * 0.3);
            width: calc(var(--switch-size) * 0.3);
            top: calc(var(--switch-size) * 0.5);
            left: calc(var(--switch-size) * 0.85);
          }

          :nth-child(4) {
            animation-delay: 1400ms;
            animation-duration: 3s;
            height: calc(var(--switch-size) * 0.4);
            width: calc(var(--switch-size) * 0.4);
            top: calc(var(--switch-size) * 0.4);
            left: calc(var(--switch-size) * 0.55);
          }
        }
        .mountains > * {
          background-color: #d4d4d4;
          border-color: #a8a8a8;
        }
      }
    }
  }

  @keyframes vibe {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.2);
    }
  }
  @keyframes sparkle {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.25;
    }
  }
`;
