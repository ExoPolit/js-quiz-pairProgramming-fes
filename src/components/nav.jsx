import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/nav.css';

import Banano from "../assests/Banano.svg"

const Nav = () => {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid  fixed-top " style={{backgroundColor: 'var(--secondary-bg)'}}>
                <img src={Banano} alt="banano" width={100} height={100} />
                <h1 className="text-white">BananaScript</h1>
                <div className="ml-auto" id="btn">
                    <Button variant="outline-none" style={{backgroundColor: 'var(--red-bg)', color: 'var(--font-wt)', fontWeight: '600'}} size='md' id="login-btn">LogIn</Button>
                    <Button variant="outline-none" style={{backgroundColor: 'var(--red-bg)', color: 'var(--font-wt)', fontWeight: '600'}} size='md' id="signout-btn">SignUp</Button>
                    
                </div>
            </div>
        </nav>

       

        
        </>
    );
    
};

export default Nav;
