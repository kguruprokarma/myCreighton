/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Emergency Contact details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';
import { telephoneCheck } from '../../../../common/utility';

const EmergencyContact = (emergencyProps) => (
  <article role='article' className='profileRow mt30'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:PROFILE_EMERGENCY_CONTACT')}</h2>
    <BasicRow displayName={translateText('common:PROFILE_FIRST_NAME')} displayValue={emergencyProps.data.emergency_contact ? emergencyProps.data.emergency_contact.first_name : ''} />
    <BasicRow displayName={translateText('common:PROFILE_LAST_NAME')} displayValue={emergencyProps.data.emergency_contact ? emergencyProps.data.emergency_contact.last_name : ''} />
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Phone'>{translateText('common:PROFILE_PHONE')}</label></Col>
      <Col xs={8} md={9} sm={8} className='dataField'><p className='phoneNumber'><a href={emergencyProps.data.emergency_contact_phone ? `tel:${emergencyProps.data.emergency_contact_phone}` : ''}>{emergencyProps.data.emergency_contact_phone ? telephoneCheck(emergencyProps.data.emergency_contact_phone, '.') : ''}</a></p></Col>
    </Row>
    <BasicRow displayName={translateText('common:PROFILE_RELATIONSHIP')} displayValue={emergencyProps.data.emrg_cont_type ? emergencyProps.data.emrg_cont_type : ''} />
  </article>
);

export default EmergencyContact;
