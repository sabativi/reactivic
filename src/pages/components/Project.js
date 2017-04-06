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
      <Col xs={12} sm={6} smPush={inverse ? 6 : 0}>
        <Image src={project.image} className='project-image'/>
      </Col>
      <Col xs={12} sm={6} smPull={inverse ? 6 : 0}>
        <h3 className='text-center ' >
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
