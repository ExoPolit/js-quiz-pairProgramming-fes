import { Button } from "react-bootstrap";
import LoginModal from "./LoginModule";
import { useState } from "react";

function LoginBtn() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div>
      <Button
        variant="outline-none"
        onClick={handleShowLoginModal}
        style={{
          backgroundColor: "var(--red-bg)",
          color: "var(--font-wt)",
          fontWeight: "600",
        }}
        size="md"
        id="login-btn"
      >
        Login
      </Button>
      <LoginModal show={showLoginModal} handleClose={handleCloseLoginModal} />
    </div>
  );
}

export default LoginBtn;
