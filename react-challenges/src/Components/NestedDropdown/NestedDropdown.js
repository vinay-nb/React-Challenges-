import React from "react";
import "./style.css";
import DropdownItems from "./DropdownItems";

export const NestedDropdown = ({ subItems, dropdown, depthLevel }) => {
  const dropdownClass = depthLevel + 1 > 1 ? "dropdownSubItems" : "";

  return (
    <ul className={`dropdown ${dropdownClass}  ${dropdown ? "show" : ""}`}>
      {subItems.map((subItems, idx) => (
        <DropdownItems items={subItems} key={idx} depthLevel={depthLevel + 1} />
      ))}
    </ul>
  );
};
