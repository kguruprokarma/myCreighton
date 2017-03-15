/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Primary Contact details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../../common/translate';

const PrimaryContact = (primaryContactProps) => {
  const tel = `tel:${primaryContactProps.primaryContact}`;
  return (
    <article className='profileRow mt30 emailAddress'>
      <h3 className='dataHeading openSansRegular'>{translateText('common:PROFILE_PRIMARY_CONTACT')}</h3>
      <Row className='show-grid pt5 pb5'>
        <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Phone'>{translateText('common:PROFILE_PHONE')}</label></Col>
        <Col xs={8} md={9} sm={8} className='dataField'><a href={tel} className='mobileNumber'>{primaryContactProps.primaryContact ? primaryContactProps.primaryContact : ''}</a></Col>
      </Row>
    </article>
  );
};

export default PrimaryContact;
