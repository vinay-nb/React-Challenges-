import React, { useEffect, useState } from "react";
import "./style.css";
import config from "./config";

function TrafficLights() {
  const [currentActiveLight, setCurrentActiveLight] = useState("red");
  const [currentDuration, setCurrentDuration] = useState(
    config[currentActiveLight].duration
  );

  useEffect(() => {
    let timerid;

    if (currentDuration <= 0) {
      clearInterval(timerid);
      setCurrentActiveLight(config[currentActiveLight].next);
      setCurrentDuration(Number(config[config[currentActiveLight].next].duration));
    } else {
      timerid = setInterval(() => {
        setCurrentDuration((prevDuration) => prevDuration - 1000);
      }, 1000);
    }
    return () => clearInterval(timerid);
  }, [currentDuration, currentActiveLight]);

  return (
    <div className="trafic-cont">
      <div className="trafficWrapper">
        {Object.keys(config).map((light) => (
          <div
            key={config[light].id}
            className="light"
            style={{ background: currentActiveLight === light ? light : " " }}
          ></div>
        ))}
      </div>
      <div className="countDownContainer">
        <span className="countDownTime active">
          {Math.floor(currentDuration / 1000)} Seconds
        </span>
      </div>
    </div>
  );
}

export default TrafficLights;
