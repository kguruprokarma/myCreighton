/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Outlook Quizze details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Quizze = (quizzeProps) => (
  <section className='quizzEvent' id='quizzEventList'>
    <div className='hidden-xs desktopEventsList'>
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 eventHeading'>{quizzeProps.data.title} </h3>
        <span className='pull-left eventOn'>{quizzeProps.data.dueDate}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='eventPlace'>{quizzeProps.data.dueTime}</span>
      </Col>
      <Col md={2} sm={1} className='text-center'>
        <span className='eventBy'>{quizzeProps.data.dueDate}</span>
      </Col>
    </div>
    <Row className='visible-xs mobileEventsList'>
      <Col xs={7}>
        <span className='eventOn'>{quizzeProps.data.date}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='eventBy'>{quizzeProps.data.meetingLocation}</span>
      </Col>
      <Col xs={7}>
        <h3 className='mb0 eventHeading'>{quizzeProps.data.title}</h3>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='eventDate'>{quizzeProps.data.dateofOccurrence}</span>
      </Col>
      <Col xs={7}>
        <span className='eventPlace'>dsfsdafsa</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='evetTime'>{quizzeProps.data.startTime} to {quizzeProps.data.endTime}</span>
      </Col>
    </Row>
  </section>
);

export default Quizze;
