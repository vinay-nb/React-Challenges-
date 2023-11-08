import React, { useState } from "react";
import "./style.css";

function StringTransformers() {
  const [text, setText] = useState("");
  const [formattedText, setFormattedText] = useState("");

  const handleLowerCase = () => setFormattedText(text.toLowerCase());

  const handleUpperCase = () => setFormattedText(text.toUpperCase());

  const handleCamelCase = () => {
    const words = text.split(" ");
    let result = "";
    result += words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      result +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    setFormattedText(result);
  };

  const handlePascalCase = () => {
    const words = text.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      result +=
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    setFormattedText(result);
  };

  const handleSnakeCase = () => {
    const words = text.split(" ");
    let result = "";
    result += words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      result += "_" + words[i].toLowerCase() + "_";
    }
    setFormattedText(result);
  };

  const handleKebabCase = () => {
    const words = text.split(" ");
    let result = "";
    result += words[0].toLowerCase();
    for (let i = 1; i < words.length; i++) {
      result += "-" + words[i].toLowerCase() + "-";
    }
    setFormattedText(result);
  };

  const handleTrim = () => setFormattedText(text.trim());

  return (
    <div className="str-cont">
      <textarea
        className="text-input"
        rows={5}
        cols={60}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="btn-wrapper">
        <button onClick={handleLowerCase}>Lower Case</button>
        <button onClick={handleUpperCase}>Upper Case</button>
        <button onClick={handleCamelCase}>Camel Case</button>
        <button onClick={handlePascalCase}>Pascal Case</button>
        <button onClick={handleSnakeCase}>Snake Case</button>
        <button onClick={handleKebabCase}>Kebab Case</button>
        <button onClick={handleTrim}>Trim</button>
      </div>
      <div className="output">
        <label>
          <b>Transformed String:</b>
        </label>
        <span>{formattedText}</span>
      </div>
    </div>
  );
}

export default StringTransformers;
