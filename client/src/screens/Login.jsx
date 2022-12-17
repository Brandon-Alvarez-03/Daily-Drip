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
          <button>Sign up</button>
        </form>
        <p>or</p>
        <button>Log in</button>
      </div>
    </div>
  );
}

export default Login;
