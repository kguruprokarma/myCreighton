/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Meal Plan.*
*/

import React,{Component} from 'react';
import Swipes from './swipes';
import Guest from './guest';
import Dining from './dining';
import Jaybucks from './jaybucks';
import { Link } from 'react-router';
import { Well, Row, Col } from 'react-bootstrap';
import { translate} from 'react-i18next';
import i18n from '../../i18n';

@translate([],{ wait: true })
export default class MealPlan extends Component {
	render() {
		const { t } = this.props;
		return(
			<section id="mealPlan">
				<h1 className="announced-only">Meal Plan</h1>
				<div className={this.props.showMeal ? 'hide' : 'show'}>
					<Well bsSize="small" className="jaybucksWell">
						<Row>
							<Col sm={11} xs={10}>
							<ul className="list-inline listflex row text-center">
								<li><Swipes swipeTitle={t('common:Swipes')} /></li>
							<li><Guest guestTitle={t('common:Guest')} /></li>
							<li><Dining diningTitle={t('common:Dining')} /></li>
							<li><Jaybucks jaybucksTitle={t('common:Jaybucks')} /></li>
							</ul>
							</Col>
					<Col sm={1} xs={2}>
						<div className="angle-right text-right"><Link><i className="fa fa-angle-right fs1pt86" aria-hidden="true"></i></Link></div>
					</Col>
							
						</Row>
					</Well>
				</div >
			<a className="doller-icon pull-right hidden-xs"><span onClick={this.props.toggleMeal}>{this.props.showMeal ? 'Show' : 'Hide'}</span></a>
			</section >

		)
	}
}

