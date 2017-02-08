/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Meal Plan.*
*/

import React, { Component } from 'react';
import Swipes from './components/swipes';
import Guest from './components/guest';
import Dining from './components/dining';
import Jaybucks from './components/jaybucks';
import { Link } from 'react-router';
import { Well, Row, Col } from 'react-bootstrap';
import { translate } from 'react-i18next';
import i18n from '../../i18n';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';

@translate([], { wait: true })
export  class MealPlan extends Component {
	constructor(props) {
			super(props);			
			this.props.getMealPlanData()
		}
	render() {
		let MEALPLAN_DATA = this.props.mealPlanData;
		const { t } = this.props;
		return (
			<section id="mealPlan">
				<h1 className="announced-only">Meal Plan</h1>
				<div className={this.props.showMeal ? 'hide' : 'show'}>
					<Well bsSize="small" className="jaybucksWell">
						<Col sm={11} xs={10}>
							<Row>{MEALPLAN_DATA &&
								<ul className="list-inline listflex row text-center">
									<li><Swipes expire={MEALPLAN_DATA.mealBalance.swipesExpire}  swipeCount={MEALPLAN_DATA.mealBalance.remainSwipes} swipeTitle={t('common:SWIPES')} /></li>
									<li><Guest guestCount={MEALPLAN_DATA.mealBalance.guestSwipes}  guestTitle={t('common:GUEST')} /></li>
									<li><Dining diningCount={MEALPLAN_DATA.mealBalance.dinning}  diningTitle={t('common:DINING')} /></li>
									<li><Jaybucks jaybucksCount={MEALPLAN_DATA.mealBalance.jaybucks}  jaybucksTitle={t('common:JAY_BUCKS')} /></li>
								</ul>}
							</Row>
						</Col>
						<Col sm={1} xs={2}>
							<div className="angle-right text-right"><Link><img src={'./assets/images/more.png'} /></Link></div>
						</Col>
					</Well>
				</div>
				<a className="doller-icon pull-right hidden-xs"><span onClick={this.props.toggleMeal}>{this.props.showMeal ? <img src={'./assets/images/money.png'} /> : 'Hide'}</span></a>
			</section>

		)
	}
}

const mapStateToProps = (mealPlanState) => (
	{
		mealPlanData: mealPlanState.mealPlanReducer.mealPlanData.data

	})

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MealPlan)