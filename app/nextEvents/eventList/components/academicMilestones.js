/*Created Date: - 21 -02 -2017
*Usage of file: - This component is used to display Next Event Academic Milestones details.*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AcademicMilestones = (academicMilestonesProps) => (
  <section role='region' className='academicMilestone' id='academicMilestoneList'>
    <div className='hidden-xs desktopEventsList'>
      <Col md={5} sm={5}>
        <h2 className='mb10 eventHeading'>{academicMilestonesProps.data.title}</h2>
        <p className=' eventOn'>{academicMilestonesProps.data.startDate}to {academicMilestonesProps.data.endDate}</p>
      </Col>
      <Col md={2} sm={2}>
        <span className='eventPlace'>{academicMilestonesProps.data.dateofOccurrence}</span>
      </Col>
      <Col md={2} sm={2} className='text-center'>
        <span className='eventDate'>{academicMilestonesProps.data.dateofOccurrence}</span>
      </Col>
      <Col md={3} sm={3} className='text-right'>
        <span className='eventTime'>{academicMilestonesProps.data.startTime}to {academicMilestonesProps.data.endTime}</span>
      </Col>
    
    </div>
    <Row className='visible-xs mobileEventsList'>
      <Col xs={7}>
        <span className='eventOn'>{academicMilestonesProps.data.date}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='eventDate'>{academicMilestonesProps.data.meetingLocation}</span>
      </Col>
      <Col xs={7}>
        <h3 className='mb0 eventHeading'>{academicMilestonesProps.data.title}</h3>
      </Col>
      <Col xs={5} className='text-right'>
        &nbsp;
      </Col>
      <Col xs={7}>
        <span className='eventBy'>{academicMilestonesProps.data.dateofOccurrence}</span>
      </Col>
      <Col xs={5} className='text-right'>
        <span className='eventTime'>{academicMilestonesProps.data.startTime}to {academicMilestonesProps.data.endTime}</span>
      </Col>
    </Row>
  </section>
);

export default AcademicMilestones;
