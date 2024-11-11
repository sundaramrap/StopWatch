import { useEffect, useState } from "react";

function StopWatch() {
  //state to hold the  timer time second and settime second
  const [timer, setTimer] = useState(0);
  const [runningTimer, setRunningTimer] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const ToggleSP = () => {
    if (runningTimer) {
      //to stopthetimer
      clearInterval(intervalId);
      setRunningTimer(false);
    } else {
      //to start the timer,
      //since the timer will start running from initial value or for the time it has stopped ,we will need to update the setTimer function

      const id = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
      setIntervalId(id);
      setRunningTimer(true);
    }
  };

  const ResetT = () => {
    clearInterval(setIntervalId);
    setTimer(0);
    setRunningTimer(false);
  };

  const formattimeMath = (seconds) => {
    const minute = Math.floor(seconds / 60); //get the minute
    const secs = seconds % 60; //get the second
    return `${minute}:${secs < 10 ? `0${secs}` : secs}`;
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <>
      <h1>StopWatch</h1>
      <p>Time :{formattimeMath(timer)}</p>
      <button onClick={ToggleSP}>{runningTimer ? "Stop" : "Start"}</button>
      <button onClick={ResetT}>Reset</button>
    </>
  );
}

export default StopWatch;
