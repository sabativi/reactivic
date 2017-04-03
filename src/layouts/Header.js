import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">Reactivic</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="services">
        <NavItem>
          Services
        </NavItem>
      </LinkContainer>
      <LinkContainer to="portofolio">
        <NavItem>
          Portofolio
        </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar>
)

export default Header;
