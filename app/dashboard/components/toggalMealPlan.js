/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display ToggalMealPlan.*
*/

import React from 'react';

const ToggalMealPlan = (toggalMealPlan) => (		
		<div className="col-xs-3 hidden-lg hidden-md hidden-sm">
			<a className="doller-icon pull-right"><img src={'./app/assets/images/doller-icon.jpg'} alt="" onClick={toggalMealPlan.toggal} /></a>
		</div>						
)

export default ToggalMealPlan; 