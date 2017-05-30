import React from 'react';
import { Row, Col } from 'react-bootstrap';
import talks from '../data/talks';
import Header from '../layouts/Header';
import colors from '../colors';
import './Talk.css'

const Talk = ({ talk, inverse, backgroundColor }) => (
  <div style={{backgroundColor: backgroundColor}}>
    <Row className='talk'>
      <Col xs={12} md={6} mdPush={inverse ? 6 : 0}>
        <div className='embed-responsive embed-responsive-4by3' dangerouslySetInnerHTML={{__html: talk.slides}} />
      </Col>
      <Col xs={12} md={6} mdPull={inverse ? 6 : 0}>
        <h3 className='text-center project-title' >
          {talk.title}
        </h3>
        <h5> Given in {talk.date}</h5>
        <h4>{talk.description}</h4>
      </Col>
    </Row>
  </div>
)

const TalksPage = () => (
  <Row className='service-page'>
    <Header rightSide={
      <Col xs={12} sm={8} >
        <h1 className='text-center title blue playbook'> Some talks I gave</h1>
      </Col>
    }/>
  {talks.map((talk, i) =>
    <Talk
      key={i}
      inverse={i%2 === 0}
      backgroundColor={i%2 === 0 ? colors.white : colors.paleGrey}
      talk={talk}
    />)}
  </Row>
)

export default TalksPage;
