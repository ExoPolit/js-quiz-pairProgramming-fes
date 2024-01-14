import { useEffect, useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout();
    }, []);

    return (
      
<div className={`nav-container ${isVisible ? "slide-in" : ""}`}>
      <footer className="navbar navbar-expand-lg navbar-light" >
            <div className="container-fluid  fixed-bottom" style={{backgroundColor: 'var(--secondary-bg)', height: 100, justifyContent: "center", }}>
                <div className="ml-auto" id="footer-content">
                    <a href="#" className="text-white m-4 "  style={{fontSize:'var(--font-size-md)', }}>About</a>
                    <a href="#" className="text-white "  style={{fontSize:'var(--font-size-md)', }}>Contact</a>
                </div>
            </div>
        </footer>
        </div>

        
    )
}

export default Footer;