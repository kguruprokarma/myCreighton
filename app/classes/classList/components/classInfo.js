/*Created Date: - 19th -01 -2017
 *Usage of file: - This component is used to display current week class schedule .*
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';
import { convertTo24Format, scheduleDays } from '../../../common/utility';
import * as CommonConstants from '../../../constants/commonConstants';

const ClassInfo = (classInfoProps) => (
  <article role='article' className='classesWeek'>
    <div className='hidden-xs desktopClassesList'>
      <Col md={5} sm={5}>
        <h2 className='mb10 classesHeading'>{classInfoProps.data.course_title} {classInfoProps.data.course_number}</h2>
        <p className='classOn'>{classInfoProps.data.course_section}</p>
      </Col>
      <Col md={2} sm={2}>
        <div>
          <span className='classPlace'>{classInfoProps.data.class_held_build_desc}</span>
          <span className='classPlace'> {classInfoProps.data.class_room_code}</span>
        </div>
      </Col>
      <Col md={2} sm={2} className='text-center'>
        <span className='classBy'>{(classInfoProps.data.instructor_name !==null && classInfoProps.data.instructor_name.last_name) ? classInfoProps.data.instructor_name.last_name:''}</span>
      </Col>
      <Col md={3} sm={3} className='text-right'>
        {classInfoProps.data.class_building_code !== CommonConstants.ONLINE_CLASSES && <div>
          <div className='classTime'>{scheduleDays(classInfoProps.data.class_schedule)} {convertTo24Format(classInfoProps.data.class_begin_time)} - {convertTo24Format(classInfoProps.data.class_end_time)}<span> {CommonConstants.TIMEZONE_CT}</span></div>
          <div className='classDate'><span className='openSansRegular'>{translateText('çommon:NEXT')}:</span> {classInfoProps.data.nextDate}</div>
          </div>}
      </Col>
    </div>
    <Row className='visible-xs mobileClassesList'>
      <Col xs={7}>
        <span className='classOn'>{classInfoProps.data.course_section}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='classBy'>{(classInfoProps.data.instructor_name !==null && classInfoProps.data.instructor_name.last_name) ? classInfoProps.data.instructor_name.last_name:''}</span>
      </Col>
      <Col xs={7}>
        <h2 className='mb0 classesHeading'>{classInfoProps.data.course_title} {classInfoProps.data.course_number} </h2>
      </Col>
      <Col xs={5} className='text-right'>
        {classInfoProps.data.class_building_code !== CommonConstants.ONLINE_CLASSES && <span className='classDate'><span>{translateText('çommon:NEXT')}:</span> {classInfoProps.data.nextDate} </span>}
      </Col>
      <Col xs={7}>
        <span className='classPlace'>{classInfoProps.data.class_held_build_desc}</span>
        <span className='classPlace'> {classInfoProps.data.class_room_code}</span>
      </Col>
      <Col xs={5} className='text-right'>
        {classInfoProps.data.class_building_code !== CommonConstants.ONLINE_CLASSES && <span className='classTime'>{scheduleDays(classInfoProps.data.class_schedule)} {convertTo24Format(classInfoProps.data.class_begin_time)} - {convertTo24Format(classInfoProps.data.class_end_time)}<span> {CommonConstants.TIMEZONE_CT}</span></span>}
      </Col>
    </Row>
  </article>
);

export default ClassInfo;
