import React, { useState } from "react";
import "./style.css";
import MyTable from "./MyTable";

function createMatrix(rows, columns) {
  const matrix = Array.from(Array(rows), () => []);

  let count = 1,
    direction = 1,
    i = 0,
    j = 0;
  while (j < columns) {
    while (i < rows && i >= 0) {
      matrix[i][j] = count++;
      i += direction;
    }
    direction *= -1;
    i += direction;
    j += 1;
  }

  return matrix;
}

function ColumnTable() {
  const [numberOfRows, setNumberOfRows] = useState(2);
  const [numberOfColumns, setNumberOfColumns] = useState(2);
  const values = createMatrix(numberOfColumns, numberOfColumns);
  console.log(Array.from(values), values);
  return (
    <div className="column-table-container">
      <div className="input-container">
        <label>Rows:: {numberOfRows} </label>
        <input
          type="range"
          name="rows"
          id="rows"
          value={numberOfRows}
          min="2"
          max="8"
          onChange={(e) => setNumberOfRows(+e.target.value)}
        />
        <label>Columns:: {numberOfColumns}</label>
        <input
          type="range"
          name="columns"
          id="columns"
          value={numberOfColumns}
          step="1"
          min="2"
          max="8"
          onChange={(e) => setNumberOfColumns(+e.target.value)}
        />
      </div>
      <MyTable columns={numberOfColumns} values={values} />
    </div>
  );
}

export default ColumnTable;
