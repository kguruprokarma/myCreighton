/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Outlook Quizze details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Quizze = (quizzeProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='desktopClassesList'>
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 classesHeading'>{quizzeProps.data.title} </h3>
        <span className='pull-left classOn'>{quizzeProps.data.dueDate}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='classPlace'>{quizzeProps.data.dueTime}</span>
      </Col>
      <Col md={2} sm={1} className='text-center'>
        <span className='classBy'>{quizzeProps.data.dueDate}</span>
      </Col>
    </div>
  </section>
);

export default Quizze;
