import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Company from './components/Company';
import Technology from './components/Technology';
import technologies from '../data/technologies';
import companies from '../data/companies';

import './Home.css';

const Hero = () => (
  <div>
    <h1> Full stack web and mobile developper</h1>
    <p> I build scalable, maintainable and secure enterprise web and mobile applications for agencies, bluechips, start-ups and sometimes, myself.</p>
    <LinkContainer to='services'>
      <p> Check out my <a>services</a> </p>
    </LinkContainer>
    <LinkContainer to='portofolio'>
      <p>or my <a>portofolio</a> </p>
    </LinkContainer>
  </div>
)

const Technologies = ({ technologies }) => (
  <div>
    <h2>
      Technologies i build with :
    </h2>
    {technologies.map((technology, i) => <Technology key={i} technology={technology} />)}
  </div>
)

const Companies = ({ companies }) => (
  <div>
    <h2>
      Companies i have worked with with :
    </h2>
    {companies.map((company, i) => <Company key={i} company={company}/>)}
  </div>
)

const Home = () => (
  <Row className='home'>
    <Col xs={12} sm={6} className='introLeft'>
      <Hero />
      <Technologies technologies={technologies} />
      <Companies companies={companies} />
    </Col>
    <Col sm={6} xsHidden className='introRight'/>
  </Row>
)

export default Home;
