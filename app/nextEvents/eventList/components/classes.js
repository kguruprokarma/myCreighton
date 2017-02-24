/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Classes details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import * as ROUTE_URL from '../../../constants/routeContants';

const Classes = (classesProps) => (
  <section className='eventClasses' id='eventsClassesList'>
    <div className='hidden-xs desktopEventsList'>
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 eventHeading'>{classesProps.data.className} </h3>
        <span className='eventOn pull-left'>{classesProps.data.date}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='eventPlace'>{classesProps.data.meetingLocation}</span>
      </Col>
      <Col md={2} sm={1} className='text-center'>
        <span className='eventBy'>{classesProps.data.dateofOccurrence}</span>
      </Col>
      <Col md={2} sm={3} className='text-right'>
        <span className='eventOn'>{classesProps.data.startTime} to {classesProps.data.endTime}</span>
      </Col>
    </div>
    <Row className='visible-xs mobileEventsList'>
      <Col xs={7}>
        <span className='eventOn'>{classesProps.data.date}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='eventBy'>{classesProps.data.meetingLocation}</span>
      </Col>
      <Col xs={7}>
        <h3 className='mb0 eventHeading'>{classesProps.data.className}</h3>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='eventDate'>{classesProps.data.dateofOccurrence}</span>
      </Col>
      <Col xs={7}>
        <span className='eventPlace'>dsfsdafsa</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='evetTime'>{classesProps.data.startTime} to {classesProps.data.endTime}</span>
      </Col>
    </Row>
  </section>
);

export default Classes;
