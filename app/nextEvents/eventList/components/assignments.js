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
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${assignmentProps.data.type}/${assignmentProps.data.id}`}>
      <div className='hidden-xs desktopEventsList'>
        <Col md={5} sm={5}>
          <h3 className='pull-left mb0 eventHeading'><span className='assignIcon mr10'>&nbsp;</span> {assignmentProps.data.title}</h3>
          <span className='pull-left eventOn'>Due {assignmentProps.data.dueTime}</span>
        </Col>
        <Col md={2} sm={2}>
          <span className='eventPlace'>{assignmentProps.data.class}</span>
        </Col>
        <Col md={2} sm={2} className='text-center'>
          <span className='eventDate'>{assignmentProps.data.dueDate}</span>
        </Col>
        <Col md={2} sm={2} className='text-center'>
          <span className='eventTime'>&nbsp;</span>
        </Col>
        <Col md={1} sm={1} className='text-center remove-list'>
          <span className='remove-icon'>&nbsp;</span>
          <p className='openSansBold fs0pt86'>Remove</p>
        </Col>
      </div>
      <Row className='visible-xs mobileEventsList'>
        <Col xs={7}>
          <span className='eventOn'>Due {assignmentProps.data.dueTime}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='eventDate'>{assignmentProps.data.dueDate}</span>
        </Col>
        <Col xs={7}>
          <h3 className='mb0 eventHeading'><span className='assignIcon mr5'>&nbsp;</span> {assignmentProps.data.title}</h3>
        </Col>
        <Col xs={5} className='text-right'>
          &nbsp;
        </Col>
        <Col xs={7}>
          <span className='eventBy'>{assignmentProps.data.class}</span>
        </Col>
        <Col xs={5} className='text-right'>
          &nbsp;
        </Col>
      </Row>
    </Link>
  </section>
);

export default Assignments;
