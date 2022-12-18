import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AiOutlineDown, AiOutlineLogout} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import {RiAccountPinBoxLine} from "react-icons/ri";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../../assets/logos/droplet.png";
import "bootstrap/dist/css/bootstrap.css";
import "./Nav.css";
import { getUser } from "../../services/user";
import { logout } from "../../store/slices/authSlice";

function NavBar() {
  const { token, userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [token, dispatch]);

  return (
    <Navbar expand="sm" className={"nav-container"} fixed="top">
      <Link to="/">
        <Navbar.Brand className="logo">
          <img src={logo} alt="that logo boiii" style={{ height: 35 }} />
        </Navbar.Brand>
      </Link>

      {userInfo && (
        <Navbar.Text className="username-display">
          <span className={"signed-in-text"}>Signed in as: </span>
          <Link to="/dashboard" className="logged-in-username">
            {userInfo.username}
          </Link>
        </Navbar.Text>
      )}

      <NavDropdown
        title={
          <div>
            <FaRegUserCircle className="nav-icon" size={20} />
            <AiOutlineDown className="nav-icon" size={20} />
          </div>
        }
        id="basic-nav-dropdown"
        size="sm"
        align="end"
        className={`nav-dropdown`}
      >
        {userInfo && (
          <NavDropdown.Item as="button" className={`dropdown-text`}>
            {" "}
            <LinkContainer to="/" className="dropdown-text">
              <Nav.Link>
                <RiAccountPinBoxLine size={22} className="nav-icon" />
                Dashboard
              </Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        )}

        {userInfo && <NavDropdown.Divider />}

        {!userInfo && (
          <NavDropdown.Item as="button">
            {" "}
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        )}

        {!userInfo && <NavDropdown.Divider />}

        {!userInfo && (
          <NavDropdown.Item as="button" className="dropdown-text">
            {" "}
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        )}

        {userInfo && <NavDropdown.Divider />}

        {userInfo && (
          <NavDropdown.Item as="button">
            {" "}
            <LinkContainer to="/" className="dropdown-text">
              <Nav.Link onClick={() => dispatch(logout())}>
                <AiOutlineLogout size={20} className="nav-icon" />
                Logout
              </Nav.Link>
            </LinkContainer>
          </NavDropdown.Item>
        )}
      </NavDropdown>
    </Navbar>
  );
}

export default NavBar;
