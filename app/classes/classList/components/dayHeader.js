/*Created Date: - 19th -01 -2017
*Usage of file: - Displays  the day name.*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';

const DayHeader = (dayHeadingProps) => (
  <Row>
    <Col xs={12}><h2 className='dayHeading bebasregular mb0'>{dayHeadingProps.day}</h2></Col>
  </Row>
);

export default DayHeader;
