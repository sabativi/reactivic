import React from 'react';
import Technology from './Technology';

const Technologies = ({ technologies }) => (
  <div>
    {technologies.map((technology, i) => <Technology key={i} technology={technology} />)}
  </div>
)

const Project = ({ project }) => (
  <li>
    {project.title}
  </li>
)

export default Project;
