// TimedModeModule.jsx

import React from 'react';

const TimedModeModule = ({ timeRemaining  }) => {
    console.log("timeRemaining", timeRemaining)
  return (
    <div className="timer-container" style={{ backgroundColor: 'black', padding: '10px', color:"white" }}>
      <p>Time Remaining: {timeRemaining} seconds</p>
      {/* Hier können Sie das gewünschte Design für den Timer hinzufügen */}
    </div>
  );
};

export default TimedModeModule;
