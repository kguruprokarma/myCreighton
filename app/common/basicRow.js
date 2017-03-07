/*Created Date: - 12th -01 -2017
 *Usage of file: - This component is used to display label and value with common Row.*
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';

const BasicRow = (basicRowProps) => (
  <Row className='show-grid pt5 pb5'>
    <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor={basicRowProps.displayName}>{basicRowProps.displayName}</label></Col>
    {basicRowProps.pdType ? <Col xs={8} md={8} sm={8} className='dataField'>{
      basicRowProps.displayValue.map((pdSkills, skillIndex) => {
        return (<div key={skillIndex}>{pdSkills}</div>);
      })}</Col> : 
    <Col xs={8} md={9} sm={8} className='dataField'>{basicRowProps.displayValue}</Col>}
  </Row>
);
export default BasicRow;