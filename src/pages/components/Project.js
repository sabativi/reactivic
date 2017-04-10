import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import './Project.css';
import Technology from './Technology';
import Quote from './Quote';

const Technologies = ({ technologies }) => (
  <div>
    {technologies.map((technology, i) => <Technology key={i} technology={technology} />)}
  </div>
)

Technologies.propTypes = {
  technologies: React.PropTypes.array,
}

const Project = ({ project, inverse, backgroundColor }) => (
  <div style={{backgroundColor: backgroundColor}}>
    <Row className='project'>
      <Col xs={12} md={6} mdPush={inverse ? 6 : 0}>
        <a href={project.link} >
          <Image src={project.image} responsive className='project-image'/>
        </a>
      </Col>
      <Col xs={12} md={6} mdPull={inverse ? 6 : 0}>
        <h3 className='text-center project-title' >
          <a className='blue' target="_blank" href={project.link}>
            {project.title}
          </a>
        </h3>
        <h4>{project.description}</h4>
        <Quote quote={project.quote} />
        <Technologies technologies={project.technos} />
      </Col>
    </Row>
  </div>
)

Project.propTypes = {
  project: React.PropTypes.object,
  inverse: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
}

export default Project;
