/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display current week class schedule .*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const ClassInfo = (classInfoProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='hidden-xs desktopClassesList'>
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 classesHeading'>{classInfoProps.data.name} </h3>
        <span className='pull-left classOn'>{classInfoProps.data.on}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='classPlace'>{classInfoProps.data.place}</span>
      </Col>
      <Col md={2} sm={1} className='text-center'>
        <span className='classBy'>{classInfoProps.data.by}</span>
      </Col>
      <Col md={2} sm={3} className='text-right'>
        <div className='classTime'>{classInfoProps.data.recurrence} {classInfoProps.data.time}</div>
        <div className='classDate'><span className='openSansRegular'>{translateText('çommon:NEXT')}:</span> {classInfoProps.data.date}</div>
      </Col>
    </div>
    <Row className='visible-xs mobileClassesList'>
      <Col xs={7}>
        <span className='classOn'>{classInfoProps.data.on}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='classBy'>{classInfoProps.data.by}</span>
      </Col>
      <Col xs={7}>
        <h3 className='mb0 classesHeading'>{classInfoProps.data.name} </h3>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='classDate'><label htmlFor='next'>{translateText('common:NEXT')}:</label> {classInfoProps.data.date}</span>
      </Col>
      <Col xs={7}>
        <span className='classPlace'>{classInfoProps.data.place}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='classTime'>{classInfoProps.data.recurrence} {classInfoProps.data.time}</span>
      </Col>
    </Row>
  </section>
);

export default ClassInfo;
