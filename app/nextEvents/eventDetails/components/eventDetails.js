/* Created on 22-feb-2017
 * To display the event details for assignments's
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import htmlReactParser from 'html-react-parser';
import { translateText } from '../../../common/translate';
import { convertDueDateTimeStamp, convertDateFromTimeStamp, htmlEncoding } from '../../../common/utility';

const NextEventDetails = (assignmentsDetails) => (
  <article role='article'>
    <div className='graybtBorder mb10 pt5 pb5'>
      <div className='eventDetailTitle'>{assignmentsDetails.data.assign_title}</div>
      <div className='eventDetailSubject'>{assignmentsDetails.data.class}</div>
    </div>
    <div className='eventTiming graybtBorder pb10'>
      <p>{assignmentsDetails.data.course_name}</p>
      <Row>
        <Col md={6} xs={6}>
          <p className='text-left'><span>{translateText('DUE')} </span><span>{convertDueDateTimeStamp(assignmentsDetails.data.assign_due)}</span></p>
        </Col>
        <Col md={6} xs={6}>
          <p className='eventDate text-right'>{convertDateFromTimeStamp(assignmentsDetails.data.assigned_date)}</p>
        </Col>
      </Row>
    </div>
    <div className='assignmentDetail pt20 pb25'>
      <h4 className='eventDetail graybtBorder mb10'>{translateText('NEXT_EVENTS_EVENT_DETAIL_HEADER')}</h4>
      <div className='pt5'>
        {
          assignmentsDetails.data.assign_desc === null || assignmentsDetails.data.assign_desc === '' ? <p className='openSansLight noContent gbl_lh mb30 text-italic'>{translateText('common:NO_DETAILS_PROVIDED')}</p> :
            htmlReactParser(htmlEncoding(assignmentsDetails.data.assign_desc))
        }
      </div>
    </div>
  </article>
);

export default NextEventDetails;
