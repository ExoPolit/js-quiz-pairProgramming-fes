import React, {useState, useEffect} from "react";

const TimedMode = () => {
const [timeRemaining, setTimeRemaining] = useState(initialTime);
const [progress, setProgress] = useState(0);

// Countdown and ProgressBar

useEffect(() => {
    const timer = setInterval(() => {
      
      setTimeRemaining((prevTime) => prevTime - 1);
      setProgress((prevProgress) => prevProgress + 1);
  
      
      if (timeRemaining === 0) {
        clearInterval(timer); 
        handleNextQuestion(); 
      }
    }, 1000); 
    return () => clearInterval(timer); 
  }, [timeRemaining]); 
  

return (
    <div>
        <div className="progressBar" style={{width: `${progress}%`}}></div>
        <div className="timer">{timeRemaining}</div>
    </div>
);
};

export default TimedMode;

