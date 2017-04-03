import React from 'react';
import { Col } from 'react-bootstrap';

const Service = ({ service }) => (
  <Col xs={12} sm={6}>
    <h2>{service.title}</h2>
    <h4>{service.description}</h4>
  </Col>
)

export default Service;
