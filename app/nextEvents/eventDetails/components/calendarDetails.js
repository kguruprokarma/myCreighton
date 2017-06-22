import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Mailto from 'react-mailto';
import { translateText } from '../../../common/translate';
import { convertTo24Format, convertDateFromTimeStamp, getDueTime } from '../../../common/utility';
import * as CommonConstants from '../../../constants/commonConstants';

const row = (calendarDetailProps) => (<Row>
  <Col xs={6}>
    <p>{calendarDetailProps.data.location ? calendarDetailProps.data.location : ''}</p>
    {(calendarDetailProps.data.starttime && calendarDetailProps.data.endtime) ? <p>{convertTo24Format(calendarDetailProps.data.starttime.slice(0, 5).replace(':', ''))} to {convertTo24Format(calendarDetailProps.data.endtime.slice(0, 5).replace(':', ''))}<span> {CommonConstants.TIMEZONE_CT}</span></p> : (calendarDetailProps.data.allday_event === CommonConstants.TRUE_TEXT) ? <p>{translateText('common:ALL_DAY_TEXT')}</p> : <p>{translateText('common:NA_TEXT')}</p>}
  </Col>
  <Col xs={6} className='text-right'>
    <p>{convertDateFromTimeStamp(calendarDetailProps.data.timeStamp)}</p>
    <p className='NextDate'>{getDueTime(calendarDetailProps.data.timeStamp)}</p>
  </Col>
</Row>);

const CalendarEventDetails = (calendarDetailProps) => (
  <div className='pb20'>
    <div className='graybtBorder pt10 pb10'>
      <h3 className='eventDetailTitle'>{calendarDetailProps.data.event_name ? calendarDetailProps.data.event_name : ''}</h3>
      <div className='eventDetailSubject'>{translateText('COMMON:CREIGHTON_CALENDAR_EVENT')}</div>
    </div>
    <div className='eventTiming graybtBorder pt10 pb10'>
      {row(calendarDetailProps)}
    </div>
    <div className='graybtBorder pt30 pb10 mb10'>{translateText('COMMON:EVENT_NOTES')}</div>
    <p className='mb20'>{calendarDetailProps.data.description ? calendarDetailProps.data.description : ''}</p>
    <div className='contactInfo'>
      <p>{translateText('COMMON:CONTACT_INFO')}</p>
      <p>{calendarDetailProps.data.contactname ? calendarDetailProps.data.contactname : ''}</p>
      <Mailto className='email pt10 mb30' email={calendarDetailProps.data.contactemail ? calendarDetailProps.data.contactemail : ''}>{calendarDetailProps.data.contactemail ? calendarDetailProps.data.contactemail : ''}</Mailto>
    </div>
  </div>
);

export default CalendarEventDetails;