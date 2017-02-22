/* Created on 22-feb-2017
 * To display the event details for instructor's
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const Instructor = (instructorDetails) => (
  <section>
    <div>
      <div>{instructorDetails.data.name}</div>
      <div>{instructorDetails.data.contact}</div>
      <div>{instructorDetails.data.office}</div>
      <div>{instructorDetails.data.hours[0].time}</div>
      <div>{instructorDetails.data.hours[1].time}</div>
    </div>   
    <div>{instructorDetails.data.eventNotes}</div>
  </section>
);

export default Instructor;