import React from "react";
import {AiOutlineDown} from "react-icons/ai";
import {FaRegUserCircle} from "react-icons/fa";
import {RiAccountPinBoxLine} from "react-icons/ri";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import logo from "../../assets/logos/droplet.png";
import "bootstrap/dist/css/bootstrap.css";

function NavBar() {
  return (
    <Navbar expand="md" className={"nav-container"} fixed="top">
      {/* <LinkContainer to="/" className="logo"> */}
        <Navbar.Brand>
          <img src={logo} alt="that logo boiii" style={{height: 55}} />
        </Navbar.Brand>
      {/* </LinkContainer> */}

      <Navbar.Collapse id="basic-navbar-nav">

        {/* <Nav className="nav ms-auto">
          <LinkContainer to="/signup">
            <Nav.Link>SignUp</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </Nav> */}

      </Navbar.Collapse>

      <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggler" />

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
        <NavDropdown.Item as="button" className={`dropdown-text`}>
          {" "}
          <LinkContainer to="/profile" className="dropdown-text">
            <Nav.Link>
              <RiAccountPinBoxLine size={22} className="nav-icon" />
              Profile
            </Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>

        <NavDropdown.Item as="button">
          {" "}
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>

        <NavDropdown.Item as="button" className="dropdown-text">
          {" "}
          <LinkContainer to="/signup">
            <Nav.Link>Signup</Nav.Link>
          </LinkContainer>
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}

export default NavBar;
