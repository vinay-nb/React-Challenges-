import React, { useState } from "react";
import "./style.css";

function PasswordStrength() {
  const [character, setCharacter] = useState(0);
  const [lowercase, setLowerCase] = useState(false);
  const [uppercase, setUpperCase] = useState(false);
  const [hasNumber, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [passwordStrengthStat, setPasswordStrengthStat] = useState("");

  const setPasswordStat = () => {
    if (uppercase) {
      setPasswordStrengthStat("weak");
    }
    if (uppercase && lowercase) {
      setPasswordStrengthStat("medium");
    }
    if (uppercase && lowercase && hasNumber) {
      setPasswordStrengthStat("strong");
    }
    if (uppercase && lowercase && symbol && hasNumber) {
      setPasswordStrengthStat("super strong");
    }
    console.log(passwordStrengthStat);
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    const upperCase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const isNumber = /^[0-9]*$/.test(password);
    if (upperCase) {
      setUpperCase(true);
    } else if (lowercase) {
      setLowerCase(true);
    } else if (isNumber) {
      setNumber(true);
    } else {
      setSymbol(true);
    }
    setCharacter(password.length);
    setPasswordStat();
  };
  return (
    <div className="password-container">
      <div>
        <input type="text" onChange={handlePassword} />
      </div>

      <div className="character-container">
        <label className={lowercase ? "active" : ""}>Lowercase</label>
        <label className={uppercase ? "active" : ""}>Uppercase</label>
        <label className={hasNumber ? "active" : ""}>Number</label>
        <label className={symbol ? "active" : ""}>Sysmbols</label>
      </div>

      <div className="progress-bar"></div>

      <div className="display-container">
        <span>Password has {character} characters</span>
        <span>Your password is {passwordStrengthStat}</span>
      </div>
    </div>
  );
}

export default PasswordStrength;
