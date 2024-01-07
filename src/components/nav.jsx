import React from 'react';
import { Button } from 'react-bootstrap';


const Nav = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Logo
                </a>
                <h1 className="navbar-text mx-auto">Title</h1>
                <div className="ml-auto">
                    <Button variant="outline-primary" size='lg'>LogIn</Button>
                    <Button variant="outline-primary" size='sm'>SignUp</Button>
                    
                </div>
            </div>
        </nav>
        </>
    );
    
};

export default Nav;
