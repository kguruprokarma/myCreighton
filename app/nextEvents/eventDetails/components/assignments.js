/* Created on 22-feb-2017
 * To display the event details for assignments's
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const Assignments = (assignmentsDetails) => (
  <section>
    <div className='openSansLight fs1pt2 gbl_lh'>
      <div className='graybtBorder pb10'>
        <h2 className='eventTitle pt10'>{assignmentsDetails.data.title}</h2>
        <div className='eventSubject'>{assignmentsDetails.data.class}</div>
      </div>
      <div className='eventTiming graybtBorder pt5 pb15 mb10'>
        <p>Submit paper in BlueLine</p>
        <Row>
          <Col md={6} xs={6}>
            <p className='text-left'><span>Due </span><span>{assignmentsDetails.data.dueTime}</span></p>
          </Col>
          <Col md={6} xs={6}>
            <p className='eventDate text-right'>{assignmentsDetails.data.date}</p>
          </Col>
        </Row>
      </div>
      <div>
        <div className='eventDetail graybtBorder pb5 pt15  pb15'>ASSIGNMENT DETAILS</div>
        <div className='eventNotes pt5'>{assignmentsDetails.data.desc}</div>
        {assignmentsDetails.data.eventNotes === '' ?
          <Row className='eventNotes'>
            <Col md={12} sm={12} xs={12}>
              <div>{translateText('common:EVENTS_NOTES')}</div>
            </Col>
            <Col md={12} sm={12} xs={12}>
              <div>{assignmentsDetails.data.eventNotes}</div>
            </Col>
          </Row> : ''
        }
      </div>
    </div>
  </section>
);
export default Assignments;
