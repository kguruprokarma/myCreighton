import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const instructorDetail = () => {
  return (
    <div>
      <Row>
        <Col>
          <span className='line6'>INSTRUCTOR(S)</span></Col>
        <Col>
          <a className='text-right'>Gary Johnson</a>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <span className='contact'>Contact:</span>
        </Col>
        <Col xs={8}>
          <a className='text-right'>402.280.3944</a></Col>
      </Row>
      <Row>
        <Col xs={4}>
          <span className='ofc'>Office:</span></Col>
        <Col xs={8}>
          <span className='text-right'>Building Rm 143</span>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <span className='Time'>Hours:</span>
        </Col>
        <Col xs={8}>
          <p className='Time1'>9:00 a.m. to 3:00 p.m. Mon</p>
          <p className='Time2'>1:00 p.m. to 5:00 p.m. Thur</p>
          <a className='Text'>Make an appointment</a>
        </Col>
      </Row>
      <Grid fluid>
        <p className='text-left'>EVENT NOTES</p>
      </Grid>
    </div>
  );
};

export default instructorDetail;
