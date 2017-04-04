import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from './color_logo_transparent_background.svg';
import './Header.css';

const Header = () => (
  <Row className='vcenter'>
    <Col xs={12} sm={6}>
      <LinkContainer to='/'>
        <Image src={Logo} responsive/>
      </LinkContainer>
    </Col>
    <Col xs={12} sm={6} >
      <h1 className='text-center'> Full stack web and mobile developper</h1>
    </Col>
  </Row>
)

export default Header;
