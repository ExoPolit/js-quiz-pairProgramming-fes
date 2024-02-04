
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QuizModule from '../pages/QuizModule';
import ClassicPage from '../pages/ClassicPage';

const TimedModeModule = ({ timeRemaining, setLocalTimeRemaining,  }) => {
  
  
useEffect(() => {
  const decreaseTime = () => {
    setLocalTimeRemaining(prevTime => (prevTime > 0 ? prevTime -1 : 0))
  };
  
  const timer = setInterval(decreaseTime, 1000);
  
  return () => clearInterval(timer)
  }, [setLocalTimeRemaining])
  
  const location = useLocation();
  if(location.pathname !== '/timed'){
    return null;
  }
  
  const timerStyle = {
    position:"absolute",
    width: "100%",
   
  }

  return (
    <div>
    <ClassicPage />
      <p style={timerStyle}>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default TimedModeModule;
