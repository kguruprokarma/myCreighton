/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Primary Contact details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../../common/translate';
import { telephoneCheck } from '../../../../common/utility';

const PrimaryContact = (primaryContactProps) => (
  <article role='article' className='profileRow mt30 emailAddress'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:PROFILE_PRIMARY_CONTACT')}</h2>
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Phone'>{translateText('common:PROFILE_PHONE')}</label></Col>
      <Col xs={8} md={9} sm={8} className='dataField'><p><a href={primaryContactProps.primaryContact ? `tel:${telephoneCheck(primaryContactProps.primaryContact)}` : ''}>{primaryContactProps.primaryContact ? telephoneCheck(primaryContactProps.primaryContact) : ''}</a></p></Col>
    </Row>
  </article>
  );

export default PrimaryContact;
