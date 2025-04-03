import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("Component Mounted: Timer Started");

    // Start the timer when the component mounts
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup function: Stops the timer when the component unmounts
    return () => {
      console.log("Component Unmounting: Timer Stopped");
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this effect runs once when mounted

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}

export default Timer;
