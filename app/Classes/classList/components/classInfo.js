/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display current week class schedule .*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';
import { ConvertTo24Format, ScheduleDays, GetScheduledNextDate } from '../../../common/utility';

const ClassInfo = (classInfoProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='hidden-xs desktopClassesList'>
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 classesHeading'>{classInfoProps.data.course_title} {classInfoProps.data.course_number} </h3>
        <span className='pull-left classOn'>{classInfoProps.data.course_section}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='classPlace'>{classInfoProps.data.class_held_build_desc}</span>
        <span className='classPlace'> {classInfoProps.data.class_room_code}</span>
      </Col>
      <Col md={2} sm={1} className='text-center'>
        <span className='classBy'>{classInfoProps.data.instructor_name.first_name}</span>
      </Col>
      <Col md={2} sm={3} className='text-right'>
        <div className='classTime'>{ScheduleDays(classInfoProps.data.class_schedule)} {ConvertTo24Format(classInfoProps.data.class_begin_time)} - {ConvertTo24Format(classInfoProps.data.class_end_time)}</div>
        <div className='classDate'><span className='openSansRegular'>{translateText('çommon:NEXT')}:</span> {GetScheduledNextDate(classInfoProps.data.class_schedule)}</div>
      </Col>
    </div>
    <Row className='visible-xs mobileClassesList row'>
      <Col xs={7}>
        <span className='classOn'>{classInfoProps.data.course_section}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='classBy'>{classInfoProps.data.instructor_name.first_name}</span>
      </Col>
      <Col xs={7}>
        <h3 className='mb0 classesHeading'>{classInfoProps.data.course_title} {classInfoProps.data.course_number} </h3>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='classDate'><span>{translateText('çommon:NEXT')}:</span> {GetScheduledNextDate(classInfoProps.data.class_schedule)} </span>
      </Col>
      <Col xs={7}>
        <span className='classPlace'>{classInfoProps.data.class_held_build_desc}</span>
        <span className='classPlace'> {classInfoProps.data.class_room_code}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='classTime'>{ScheduleDays(classInfoProps.data.class_schedule)} {ConvertTo24Format(classInfoProps.data.class_begin_time)} - {ConvertTo24Format(classInfoProps.data.class_end_time)}</span>
      </Col>
    </Row>
  </section>
);

export default ClassInfo;
