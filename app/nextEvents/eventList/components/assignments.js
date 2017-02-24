/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Assignments details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
//import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';

const Assignments = (assignmentProps) => (
  <section className='eventAssignments' id='eventAssignmentsList'>
    <div className='hidden-xs desktopEventsList'>
      <Link to={ROUTE_URL.EVENT_DETAILS + '/' + assignmentProps.data.type + '/' + assignmentProps.data.id}>
        <Col md={6} sm={6}>
          <h3 className='pull-left mb0 eventHeading'>{assignmentProps.data.title}</h3>
          <span className='pull-left eventOn'>{assignmentProps.data.dueDate}</span>
        </Col>
        <Col md={2} sm={2}>
          <span className='eventPlace'>{assignmentProps.data.class}</span>
        </Col>
        <Col md={2} sm={1}>
          <span className='eventBy'>&nbsp;</span>
        </Col>
        <Col md={2} sm={3}>
          <span className='eventOn'>Due {assignmentProps.data.dueTime} </span>
        </Col>
      </Link>
    </div>
    <Row className='visible-xs mobileEventsList'>
      <Col xs={7}>
        <span className='eventOn'>{assignmentProps.data.dueDate}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='eventBy'>sdafsda</span>
      </Col>
      <Col xs={7}>
        <h3 className='mb0 eventHeading'>{assignmentProps.data.title}</h3>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='eventDate'>dsafsda</span>
      </Col>
      <Col xs={7}>
        <span className='eventPlace'>dsfsdafsa</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='evetTime'>sdfsdf</span>
      </Col>
    </Row>
  </section>
);

export default Assignments;
