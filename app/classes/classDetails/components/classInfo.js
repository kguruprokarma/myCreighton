/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the class information .*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ClassInfo = (classInfoProps) => (
  <article className='classInfo'>
    <Row>
      <Col xs={12}>
        <div className='m-grayBorder'>
          <h3 className='pull-left classDetailHeading'>{classInfoProps.name} </h3>
          <p className='pull-left classDetialOn'>{classInfoProps.on}</p>
        </div>
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <div className='graybtBorder pb10'>
          <Row>
            <Col xs={6}>
              <p>{classInfoProps.place}</p>
              <p>{classInfoProps.recurrence} {classInfoProps.time}</p>
            </Col>
            <Col xs={6} className='text-right'>
              <p>{classInfoProps.by}</p>
              <p>Next: {classInfoProps.date}</p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </article>
);
export default ClassInfo;