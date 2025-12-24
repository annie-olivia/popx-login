import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="login-title">Signin to your PopX account</h1>

      <p className="login-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <p className="login-label-email">Email Address</p>
      <div className="login-input-email">
        <input
          className="login-input"
          type="email"
          placeholder="Enter email address"
        />
      </div>

      <p className="login-label-password">Password</p>
      <div className="login-input-password">
        <input
          className="login-input"
          type="password"
          placeholder="Enter password"
        />
      </div>

      <button
        type="button"
        className="btn login-btn"
        onClick={() => navigate("/profile")}
      >
        <span>Login</span>
      </button>
    </>
  );
};

export default Login;
