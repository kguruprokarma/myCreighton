/* Created on 22-feb-2017
 * To display the event details for assignments's
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HtmlReactParser from 'html-react-parser';
import { translateText } from '../../../common/translate';
import { ConvertDuedateTimeStamp, ConvertDateFromTimeStamp, HtmlEncoding } from '../../../common/utility';

const Assignments = (assignmentsDetails) => (
  <section>
    <article>
      <div className='graybtBorder mb10 pt5 pb5'>
        <div className='eventDetailTitle'>{assignmentsDetails.data.assign_title}</div>
        <div className='eventDetailSubject'>{assignmentsDetails.data.class}</div>
      </div>
      <div className='eventTiming graybtBorder pb10'>
        <p>{assignmentsDetails.data.course_name}</p>
        <Row>
          <Col md={6} xs={6}>
            <p className='text-left'><span>{translateText('DUE')} </span><span>{ConvertDuedateTimeStamp(assignmentsDetails.data.assign_due)}</span></p>
          </Col>
          <Col md={6} xs={6}>
            <p className='eventDate text-right'>{ConvertDateFromTimeStamp(assignmentsDetails.data.assigned_date)}</p>
          </Col>
        </Row>
      </div>
    </article>
    <article className='assignmentDetail pt20 pb25'>
      <h4 className='eventDetail graybtBorder mb10'>{translateText('ASSIGNMENT_DETAILS')}</h4>
      <div className='eventNotes pt5'>
        {
            assignmentsDetails.data.assign_desc === null || assignmentsDetails.data.assign_desc === '' ? translateText('common:NO_EVENTS_NOTES') :
            HtmlReactParser(HtmlEncoding(assignmentsDetails.data.assign_desc))
        }
      </div>
    </article>
  </section>
);
export default Assignments;
