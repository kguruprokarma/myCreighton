/*Created Date: - 21 -02 -2017
 *Usage of file: - This component is used to display Next Event Outlook Calendar details.*
 */

import React from 'react';
import { Col } from 'react-bootstrap';

const OutlookCalendar = (outlookCalendarProps) => (
  <section className='eventOutlook' id='eventOutlookList'>
    <div className='hidden-xs desktopEventsList'>
      <Col md={6} sm={6}>
        <h3 className='pull-left mb0 eventHeading'>{outlookCalendarProps.data.title} </h3>
        <span className='pull-left eventOn'>{outlookCalendarProps.data.startDate}to {outlookCalendarProps.data.endDate}</span>
      </Col>
      <Col md={2} sm={2}>
        <span className='eventPlace'>{outlookCalendarProps.data.startTime}to {outlookCalendarProps.data.endTime}</span>
      </Col>
    </div>
  </section>
);

export default OutlookCalendar;
