import React, { useState } from "react";
import Input from "./Input";
import "./style.css";

const File = ({ node, parent, onNodeDeletion, onNodeUpdate, validateNode }) => {
  const [isEditable, setIsEditable] = useState(false);

  const validateNodeOnUpdate = (name) => validateNode(parent, node, name);

  const onComplete = (value) => {
    if (validateNodeOnUpdate(value)) onNodeUpdate(parent, node, value);
    setIsEditable(false);
  };

  if (isEditable) {
    return (
      <li className="list editList">
        📄&nbsp;
        <Input
          defaultValue={node.name}
          onComplete={onComplete}
          validateNode={validateNodeOnUpdate}
        />
      </li>
    );
  }
  return (
    <li className="list">
      <button className="button">📄 {node.name}</button>

      <div className="controls">
        <button onClick={() => setIsEditable(true)}>✏️</button>
        <button onClick={() => onNodeDeletion(parent, node)}>🗑️</button>
      </div>
    </li>
  );
};

export default File;
