import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const totalTime = 10 * 1000;
const timeInterval = 1000;
const totalCycles = totalTime / timeInterval;

function ProgressBar() {
  const [currentCycle, setCurrentCycle] = useState(0);
  const [speed, setSpeed] = useState({
    max: 10,
    min: 1,
    value: 1,
    label: "speed",
  });

  const intervalId = useRef(null);

  const handleStart = () => {
    clearInterval(intervalId.current);
    if (currentCycle >= totalCycles) {
      setCurrentCycle(0);
    }

    intervalId.current = setInterval(() => {
      setCurrentCycle((cycle) => {
        if (cycle >= totalCycles) {
          clearInterval(intervalId.current);
          return cycle;
        }
        return cycle + 1;
      });
    }, timeInterval / speed.value);
  };

  useEffect(() => {
    handleStart();
  }, [speed.value]);

  const handlePause = () => {
    clearInterval(intervalId.current);
  };

  const handleReset = () => {
    handlePause();
    setCurrentCycle(0);
  };

  const handleSliderChange = (e) => {
    setSpeed((prevSpeed) => ({ ...prevSpeed, value: e.target.value }));
  };

  const getPercentage = () => (currentCycle / totalCycles) * 100;

  return (
    <div className="progress-container">
      <div className="bg-progress">
        <div
          className="progress-runner"
          style={{ transform: `translateX(${-100 + getPercentage()}%)` }}
        ></div>
      </div>
      <div className="controls-container">
        <button className="btn-control" onClick={handleStart}>
          Start
        </button>
        <button className="btn-control" onClick={handlePause}>
          Pause
        </button>
        <button className="btn-control" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="slider-change">
        <input
          type="range"
          min={speed.min}
          max={speed.max}
          defaultValue={speed.min}
          className="slider-holder"
          id="myRange"
          onChange={handleSliderChange}
        />
      </div>
      <div>
        <label htmlFor="myRange">
          <small className="speed">Speed:{speed.value}</small>
        </label>
      </div>
    </div>
  );
}

export default ProgressBar;
