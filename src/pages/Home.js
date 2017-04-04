import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Company from './components/Company';
import companies from '../data/companies';
import Header from '../layouts/Header';
import './Home.css';

const Hero = () => (
  <div className='text-center'>
    <h1> Full stack web and mobile developper</h1>
    <h3> I build scalable, maintainable and secure enterprise web and mobile applications for agencies, bluechips, start-ups and sometimes, myself.</h3>
    <LinkContainer to='services'>
      <h5> Check out my <a>services</a> </h5>
    </LinkContainer>
    <LinkContainer to='portofolio'>
      <h5>or my <a>portofolio</a> </h5>
    </LinkContainer>
  </div>
)

const Companies = ({ companies }) => (
  <div className='text-center'>
    <h2>
      Companies I have worked with :
    </h2>
    {companies.map((company, i) => <Company key={i} company={company}/>)}
  </div>
)

const Home = () => (
  <Row className='home'>
    <Col xs={12} sm={6} className='introLeft'>
      <Header />
      <Hero />
      <Companies companies={companies} />
    </Col>
    <Col sm={6} xsHidden className='introRight'/>
  </Row>
)

export default Home;
