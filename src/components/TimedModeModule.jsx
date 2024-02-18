
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QuizModule from '../pages/QuizModule';
import ClassicPage from '../pages/ClassicPage';
import '../styles/Timed.css'
import { useRef } from 'react';

const TimedModeModule = ({ timeRemaining, setLocalTimeRemaining,  }) => {
  
  const timerRef = useRef(null);
  
  
useEffect(() => {
  const decreaseTime = () => {
    setLocalTimeRemaining(prevTime => (prevTime > 0 ? prevTime -1 : 0))
  };
  
  timerRef.current = setInterval(decreaseTime, 1000);
  
  return () => clearInterval(timerRef.current)
  }, [setLocalTimeRemaining])

  
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setLocalTimeRemaining(60);
    timerRef.current = setInterval (() => setLocalTimeRemaining(prev => prev - 1), 1000)
  }
  
  const location = useLocation();
  if(location.pathname !== '/timed'){
    return null;
  }
  
 

  return (
    <div>
    <ClassicPage />
    <div className='container'>
      <div id="timed-wrapper">
      <p>Time Remaining: {timeRemaining} seconds</p>
      <button id="timed-btn" onClick={resetTimer}>Reset Timer</button>
      </div>
    </div>
    </div>
  );
};

export default TimedModeModule;
