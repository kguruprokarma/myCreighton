/*Created Date: - 19th -01 -2017
 *Usage of file: - This component is used to display the class information .*
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { ConvertTo24Format, ScheduleDays, GetScheduledNextDate } from '../../../common/utility';

const ClassInfo = (classInfoProps) => (
    <article className='classInfo'>
      <Row>
        <Col xs={12}>
          <div className='m-grayBorder'>
            <h3 className='pull-left classDetailHeading'>{classInfoProps.course_title} {classInfoProps.course_number}</h3>
            <p className='pull-left classDetialOn'>{classInfoProps.course_section}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div className='graybtBorder pb10'>
            <Row>
              <Col xs={6}>
                <p>{classInfoProps.class_held_build_desc} {classInfoProps.class_room_code}</p>
                <p>{classInfoProps.class_schedule} {ConvertTo24Format(classInfoProps.class_begin_time)} - {ConvertTo24Format(classInfoProps.class_end_time)}</p>
              </Col>
              <Col xs={6} className='text-right'>
                <p>{classInfoProps.instructor_name.last_name}</p>
                <p>Next: {GetScheduledNextDate(classInfoProps.class_schedule)}</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </article>
);
export default ClassInfo;