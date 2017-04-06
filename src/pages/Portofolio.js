import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Project from './components/Project';
import projects from '../data/projects';
import Header from '../layouts/Header';
import colors from '../colors';
import './Portofolio.css';

const Portofolio = () => (
  <div className='portofolio'>
    <Header rightSide={
      <Col xs={12} sm={8} >
        <h1 className='text-center sub-title blue playbook'> Major projects I took part and I am particularly proud of.</h1>
      </Col>
    }/>
    <Row>
      {projects.map((project, i) =>
        <Project key={i}
          project={project}
          backgroundColor={i%2 === 0 ? colors.white : colors.paleGrey}
          inverse={i%2 === 0}
      />)}
    </Row>
  </div>
)

export default Portofolio;
