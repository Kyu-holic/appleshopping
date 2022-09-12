import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./NavBar.scss"

function NavBar() {
  let navigate = useNavigate();

  return (
    <div id="Navbar">
      <Navbar variant="dark" className="navbar">
        <Container>
          <Navbar.Brand onClick={()=> navigate("/")} className="home-button">Kyu.holic's React Market</Navbar.Brand>
          <Nav className="me-auto" style={{ textDecoration: "none" }}>
            <Nav.Link onClick={()=> navigate("/")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/detail")}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
