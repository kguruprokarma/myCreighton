/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Swipes.*
*/

import React from 'react';
import { Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const guest = (guestProps) => (
  <Col xs={12}>
    <div className='jbText text-center openSansBold'>{translateText('common:MEAL_PLAN_GUEST')}</div>
    <div className='jbvalue text-center openSansLight'>{parseInt(guestProps.guestCount)}</div>
  </Col>
);

export default guest;
