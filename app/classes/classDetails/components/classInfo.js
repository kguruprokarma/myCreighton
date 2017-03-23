/*Created Date: - 19th -01 -2017
 *Usage of file: - This component is used to display the class information .*
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { convertTo24Format, getScheduledNextDate } from '../../../common/utility';
import { translateText } from '../../../common/translate';

const classInfo = (classInfoProps) => (
  <article className='classInfo'>
    <Row>
      <Col xs={12}>
        <div className='graybtBorder mb10 pb10'>
          <h3 className='classDetailHeading mb0'>{classInfoProps.course_title} {classInfoProps.course_number}</h3>
          <p className='classDetialOn'>{classInfoProps.course_section}</p>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <div className='graybtBorder pb10'>
          <Row>
            <Col xs={6}>
              <p>{classInfoProps.class_held_build_desc} {classInfoProps.class_room_code}</p>
              <p>{classInfoProps.class_schedule} {convertTo24Format(classInfoProps.class_begin_time)} - {convertTo24Format(classInfoProps.class_end_time)}</p>
            </Col>
            <Col xs={6} className='text-right'>
              <p>{classInfoProps.instructor_name.last_name}</p>
              <p><span>{translateText('NEXT')}</span>: {getScheduledNextDate(classInfoProps.class_schedule)}</p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </article>
);
export default classInfo;