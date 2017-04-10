import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';
import './Companies.css';

const settings = {
  speed: 1000,
  autoplay: true,
  adaptiveHeight: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

const Companies = ({ companies }) => (
  <Row className='companies'>
    <Col xsHidden xs={12}>
      <h2 className='text-center company-title'>
        Companies I have worked with :
      </h2>
    </Col>
    <Col xsHidden xs={12} md={8} mdOffset={2}>
      <Slider {...settings} >
        {companies.map((company, i) => <div key={i}>
          <Image className='company' src={company.img}/>
        </div>)}
      </Slider>
    </Col>
  </Row>
)

export default Companies;
