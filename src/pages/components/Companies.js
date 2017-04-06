import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import './Companies.css';

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
      <h2 className='text-center company-title'>
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

export default Companies;
