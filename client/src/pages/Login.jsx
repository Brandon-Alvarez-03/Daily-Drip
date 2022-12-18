import React, { useRef } from "react";
import "./Login.css";
function Login() {
  const username = useRef();
  const password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: username.current.value,
      password: password.current.value,
    };

    username.current.value = "";
    password.current.value = "";
  }
  return (
    <div className="login-container">
      <div className="login-wave-container">
        <div className="login-wave">
          <h1 className="login-header">
            Welcome
            <br />
            Back
          </h1>
        </div>
      </div>

      <div className="login-form-container">
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Name" ref={username} />
          <input type="text" placeholder="Password" ref={password} />
          <button className="login-btns login-btn">Log In</button>
        </form>
        <button className="login-btns sign-up">Sign Up</button>
      </div>
    </div>
  );
}

export default Login;
