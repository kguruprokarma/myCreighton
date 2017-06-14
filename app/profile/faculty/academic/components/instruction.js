/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const FacultyAppointment = (facultyProps) => (
  <article role='article' className='profileRow mt30'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:INSTRUCTION')}</h2>
    <BasicRow displayName={translateText('common:STATUS')} displayValue='' />
    <BasicRow displayName={translateText('common:CREDIT_HOURS')} displayValue='' />
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'>
        <label htmlFor={translateText('common:CURRENT_COURSES')}>{translateText('common:CURRENT_COURSES')}</label>
      </Col>
      <Col xs={8} md={9} sm={8} className='dataField'>
        {facultyProps.data.map((course) => (
          <div key={course.course_number}> {course.course_number} {course.course_title}</div>
        ))}
      </Col>
    </Row>
    <BasicRow displayName={translateText('common:PAST_COURSES')} displayValue='' />
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'>
        <label htmlFor={translateText('common:TEACHING_ASSISTANTS')}>{translateText('common:TEACHING_ASSISTANTS')}</label>
      </Col>
      <Col xs={8} md={9} sm={8} className='dataField'>
        &nbsp;
      </Col>
    </Row>
  </article>
);

export default FacultyAppointment;
