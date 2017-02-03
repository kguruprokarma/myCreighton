/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Toggle Meal Plan.*
*/

import React from 'react';

const ToggleMealPlan = (toggleMealPlan) => (		
			<a className="doller-icon pull-right"><i className="fa fa-usd" aria-hidden="true" onClick={toggleMealPlan.toggle}></i></a>						
)

export default ToggleMealPlan; 