// TimedModeModule.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const TimedModeModule = ({ timeRemaining  }) => {
  const location = useLocation();
  if(location.pathname !== '/timed'){
    return null;
  }
  

  return (
    <div className="timer-container" style={{ backgroundColor: 'black', padding: '10px', color:"white" }}>
      <p>Time Remaining: {timeRemaining} seconds</p>
      {/* Hier können Sie das gewünschte Design für den Timer hinzufügen */}
    </div>
  );
};

export default TimedModeModule;
