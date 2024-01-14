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
        className="row" style={{border: "1px solid black"}}
      >
        <div className="col-12">
        <h1>Modes</h1>
        </div>

        <div className="col-sm-4">
            <p>butn</p>
            </div>
        <div className="col">
            <p>butn</p>
            </div>
      </div>
    </div>
  );
};

export default MainModule;
