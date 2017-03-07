/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Outlook Quizze details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import * as ROUTE_URL from '../../../constants/routeContants';

const Quiz = (quizProps) => (
  <section className='quizzEvent' id='quizzEventList'>
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${quizProps.data.type}/${quizProps.data.id}`}>
      <div className='hidden-xs desktopEventsList'>
        <Col md={5} sm={5}>
          <h3 className='pull-left mb0 eventHeading'><span className='testIcon mr10'>&nbsp;</span> {quizProps.data.title} </h3>
          <span className='pull-left eventOn'>{quizProps.data.caption}</span>
        </Col>
        <Col md={2} sm={2}>
          <span className='eventPlace'>{quizProps.data.class}</span>
        </Col>
        <Col md={2} sm={2} className='text-center'>
          <span className='eventDate'>{quizProps.data.dueDate}</span>
        </Col>
        <Col md={2} sm={2} className='text-right'>
          <span className='eventTime'>&nbsp;</span>
        </Col>
        <Col md={1} sm={1} className='text-center remove-list'>
          <span className='remove-icon'>&nbsp;</span>
          <p className='openSansBold fs0pt86'>Remove</p>
        </Col>
      </div>
      <Row className='visible-xs mobileEventsList'>
        <Col xs={7}>
          <span className='eventOn'>{quizProps.data.caption}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='eventDate'>{quizProps.data.meetingLocation}</span>
        </Col>
        <Col xs={7}>   
          <h3 className='mb0 eventHeading'><span className='testIcon mr5'>&nbsp;</span> {quizProps.data.title}</h3>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='eventDate'>{quizProps.data.dueDate}</span>
        </Col>
        <Col xs={7}>
          <span className='eventBy'>{quizProps.data.class}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='eventTime'>{quizProps.data.startTime}- {quizProps.data.endTime}</span>
        </Col>
      </Row>
    </Link>
  </section>
);

export default Quiz;
