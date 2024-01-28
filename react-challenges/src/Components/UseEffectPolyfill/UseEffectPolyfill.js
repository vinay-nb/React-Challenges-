import React, { useEffect } from "react";
import "./style.css";
import Counter from "./Components/Counter";
const UseEffectPolyfill = () => {
  useEffect(() => {
    console.log("rendered");
  }, []);

  return (
    <>
      <Counter />
    </>
  );
};

export default UseEffectPolyfill;
