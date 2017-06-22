/*Created Date: - 21 -02 -2017
 *Usage of file: - This component is used to display Next Event Outlook Calendar details.*
 */

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';
import { convertTo24Format, convertDateFromTimeStamp, getDueTime } from '../../../common/utility';
import * as CommonConstants from '../../../constants/commonConstants';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';

const row = (outlookCalendarProps) => (
  <Row className='visible-xs mobileEventsList'>
    <Col xs={7}>
      {outlookCalendarProps.data && outlookCalendarProps.data.timeStamp && <span className='classOn'>{(outlookCalendarProps.data.starttime && outlookCalendarProps.data.endtime) ? getDueTime(outlookCalendarProps.data.timeStamp) : (!(outlookCalendarProps.data.starttime && outlookCalendarProps.data.endtime) && moment().format('LL') !== moment(outlookCalendarProps.data.timeStamp).format('LL')) ? getDueTime(outlookCalendarProps.data.timeStamp) : ''}</span>}
    </Col>
    <Col xs={5} className='text-right'>
      <span className='classBy'>{convertDateFromTimeStamp(outlookCalendarProps.data.startdate)}</span>
    </Col>
    <Col xs={7}>
      <h3 className='mb0 classesHeading'>{outlookCalendarProps.data.event_name ? outlookCalendarProps.data.event_name : ''}</h3>
    </Col>
    <Col xs={5} className='text-right'>
      &nbsp;
    </Col>
    <Col xs={7}>
      <span className='classPlace'>{outlookCalendarProps.data.building_name ? outlookCalendarProps.data.building_name : ''}</span>
    </Col>
    <Col xs={5} className='text-right'>
      {(outlookCalendarProps.data.starttime && outlookCalendarProps.data.endtime) ? <div className='classTime'>{convertTo24Format(outlookCalendarProps.data.starttime.slice(0, 5).replace(':', ''))}- {convertTo24Format(outlookCalendarProps.data.endtime.slice(0, 5).replace(':', ''))}<span> {CommonConstants.TIMEZONE_CT}</span></div> : (outlookCalendarProps.data.allday_event === CommonConstants.TRUE_TEXT) ? <div className='classTime'>{translateText('common:ALL_DAY_TEXT')}</div> : <div className='classTime'>{translateText('common:NA_TEXT')}</div>}
    </Col>
  </Row>
);
const OutlookCalendar = (outlookCalendarProps) => (
  <section role='region' className='eventOutlook' id='eventOutlookList'>
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${outlookCalendarProps.data.type}/${outlookCalendarProps.data.event_id}/${outlookCalendarProps.currentIndex}`}>
      <div className='hidden-xs desktopEventsList'>
        <Col md={5} sm={5}>
          <h2 className='mb10 classesHeading'>{outlookCalendarProps.data.event_name ? outlookCalendarProps.data.event_name : ''}</h2>
          {outlookCalendarProps.data && outlookCalendarProps.data.timeStamp && <p className='classOn'>{(outlookCalendarProps.data.starttime && outlookCalendarProps.data.endtime) ? getDueTime(outlookCalendarProps.data.timeStamp) : (!(outlookCalendarProps.data.starttime && outlookCalendarProps.data.endtime) && moment().format('LL') !== moment(outlookCalendarProps.data.timeStamp).format('LL')) ? getDueTime(outlookCalendarProps.data.timeStamp) : ''}</p>}
        </Col>
        <Col md={2} sm={2}>
          <span className='classPlace'>{outlookCalendarProps.data.building_name ? outlookCalendarProps.data.building_name : ''}</span>
        </Col>
        <Col md={2} sm={2} className='text-center'>
          <span className='classBy'>{convertDateFromTimeStamp(outlookCalendarProps.data.startdate)}</span>
        </Col>
        <Col md={3} sm={3} className='text-right'>
          {(outlookCalendarProps.data.starttime && outlookCalendarProps.data.endtime) ? <div className='classTime'>{convertTo24Format(outlookCalendarProps.data.starttime.slice(0, 5).replace(':', ''))}- {convertTo24Format(outlookCalendarProps.data.endtime.slice(0, 5).replace(':', ''))}<span> {CommonConstants.TIMEZONE_CT}</span></div> : (outlookCalendarProps.data.allday_event === CommonConstants.TRUE_TEXT) ? <div className='classTime'>{translateText('common:ALL_DAY_TEXT')}</div> : <div className='classTime'>{translateText('common:NA_TEXT')}</div>}
        </Col>
      </div>

      {row(outlookCalendarProps)}
    </Link>
  </section >
);

export default OutlookCalendar;
