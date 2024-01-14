import React, { useState } from "react";
import "./style.css";
import OtpInput from "./OtpInput";

const OtpLogin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("invalid phone number");
      return;
    }

    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {};
  return (
    <div className="loginPhone">
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit}>
          <h3>Login with phone</h3>
          <input
            className="inputPhone"
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter phone number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter Otp sent to {phoneNumber}</p>
          <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default OtpLogin;
