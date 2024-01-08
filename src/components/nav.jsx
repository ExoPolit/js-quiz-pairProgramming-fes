import React from 'react';
import { Button } from 'react-bootstrap';

import Banano from "../assests/Banano.svg"

const Nav = () => {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
            <div className="container">
                <img src={Banano} alt="banano" width={100} height={100} />
                <h1 className="">BananaScript</h1>
                <div className="ml-auto">
                    <Button variant="outline-primary" size='md'>LogIn</Button>
                    <Button variant="outline-primary" size='md'>SignUp</Button>
                    
                </div>
            </div>
        </nav>
        
        </>
    );
    
};

export default Nav;
