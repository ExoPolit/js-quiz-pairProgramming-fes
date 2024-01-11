import React from "react";
import '../styles/footer.css';
const Footer = () => {

    return (
        <>
      <footer className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid  fixed-bottom" style={{backgroundColor: 'var(--secondary-bg)', height: 100, justifyContent: "center", }}>
                <div className="ml-auto" id="footer-content">
                    <a href="#" className="text-white m-4 "  style={{fontSize:'var(--font-size-md)', }}>About</a>
                    <a href="#" className="text-white "  style={{fontSize:'var(--font-size-md)', }}>Contact</a>
                </div>
            </div>
        </footer>

        </>
    )
}

export default Footer;