/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Emergency Contact details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const EmergencyContact = (emergencyProps) => {
  const tel = 'tel:402.280.2700';
  return (
    <article className='profileRow mt30'>
      <h3 className='dataHeading openSansRegular'>{translateText('common:PROFILE_EMERGENCY_CONTACT')}</h3>
      <BasicRow displayName={translateText('common:PROFILE_FIRST_NAME')} displayValue={emergencyProps.emergencyContact.first_name} />
      <BasicRow displayName={translateText('common:PROFILE_LAST_NAME')} displayValue={emergencyProps.emergencyContact.last_name} />
      <Row className='show-grid pt5 pb5'>
        <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Phone'>{translateText('common:PROFILE_PHONE')}</label></Col>
        <Col xs={8} md={9} sm={8} className='dataField'><a href={tel} className='mobileNumber'>{emergencyProps.emergencyContact.phone}</a></Col>
      </Row>
      <BasicRow displayName={translateText('common:PROFILE_RELATIONSHIP')} displayValue={emergencyProps.emergencyContact.relationship} />
    </article>
  );
};

export default EmergencyContact;
