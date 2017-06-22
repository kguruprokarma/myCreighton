/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Classes details.*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { convertTo24Format, convertDateFromTimeStamp, getDueTime } from '../../../common/utility';
import * as ROUTE_URL from '../../../constants/routeContants';
import { translateText } from '../../../common/translate';
import * as CommonConstants from '../../../constants/commonConstants';

const mobileClass = (mobileProps) => (
  <Col xs={7}>
    <span className='classPlace'>{(mobileProps.data !== null && mobileProps.data.class_held_build_desc) ? mobileProps.data.class_held_build_desc : ''}</span>
    <span className='classPlace'> {(mobileProps.data !== null && mobileProps.data.class_room_code) ? mobileProps.data.class_room_code : ''}</span>
  </Col>
);
const mobileView = (mobileProps) => (
  <Row className='visible-xs mobileClassesList'>
    <Col xs={7}>
      <span className='classOn'>{(mobileProps.data.class_building_code !== CommonConstants.ONLINE_CLASSES && mobileProps.data !== null && mobileProps.data.timeStamp) ? getDueTime(mobileProps.data.timeStamp) : ''}</span>
    </Col>
    <Col xs={5} className='text-right'>
      <span className='classBy'>{convertDateFromTimeStamp((mobileProps.data !== null && mobileProps.data.startDate) ? mobileProps.data.startDate : '')}</span>
    </Col>
    <Col xs={7}>
      <h2 className='mb0 classesHeading'>{(mobileProps.data !== null && mobileProps.data.course_title) ? mobileProps.data.course_title : ''} {(mobileProps.data !== null && mobileProps.data.course_number) ? mobileProps.data.course_number : ''} </h2>
    </Col>
    {mobileClass(mobileProps)}
    <Col xs={5} className='text-right'>
      <span className='classTime'>{(mobileProps.data !== null && mobileProps.data.class_begin_time) ? convertTo24Format(mobileProps.data.class_begin_time) : translateText('common:COMMON_NA')} - {(mobileProps.data !== null && mobileProps.data.class_end_time) ? convertTo24Format(mobileProps.data.class_end_time) : translateText('common:COMMON_NA')}{mobileProps.data.class_building_code !== CommonConstants.ONLINE_CLASSES ? <span> {CommonConstants.TIMEZONE_CT}</span> : '' }</span>
    </Col>
  </Row>
);
const destopClass = (desktopProps) => (
  <Col md={2} sm={2}>
    <span className='classPlace'>{(desktopProps.data !== null && desktopProps.data.class_held_build_desc) ? desktopProps.data.class_held_build_desc : ''}</span>
    <span className='classPlace'> {(desktopProps.data !== null && desktopProps.data.class_room_code) ? desktopProps.data.class_room_code : ''}</span>
  </Col>
);
const desktopView = (desktopProps) => (
  <div className='hidden-xs desktopClassesList'>
    <Col md={5} sm={5}>
      <h2 className='mb10 classesHeading'>{(desktopProps.data !== null && desktopProps.data.course_title) ? desktopProps.data.course_title : ''} {(desktopProps.data !== null && desktopProps.data.course_number) ? desktopProps.data.course_number : ''} </h2>
      <p className='classOn'>{desktopProps.data && desktopProps.data.timeStamp ? getDueTime(desktopProps.data.timeStamp) : ''}</p>
    </Col>
    {destopClass(desktopProps)}
    <Col md={2} sm={2} className='text-center'>
      <span className='classBy'>{convertDateFromTimeStamp((desktopProps.data !== null && desktopProps.data.startDate) ? desktopProps.data.startDate : '')}</span>
    </Col>
    <Col md={3} sm={3} className='text-right'>
      <div className='classTime'>{(desktopProps.data !== null && desktopProps.data.class_begin_time !== null) ? convertTo24Format(desktopProps.data.class_begin_time) : translateText('common:COMMON_NA')} - {(desktopProps.data !== null && desktopProps.data.class_end_time !== null) ? convertTo24Format(desktopProps.data.class_end_time) : translateText('common:COMMON_NA')}{desktopProps.data.class_building_code !== CommonConstants.ONLINE_CLASSES ? <span> {CommonConstants.TIMEZONE_CT}</span> : '' }</div>
    </Col>
  </div>
);

const Classes = (classesProps) => (
  <article role='article' className='classesWeek'>
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${classesProps.data.type}/${classesProps.data.sis_source_id}/${classesProps.currentIndex}`}>
      {desktopView(classesProps)}     
      {mobileView(classesProps)}
    </Link>
  </article>
);

export default Classes;
