import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login-container">
      <div className="login-wave">
        <h1 className="login-header">
          Welcome
          <br />
          Back
        </h1>
      </div>

      <div className="login-form-container">
        <form className="login-form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Password" />
          <button className="login-btns login-btn">Log In</button>
        </form>
        <button className="login-btns sign-up">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
