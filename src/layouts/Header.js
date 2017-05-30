import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import Logo from './color_logo_transparent_background.svg';
import './Header.css';

const Header = ({ rightSide }) => (
  <Row className='vcenter'>
    <Col xs={12} sm={12}>
      <IndexLinkContainer to='/'>
        <a>
          <Image src={Logo} responsive className='img-center'/>
        </a>
      </IndexLinkContainer>
    </Col>
    {rightSide}
  </Row>
)

Header.propTypes = {
  rightSide: PropTypes.element,
}

export default Header;
