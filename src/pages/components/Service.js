import React from 'react';
import { Col, Badge, Thumbnail } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Service.css'


const Service = ({ service }) => (
  <Col xs={12} sm={6} className='service'>
    <Thumbnail>
      <h1 className='service-title text-center playbook'>{service.title}</h1>
      <h4 className='description'>{service.description}</h4>
      <div className='text-center'>
        <h5> Examples : {' '}
        {service.examples.map(example => (
          <LinkContainer to='portofolio' >
            <Badge> {example} </Badge>
          </LinkContainer>
        ))}</h5>
    </div>
  </Thumbnail>
  </Col>
)

export default Service;
