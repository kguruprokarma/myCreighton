/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Assignments details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';

const Assignments = (assignmentProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='desktopClassesList'>

     <Link to={ROUTE_URL.EVENT_DETAILS + '/'+ assignmentProps.data.type + '/' + assignmentProps.data.id }> 
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 classesHeading'>{assignmentProps.data.title} </h3>
        <span className='pull-left classOn'>{assignmentProps.data.date}</span>
        <span className='pull-left classOn'>{assignmentProps.data.dueDate} to {assignmentProps.data.dueTime}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='classPlace'>{assignmentProps.data.class}</span>
      </Col>
      </Link>
    </div>
  </section>
);

export default Assignments;
