import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Header from '../layouts/Header';
import './Home.css';

const Emphasize = ({text}) => (<span className='playbook blue'>{text}</span>)

const Hero = () => (
  <div className='text-center'>
    <h2 className='tagline'> I build <Emphasize text='scalable' />, <Emphasize text='maintenable' /> enterprise <Emphasize text='web '/>
       and <span className='playbook blue'>mobile</span> applications for agencies, bluechips, start-ups and sometimes, myself.
    </h2>
    <div className='link'>
      <Link to='portofolio'>
        <h4>Check out my <span className='blue'>portofolio</span> </h4>
      </Link>
      <Link to='services'>
        <h4>or my <span className='blue'>services</span> </h4>
      </Link>
      <Link to='talks'>
        <h4>or even <span className='blue'>some talks </span> I gave.</h4>
      </Link>
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
