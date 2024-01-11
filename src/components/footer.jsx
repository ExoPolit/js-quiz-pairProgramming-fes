import React from "react";
const Footer = () => {

    return (
        <>
      <footer className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid  fixed-bottom" style={{backgroundColor: 'var(--secondary-bg)', height: 100, justifyContent: "center", }}>
                <div className="ml-auto" id="footer-content">
                    <a href="#" className="text-white m-4" style={{fontSize:'var(--font-size-md', textDecoration: 'none'}}>About</a>
                    <a href="#" className="text-white" style={{fontSize:'var(--font-size-md', textDecoration: 'none'}}>Contact</a>
                </div>
            </div>
        </footer>

        </>
    )
}

export default Footer;