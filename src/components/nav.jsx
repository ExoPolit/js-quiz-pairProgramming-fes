import "../styles/nav.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/init";
import Banano from "../assests/Banano.svg";
import AuthButtons from "../auth/AuthButtons";
import { useEffect, useState } from "react";

const Nav = () => {
  const [user] = useAuthState(auth);
  const [userName, setUserName] = useState("");
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout();
    }, []);

  useEffect(() => {
    if (user) {
      const displayName = user.displayName || user.email[0].toUpperCase();
      setUserName(displayName);
    } else {
      setUserName("Who's knocking?");
    }
  }, [user]);



  return (
    <>
    <div className={`nav-container ${isVisible ? "slide-in" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div
          className="container-fluid  fixed-top "
          style={{ backgroundColor: "var(--secondary-bg)" }}
        >
          <figure id="img-wrapper">
            <img
              src={Banano}
              alt="banano"
              width={80}
              height={100}
              id="banano"
            />
            {userName && (
              <span
                className="custom-after"
                style={{ color: "white", fontSize: "var(--font-size-md)" }}
              >
                {userName}
              </span>
            )}
          </figure>
          <h1 className="text-white">BananaScript</h1>
          <div className="ml-auto" id="btn">
            <AuthButtons />
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Nav;
