/*Created Date: - 19th -01 -2017
 *Usage of file: - This component is used to display the class information .*
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';
import { convertTo24Format, scheduleDays } from '../../../common/utility';
import { translateText } from '../../../common/translate';
import * as CommonConstants from '../../../constants/commonConstants';
import * as HEADER from '../../../constants/headerTitleConstants';

const classInfo = (classInfoProps) => (
  <article role='article' className='classInfo'>
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
              <p>{scheduleDays(classInfoProps.class_schedule)} {convertTo24Format(classInfoProps.class_begin_time)} - {convertTo24Format(classInfoProps.class_end_time)}{classInfoProps.class_building_code !== CommonConstants.ONLINE_CLASSES ? <span> {CommonConstants.TIMEZONE_CT}</span> : '' }</p>
            </Col>
            <Col xs={6} className='text-right'>
              <p>{(classInfoProps.instructor_name !== null && classInfoProps.instructor_name.last_name) ? classInfoProps.instructor_name.last_name:''}</p>
              <p className='NextDate'><span>{translateText('NEXT')}</span>: {(classInfoProps.class_building_code !== CommonConstants.ONLINE_CLASSES && (classInfoProps.currentView === HEADER.EVENT_DETAILS || classInfoProps.currentView === HEADER.EVENT_LIST)) ? moment(classInfoProps.timeStamp).format('MMM DD') : (classInfoProps.nextDate?classInfoProps.nextDate:translateText('common:COMMON_NA'))}</p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </article>
);
export default classInfo;