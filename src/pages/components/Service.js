import React from 'react';
import { Col } from 'react-bootstrap';
import './Service.css'


const Service = ({ service }) => (
  <Col xs={12} sm={6}>
    <h1 className='service-title text-center playbook'>{service.title}</h1>
    <h4 className='description'>{service.description}</h4>
  </Col>
)

export default Service;
