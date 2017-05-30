import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router';
import Logo from './color_logo_transparent_background.svg';
import './Header.css';

const Header = ({ rightSide }) => (
  <Row className='vcenter'>
    <Col xs={12} sm={12}>
      <Link to='/'>
        <Image src={Logo} responsive className='img-center'/>
      </Link>
    </Col>
    {rightSide}
  </Row>
)

Header.propTypes = {
  rightSide: PropTypes.element,
}

export default Header;
