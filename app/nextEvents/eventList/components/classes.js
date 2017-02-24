/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Classes details.*
*/
import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';
import * as ROUTE_URL from '../../../constants/routeContants';

const Classes = (classesProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='desktopClassesList'>
      <Link to={ROUTE_URL.EVENT_DETAILS + '/' + classesProps.data.id}>
        <Col md={6} sm={6}>
          <h3 className='pull-left mb0 eventHeading'>{classesProps.data.className} </h3>
          <span className='pull-left eventOn'>{classesProps.data.startTime} to {classesProps.data.endTime}</span>
          <span className='pull-left eventOn'>{classesProps.data.startTime} to {classesProps.data.endTime}</span>
        </Col>
        <Col md={2} sm={2}>
          <span className='eventPlace'>{classesProps.data.meetingLocation}</span>
        </Col>
        <Col md={2} sm={1} className='text-center'>
          <span className='eventBy'>{classesProps.data.dateofOccurrence}</span>
        </Col>
      </Link>
    </div>
  </section>
);

export default Classes;
