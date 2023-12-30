import React, { useState } from "react";
import "./style.css";

const Input = ({ onComplete, validateNode, defaultValue = "" }) => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const newVal = e.target.value;
    setValue(newVal);

    if (newVal === "") setError("File or folder name cannot be empty");
    else if (!validateNode(newVal))
      setError("A file or folder already exists with that name");
    else setError(null);
  };

  const onEntry = () => {
    onComplete(value);
  };

  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      onEntry();
    }
  };
  return (
    <div className="editableInputContainer">
      <input
        type="text"
        autoFocus={true}
        onBlur={onEntry}
        onKeyUp={onKeyUp}
        value={value}
        onChange={onChange}
      />
      {error && (
        <div className="editableInputError">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
