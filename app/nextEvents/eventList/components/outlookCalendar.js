/*Created Date: - 21 -02 -2017
 *Usage of file: - This component is used to display Next Event Outlook Calendar details.*
 */

import React from 'react';
import { Col } from 'react-bootstrap';

const OutlookCalendar = (outlookCalendarProps) => (
  <section role='region' className='eventOutlook' id='eventOutlookList'>
    <div className='hidden-xs desktopEventsList'>
      <Col md={6} sm={6}>
        <h3 className='mb0 eventHeading'>{outlookCalendarProps.data.title} <span className='eventOn'>{outlookCalendarProps.data.startDate}to {outlookCalendarProps.data.endDate}</span></h3>        
      </Col>
      <Col md={2} sm={2}>
        <span className='eventPlace'>{outlookCalendarProps.data.startTime}to {outlookCalendarProps.data.endTime}</span>
      </Col>
    </div>
  </section>
);

export default OutlookCalendar;
