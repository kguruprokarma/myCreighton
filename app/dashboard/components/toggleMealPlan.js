/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Toggle Meal Plan.*
*/

import React from 'react';

const ToggleMealPlan = (toggleMealPlan) => (
  <a className='doller-icon pull-right' >
    <img src={'./assets/images/money.png'} alt='toggle' onClick={toggleMealPlan.toggle} />
  </a>
);

export default ToggleMealPlan;
