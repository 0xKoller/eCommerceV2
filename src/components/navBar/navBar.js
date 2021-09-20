import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavbarBrand,
  Image,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "./cartWidget";
import "./navBar.scss";

// Import de imagenes
import logo from "../../assets/wall-rose.png";

const NavBar = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container className="navBar">
          <NavbarBrand>
            <div className="branding">
              <Image src={logo} className="d-none d-sm-block" rounded />
              <NavLink to="/" className="link">
                Trost Shop
              </NavLink>
            </div>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto links">
              <NavLink to="/" className="link">
                Home
              </NavLink>
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink
                    to="/categories/IzqZt1KzR3YNauCQzDMM"
                    className="link"
                  >
                    Accesorios
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/categories/2Uc6U9BD6lAwxb71TzxU"
                    className="link"
                  >
                    Indumentaria
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/categories/byOMr4qdb9rfzCY3zgBL"
                    className="link"
                  >
                    Colleccionables
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink
                    to="/categories/NPwa71BImXu2d4VTRNI0"
                    className="link"
                  >
                    Manga
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/aboutUs" className="link">
                Nosotros
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          <Cart />
          {/* Poner aca el CART cuando termines de arreglar la burger */}
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
