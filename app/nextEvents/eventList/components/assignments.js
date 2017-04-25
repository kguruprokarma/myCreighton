/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Assignments details.*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import * as ROUTE_URL from '../../../constants/routeContants';
import { convertDueDateTimeStamp, convertDateFromTimeStamp } from '../../../common/utility';
import { translateText } from '../../../common/translate';

const Assignments = (assignmentProps) => (
  <section role='region' className='eventAssignments'>
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${assignmentProps.data.type}/${assignmentProps.data.sis_source_id}/${assignmentProps.data.assignment_id}/${assignmentProps.currentIndex}`}>
      <div className='hidden-xs desktopEventsList'>
        <Col md={6} sm={6}>
          <h3 className='mb0 eventHeading'><span className='assignIcon mr10'>&nbsp;</span> {(assignmentProps.data!==null && assignmentProps.data.assign_title) ? assignmentProps.data.assign_title:''} <span className='eventOn'><span>{translateText('DUE')} </span>{convertDueDateTimeStamp((assignmentProps.data !==null && assignmentProps.data.assign_due)?assignmentProps.data.assign_due:'')}</span></h3>
        </Col>
        <Col md={2} sm={2}>
          <span className='eventPlace'>{(assignmentProps.data!==null && assignmentProps.data.course_name)?assignmentProps.data.course_name:''}</span>
        </Col>
        <Col md={2} sm={2} className='text-center'>
          <span className='eventBy'>{convertDateFromTimeStamp((assignmentProps.data!==null && assignmentProps.data.assign_due) ? assignmentProps.data.assign_due:'')}</span>
        </Col>
        <Col md={2} sm={2} className='text-center'>
          <span className='eventTime'>&nbsp;</span>
        </Col>
      </div>
      <Row className='visible-xs mobileEventsList'>
        <Col xs={7}>
          <span className='eventOn'>Due {convertDueDateTimeStamp((assignmentProps.data!==null && assignmentProps.data.assign_due) ? assignmentProps.data.assign_due :'')}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='eventDate'>{convertDateFromTimeStamp((assignmentProps.data !==null && assignmentProps.data.assign_due)?assignmentProps.data.assign_due:'')}</span>
        </Col>
        <Col xs={7}>
          <h3 className='mb0 eventHeading'><span className='assignIcon mr5'>&nbsp;</span> {assignmentProps.data.assign_title}</h3>
        </Col>
        <Col xs={5} className='text-right'>
          &nbsp;
        </Col>
        <Col xs={7}>
          <span className='eventBy'>{(assignmentProps.data!==null && assignmentProps.data.course_name)?assignmentProps.data.course_name:''}</span>
        </Col>
        <Col xs={5} className='text-right'>
          &nbsp;
        </Col>
      </Row>
    </Link>
  </section>
);

export default Assignments;
