import React, { useRef, useState } from "react";
import Folder from "./Folder";
import File from "./File";
import "./style.css";
const Tree = ({
  node,
  parent,
  onNodeAddition,
  onNodeDeletion,
  onNodeUpdate,
  validateNode,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const isFolderRef = useRef(false);

  const toggleExpand = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const onNew = (isFolder) => {
    isFolderRef.current = isFolder;
    setIsNew(!isNew);
    setExpanded(true);
  };

  const validateNodeOnNew = (name) => validateNode(node, null, name);

  const onComplete = (name) => {
    if (name && validateNodeOnNew(name)) {
      onNodeAddition(node, {
        name,
        id: new Date().getTime().toString(),
        isFolder: isFolderRef.current,
      });
    }
    setIsNew(false);
  };
  return (
    <>
      <Folder
        expanded={expanded}
        toggleExpand={toggleExpand}
        parent={parent}
        node={node}
        onNodeDeletion={onNodeDeletion}
        onNodeUpdate={onNodeUpdate}
        onNew={onNew}
        validateNode={validateNode}
      />

      {expanded && (
        <div className="indent">
          {node.nodes?.map((childNode) =>
            childNode.isFolder ? (
              <Tree
                key={childNode.id}
                node={childNode}
                parent={node}
                onNodeAddition={onNodeAddition}
                onNodeDeletion={onNodeDeletion}
                onNodeUpdate={onNodeUpdate}
                validateNode={validateNode}
              />
            ) : (
              <File
                key={childNode.id}
                node={childNode}
                parent={node}
                onNodeDeletion={onNodeDeletion}
                onNodeUpdate={onNodeUpdate}
                validateNode={validateNode}
              />
            )
          )}

          {/* {isNew && (
            <li className="list editList">
              {isFolderRef.current ? "📁" : "📄"}&nbsp;
              <EditableInput
                onComplete={onComplete}
                validateNode={validateNodeOnNew}
              />
            </li>
          )} */}
        </div>
      )}
    </>
  );
};

export default Tree;
