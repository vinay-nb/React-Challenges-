import React, { useEffect, useRef, useState } from "react";
import "./ButtonGame.css";
import { actions, buttonInitialState } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownLong,
  faLeftLong,
  faRightLong,
  faUpLong,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const ButtonGame = () => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });
  const [won, setWon] = useState(false);
  const [isPressed, setIsPressed] = useState(buttonInitialState);
  const timer = useRef(null);
  const targetRef = useRef();
  const parentRef = useRef();

  const getLongPressAction = (action) => {
    switch (action) {
      case actions.DOWN:
        setIsPressed((preButton) => {
          return {
            ...preButton,
            down: true,
          };
        });
        timer.current = setInterval(() => {
          setPosition((preValue) => {
            return {
              ...preValue,
              top: preValue.top + 20,
            };
          });
        }, 1000);
        break;
      case actions.UP:
        setIsPressed((preButton) => {
          return {
            ...preButton,
            up: true,
          };
        });
        timer.current = setInterval(() => {
          setPosition((preValue) => {
            return {
              ...preValue,
              top: position.top > 0 ? preValue.top - 20 : preValue.top,
            };
          });
        }, 1000);
        break;
      case actions.LEFT:
        setIsPressed((preButton) => {
          return {
            ...preButton,
            left: true,
          };
        });
        timer.current = setInterval(() => {
          setPosition((preValue) => {
            return {
              ...preValue,
              left: preValue.left > 0 ? preValue.left - 20 : preValue.left,
            };
          });
        }, 1000);
        break;
      case actions.RIGHT:
        setIsPressed((preButton) => {
          return {
            ...preButton,
            right: true,
          };
        });
        timer.current = setInterval(() => {
          setPosition((preValue) => {
            return {
              ...preValue,
              left: preValue.left + 20,
            };
          });
        }, 1000);
        break;
      default:
        setPosition((preValue) => {
          return {
            ...preValue,
          };
        });
    }
  };

  const getClickAction = (action) => {
    switch (action) {
      case actions.DOWN:
        setPosition((preValue) => {
          return {
            ...preValue,
            top: preValue.top + 20,
          };
        });
        break;
      case actions.UP:
        setPosition((preValue) => {
          return {
            ...preValue,
            top: position.top > 0 ? preValue.top - 20 : preValue.top,
          };
        });
        break;
      case actions.LEFT:
        setPosition((preValue) => {
          return {
            ...preValue,
            left: position.left > 0 ? preValue.left - 20 : preValue.left,
          };
        });
        break;
      case actions.RIGHT:
        setPosition((preValue) => {
          return {
            ...preValue,
            right: position.left + 20,
          };
        });
        break;
      default:
        setPosition((preValue) => {
          return {
            ...preValue,
          };
        });
    }
  };

  useEffect(() => {
    if (targetRef.current && parentRef.current) {
      const targetDiv = targetRef?.current?.getBoundingClientRect();
      const parentDiv = parentRef?.current?.getBoundingClientRect();

      const relativePositionOfTarget = {
        top: targetDiv.top - parentDiv.top,
        left: targetDiv.left - parentDiv.left,
      };

      if (
        relativePositionOfTarget.top <= position.top &&
        relativePositionOfTarget.left <= position.left
      ) {
        clearInterval(timer.current);
        setIsPressed(buttonInitialState);
        setWon(true);
      }
    }
  }, [position]);

  const handleMouseDown = (action) => {
    if (timer.current) {
      clearInterval(timer.current);
    }

    getLongPressAction(action);
  };

  const handleMouseLeave = (action) => {
    setIsPressed(buttonInitialState);

    if (timer.current) {
      clearInterval(timer.current);
    }
    getClickAction(action);
  };

  const closeMessageHandle = (event) => {
    event.stopPropagation();
    setWon(false);
    setPosition({
      left: 0,
      top: 0,
    });
  };

  useEffect(() => {
    const pressedAction = {
      ArrowLeft: actions.LEFT,
      ArrowRight: actions.RIGHT,
      ArrowDown: actions.DOWN,
      ArrowUp: actions.UP,
    };

    const onKeyUpHandle = (event) => {
      if (timer.current) {
        clearInterval(timer.current);
      }
      setIsPressed(buttonInitialState);
      getClickAction(pressedAction[event.key]);
    };

    const onKeyDownHandle = (event) => {
      if (!event.repeat) {
        getLongPressAction(pressedAction[event.key]);
      }
    };

    document.addEventListener("keyup", onKeyUpHandle);
    document.addEventListener("keydown", onKeyDownHandle);

    return () => {
      document.removeEventListener("keyup", onKeyUpHandle);
      document.removeEventListener("keydown", onKeyDownHandle);
    };
  }, []);

  return (
    <div>
      {won && (
        <div className="message">
          <p>You Won Brooo!! ⛳️</p>
          <div onClick={(e) => closeMessageHandle(e)}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        </div>
      )}
      <div className="screen" ref={parentRef}>
        <div className="target" ref={targetRef}>
          <div
            className="ball"
            style={{ top: position.top, left: position.left }}
          ></div>
        </div>
      </div>
      <div className="action">
        <div className="upper-action">
          <button
            disabled={won}
            onMouseDown={() => handleMouseDown(actions.UP)}
            onMouseUp={() => handleMouseLeave(actions.UP)}
            className={`up ${isPressed.up ? "pressed" : ""}`}
          >
            <FontAwesomeIcon icon={faUpLong} />
          </button>
        </div>
        <div className="lower-action">
          <button
            disabled={won}
            onMouseDown={() => handleMouseDown(actions.LEFT)}
            onMouseLeave={() => handleMouseLeave(actions.LEFT)}
            className={`left ${isPressed.left ? "pressed" : ""}`}
          >
            <FontAwesomeIcon icon={faLeftLong} />
          </button>
          <button
            disabled={won}
            onMouseDown={() => handleMouseDown(actions.DOWN)}
            onMouseUp={() => handleMouseLeave(actions.DOWN)}
            className={`down ${isPressed.down ? "pressed" : ""}`}
          >
            <FontAwesomeIcon icon={faDownLong} />
          </button>
          <button
            disabled={won}
            onMouseDown={() => handleMouseDown(actions.RIGHT)}
            onMouseUp={() => handleMouseLeave(actions.RIGHT)}
            className={`right ${isPressed.right ? "pressed" : ""}`}
          >
            <FontAwesomeIcon icon={faRightLong} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonGame;
