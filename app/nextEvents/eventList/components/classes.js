/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Classes details.*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { convertTo24Format, convertDateFromTimeStamp, getDueTime } from '../../../common/utility';
import * as ROUTE_URL from '../../../constants/routeContants';
import * as CommonConstants from '../../../constants/commonConstants';

const Classes = (classesProps) => (
  <article role='article' className='classesWeek'>
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${classesProps.data.type}/${classesProps.data.sis_source_id}/${classesProps.currentIndex}`}>
      <div className='hidden-xs desktopClassesList'>
        <Col md={5} sm={5}>
          <h2 className='mb10 classesHeading'>{(classesProps.data !== null && classesProps.data.course_title) ? classesProps.data.course_title : ''} {(classesProps.data !== null && classesProps.data.course_number) ? classesProps.data.course_number : ''} </h2>
          <p className='classOn'>{classesProps.data && classesProps.data.timeStamp ? getDueTime(classesProps.data.timeStamp) : ''}</p>
        </Col>
        <Col md={2} sm={2}>
          <span className='classPlace'>{(classesProps.data !== null && classesProps.data.class_held_build_desc) ? classesProps.data.class_held_build_desc : ''}</span>
          <span className='classPlace'> {(classesProps.data !== null && classesProps.data.class_room_code) ? classesProps.data.class_room_code : ''}</span>
        </Col>
        <Col md={2} sm={2} className='text-center'>
          <span className='classBy'>{convertDateFromTimeStamp((classesProps.data !== null && classesProps.data.timeStamp) ? classesProps.data.timeStamp : '')}</span>
        </Col>
        <Col md={3} sm={3} className='text-right'>
          <div className='classTime'>{(classesProps.data !== null && classesProps.data.class_begin_time !== null) ? convertTo24Format(classesProps.data.class_begin_time) : 'N/A'} - {(classesProps.data !== null && classesProps.data.class_end_time !== null) ? convertTo24Format(classesProps.data.class_end_time) : 'N/A'}<span> {CommonConstants.TIMEZONE_CT}</span></div>
        </Col>
      </div>
      <Row className='visible-xs mobileClassesList'>
        <Col xs={7}>
          <span className='classOn'>{getDueTime((classesProps.data !== null && classesProps.data.timeStamp) ? classesProps.data.timeStamp : '')}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='classBy'>{convertDateFromTimeStamp((classesProps.data !== null && classesProps.data.timeStamp) ? classesProps.data.timeStamp : '')}</span>
        </Col>
        <Col xs={7}>
          <h2 className='mb0 classesHeading'>{(classesProps.data !== null && classesProps.data.course_title) ? classesProps.data.course_title : ''} {(classesProps.data !== null && classesProps.data.course_number) ? classesProps.data.course_number : ''} </h2>
        </Col>
        <Col xs={7}>
          <span className='classPlace'>{(classesProps.data !== null && classesProps.data.class_held_build_desc) ? classesProps.data.class_held_build_desc : ''}</span>
          <span className='classPlace'> {(classesProps.data !== null && classesProps.data.class_room_code) ? classesProps.data.class_room_code : ''}</span>
        </Col>
        <Col xs={5} className='text-right'>
          <span className='classTime'>{convertTo24Format((classesProps.data !== null && classesProps.data.class_begin_time) ? classesProps.data.class_begin_time : '')} - {classesProps.data !== null && classesProps.data.class_end_time ? convertTo24Format(classesProps.data.class_end_time) : ''}<span> {CommonConstants.TIMEZONE_CT}</span></span>
        </Col>
      </Row>
    </Link>
  </article>
);

export default Classes;
