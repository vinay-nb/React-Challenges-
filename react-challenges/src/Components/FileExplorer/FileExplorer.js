import React, { useState } from "react";
import "./style.css";
import Tree from "./Tree";
import { fileExplorerData } from "./data";

const FileExplorer = () => {
  const [data, setData] = useState(fileExplorerData);

  const onNodeAddition = (parent, node) => {
    const updatedData = { ...data };
    const nodes = [...(parent.nodes ?? [])];

    nodes.push({
      ...node,
      nodes: [],
    });

    if (parent.id === "root") {
      updatedData.nodes = nodes;
    } else {
      parent.nodes = nodes;
    }

    setData(updatedData);
  };

  const onNodeDeletion = (parent, node) => {
    const updatedData = { ...data };
    const nodes = parent.nodes?.filter((i) => i.id !== node.id);
    if (parent.id !== "root") {
      updatedData.nodes = nodes;
    } else {
      parent.nodes = nodes;
    }
    setData(updatedData);
  };

  const onNodeUpdate = (parent, node, name) => {
    const updatedData = { ...data };
    const nodes = parent.nodes?.map((n) => n) ?? [];
    const idx = nodes.findIndex((n) => n.id === node.id);
    nodes[idx] = { ...nodes[idx], name };
    if (parent.id === "root") {
      updatedData.nodes = nodes;
    } else {
      parent.nodes = nodes;
    }
    setData(updatedData);
  };

  const validateNode = (parent, node, name) => {
    if (parent === null) return true;
    if (typeof parent.node === "undefined") return true;
    if (name === "") return false;

    const idx = parent.nodes?.findIndex(
      (n) => n.id !== node?.id && n.name === name
    );
    return idx === -1;
  };

  return (
    <div className="fileApp">
      <Tree
        node={data}
        parent={null}
        onNodeAddition={onNodeAddition}
        onNodeDeletion={onNodeDeletion}
        onNodeUpdate={onNodeUpdate}
        validateNode={validateNode}
      />
    </div>
  );
};

export default FileExplorer;
