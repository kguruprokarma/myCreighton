/*Created Date: - 3rd -02 -2017
*Usage of file: - TMerge individual components of Dashboard into this file..*
*/
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import UserDetail from './components/userDetail';
import MealPlanView from './mealPlan';
import ModuleBlock from './components/moduleBlock';
import ToggleMealPlan from './components/toggleMealPlan';
import style from './style.css';
import { Row, Col } from 'react-bootstrap';
import  DashboardModulesList from '../common/dashboardModulesDetail';

import * as actionCreators from './actions';

const { func, object } = PropTypes;

export class Dashboard extends Component {
    
    static propTypes = {
        getUserDetailsData: func,
        params: object,
        userDetailsData: object,
    };
    
    state = {
        shouldHide: true,
    };

    componentWillMount() {
        console.log(this.props.params.roletype);
        this.role = this.props.params.roletype;
        if (this.role) {
            this.props.getUserDetailsData(`/${this.role}.json`);
        } else {
            this.props.getUserDetailsData(`/Student.json`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.role !== nextProps.params.roletype) {
            this.role = nextProps.params.roletype;
            this.props.getUserDetailsData(`/${this.role}.json`);
        }
    }

	onClick = () => this.setState({ shouldHide: !this.state.shouldHide });

	render() {
		const { userDetailsData, params: { roletype } } = this.props;
		const dashboardModulesList = DashboardModulesList(roletype);
		return (
			<section id="dashboard">
				<h1 className="announced-only">Dashboard</h1>
				<Row className="mb20">
					<Col sm={5} xs={10} md={5}>
						{userDetailsData && <UserDetail userDetail={{...userDetailsData, userRole: roletype || 'Student'}}/>}
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

