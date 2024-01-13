import '../styles/nav.css';

import { Button } from 'react-bootstrap';
import Register from '../auth/login';
import Banano from "../assests/Banano.svg"

const Nav = () => {
    return (
        <>
        
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid  fixed-top " style={{backgroundColor: 'var(--secondary-bg)'}}>
                <figure id="img-wrapper">
                <img src={Banano} alt="banano" width={80} height={100} id="banano" />
                </figure>
                <h1 className="text-white">BananaScript</h1>
                <div className="ml-auto" id="btn">
                    <Button variant="outline-none"  style={{backgroundColor: 'var(--red-bg)', color: 'var(--font-wt)', fontWeight: '600'}} size='md' id="login-btn">LogIn</Button>
                    <Button variant="outline-none" style={{backgroundColor: 'var(--red-bg)', color: 'var(--font-wt)', fontWeight: '600'}} size='md' id="signout-btn">SignUp</Button>
                    
                </div>
            </div>
        </nav>

        </>
    );
    
};

export default Nav;
