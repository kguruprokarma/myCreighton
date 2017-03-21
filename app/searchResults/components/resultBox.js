/* Created Date: - 20th, Mar-2017
 * Merge the components in search result screen
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const result = (resultProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='hidden-xs desktopClassesList'>
      <Col md={9} sm={9}>
        <h3 className='pull-left mb0 classesHeading'>{resultProps.name}</h3>
      </Col>
      <Col md={3} sm={3}>
        <span className='classDate'>{resultProps.phone}</span>
      </Col>
      <Col md={9} sm={9}>
        <div>
          <span className='classPlace'>{resultProps.post}</span>
        </div>
        <div>
          <span className='classPlace'> {resultProps.availability} </span>
        </div>
      </Col>
    </div>
    <Row className='visible-xs mobileClassesList row'>
      
      <Col xs={9}>
        <h3 className='mb0 classesHeading'>{resultProps.name}</h3>
      </Col>
      <Col xs={3} className='text-right'>
        <span className='classDate'><span>{resultProps.phone} </span> </span>
      </Col>
      <Col xs={9}>
        <div>
          <span className='classPlace'>{resultProps.post}</span>
        </div>
        <div>
          <span className='classPlace'> {resultProps.availability} </span>
        </div>
      </Col>
      <Col xs={3} className='text-right' />
    </Row>
  </section>
  );


export default result;