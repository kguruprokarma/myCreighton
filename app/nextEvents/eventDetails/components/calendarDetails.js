import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Mailto from 'react-mailto';
import { translateText } from '../../../common/translate';
import { convertTo24Format, convertDateFromTimeStamp, getDueTime } from '../../../common/utility';
import * as CommonConstants from '../../../constants/commonConstants';

const CalendarEventDetails = (calendarDetailProps) => {
  return (
    <div className='openSansLight fs1pt2 pb20'>
      <div className='graybtBorder pt10 pb10'>
        <h2>{calendarDetailProps.data.event_name}</h2>
        <p>{translateText('COMMON:CREIGHTON_CALENDAR_EVENT')}</p>
      </div>
      <div className='graybtBorder pt10 pb10'>
        <Row>
          <Col xs={7} sm={9}>
            <p>{calendarDetailProps.data.location}</p>
            {(calendarDetailProps.data.starttime && calendarDetailProps.data.endtime) ?<p>{convertTo24Format(calendarDetailProps.data.starttime.slice(0, 5).replace(':', ''))} to {convertTo24Format(calendarDetailProps.data.endtime.slice(0, 5).replace(':', ''))}</p>:(calendarDetailProps.data.allday_event === CommonConstants.TRUE_TEXT) ? <p>{translateText('common:ALL_DAY_TEXT')}</p>: <p>{translateText('common:NA_TEXT')}</p>}
          </Col>
          <Col xs={5} sm={3}>
            <p className='text-right'>{convertDateFromTimeStamp(calendarDetailProps.data.timeStamp)}</p>
            <p className='text-right'>{getDueTime(calendarDetailProps.data.timeStamp)}</p>
          </Col>
        </Row>
      </div>
      <div className='graybtBorder pt30 pb10 mb10'>{translateText('COMMON:EVENT_NOTES')}</div>
      <p className='calendarEventNotes mb20'>{calendarDetailProps.data.description}</p>
      <div className='contactInfo'>
        <p>{translateText('COMMON:CONTACT_INFO')}</p>
        <p>{calendarDetailProps.data.contactname}</p>
        <Mailto className='email pt10 mb30' email={calendarDetailProps.data.contactemail ? calendarDetailProps.data.contactemail : ''}>{calendarDetailProps.data.contactemail ? calendarDetailProps.data.contactemail : ''}</Mailto>
      </div>
    </div>
  );
};

export default CalendarEventDetails;