/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Meal Plan.*
*/

import React from 'react';
import Swipes from './swipes';
import Guest from './guest';
import Dining from './dining';
import Jaybucks from './jaybucks';

const MealPlan = (mealPlan) => (
	<div className="col-sm-9 col-xs-12">
		<div className={mealPlan.showMeal ? 'hide' : 'show'}>
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
		</div>
		<a className="doller-icon pull-right hidden-xs"><span onClick={mealPlan.toggalMeal}>{mealPlan.showMeal ? 'Show' : 'Hide'}</span></a>
	</div>
		
)

export default MealPlan; 