import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
            <div className="container">
                <a className="navbar-brand" href="#">
                    Logo
                </a>
                <h1 className="navbar-text mx-auto">Title</h1>
                <div className="ml-auto">
                    <button className="btn btn-light mr-2">Button 1</button>
                    <button className="btn btn-light">Button 2</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
