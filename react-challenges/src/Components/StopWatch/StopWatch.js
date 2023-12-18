import React from "react";
import { useEffect, useRef, useState } from "react";
import "./style.css";

function StopWatch() {
  let animationFrameRef = useRef(0);
  const lastTimer = useRef(Date.now());

  // local state (changing this value rerenders the UI)
  const [timerString, updateTime] = useState(["00", "00", "00"]);
  const [isTimerRunning, setisTimerRunning] = useState(false);

  const onStart = () => {
    setisTimerRunning(true);
    // useRef store it value in ref.value key
    animationFrameRef.current = requestAnimationFrame(timerFn);
  };

  const onStop = () => {
    setisTimerRunning(false);
    cancelAnimationFrame(animationFrameRef.current);
  };

  const onReset = () => {
    setisTimerRunning(false);
    updateTime(["00", "00", "00"]);
    cancelAnimationFrame(animationFrameRef.current);
    lastTimer.current = Date.now();
  };

  // Function to update the timer values
  const timerFn = () => {
    // Calculate the elapsed time in milliseconds, seconds, and minutes
    const milliSecondElapsed = Date.now() - lastTimer.current;
    const secondsElapsed = Math.floor(milliSecondElapsed / 1000);
    const minutesElapsed = Math.floor(secondsElapsed / 60);

    // Convert the elapsed time to strings
    const milliSeconds = (milliSecondElapsed % 1000)
      .toString()
      .padStart(3, "0");
    const seconds = (secondsElapsed % 60).toString().padStart(2, "0");
    const minutes = minutesElapsed.toString().padStart(2, "0");

    // updating time state
    updateTime([minutes, seconds, milliSeconds]);

    // running the same function (this equal to recursion, but it is improved since browser has control over this fn)
    animationFrameRef.current = requestAnimationFrame(timerFn);
  };

  // cleanup (componentWillUnmount)
  useEffect(() => {
    return cancelAnimationFrame(animationFrameRef.current);
  }, []);

  return (
    <div className="test">
      <div className="watchContainer">
        <div className="watch">
          <div className="watchHeading">Stopwatch</div>
          <div className="watch-timer">
            {`${timerString[0]}:${timerString[1]}:${timerString[2]}`}
          </div>
          <div className="watch-btn__container">
            <button
              disabled={isTimerRunning}
              onClick={onStart}
              className="watch-btn"
            >
              Start
            </button>

            <button
              onClick={onStop}
              disabled={!isTimerRunning}
              className="watch-btn"
            >
              Stop
            </button>

            <button
              onClick={onReset}
              disabled={!isTimerRunning}
              className="watch-btn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
