/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Emergency Contact details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';
import { telephoneCheck } from '../../../../common/utility';

const EmergencyContact = (emergencyProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:PROFILE_EMERGENCY_CONTACT')}</h3>
    <BasicRow displayName={translateText('common:PROFILE_FIRST_NAME')} displayValue={emergencyProps.emergencyContact ? emergencyProps.emergencyContact.first_name : ''} />
    <BasicRow displayName={translateText('common:PROFILE_LAST_NAME')} displayValue={emergencyProps.emergencyContact ? emergencyProps.emergencyContact.last_name : ''} />
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Phone'>{translateText('common:PROFILE_PHONE')}</label></Col>
      <Col xs={8} md={9} sm={8} className='dataField'><a href={emergencyProps.phone ? `tel:${telephoneCheck(emergencyProps.phone, '.')}` : ''} className='mobileNumber'>{emergencyProps.phone ? telephoneCheck(emergencyProps.phone, '.') : ''}</a></Col>
    </Row>
    <BasicRow displayName={`tel:${translateText('common:PROFILE_RELATIONSHIP')}`} displayValue={emergencyProps.relation ? emergencyProps.relation : ''} />
  </article>
);

export default EmergencyContact;
