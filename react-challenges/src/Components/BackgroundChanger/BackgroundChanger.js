import React, { useEffect } from "react";
import "./style.css";

function BackgroundChanger() {
  const getRandomColor = (color) => {
    if (!color) {
      const letter = "0123456789ABCDEF";
      color = "#";
      for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
      }
    }
    return color;
  };

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  useEffect(() => changeBackgroundColor("unset"), []);

  return (
    <div className="contianer-bg">
      <button
        type="button"
        className="btn-change"
        onClick={() => changeBackgroundColor(getRandomColor())}
      >
        Change Background
      </button>
    </div>
  );
}

export default BackgroundChanger;
