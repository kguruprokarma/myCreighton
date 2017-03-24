/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Outlook Quizze details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import * as ROUTE_URL from '../../../constants/routeContants';
import { convertDateFromTimeStamp } from '../../../common/utility';

const Quiz = (quizProps) => (
  <section className='quizzEvent' id='quizzEventList'>
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${quizProps.data.type}/${quizProps.data.sis_source_id}/${quizProps.data.assignment_id}`}>
      <div className='hidden-xs desktopEventsList'>
        <Col md={6} sm={6}>
          <h3 className='mb0 eventHeading'><span className='testIcon mr10'>&nbsp;</span> {quizProps.data.assign_title} <span className='eventOn'>{quizProps.data.ssrmeet_bldg_code === null ? 'N/A' : quizProps.data.ssrmeet_bldg_code}</span></h3>
          
        </Col>
        <Col md={2} sm={2}>
          <span className='eventPlace'>{quizProps.data.course_name}</span>
        </Col>
        <Col md={2} sm={2} className='text-center eventCol'>
          <span className='eventBy'>{convertDateFromTimeStamp(quizProps.data.assign_due)}</span>
        </Col>
      </div>
      <Row className='visible-xs mobileEventsList'>
        <Col xs={7}>
          <span className='eventOn'>{quizProps.data.ssrmeet_bldg_code === null ? 'N/A' : quizProps.data.ssrmeet_bldg_code}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='eventDate'>{convertDateFromTimeStamp(quizProps.data.assign_due)}</span>
        </Col>
        <Col xs={7}>
          <h3 className='mb0 eventHeading'><span className='testIcon mr5'>&nbsp;</span> {quizProps.data.assign_title}</h3>
        </Col>
        <Col xs={5} className='text-right'>
          &nbsp;
        </Col>
        <Col xs={7}>
          <span className='eventBy'>{quizProps.data.course_name}</span>
        </Col>
      </Row>
    </Link>
  </section>
);

export default Quiz;
