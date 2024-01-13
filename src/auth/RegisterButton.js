import { auth } from "../firebase/init.js";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { Button } from "react-bootstrap";
import RegisterModal from "./RegisterModal.js";

const RegisterBtn = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };
  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div>
    <Button
      variant="outline-none"
      onClick={handleShowRegisterModal}
      style={{
        backgroundColor: "var(--red-bg)",
        color: "var(--font-wt)",
        fontWeight: "600",
      }}
      size="md"
      id="signout-btn"
    >
      Register
    </Button>
    <RegisterModal show={showRegisterModal} handleClose={handleCloseRegisterModal} />   
    </div>
  );
};

export default RegisterBtn;
