import React, { useState } from "react";
import { Button } from "react-bootstrap";

const MainModule = ({toggleCategories}) => {
 

  return (
    <div
      className="container min-vh-100
      d-flex
      justify-content-center
      align-items-center
      text-center"
    >
      <div
        className="row justify-content-center align-items-center"
        style={{
          backgroundColor: "var(--main-bg)",
          height: "27.375rem",
          width: "53.063rem",
        }}
      >
        <h1>Modes</h1>

        <div className="d-flex justify-content-center">
          <div className="col-8">
            <Button className="p-2" onClick={toggleCategories}> Classic Mode </Button>
          </div>
          <div className="col-8">
            <Button className="p-2" onClick={toggleCategories}> Practice Mode </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainModule;
