import React from 'react';
import { Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from './color_logo_transparent_background.svg';

const Header = () => (
  <LinkContainer to='/'>
    <Image src={Logo} responsive/>
  </LinkContainer>
)

export default Header;
