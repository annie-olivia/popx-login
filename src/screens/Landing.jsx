import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="landing-title">Welcome to PopX</h1>

      <p className="landing-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <button
        className="btn landing-btn-primary"
        type="button"
        onClick={() => navigate("/signup")}
      >
        <span>Create Account</span>
      </button>

      <button
        className="btn landing-btn-secondary"
        type="button"
        onClick={() => navigate("/login")}
      >
        <span>Already Registered? Login</span>
      </button>
    </>
  );
};

export default Landing;
