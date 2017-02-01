/*Created Date: - 1st -02 -2017
*Usage of file: - This component is used to display Meal Plan.*
*/

import React from 'react';
import Swipes from './swipes';
import Guest from './guest';
import Dining from './dining';
import Jaybucks from './jaybucks';

const MealPlan = (mealPlan) => (
		<div className="row">
			<div className="col-xs-12">
				<div className="well green-well">
					<ul className="list-inline listflex row text-center">
						<Swipes />
						<Guest />
						<Dining />
						<Jaybucks />
					</ul>
				</div>
			</div>
		</div>
)

export default MealPlan; 