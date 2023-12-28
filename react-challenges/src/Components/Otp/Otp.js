import React, { useRef, useState } from "react";
import "./style.css";

const Otp = () => {
  const [otpFields, setOtpFields] = useState(Array(6).fill(""));
  const otpinputref = useRef([]);

  const handleOtp = (e, index) => {
    console.log(e.target.value);
    const numericValue = e.target.value.replace(/\D/g, "");
    const singleDigitValue = numericValue.slice(0, 1);
    let copyOtpFields = [...otpFields];
    copyOtpFields[index] = singleDigitValue;
    if (index < otpFields.length - 1 && singleDigitValue) {
      otpinputref.current[index + 1].focus();
    }
    setOtpFields(copyOtpFields);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      let copyOtpFields = [...otpFields];
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);
      if (index > 0) {
        otpinputref.current[index - 1].focus();
      }
    } else if (e.key === "ArrowRight" && index < otpFields.length - 1) {
      otpinputref.current[index + 1].focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      otpinputref.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text");
    if (/^[0-9]*$/.test(pasteData)) {
      const copyOtpFields = [...otpFields];
      for (let i = 0; i < copyOtpFields.length; i++) {
        if (i < pasteData.length) {
          copyOtpFields[i] = pasteData[i];
        } else {
          break;
        }
      }
      setOtpFields(copyOtpFields);
    }
  };

  return (
    <div className="otpFields">
      <div className="otpinput">
        {otpFields.map((_, index) => (
          <input
            key={index}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            ref={(el) => (otpinputref.current[index] = el)}
            onChange={(e) => handleOtp(e, index)}
            value={otpFields[index]}
            type="text"
          />
        ))}
      </div>
    </div>
  );
};

export default Otp;
