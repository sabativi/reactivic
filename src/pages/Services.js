import React from 'react';
import Service from './components/Service';
import services from '../data/services';

const Services = () => (
  <ul>
    {services.map((service, i) => <Service key={i} service={service} />)}
  </ul>
)

export default Services;
