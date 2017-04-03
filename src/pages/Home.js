import React from 'react';
import {
  Jumbotron,
  Row,
  Col,
  Badge,
} from 'react-bootstrap';

import './Home.css';

const Hero = () => (
  <Jumbotron>
    <h1>Full stack web and mobile developper</h1>
    <p>I build scalable, maintainable and secure enterprise web and mobile applications for agencies, bluechips, start-ups and sometimes, myself.</p>
  </Jumbotron>
)

const Technologies = ({ technologies }) => (
  <div>
    <h2>
      Technologies i build with :
    </h2>
    {technologies.map((technologie, i) => <Badge key={i}>{technologie}</Badge>)}
  </div>
)

const Home = () => (
  <Row className='home'>
    <Col xs={12} sm={6} className='introLeft'>
      <Hero />
      <Technologies technologies={['NodeJS', 'Meteor', 'React', 'React Native', 'Mongo']}/>
    </Col>
    <Col sm={6} xsHidden className='introRight'/>
  </Row>
)

export default Home;
