/* Created on 22-feb-2017
 * To display the event details for instructor's
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import { translateText } from '../../../common/translate';

const Instructor = (instructorDetails) => (
  <section>
    <div className="classAssignment mt20">
    <h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>INSTRUCTOR</h4></div>
    <div>
      <Row> <Col md={12} sm={12} xs={12}>
        <div className="openSansLight fs1pt2 gbl_lh">{instructorDetails.data.name}</div>
        <Row className="openSansLight fs1pt2 gbl_lh">
          <Col md={4} sm={6} xs={6}>

            <div>Contact:</div>
            <div>Office:</div>
            <div>Hours:</div>
          </Col>
          <Col md={8} sm={6} xs={6}>
            <a href="">{instructorDetails.data.contact}</a>
            <div>{instructorDetails.data.office}</div>
            <div>{instructorDetails.data.hours[0].time}</div>
            <div>{instructorDetails.data.hours[1].time}</div>
            <a href="">Make an appointment</a>
          </Col>
        </Row>

        <Row className="openSansLight fs1pt2 gbl_lh">
          <Col md={4} sm={6} xs={6}>
            <div>EVENTS NOTES</div>
          </Col>
          <Col md={8} sm={6} xs={12}>
            <div>{instructorDetails.data.eventNotes}</div>
          </Col>
        </Row>
      </Col>
      </Row>
    </div>

  </section>
);

export default Instructor;