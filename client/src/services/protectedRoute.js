import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import "./protectedRoute.css";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return (
      <div className="unauthorized">
        <NavLink to="/login">
          <h1 className="dd-title">DAILY DRIP</h1>
        </NavLink>
        <div className="drop-container">
          <div className="drop"></div>
        </div>
      </div>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
