import React from 'react';
import {
  Jumbotron,
  Row,
  Col,
  Badge,
  Grid
} from 'react-bootstrap';

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
  <Grid>
    <Row>
      <Col xs={12} sm={8} smOffset={2} >
        <Hero />
      </Col>
      <Col xs={12} sm={8} smOffset={2} >
        <Technologies technologies={['NodeJS', 'Meteor', 'React', 'React Native', 'Mongo']}/>
      </Col>
    </Row>
  </Grid>
)

export default Home;
