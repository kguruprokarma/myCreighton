import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BasicRow = (props) => (
  <Row className="show-grid pt5 pb5">
<<<<<<< HEAD
    <Col xs={4} md={3} sm={4} className="labelField openSansLight"><label>{props.displayName}</label></Col>
=======
    <Col xs={4} md={3} sm={4} className="labelField openSansLight">{props.displayName}</Col>
>>>>>>> origin/Sprint-2
    <Col xs={8} md={9} md={8} className="dataField">{props.displayValue}</Col>
  </Row>
)
export default BasicRow;