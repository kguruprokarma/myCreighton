/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Toggle Meal Plan.*
*/

import React from 'react';
import { translateText } from '../../common/translate';
import ImageComponent from '../../common/imageComponent';
import { MONEY_ICON } from '../../constants/imageConstants';

const toggleMealPlan = (toggleMealPlanProps) => (
  <button className='doller-icon btn btn-link pull-right btnnoPadding' onClick={toggleMealPlanProps.toggle}>
    <ImageComponent imagePath={MONEY_ICON} imagealtText={translateText('common:MONEY_ALT_TEXT')} />
  </button>
);

export default toggleMealPlan;
