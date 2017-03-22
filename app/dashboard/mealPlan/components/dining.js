/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Dining dollars.*
*/

import React from 'react';
import { translateText } from '../../../common/translate';

const dining = (diningProps) => (
  <div>
    <span className='jbvalue openSansLight'><span className='meal-doller'>$</span>{diningProps.diningCount}</span>
    <span className='jbText openSansBold'>{translateText('common:MEAL_PLAN_DINING')}</span>
  </div>
);

export default dining;
