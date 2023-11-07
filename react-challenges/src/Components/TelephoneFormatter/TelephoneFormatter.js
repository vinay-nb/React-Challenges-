import React, { useState } from "react";
import "./style.css";

function TelephoneFormatter() {
  const [inputNumber, setInputNumber] = useState("");

  const getStringWithNumbersOnly = (str) =>
    [...str].filter((v) => Number.isInteger(+v) && v !== "").join("");

  const handleFormat = (e) => {
    const numStr = getStringWithNumbersOnly(e.target.value);
    setInputNumber(
      numStr.length > 3
        ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3)
        : numStr
    );
  };

  return (
    <div className="telephone-cnt">
      <input
        type="tel"
        maxLength={16}
        autoComplete="off"
        className="input-holder"
        value={inputNumber}
        onChange={handleFormat}
      />
      <span>+(123) - 4567890</span>
    </div>
  );
}

export default TelephoneFormatter;
