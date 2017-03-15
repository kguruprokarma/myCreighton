/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const FacultyOfficeInfo = (facultyProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:OFFICE_INFORMATION')}</h3>
    <BasicRow displayName={translateText('common:LOCATION')} displayValue={facultyProps.data.location} />
    <BasicRow displayName={translateText('common:PROFILE_OFFICE_HOURS')} displayValue={facultyProps.data.startTime} />
    {/*<Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'>
        &nbsp;
      </Col>
      <Col xs={8} md={9} sm={8} className='dataField'>
        {facultyProps.data.weekDays}
      </Col>
    </Row>*/}
  </article>
);

export default FacultyOfficeInfo;