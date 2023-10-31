import React, { useRef, useState } from "react";

import "./Style.css";

const length = 9;
const numberList = Array.from(new Array(length), (_, i) => i);

const TableColorizer = () => {
  const [colorArray, setColorArray] = useState([]);
  const colRef = useRef();

  const onColorMe = (e) => {
    e.preventDefault();
    if (
      parseInt(colRef.current.value) > 9 ||
      parseInt(colRef.current.value) < 0
    ) {
      alert("enter Valid Number");
    }
    if (colorArray.indexOf(parseInt(colRef.current.value)) === -1) {
      setColorArray((prev) => [...prev, parseInt(colRef.current.value)]);
    }
  };

  return (
    <div className="color">
      <form className="form">
        <input type="number" className="numberInput" ref={colRef} />
        <div className="buttons">
          <input type="submit" value="Color Me" onClick={onColorMe} />
          <button className="clearBtn" onClick={() => setColorArray([])}>
            Clear Me
          </button>
        </div>
      </form>

      <div className="containers">
        {numberList.map((e, p) => {
          return (
            <div
              key={p}
              className={
                colorArray.indexOf(e + 1) !== -1
                  ? "containerColor"
                  : "container"
              }
            >
              {e + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableColorizer;
