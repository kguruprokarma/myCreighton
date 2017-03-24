/* Created Date: - 20th, Mar-2017
 * Merge the components in search result screen
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const result = (resultProps) => (
  <section className='openSansLight graybtBorder pt5 pb10 mb10 mt10' id='classesWeekList'>
    <Row>
      <Col md={9} sm={8}>
        <p className='cpmsDirProfName'>{resultProps.full_name}</p>
      </Col>
      <Col md={3} sm={4}>
        <p className='text-right cmpsDirTelNum'>{resultProps.phone}</p>
      </Col>
      <Col md={9} sm={9}>
        <div>
          <p className='cmpsDirTitle'>{resultProps.job_title}</p>
        </div>
        <p className='cpmsDirProfWrk' />
      </Col>
    </Row>
  </section>
);


export default result;