/* Created on 22-feb-2017
 * To display the event details for classes
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
//import { translateText } from '../../../common/translate';

const Classes = (classDetails) => (
  <section>
    <Row  className='m-grayBorder'>
            <Col xs={12} className='pull-left eventDetailHeading'>
                  {classDetails.data.title}
            </Col>
    </Row>
    <Row>
    <Col xs={12}>
      <div className='graybtBorder pb10'>
        <Row className="eventContains">
          <Col xs={6}>
              <p>{classDetails.data.location}</p>
              <p>{classDetails.data.time}</p>
          </Col>
          <Col xs={6} className='text-right'>
            <p>{classDetails.data.startIn}</p>
            <p>{classDetails.data.startDate}</p>
          </Col>
          </Row>
       </div>
       </Col>
       </Row>
  </section>
);

export default Classes;