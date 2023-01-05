import React, { useState } from "react";
import "./ToggleSwitch.scss";
import LightMode from "../assets/icon-light-mode.svg";
import DarkMode from "../assets/icon-dark-mode.svg";

function ThemeControl() {
  const [theme, setTheme] = useState(false);

  const onChange = () => {
    setTheme(!theme);
  };

  return (
    <div className={`${theme ? "light-mode" : ""}`}>
      <button
        type="button"
        role="switch"
        className="btn btn-theme-control"
        aria-checked={theme}
        aria-label="toggle dark mode"
        onClick={onChange}
      >
        <span className="check">
          <span className="theme-icons">
            <img
              className={`theme-img light-theme-img ${theme ? "hide-theme-img" : ""}`}
              src={DarkMode}
              aria-hidden
              alt=""
            />
            <img
              className={`theme-img dark-theme-img ${theme ? "" : "hide-theme-img"}`}
              src={LightMode}
              aria-hidden
              alt=""
            />
          </span>
        </span>
      </button>
    </div>
  );
}

export default ThemeControl;
