import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LayoutContainer, Children} from './styles';

const Layout = ({children}) => {
  return (
    <LayoutContainer>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Contact List System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link className="">Iniciar sesión</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Children>{children}</Children>
    </LayoutContainer>
  );
};

export default Layout;
