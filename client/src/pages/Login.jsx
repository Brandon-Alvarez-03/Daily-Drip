import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../services/user";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Login.css";

function Login() {
  const { loading, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (userInfo) {
      navigate("/", { replace: true });
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    data.username = data.username.toLowerCase();
    dispatch(signIn(data));
  };

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
        <form className="login-form" onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            {...register("username")}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            {...register("password")}
            required
          />
          <button
            type="submit"
            className="login-btns login-btn"
            disabled={loading}
          >
            {loading ? <h1>Loading...</h1> : "Login In"}
          </button>
        </form>
        <Link to="/signup" className="login-btns sign-up">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
