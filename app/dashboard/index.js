/*Created Date: - 3rd -02 -2017
*Usage of file: - TMerge individual components of Dashboard into this file..*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import UserDetail from './components/userDetail';
import MealPlanView from './mealPlan';
import ModuleBlock from './components/moduleBlock';
import ToggleMealPlan from './components/toggleMealPlan';
import style from './style.css';
import { Row, Col } from 'react-bootstrap';
import DashboardModulesList from '../common/dashboardModulesDetail';
const dashboardModulesList = DashboardModulesList;
import * as actionCreators from './actions';


export class Dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = { shouldHide: true };
		this.onClick = this.onClick.bind(this);
		this.props.getUserDetailsData()
	}

/*	componentWillMount() {
		
	}
*/
	onClick() {
		this.setState({ shouldHide: !this.state.shouldHide });	
	}

	render() {
		let USER_DETAIL = this.props.userDetailsData;
		return (

			<section id="dashboard">
				<h1 className="announced-only">Dashboard</h1>
				<Row className="mb20">
					<Col sm={5} xs={10} md={5}>
						{USER_DETAIL && <UserDetail userDetail={USER_DETAIL}/>}
					</Col>
					<Col xs={2} className="hidden-lg hidden-md hidden-sm">
						<ToggleMealPlan toggle={this.onClick} />
					</Col>
					<Col xs={12} sm={7} md={7}>
						<MealPlanView showMeal={this.state.shouldHide} toggleMeal={this.onClick} />
					</Col>
				</Row>

				<article id="wells">
					<Row>
						<h1 className="announced-only">Well Section</h1>
						<Col md={5} sm={6}>
							<ModuleBlock modulelist={dashboardModulesList[0]} />
						</Col>
						<Col md={5} sm={6} className="col-md-offset-2">
							<ModuleBlock modulelist={dashboardModulesList[1]} />
						</Col>
					</Row>
				</article>
			</section>
		);
	}
}
const mapStateToProps = (dashboardState) => (
	{
		userDetailsData: dashboardState.dashboardReducer.userDetailsData.data

	})

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

