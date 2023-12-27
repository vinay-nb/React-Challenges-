import React from "react";
import { dropdownData } from "./data";
import DropdownItems from "./DropdownItems";
import "./style.css";

const MainApp = () => {
  return (
    <div className="mainApp">
      <div className="nestedDropDown">
        <div className="dropDownMain">
          {dropdownData.map((menu, idx) => (
            <DropdownItems items={menu} key={idx} depthLevel={0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainApp;
