import { useState, useEffect } from "react";

function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // Mounting: Runs only once
//   useEffect(() => {
//     console.log("Component Mounted");

//     return () => {
//       console.log("Component Unmounted"); // Cleanup when component unmounts
//     };
//   }, []);

  // Updating: Runs when 'count' changes
  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default LifecycleDemo;
