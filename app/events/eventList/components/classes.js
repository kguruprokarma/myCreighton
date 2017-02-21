/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Classes details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const Classes = (classesProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='desktopClassesList'>
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 classesHeading'>{classesProps.data.className} </h3>
        <span className='pull-left classOn'>{classesProps.data.startTime} to {classesProps.data.endTime}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='classPlace'>{classesProps.data.meetingLocation}</span>
      </Col>
      <Col md={2} sm={1} className='text-center'>
        <span className='classBy'>{classesProps.data.dateofOccurrence}</span>
      </Col>
    </div>
  </section>
);

export default Classes;
