import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  NavbarBrand,
  Image,
} from "react-bootstrap";
import Cart from "./cartWidget";
import { NavLink } from "react-router-dom";
import "./navBar.scss";
import logo from "../../assets/wall-rose.png";

function NavBar() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand>
            <Image src={logo} className="d-none d-sm-block" rounded />
            <NavLink to="/" className="link">
              Trost Shop
            </NavLink>
          </NavbarBrand>
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
                <NavDropdown.Item>
                  <NavLink to="*" className="link">
                    Accesorios
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="*" className="link">
                    Remeras
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="*" className="link">
                    Pantalones
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="*" className="link">
                    Camperas
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="*" className="link">
                    Hoodies
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider></NavDropdown.Divider>
                <NavDropdown.Item>
                  <NavLink to="*" className="link">
                    Anime
                  </NavLink>
                </NavDropdown.Item>
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
