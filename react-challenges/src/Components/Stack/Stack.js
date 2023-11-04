import React, { useState } from "react";
import "./style.css";

function Stack() {
  const [stack, setStack] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [output, setOutPut] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const pushHandler = () => {
    if (inputVal === "") {
      setOutPut(`Enter a value`);
      return;
    }
    if (stack.length === 10) {
      setOutPut(`Stack is full`);
      return;
    }
    setStack([...stack, inputVal]);
    setOutPut(`${inputVal} is pushed into the stack`);
    setInputVal("");
  };

  const popHandler = () => {
    if (!stack.length) {
      setOutPut(`Stack is empty`);
      return;
    }
    setStack(stack.slice(0, -1));
    setOutPut(`${stack[stack.length - 1]} is poppped from the stack`);
  };

  const peekHandler = () => {
    if (!stack.length) setOutPut("Stack is empty");
    else {
      const lastElement = stack[stack.length - 1];
      setOutPut(`Last element is ${lastElement}`);
    }
  };

  const isEmptyHandler = () => {
    if (stack.length === 0) {
      setOutPut(`Stack is empty`);
    } else {
      setOutPut(`Stack is not empty`);
    }
  };

  const isFullHandler = () => {
    if (stack.length === 10) {
      setOutPut(`Stack is full`);
    } else {
      setOutPut(`Stack is not full`);
    }
  };

  return (
    <div className="container-st">
      <div className="stack">
        <input
          type="text"
          placeholder="Enter a value"
          value={inputVal}
          onChange={handleChange}
          required
        />

        <div className="btn-root">
          <button onClick={pushHandler}>Push</button>
          <button onClick={popHandler}>Pop</button>
          <button onClick={peekHandler}>Peek</button>
          <button onClick={isEmptyHandler}>IsEmpty</button>
          <button onClick={isFullHandler}>IsFull</button>
        </div>
        <hr />
        <h3>{output}</h3>
        {stack
          .slice()
          .reverse()
          .map((ele, index) => {
            return (
              <div key={index} className="stackElement">
                <p>{ele}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Stack;
