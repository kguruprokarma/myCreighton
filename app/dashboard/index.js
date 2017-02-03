/*Created Date: - 3rd -02 -2017
*Usage of file: - TMerge individual components of Dashboard into this file..*
*/
import React, { Component } from 'react';
import { Link } from 'react-router';
import UserDetail from './components/userDetail';
import MealPlanView from './components/mealPlanView';
import ModuleBlock from './components/moduleBlock';
import ToggleMealPlan from './components/toggleMealPlan';
import style from './style/style.css';
const dashboardModulesList = [
			[
			{
				"imgURL":"./app/assets/images/school-icon.jpg",
				"linkto":"/schoolSemester",
				"name":'School & Semester',
				"description":"School Stuff I am responsible for."
			},
			{
				"imgURL":"./app/assets/images/classes-icon.jpg",
				"linkto":"/classes",
				"name":"Classes",
				"description":"What I  need for each className."
			}],
			[
			{
				"imgURL":"./app/assets/images/todo-icon.jpg",
				"linkto":"/ToDo",
				"name":"To-Do List",
				"description":"What I need to do."
			},
			{
				"imgURL":"./app/assets/images/events-icon.jpg",
				"linkto":"/Events",
				"name":"Next Events",
				"description":"What I need to be ready for."
			}
			]
		];

export default class dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = { shouldHide: true };
		this.onClick= this.onClick.bind(this);
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
				<div>
					<div className="row">
						<div className="col-xs-12 form-group">
							<div className="row">
								<UserDetail />
								<ToggleMealPlan toggal={this.onClick}/>
								<MealPlanView showMeal={this.state.shouldHide} toggalMeal={this.onClick} />								
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5 col-xs-12">
						<ModuleBlock modulelist={dashboardModulesList[0]} />

						</div>
						<div className="col-md-5 col-md-offset-2 col-xs-12">
							<ModuleBlock modulelist={dashboardModulesList[1]} />
						</div>
					</div>
				</div>
				);
	}
}


