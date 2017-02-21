/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Academic Milestones details.*
*/
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const AcademicMilestones = (academicMilestonesProps) => (
  <section className='classesWeek' id='classesWeekList'>
    <div className='desktopClassesList'>
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 classesHeading'>{academicMilestonesProps.data.title} </h3>
        <span className='pull-left classOn'>{academicMilestonesProps.data.startDate} to {academicMilestonesProps.data.endDate}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='classPlace'>{academicMilestonesProps.data.startTime} to {academicMilestonesProps.data.endTime}</span>
      </Col>
    </div>
  </section>
);

export default AcademicMilestones;
