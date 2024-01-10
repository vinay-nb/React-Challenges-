import React, { useState } from "react";
import "./style.css";

const FormValidation = () => {
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const validateForm = () => {
    if (firstName.length === 0) {
      alert("Name cannot be empty");
      return;
    }
    if (phoneNumber.length !== 10 || phoneNumber.length === 0) {
      alert("invalid phone number");
      return;
    }
    if (email.length === 0) {
      alert("email cannot be empty");
      return;
    }
  };

  return (
    <div className="form-main">
      <form>
        <input
          placeholder="name"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          placeholder="phone number"
          type="number"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          onClick={() => {
            validateForm();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormValidation;
