import React from 'react';
import { Row, Col, Clearfix } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../layouts/Header';
import services from '../data/services';
import Service from './components/Service';
import './Home.css';

const Emphasize = ({text}) => (<span className='playbook blue'>{text}</span>)

const Hero = () => (
  <div className='text-center'>
    <h2 className='tagline'> I build <Emphasize text='scalable' />, <Emphasize text='maintenable' /> enterprise <Emphasize text='web '/>
       and <span className='playbook blue'>mobile</span> applications for agencies, bluechips, start-ups and sometimes, myself.
    </h2>
    <div className='link'>
      <LinkContainer to='portofolio'>
        <h4>Check out my <a className='blue'>portofolio</a> </h4>
      </LinkContainer>
      <LinkContainer to='services'>
        <h4>or my <a className='blue'>services</a> </h4>
      </LinkContainer>
    </div>
  </div>
)

const Services = ({ services }) => (
  <Row className='text-center'>
    <h1 className=''>
      What I am good at :
    </h1>
    {services.map((service, i) =>
      <div key={i}>
        {i % 2===0 ? <Clearfix/> : null} <Service service={service}/>
      </div>
    )}
  </Row>
)

const Home = () => (
  <Row className='home'>
    <Col xs={12} sm={6} className='introLeft'>
      <Header />
      <h1 className='text-center playbook blue title'> Full stack web and mobile developper</h1>
      <Hero />
    </Col>
    <Col sm={6} xsHidden className='introRight'/>
  </Row>
)

export default Home;
