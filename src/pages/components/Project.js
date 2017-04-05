import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

import './Project.css';
import Technology from './Technology';
import Quote from './Quote';

const Technologies = ({ text, technologies }) => (
  <div>
    {text} : {technologies.map((technology, i) => <Technology key={i} technology={technology} />)}
  </div>
)

Technologies.propTypes = {
  text: React.PropTypes.string,
  technologies: React.PropTypes.array,
}

const Project = ({ project, inverse, backgroundColor }) => (
  <div style={{backgroundColor: backgroundColor}}>
    <Row className='project'>
      <Col xs={12} sm={6} smPush={inverse ? 6 : 0}>
        <Image src={project.image} className='project-image'/>
      </Col>
      <Col xs={12} sm={6} smPull={inverse ? 6 : 0}>
        <h3 className='text-center'>
          <a target="_blank" href={project.link}>
            {project.title}
          </a>
        </h3>
        <p>{project.description}</p>
        <Quote quote={project.quote} />
        <Technologies text='Project done with' technologies={project.technos} />
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
