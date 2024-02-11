// LOGIN, REGISTER, LOGOUT BUTTONS

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginModal from './LoginModule';
import RegisterModal from './RegisterModule';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/init';
import { signOut } from 'firebase/auth';
import '../styles/AuthButtons.css'

const AuthButtons = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (user) {
      setDisplayName(user.displayName);
    } else {
      setDisplayName('');
    }
  })

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };
  const handleLogout = () => {
    signOut(auth);
    console.log("logged out");
  };

  return (
    <div id="auth-btn-container">
      {!loading && !user && (
        <>

          <Button
            className="auth-btn"
            variant="outline-none"
            onClick={handleShowLoginModal}
            size="lg"
            id="login-btn"
          >
            Login
          </Button>
          <Button
            className="auth-btn"
            variant="outline-none"
            onClick={handleShowRegisterModal}
            size="lg"
            id="register-btn"
          >
            Register
          </Button>

        </>
      )}

      {!loading && user && (
        <>

          <Button
            className="auth-btn"
            variant="outline-none"
            onClick={handleLogout}
            size="lg"
            id="logout-btn"
          >
            Logout
          </Button>

        </>
      )}

      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
      <RegisterModal show={showRegisterModal} handleClose={handleCloseRegisterModal} />
    </div>
  );
};

export default AuthButtons;
