/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Jaybucks.*
*/

import React from 'react';
import { translateText } from '../../../common/translate';

const printCredit = (printCreditProps) => (
  <div>
    <span className='jbvalue openSansLight'><span className='meal-doller'>$</span>{printCreditProps.printCount}</span>
    <span className='jbText openSansBold'>{translateText('common:MEAL_PLAN_PRINT_CREDIT')}<span className='mpDoller'>$</span></span>
  </div>
);

export default printCredit;
