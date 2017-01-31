/*Created Date: - 12th -01 -2017
*Usage of file: - This component is used to display label and value with common Row.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BasicRow = (basicRowProps) => (
  <Row className="show-grid pt5 pb5">
    <Col xs={4} md={3} sm={4} className="labelField openSansLight"><label>{basicRowProps.displayName}</label></Col>
    <Col xs={8} md={9} md={8} className="dataField">{basicRowProps.displayValue}</Col>
  </Row>
)
export default BasicRow;