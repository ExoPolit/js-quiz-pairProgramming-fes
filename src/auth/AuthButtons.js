// AuthButtons.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginModal from './LoginModule';
import RegisterModal from './RegisterModule';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/init';
import { signOut } from 'firebase/auth';

const AuthButtons = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [user] = useAuthState(auth);

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
    <div>
      {!user && (
        <>
          <Button
            variant="outline-none"
            onClick={handleShowLoginModal}
            style={{
              backgroundColor: 'var(--red-bg)',
              color: 'var(--font-wt)',
              fontWeight: '600',
            }}
            size="md"
            id="login-btn"
          >
            Login
          </Button>
          <Button
            variant="outline-none"
            onClick={handleShowRegisterModal}
            style={{
              backgroundColor: 'var(--red-bg)',
              color: 'var(--font-wt)',
              fontWeight: '600',
            }}
            size="md"
            id="register-btn"
          >
            Register
          </Button>
        </>
      )}

      {user && (
        <>
          <Button
            variant="outline-none"
            onClick={handleLogout}
            style={{
              backgroundColor: 'var(--red-bg)',
              color: 'var(--font-wt)',
              fontWeight: '600',
            }}
            size="md"
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
