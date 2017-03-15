/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Jaybucks.*
*/

import React from 'react';
import { translateText } from '../../../common/translate';

const Jaybucks = (jaybucksProps) => (
  <div>
    <span className='jbvalue openSansLight'><span className='meal-doller'>$</span>{jaybucksProps.jaybucksCount}</span>
    <span className='jbText openSansBold'>{translateText('common:MEAL_PLAN_JAY_BUCKS')}<span className='mpDoller'>$</span></span>
  </div>
);

export default Jaybucks;
