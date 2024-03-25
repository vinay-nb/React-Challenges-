import React, { useState } from "react";
import "./ButtonGame.css";

const ButtonGame = () => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  return (
    <div>
      <div className="screen">
        <div className="target">
          <div
            className="ball"
            style={{ top: position.top, left: position.left }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ButtonGame;
