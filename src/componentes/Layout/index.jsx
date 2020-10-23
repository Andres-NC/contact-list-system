import React, {useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import {LayoutContainer, Children} from './styles';

const Layout = ({children, isLogged = true}) => {
  const history = useHistory();

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log('token');
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };
  return (
    <LayoutContainer>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Contact List System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="">
            {isLogged ? (
              <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Sign up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Children>{children}</Children>
    </LayoutContainer>
  );
};

export default Layout;
