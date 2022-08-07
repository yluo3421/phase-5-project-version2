import React, { useState } from "react";

import Button from "react-bootstrap/Button";

import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <h1 className="fs-1 fst-italic fw-semibold">Join Our Website</h1>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <br/>
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <br/>
          <p>
            Already have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </>
  );
}

export default Login;
