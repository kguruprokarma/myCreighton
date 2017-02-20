/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Swipes.*
*/

import React from 'react';
import { translateText } from '../../../common/translate';

const Swipes = (swipesProps) => (
  <div>
    <span className='jbvalue openSansLight'>{swipesProps.swipeCount}</span>
    <span className='jbText openSansBold'>{translateText('common:MEAL_PLAN_SWIPES')}&nbsp;({swipesProps.expire})</span>
  </div>
);

export default Swipes;
