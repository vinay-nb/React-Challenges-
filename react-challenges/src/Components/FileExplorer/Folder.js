import React, { useState } from "react";
import "./style.css";
import Input from "./Input";

const Folder = ({
  expanded,
  toggleExpand,
  parent,
  node,
  onNodeDeletion,
  onNodeUpdate,
  onNew,
  validateNode,
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const validateNodeOnUpdate = (name) => validateNode(parent, node, name);

  const onComplete = (value) => {
    if (parent) {
      if (validateNodeOnUpdate(value)) onNodeUpdate(parent, node, value);
      setIsEditable(false);
    }
  };

  if (isEditable) {
    return (
      <li className="list editList">
        {expanded ? "📂" : "📁"}&nbsp;
        <Input
          defaultValue={node?.name}
          onComplete={onComplete}
          validateNode={validateNodeOnUpdate}
        />
      </li>
    );
  }

  return (
    <li className="list" data-root={parent === null}>
      <button onClick={toggleExpand}>
        {expanded ? "📂" : "📁"} {node?.name}
      </button>

      <div className="controls">
        <button className="edit" onClick={() => setIsEditable(true)}>
          ✏️
        </button>
        <button className="new-file" onClick={() => onNew(false)}>
          📄
        </button>
        <button className="new-folder" onClick={() => onNew(true)}>
          🗂
        </button>
        <button
          className="delete"
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          onClick={() => onNodeDeletion(parent, node)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
};

export default Folder;
