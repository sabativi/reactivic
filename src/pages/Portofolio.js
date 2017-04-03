import React from 'react';
import Project from './components/Project';
import projects from '../data/projects';

const Portofolio = () => (
  <div>
    <h2>Portofolio</h2>
    <ul>
      {projects.map((project, i) => <Project key={i} project={project} />)}
    </ul>
  </div>
)

export default Portofolio;
