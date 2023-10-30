import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./style.css";

function QRGenerator() {
  const [text, setText] = useState("");
  const [qrCodeValue, setQRCodeValue] = useState("");

  const generateQR = () => {
    setQRCodeValue(text);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="qr-cont">
      <input
        type="text"
        placeholder="enter a text"
        onChange={handleChange}
        className="input-cont"
      />
      <button className="btn-gen" onClick={generateQR}>
        Generate QR Code
      </button>
      {qrCodeValue && (
        <QRCode value={qrCodeValue} className="qrCode" size={256} />
      )}
    </div>
  );
}

export default QRGenerator;
