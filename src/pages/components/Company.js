import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

const Company = ({ company }) => (
  <Col xs={12} md={3}>
    <Thumbnail src={company.img} />
  </Col>
)

export default Company;
