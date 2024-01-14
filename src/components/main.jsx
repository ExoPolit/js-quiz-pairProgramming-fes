import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import '../styles/main.css'
import { clear } from "@testing-library/user-event/dist/clear";

const MainModule = ({toggleCategories}) => {
 const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout();
    }, []);

  return (
    <div className={`main-container ${isVisible ? "slide-up" : ""}`}>
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
          width: "60rem",
          borderRadius: "255px",
        }}
      >
        <h1>Modes</h1>
        <div className="row">
        <div className="d-flex justify-content-center align-items-center">
        <div className="col-4">
            <Button className="p-2" style={{fontSize:'var(--font-size-md)', width:'10rem'}} onClick={toggleCategories}> Classic</Button>
          </div>
          <div className="col-4">
            <Button className="p-2" style={{fontSize:'var(--font-size-md)', width:'10rem'}} onClick={toggleCategories}> Practice</Button>
          </div>
          </div>
        </div>
        <div className="row">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-4 ">
            <Button className="p-2" style={{fontSize:'var(--font-size-md)', width:'10rem'}} onClick={toggleCategories}> Timed</Button>
          </div>
          <div className="col-4">
            <Button className="p-2" style={{fontSize:'var(--font-size-md)', width:'10rem'}} onClick={toggleCategories}> Hard</Button>
          </div>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default MainModule;
