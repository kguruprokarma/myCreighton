/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const FacultyAppointment = (facultyProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:INSTRUCTION')}</h3>
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'>
        <label htmlFor={translateText('common:CURRENT_COURSES')}>{translateText('common:CURRENT_COURSES')}</label>
      </Col>
      <Col xs={8} md={9} sm={8} className='dataField'>
       {facultyProps.data.map((course) => ( 
                    
           <div> {course.course_number}  {course.course_title}</div>
  
        ))}
        </Col>
    </Row>
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'>
        <label htmlFor={translateText('common:TEACHING_ASSISTANTS')}>{translateText('common:TEACHING_ASSISTANTS')}</label>
      </Col>
      <Col xs={8} md={9} sm={8} className='dataField' />
    </Row>
  </article>
);

export default FacultyAppointment;