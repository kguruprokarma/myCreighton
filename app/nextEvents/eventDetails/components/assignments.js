/* Created on 22-feb-2017
 * To display the event details for assignments's
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const Assignments = (assignmentsDetails) => (
  <section>
    <div className="classAssignment mt20">
      <h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>{translateText('common:ASSIGNMENTS')}</h4>
    </div>
    <div>
      <Row> <Col md={12} sm={12} xs={12}>
        <div>{assignmentsDetails.data.name}</div>
        <Row className="openSansLight fs1pt2 gbl_lh">
          <Col md={4} sm={6} xs={6}>

            <div>{translateText('common:TITLE')}:</div>
            <div>title:</div>
            <div>Class:</div>
            <div>Date:</div>
            <div>Due Date:</div>
            <div>Due Time:</div>
          </Col>
          <Col md={8} sm={6} xs={6}>
            <div>{assignmentsDetails.data.title}</div>
            <div>{assignmentsDetails.data.class}</div>
            <div>{assignmentsDetails.data.date}</div>
            <div>{assignmentsDetails.data.dueDate}</div>
            <div>{assignmentsDetails.data.dueTime}</div>
            <a href="">Make an appointment</a>
          </Col>
        </Row>
        <Row className="openSansLight fs1pt2 gbl_lh">
          <Col md={4} sm={6} xs={6}>
            <div>EVENTS NOTES</div>
          </Col>
          <Col md={8} sm={6} xs={12}>
            <div>{assignmentsDetails.data.eventNotes}</div>
          </Col>
        </Row>
      </Col>
      </Row>
    </div>

  </section>
);

export default Assignments;