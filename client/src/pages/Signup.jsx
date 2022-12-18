import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../services/user";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { logout } from "..//store/slices/authSlice";

function Signup() {
  const { loading, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [customError, setCustomError] = useState(null);

  useEffect(() => {
    if (userInfo === 'User already exist') {
      setCustomError("User already exist");
      dispatch(logout())
    }
    else if (userInfo) {
      navigate("/", { replace: true });
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
      if (data.password !== data.confirmPassword) {
        setCustomError("Password mismatch");
        return;
      }
      data.username = data.username.toLowerCase();
      data.email = data.email.toLowerCase();
      dispatch(signUp(data));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {customError && <h1>{customError}</h1>}
      <input
        type="text"
        placeholder="Enter Username"
        className="form-input"
        {...register("username")}
        required
      />
      <input
        type="email"
        placeholder="Enter Email"
        className="form-input"
        {...register("email")}
        required
      />
      <input
        type="password"
        placeholder="Enter Password"
        className="form-input"
        {...register("password")}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="form-input"
        {...register("confirmPassword")}
        required
      />
      <button type="submit" className="button" disabled={loading}>
        {loading ? <h1>Loading...</h1> : "Sign Up"}
      </button>
    </form>
  );
}

export default Signup;
