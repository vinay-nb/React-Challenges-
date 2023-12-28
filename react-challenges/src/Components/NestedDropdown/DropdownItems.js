import React, { useEffect, useRef, useState } from "react";
import { NestedDropdown } from "./NestedDropdown";
import "./style.css";

const DropdownItems = ({ items, depthLevel }) => {
  const [dropdown, setDropDown] = useState(false);

  let ref = useRef();

  //   handle outside click
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const handleMouseEnter = () => {
    window.innerWidth > 960 && setDropDown(true);
  };

  const handleMouseLeave = () => {
    window.innerWidth > 960 && setDropDown(false);
  };

  return (
    <li
      className="dropdownItems"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {items.subItems ? (
        <>
          <button
            type="button"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropDown((prev) => !prev)}
          >
            {items.title}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className="arrow"></span>
            )}
          </button>
          <NestedDropdown
            depthLevel={depthLevel + 1}
            subItems={items.subItems}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href="/#">{items.title}</a>
      )}
    </li>
  );
};

export default DropdownItems;
