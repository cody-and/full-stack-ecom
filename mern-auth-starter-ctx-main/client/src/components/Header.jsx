import React from 'react';
import { useUserContext } from '../ctx/UserContext';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const { currUser, logout } = useUserContext();

  return (
    <header className="pb-0 mb-0">
      <Navbar variant="dark" expand="md" style={{ justifyContent: "space-between", backgroundColor: "transparent" }}>
        <div className="container-fluid" style={{ width: "65%"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={window.location.pathname}>
              <Nav.Item>
                <Nav.Link href="/" style={{ color: "black" }}>Home</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/shop" style={{ color: "black" }}>Shop</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/new-arrivals" style={{ color: "black" }}>New Arrivals</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/collections" style={{ color: "black" }}>Collections</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/sale" style={{ color: "black" }}>Sale</Nav.Link>
              </Nav.Item>

              {currUser.status === "notfound" && (
                <Nav.Item>
                  <Nav.Link href="/signup" style={{ color: "black" }}>Signup</Nav.Link>
                </Nav.Item>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
        <div style={{ width: "35%", paddingRight: "10px" }}>
          {currUser.status === "found" && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ display: "flex", justifyContent: "flex-end"}}>
              <li className="nav-item">
                <span className="nav-link active" style={{ color: "black" }}>Welcome back, {currUser.data.fname}</span>
              </li>
              <li className="nav-item">
                <a className="nav-link active" onClick={logout} style={{ color: "black" }}>Logout</a>
              </li>
            </ul>
          )}
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
