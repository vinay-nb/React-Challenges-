import React from "react";
import SelectableGridDisplay from "./SelectableGridDisplay";

const SelectableGrid = () => {
  return (
    <div>
      Selectable Grid
      <SelectableGridDisplay rows={10} columns={10} />
    </div>
  );
};

export default SelectableGrid;
