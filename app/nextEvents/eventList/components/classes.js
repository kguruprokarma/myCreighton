/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Classes details.*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { translateText } from '../../../common/translate';
import { ConvertTo24Format, ConvertDateFromTimeStamp } from '../../../common/utility';
import * as ROUTE_URL from '../../../constants/routeContants';
import moment from 'moment';

const Classes = (classesProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='hidden-xs desktopClassesList'>
      {/*<Link to={`${ROUTE_URL.EVENT_DETAILS}/${quizProps.data.type}/${quizProps.data.sis_source_id}/${quizProps.data.assignment_id}`}>*/}
      <Link to={`${ROUTE_URL.EVENT_DETAILS}/${classesProps.data.type}/${classesProps.data.sis_source_id}/`}>
          <Col md={6} sm={6}>
            <h3 className='pull-left mb0 classesHeading'>{classesProps.data.course_title} {classesProps.data.course_number} </h3>
            <span className='pull-left classOn'>{moment(classesProps.data.timeStamp).fromNow()}</span>
          </Col>
          <Col md={2} sm={2}>
            <span className='classPlace'>{classesProps.data.class_held_build_desc}</span>
            <span className='classPlace'> {classesProps.data.class_room_code}</span>
          </Col>
          <Col md={2} sm={2} className='text-center'>
            <span className='classBy'>{ConvertDateFromTimeStamp(classesProps.data.timeStamp)}</span>
          </Col>
          <Col md={2} sm={2} className='text-right'>
            <div className='classTime'>{ConvertTo24Format(classesProps.data.class_begin_time)} - {ConvertTo24Format(classesProps.data.class_end_time)}</div>
          </Col>
      </Link>
    </div>
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${classesProps.data.type}/${classesProps.data.sis_source_id}`}>
    <Row className='visible-xs mobileClassesList row'>
        <Col xs={7}>
          <span className='classOn'>{moment(classesProps.data.timeStamp).fromNow()}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='classBy'>{ConvertDateFromTimeStamp(classesProps.data.timeStamp)}</span>
        </Col>
        <Col xs={7}>
          <h3 className='mb0 classesHeading'>{classesProps.data.course_title} {classesProps.data.course_number} </h3>
        </Col>
        <Col xs={7}>
          <span className='classPlace'>{classesProps.data.class_held_build_desc}</span>
          <span className='classPlace'> {classesProps.data.class_room_code}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='classTime'>{ConvertTo24Format(classesProps.data.class_begin_time)} - {ConvertTo24Format(classesProps.data.class_end_time)}</span>
        </Col>
      </Row>
    </Link>
  </section>
);

export default Classes;
