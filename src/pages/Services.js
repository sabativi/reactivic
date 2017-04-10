import React from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';
import services from '../data/services';
import Service from './components/Service';
import Header from '../layouts/Header';
import companies from '../data/companies';
import Companies from './components/Companies';
import './Services.css';

const ServicesList = ({ services }) => (
  <Row>
    {services.map((service, i) =>
      <div key={i}>
        {i % 2===0 ? <Clearfix/> : null} <Service service={service}/>
      </div>
    )}
  </Row>
)

const ServicesPage = () => (
  <Row className='service-page'>
    <Header rightSide={
      <Col xs={12} sm={8} >
        <h1 className='text-center title blue playbook'> What i am good at</h1>
      </Col>
    }/>
    <ServicesList services={services} />
    <Companies companies={companies} />
  </Row>
)

export default ServicesPage;
