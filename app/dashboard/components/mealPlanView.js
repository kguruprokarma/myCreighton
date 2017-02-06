/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Meal Plan.*
*/

import React from 'react';
import Swipes from './swipes';
import Guest from './guest';
import Dining from './dining';
import Jaybucks from './jaybucks';
import { Link } from 'react-router';
import { Well, Row, Col } from 'react-bootstrap';

const MealPlan = (mealPlan) => (
	<section id="mealPlan">
		<h1 className="announced-only">Meal Plan</h1>
		<div className={mealPlan.showMeal ? 'hide' : 'show'}>
			<Well bsSize="small" className="jaybucksWell">
				<Row>
					<Col sm={11} xs={10}>
					<ul className="list-inline listflex row text-center">
						<li><Swipes /></li>
					<li><Guest /></li>
					<li><Dining /></li>
					<li><Jaybucks /></li>
					</ul>
					</Col>
			<Col sm={1} xs={2}>
				<div className="angle-right text-right"><Link><img src={'./assets/images/more.png'} /></Link></div>
			</Col>
					
				</Row>
			</Well>
		</div >
	<a className="doller-icon pull-right hidden-xs"><span onClick={mealPlan.toggleMeal}>{mealPlan.showMeal ? 'Show' : 'Hide'}</span></a>
	</section >

)

export default MealPlan; 