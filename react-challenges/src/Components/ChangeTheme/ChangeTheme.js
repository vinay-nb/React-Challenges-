import React from "react";
import "./style.css";
import useTheme from "./hooks/useTheme";

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${theme === "dark-theme" ? "darkTheme" : "lightTheme"} main`}
    >
      <h3>Click the button to toggle theme</h3>
      <button className="toggle-btn" onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default ChangeTheme;
