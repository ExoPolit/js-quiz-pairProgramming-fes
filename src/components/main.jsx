import React from "react";
import { Button } from "react-bootstrap";

const MainModule = () => {
  const handleButtonClick = () => {
    // Add functionality to open the Categorys section here
  };

  return (
    <div
      className="container min-vh-100  d-flex justify-content-center align-items-center text-center"
      style={{ border: "1px solid black" }}
    >
      <div
        className="row" style={{backgroundColor: 'var(--main-bg)', padding: '10rem'}}
      >
        <div className="col-12 my-5" style={{}}>
        <h1>Modes</h1>
        </div>
<div className="d-flex justify-content-center">
<div className="col-8">
           <Button className="p-2"> Classic Mode </Button>
            </div>
        <div className="col-8">
           <Button className="p-2"> Practice Mode </Button>
            </div>
</div>
    
      </div>
    </div>
  );
};

export default MainModule;
