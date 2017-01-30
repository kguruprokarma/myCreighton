import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BasicRow = (props) => (
  <Row className="show-grid pt5 pb5">
     <Col xs={4} md={3} sm={4} className="labelField openSansLight">{props.displayName}</Col>
        <Col xs={8} md={9} md={8} className="dataField openSansRegular">{props.displayValue}</Col>
   </Row>
)
export default BasicRow;
