/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const FacultyAppointment = (facultyProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:INSTRUCTION')}</h3>
    <BasicRow displayName={translateText('common:STATUS')} displayValue={facultyProps.data.status} />
    <BasicRow displayName={translateText('common:CREDIT_HOURS')} displayValue={facultyProps.data.creditHours} />
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'>
        <label htmlFor={translateText('common:CURRENT_COURSES')}>{translateText('common:CURRENT_COURSES')}</label>
      </Col>
      <Col xs={8} md={9} sm={8} className='dataField'>
        {facultyProps.data.currentCourses.map((course) => (
          <div>{course.course_name}</div>
        ))}
      </Col>
    </Row>
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'>
        <label htmlFor={translateText('common:PAST_COURSES')}>{translateText('common:PAST_COURSES')}</label>
      </Col>
      <Col xs={8} md={9} sm={8} className='dataField'>
        {facultyProps.data.pastCourses.map((course) => (
          <div>{course.course_name}</div>
        ))}
      </Col>
    </Row>
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'>
        <label htmlFor={translateText('common:TEACHING_ASSISTANTS')}>{translateText('common:TEACHING_ASSISTANTS')}</label>
      </Col>
      <Col xs={8} md={9} sm={8} className='dataField'>
        {facultyProps.data.teachingAssistants.map((assit) => (
          <div>{assit.assit_name}</div>
        ))}
      </Col>
    </Row>
  </article>
);

export default FacultyAppointment;