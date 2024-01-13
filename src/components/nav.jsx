import '../styles/nav.css';
import Banano from "../assests/Banano.svg"
import AuthButtons from '../auth/AuthButtons';

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
                    <AuthButtons/>
                </div>
            </div>
        </nav>

        </>
    );
    
};

export default Nav;
