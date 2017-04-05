import React from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../layouts/Header';
import services from '../data/services';
import Service from './components/Service';
import './Home.css';

const Hero = () => (
  <div className='text-center'>
    <h2> I build scalable, maintainable and secure enterprise web and mobile applications for agencies, bluechips, start-ups and sometimes, myself.</h2>
    <LinkContainer to='portofolio'>
      <h4>Check out my <a>portofolio</a> </h4>
    </LinkContainer>
  </div>
)

const Services = ({ services }) => (
  <Row className='text-center'>
    <h3>
      What I am good at :
    </h3>
    {services.map((service, i) =>
      <div>
        {i % 2===0 ? <Clearfix/> : null}<Service key={i} service={service}/>
      </div>
    )}
  </Row>
)

const Home = () => (
  <Row className='home'>
    <Col xs={12} sm={6} className='introLeft'>
      <Header rightSide={
          <Col xs={12} sm={8} >
            <h1 className='text-center'> Full stack web and mobile developper</h1>
          </Col>
      }/>
      <Hero />
      <Services services={services} />
    </Col>
    <Col sm={6} xsHidden className='introRight'/>
  </Row>
)

export default Home;
