/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Swipes.*
*/

import React from 'react';
import { Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const swipes = (swipesProps) => (  
  <Col xs={12}>
    {swipesProps.expire && <div className='jbText text-center openSansBold'>{translateText('common:MEAL_PLAN_SWIPES')}&nbsp;({swipesProps.expire})</div>}
    <div className='jbvalue text-center openSansLight'>{isNaN(parseInt(swipesProps.swipeCount)) ? swipesProps.swipeCount:parseInt(swipesProps.swipeCount)}</div>
  </Col>
);

export default swipes;
