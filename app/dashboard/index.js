/*Created Date: - 3rd -02 -2017
*Usage of file: - TMerge individual components of Dashboard into this file..*
*/
import React, { Component } from 'react';
import { Link } from 'react-router';
import UserDetail from './components/userDetail';
import MealPlanView from './components/mealPlanView';
import ModuleBlock from './components/moduleBlock';
import ToggleMealPlan from './components/toggleMealPlan';
import style from './style.css';
import { Row, Col } from 'react-bootstrap';

const dashboardModulesList = [
	[
		{
			"imgURL": "./app/assets/images/school-icon.jpg",
			"linkto": "/schoolSemester",
			"name": 'School & Semester',
			"description": "School Stuff I am responsible for."
		},
		{
			"imgURL": "./app/assets/images/classes-icon.jpg",
			"linkto": "/classes",
			"name": "Classes",
			"description": "What I  need for each className."
		}],
	[
		{
			"imgURL": "./app/assets/images/todo-icon.jpg",
			"linkto": "/ToDo",
			"name": "To-Do List",
			"description": "What I need to do."
		},
		{
			"imgURL": "./app/assets/images/events-icon.jpg",
			"linkto": "/Events",
			"name": "Next Events",
			"description": "What I need to be ready for."
		}
	]
];

export default class dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = { shouldHide: true };
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		if (this.state.shouldHide) {
			this.setState({ shouldHide: false });
		}
		else {
			this.setState({ shouldHide: true });
		}
	}

	render() {
		return (

			<section id="dashboard">
				<h1 className="announced-only">Dashboard</h1>
				<Row className="mb20">
					<Col sm={5} xs={10} md={5}>
						<UserDetail />
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


