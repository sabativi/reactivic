import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from '../layouts/Header';
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
        <h4>and my <a className='blue'>services</a> </h4>
      </LinkContainer>
      <LinkContainer to='talks'>
        <h4>or even <a className='blue'>some talks</a> I gave.</h4>
      </LinkContainer>
      <br/>
      <h4>
        Email me : <a href='mailto:victor@reactivic.com' className='blue'>victor@reactivic.com</a> or call me <a className='blue'>+336 32 31 51 38 </a>
      </h4>
    </div>
  </div>
)

const Home = () => (
  <Row className='home'>
    <Col xs={12} md={6} className='introLeft'>
      <Header />
      <h1 className='text-center playbook blue title'> Full stack web and mobile developper</h1>
      <Hero />
    </Col>
    <Col md={6} xsHidden className='introRight'/>
  </Row>
)

export default Home;
