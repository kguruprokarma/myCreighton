/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Email details for profile screen.*
*/

import React from 'react';
import Mailto from 'react-mailto';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../../common/translate';

const Email = (emailProps) => (
  <article className='profileRow mt30'>
    <h2 className='dataHeading openSansRegular'>{ translateText('common:PROFILE_EMAIL')}</h2>
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Profile School'>{emailProps.professionalLabel ? emailProps.professionalLabel :'' /*translateText('common:PROFILE_SCHOOL') */ }</label> </Col>
      <Col xs={8} md={9} sm={8} className='dataField emailAddress wordBreak'>
        <Mailto email={emailProps.professionalEmail ? emailProps.professionalEmail : ''}>{emailProps.professionalEmail ? emailProps.professionalEmail : ''}</Mailto>
      </Col>
    </Row>
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Profile Personal'>{translateText('common:PROFILE_PERSONAL') }</label> </Col>
      <Col xs={8} md={9} sm={8} className='dataField emailAddress wordBreak'>
        <Mailto email={emailProps.personalEmail ? emailProps.personalEmail : ''}>{emailProps.personalEmail ? emailProps.personalEmail : ''}</Mailto>
      </Col>
    </Row>
  </article>
);

export default Email;
