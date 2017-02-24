/* Created on 22-feb-2017
 * To display the event details for classes
 */
import React from 'react';
//import { Col, Row } from 'react-bootstrap';
//import { translateText } from '../../../common/translate';

const Classes = (classDetails) => (
  <section>
    <div>{classDetails.data.startDate}</div>
    <div>{classDetails.data.title}</div>
    <div>{classDetails.data.time}</div>
    <div>{classDetails.data.startIn}</div>
    <div>{classDetails.data.location}</div>
  </section>
);

export default Classes;