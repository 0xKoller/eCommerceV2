import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Cart from "./cartWidget";

function NavBar() {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Trost Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Ofertas</Nav.Link>
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
              <Nav.Link>Nosotros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Cart />
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;
