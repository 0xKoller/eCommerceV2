import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Cart from "./cartWidget";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

function NavBar() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/" className="link">
            Trost Shop
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="link">
                Home
              </NavLink>
              <NavLink to="*" className="link">
                Ofertas
              </NavLink>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Accesorios
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Remeras</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Pantalones
                </NavDropdown.Item>
                <NavDropdown.Item>Camperas</NavDropdown.Item>
                <NavDropdown.Item>Hoodies</NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item>Anime</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/aboutUs" className="link">
                Nosotros
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Cart />
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
