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
      <Col xs={12} md={8} >
        <h1 className='text-center sub-title blue playbook'> Major projects I took part and I am particularly proud of.</h1>
      </Col>
    }/>
    <hr />
    <Row>
      {projects.map((project, i) =>
        <Project key={i}
          project={project}
          backgroundColor={i%2 === 0 ? colors.white : colors.paleGrey}
          inverse={i%2 === 0}
      />)}
    </Row>
    <hr />
    <Row>
      <h1 className='blue text-center'>
        Your project here ?
      </h1>
      <h3 className='blue text-center'>
        I am available for hire !
      </h3>
      <h4 className='text-center'>
        Email me : <a href='mailto:victor@reactivic.com' className='blue'>victor@reactivic.com</a> or call me <a className='blue'>+336 32 31 51 38 </a>
      </h4>
    </Row>
  </div>
)

export default Portofolio;
