/*Created Date: - 21 -02 -2017
 *Usage of file: - This component is used to display Next Event Outlook Calendar details.*
 */

import React from 'react';
import { Link } from 'react-router';
import {Row, Col } from 'react-bootstrap';
import { convertTo24Format, convertDateFromTimeStamp, getDueTime } from '../../../common/utility';
import * as CommonConstants from '../../../constants/commonConstants';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';

const OutlookCalendar = (outlookCalendarProps) => (
  <section role='region' className='eventOutlook' id='eventOutlookList'>
    <div className='hidden-xs desktopEventsList'>
      <Link to={`${ROUTE_URL.EVENT_DETAILS}/${outlookCalendarProps.data.type}/${outlookCalendarProps.data.event_id}/${outlookCalendarProps.currentIndex}`}>
        <Col md={6} sm={6}>
          <h2 className='mb0 classesHeading'>{outlookCalendarProps.data.event_name}<span className='classOn'>{getDueTime(outlookCalendarProps.data.timeStamp)}</span></h2>
        </Col>
        <Col md={2} sm={2}>
          <span className='classPlace'>{outlookCalendarProps.data.building_name}</span>
        </Col>
        <Col md={2} sm={2} className='text-center'>
          <span className='classBy'>{convertDateFromTimeStamp(outlookCalendarProps.data.timeStamp)}</span>
        </Col>
        {<Col md={2} sm={2} className='text-right'>
          {(outlookCalendarProps.data.starttime && outlookCalendarProps.data.endtime) ? <div className='classTime'>{convertTo24Format(outlookCalendarProps.data.starttime.slice(0, 5).replace(':', ''))} - {convertTo24Format(outlookCalendarProps.data.endtime.slice(0, 5).replace(':', ''))}<span> CT</span></div>:(outlookCalendarProps.data.allday_event === CommonConstants.TRUE_TEXT) ? <div className='classTime'>{translateText('common:ALL_DAY_TEXT')}</div>:<div className='classTime'>{translateText('common:NA_TEXT')}</div>}
        </Col>}
      </Link>
    </div>
    <Link to={`${ROUTE_URL.EVENT_DETAILS}/${outlookCalendarProps.data.type}/${outlookCalendarProps.data.event_id}/${outlookCalendarProps.currentIndex}`}>
      <Row>
        <div className='visible-xs mobileClassesList'>
          <Col xs={7}>
            <h2 className='mb0 classesHeading'>{outlookCalendarProps.data.event_name}<span className='classOn'>{getDueTime(outlookCalendarProps.data.timeStamp)}</span></h2>
          </Col>
          <Col xs={5} className='text-right'>
            <span className='classBy'>{outlookCalendarProps.data.building_name}</span>
          </Col>
          <Col xs={7}>
            <span className='classBy'>{convertDateFromTimeStamp(outlookCalendarProps.data.timeStamp)}</span>
          </Col>
          <Col xs={7}>
            {(outlookCalendarProps.data.starttime && outlookCalendarProps.data.endtime) ? <div className='classTime'>{convertTo24Format(outlookCalendarProps.data.starttime.slice(0, 5).replace(':', ''))} - {convertTo24Format(outlookCalendarProps.data.endtime.slice(0, 5).replace(':', ''))}<span> CT</span></div> : (outlookCalendarProps.data.allday_event === CommonConstants.TRUE_TEXT) ? <div className='classTime'>{translateText('common:ALL_DAY_TEXT')}</div> : <div className='classTime'>{translateText('common:NA_TEXT')}</div>}
          </Col>
          {/*<Col xs={5} className='text-right'>
        <span className='classTime'>{convertTo24Format(outlookCalendarProps.data.starttime.slice(0, 5).replace(':', ''))} - {convertTo24Format(outlookCalendarProps.data.endtime.slice(0, 5).replace(':', ''))}<span> CT</span></span>
      </Col>*/}
        </div>
      </Row>
    </Link>
  </section>
);

export default OutlookCalendar;
