import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import '../styles/main.css'
import { useNavigate } from "react-router-dom";

const MainModule = ({toggleCategories}) => {
 const [isVisible, setIsVisible] = useState(false);
 const navigate = useNavigate();

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
        className="row align-items-center justify-content-center"
        style={{
          backgroundColor: "var(--main-bg)",
          height: "27.375rem",
          width: "60rem",
          borderRadius: "55px",
        }}
      >
        <h1 className="my-auto">Choose Mode</h1>
        <div className="row row-cols-4 d-flex justify-content-center align-items-center">
        <div className="col-6">
            
            <Button className="p-2 main-btn" style={{fontSize:'var(--font-size-md)', width:'10rem', backgroundColor: 'var(--red-bg)',
              color: 'var(--font-wt)',
              fontWeight: '600',}} > Classic</Button>
          </div>
          <div className="col-6">
            <Button className="p-2 main-btn" style={{fontSize:'var(--font-size-md)', width:'10rem', backgroundColor: 'var(--red-bg)',
              color: 'var(--font-wt)',
              fontWeight: '600',}} onClick={toggleCategories}> Practice</Button>
          </div>
        </div>
        <div className="row row-cols-4 d-flex justify-content-center align-items-center">
          <div className="col-6">
            <Button className="p-2 main-btn" style={{fontSize:'var(--font-size-md)', width:'10rem', backgroundColor: 'var(--red-bg)',
              color: 'var(--font-wt)',
              fontWeight: '600',}} onClick={toggleCategories}> Timed</Button>
          </div>
          <div className="col-6">
            <Button className="p-2 main-btn" style={{fontSize:'var(--font-size-md)', width:'10rem', backgroundColor: 'var(--red-bg)',
              color: 'var(--font-wt)',
              fontWeight: '600',}} onClick={toggleCategories}> Hard</Button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default MainModule;
