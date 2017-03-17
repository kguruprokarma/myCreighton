/* Created on 22-feb-2017
 * To display the event details for assignments's
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import HtmlReactParser from 'html-react-parser';
import { translateText } from '../../../common/translate';
import { ConvertDueDateTimeStamp, HtmlEncoding } from '../../../common/utility';

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
            <p className='text-left'><span>{translateText('DUE')} </span><span>{ConvertDueDateTimeStamp(assignmentsDetails.data.assign_due)}</span></p>
          </Col>
          <Col md={6} xs={6}>
            <p className='eventDate text-right'>{assignmentsDetails.data.assigned_date}</p>
          </Col>
        </Row>
      </div>
    </article>
    <article className='assignmentDetail pt20 pb25'>
      <h4 className='eventDetail graybtBorder mb10'>{translateText('ASSIGNMENT_DETAILS')}</h4>
      <div className='eventNotes pt5'>{HtmlReactParser(HtmlEncoding(assignmentsDetails.data.assign_desc))}</div>
      {/*{assignmentsDetails.data.eventNotes === '' ?
        <Row className='eventNotes'>
          <Col md={12} sm={12} xs={12}>
            <div>{translateText('common:EVENTS_NOTES')}</div>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <div>{assignmentsDetails.data.eventNotes}</div>
          </Col>
        </Row> : ''
      }*/}
    </article>
  </section>
);
export default Assignments;
