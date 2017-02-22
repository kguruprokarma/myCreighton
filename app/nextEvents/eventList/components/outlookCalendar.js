/*Created Date: - 21 -02 -2017
 *Usage of file: - This component is used to display Next Event Outlook Calendar details.*
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const OutlookCalendar = (outlookCalendarProps) => (
    <section className='classesWeek' id='classesWeekList'>
      <div className='desktopClassesList'>
        <Col md={6} sm={6}>
          <h3 className='pull-left mb0 classesHeading'>{outlookCalendarProps.data.title} </h3>
          <span className='pull-left classOn'>{outlookCalendarProps.data.startDate} to {outlookCalendarProps.data.endDate}</span>
        </Col>
        <Col md={2} sm={2}>
          <span className='classPlace'>{outlookCalendarProps.data.startTime} to {outlookCalendarProps.data.endTime}</span>
        </Col>
      </div>
    </section>
);

export default OutlookCalendar;
