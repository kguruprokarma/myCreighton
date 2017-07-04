/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Dining dollars.*
*/

import React from 'react';
import { Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const dining = (diningProps) => (
  <Col xs={12}>
    <div className='jbText text-center openSansBold'>{translateText('common:MEAL_PLAN_DINING')}</div>
    <div className='jbvalue text-center openSansLight'><span className='meal-doller'>$</span>{parseFloat(diningProps.diningCount).toFixed(2)}</div>   
  </Col>
);

export default dining;
