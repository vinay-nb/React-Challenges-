import React, { useState } from "react";
import "./style.css";

export default function TemparatureConverter() {
  const [temparature, setTemparature] = useState();
  const [convertedTemparature, setConvertedTemparature] = useState();
  const [fromTemp, setFromTemp] = useState("Fahrenhit");
  const [toTemp, setToTemp] = useState("Celsius");

  const converTemparature = () => {
    const inputTemp = parseFloat(temparature);

    if (isNaN(inputTemp)) {
      setConvertedTemparature("not a valid value");
      return;
    }

    if (fromTemp === toTemp) {
      setConvertedTemparature(inputTemp);
      return;
    }

    if (fromTemp === "Celsius" && toTemp === "Fahrenhit") {
      let outputTemp = (inputTemp * 9) / 5 + 32;
      if (outputTemp % 1 !== 0) {
        outputTemp = outputTemp.toFixed(2);
      }
      setConvertedTemparature(outputTemp);
    } else if (fromTemp === "Fahrenhit" && toTemp === "Celsius") {
      let outputTemp = ((inputTemp - 32) * 5) / 9;
      if (outputTemp % 1 !== 0) {
        outputTemp = outputTemp.toFixed(2);
      }
      setConvertedTemparature(outputTemp);
    }
  };

  return (
    <div className="tmp-container">
      <div className="frm-container">
        <label>Enter Temparature</label>
        <input
          type="number"
          placeholder="Enter a value"
          onChange={(e) => setTemparature(e.target.value)}
        />
        <div className="select-container">
          <label>From</label>
          <select onChange={(e) => setFromTemp(e.target.value)}>
            <option>Fahrenhit</option>
            <option>Celsius</option>
          </select>
          <label>To</label>
          <select onChange={(e) => setToTemp(e.target.value)}>
            <option>Celsius</option>
            <option>Fahrenhit</option>
          </select>
        </div>
        <div className="btn-container">
          <button onClick={converTemparature} className="btn-convert">
            Convert
          </button>
          <span>Converted Temparature: {convertedTemparature}</span>
        </div>
      </div>
    </div>
  );
}
