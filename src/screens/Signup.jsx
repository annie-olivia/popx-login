import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="signup-title">Create your PopX account</h1>

      <p className="signup-label-fullname">Full Name<span className="required-star">*</span></p>
      <div className="signup-box-fullname">
        <input
          className="signup-input-fullname"
          type="text"
          defaultValue="Marry Doe"
        />
      </div>

      <p className="signup-label-phone">Phone Number<span className="required-star">*</span></p>
      <div className="signup-box-phone">
        <input
          className="signup-input-phone"
          type="tel"
          defaultValue="Marry Doe"
        />
      </div>

      <p className="signup-label-email">Email address<span className="required-star">*</span></p>
      <div className="signup-box-email">
        <input
          className="signup-input-email"
          type="email"
          defaultValue="Marry Doe"
        />
      </div>

      <p className="signup-label-password">Password<span className="required-star">*</span></p>
      <div className="signup-box-password">
        <input
          className="signup-input-password"
          type="password"
          defaultValue="Marry Doe"
        />
      </div>

      <p className="signup-label-company">Company name</p>
      <div className="signup-box-company">
        <input
          className="signup-input-company"
          type="text"
          defaultValue="Marry Doe"
        />
      </div>

      <p className="signup-label-agency">Are you an Agency?<span className="required-star">*</span></p>

      <div className="signup-radio-yes-outer" />
      <div className="signup-radio-yes-inner" />
      <span className="signup-radio-yes-text">Yes</span>

      <div className="signup-radio-no-outer" />
      <span className="signup-radio-no-text">No</span>

      <button
        type="button"
        className="btn signup-btn"
        onClick={() => navigate("/profile")}
      >
        <span>Create Account</span>
      </button>
    </>
  );
};

export default Signup;
