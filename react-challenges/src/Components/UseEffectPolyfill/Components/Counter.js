import { useState } from "react";
import useCustomEffect from "../Hooks/use-custom-effect";

function Counter() {
  const [count, setCount] = useState(0);

  useCustomEffect(() => {
    console.log("Effect triggered:", count);
    return () => {
      console.log("cleanup");
    };
  }, [count]);

  console.log("re-rendered");

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 className="data-list">Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
