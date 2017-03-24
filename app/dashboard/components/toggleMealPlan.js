/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Toggle Meal Plan.*
*/

import React from 'react';

const toggleMealPlan = (toggleMealPlanProps) => (
  <button className='doller-icon btn btn-link pull-right btnnoPadding' onClick={toggleMealPlanProps.toggle}>
    <img src={'./assets/images/money.png'} alt='toggle' />
  </button>
);

export default toggleMealPlan;
