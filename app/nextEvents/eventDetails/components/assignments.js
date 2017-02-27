/* Created on 22-feb-2017
 * To display the event details for assignments's
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const Assignments = (assignmentsDetails) => (
  <section>
    <div className='classAssignment mt20'>
      <h4 className='detailSubhead graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>{translateText('common:ASSIGNMENTS')}</h4>
    </div>
    <div>
      <Row className='openSansLight fs1pt2 gbl_lh'> 
        <Col md={12} sm={12} xs={12}>        
          <div>{assignmentsDetails.data.title}</div>
          <div>{assignmentsDetails.data.class}</div>
          <Row>
            <Col md={6}>
              Due <div>{assignmentsDetails.data.dueTime}</div>
            </Col>
            <Col md={6}>
              <div>{assignmentsDetails.data.date}</div>
            </Col>
          </Row>
          <div>ASSIGNMENT DETAILS</div>
          <div>{assignmentsDetails.data.desc}</div>
        </Col>              
      </Row>
      { assignmentsDetails.data.eventNotes === '' ?
        <Row className='openSansLight fs1pt2 gbl_lh'>
          <Col md={12} sm={12} xs={12}>
            <div>{translateText('common:EVENTS_NOTES')}</div>
          </Col>
          <Col md={12} sm={12} xs={12}>
            <div>{assignmentsDetails.data.eventNotes}</div>
          </Col>
        </Row> : ''
      }
    </div>
  </section>
);
export default Assignments;
