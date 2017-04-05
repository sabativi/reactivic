import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import Project from './components/Project';
import projects from '../data/projects';
import Header from '../layouts/Header';
import companies from '../data/companies';
import colors from '../colors';

import './Portofolio.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: true,
};

const Companies = ({ companies }) => (
  <Row className='companies'>
    <Col xs={12}>
      <h2 className='text-center'>
        Companies I have worked with :
      </h2>
    </Col>
    <Col xs={12} sm={8} smOffset={2}>
      <Slider {...settings} >
        {companies.map((company, i) => <div key={i}>
          <Image className='company' src={company.img}/>
        </div>)}
      </Slider>
    </Col>
  </Row>
)

const Portofolio = () => (
  <div className='portofolio'>
    <Header rightSide={
      <Col xs={12} sm={8} >
        <h1 className='text-center'> My portofolio </h1>
      </Col>
    }/>
    <Row>
      {projects.map((project, i) =>
        <Project key={i}
          project={project}
          backgroundColor={i%2 === 0 ? colors.white : colors.blueLight}
          inverse={i%2 === 0}
      />)}
    </Row>
    <Companies companies={companies} />
  </div>
)

export default Portofolio;
