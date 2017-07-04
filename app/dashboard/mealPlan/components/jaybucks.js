/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Jaybucks.*
*/

import React from 'react';
import { Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const jaybucks = (jaybucksProps) => (
  <Col xs={12}>
    <div className='jbText text-center openSansBold'>{translateText('common:MEAL_PLAN_JAY_BUCKS')}<span className='mpDoller'>$</span></div>
    <div className='jbvalue text-center openSansLight'><span className='meal-doller'>$</span>{parseFloat(jaybucksProps.jaybucksCount).toFixed(2)}</div>
  </Col>
);

export default jaybucks;
