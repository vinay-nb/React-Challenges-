import React, { useEffect, useRef, useState } from "react";
import "./style.css";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {};
  const handleClick = (index) => {};
  const handleKeyDown = (index, e) => {};

  return (
    <div className="otpInputContainer">
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            ref={(input) => {
              inputRefs.current[index] = input;
            }}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInput"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
