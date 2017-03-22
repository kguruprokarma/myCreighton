/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Swipes.*
*/

import React from 'react';
import { translateText } from '../../../common/translate';

const guest = (guestProps) => (
  <div>
    <span className='jbvalue openSansLight'>{guestProps.guestCount}</span>
    <span className='jbText openSansBold'>{translateText('common:MEAL_PLAN_GUEST')}</span>
  </div>
);

export default guest;
