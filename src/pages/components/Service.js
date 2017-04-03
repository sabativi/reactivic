import React from 'react';

const Service = ({ service }) => (
  <li>
    <h3>{service.title}</h3>
    <h6>{service.description}</h6>
  </li>
)

export default Service;
