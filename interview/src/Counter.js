import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("🟢 Component Mounted: Counter Initialized");

    // return () => {
    //   console.log("🔴 Component Unmounting: Cleaning up...");
    // };
  }, []); // Runs only once (on mount & unmount)

  useEffect(() => {
    console.log(`🔄 Counter Updated: ${count}`);

    return () => {
      console.log(`🧹 Cleaning up before next update...`);
    };
  }, [count]); // Runs on every count update

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
