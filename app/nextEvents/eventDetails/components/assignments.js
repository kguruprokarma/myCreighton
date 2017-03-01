/* Created on 22-feb-2017
 * To display the event details for assignments's
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const Assignments = (assignmentsDetails) => (
  <section>
    <div>
      <div>
        <h1 className='bebasregular headerLabel mt5 mb20'>ASSIGNMENT DETAIL</h1>
      </div>
      <div className='graybtBorder pb10'>
        <div className='eventTitle pt10'>{assignmentsDetails.data.title}</div>
        <div className='eventSubject'>{assignmentsDetails.data.class}</div>
      </div>
      <div className='eventTiming graybtBorder pb5 pt5'>
        <p className='openSansLight fs1pt2 gbl_lh'>Submit paper in BlueLine</p>
        <Row className='openSansLight fs1pt2 gbl_lh'>
          <Col md={6} xs={6}>
            <p className='text-left'><span>Due </span><span>{assignmentsDetails.data.dueTime}</span></p>
          </Col>
          <Col md={6} xs={6}>
            <p className='eventDate'>{assignmentsDetails.data.date}</p>
          </Col>
        </Row>
      </div>
      <div className='openSansLight fs1pt2 gbl_lh'>
        <div className='detail graybtBorder pb5 pt15'>ASSIGNMENT DETAILS</div>
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