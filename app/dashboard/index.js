/*Created Date: - 3rd -02 -2017
*Usage of file: - TMerge individual components of Dashboard into this file..*
*/
import React, { Component } from 'react';
import { Link } from 'react-router';
import UserDetail from './components/userDetail';
import MealPlanView from './components/mealPlanView';
import Module from './components/module';
import ToggalMealPlan from './components/toggalMealPlan';
import style from './style/style.css';

//export const imgurl = './app/assets/images/todo-icon.jpg';
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
							<ToggalMealPlan toggal={this.onClick}/>
							<MealPlanView showMeal={this.state.shouldHide} toggalMeal={this.onClick} />								
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5 col-xs-12">
							<Module imgURL={'./app/assets/images/school-icon.jpg'} linkto="/schoolSemester" name="School &amp; Semester" desc="School Stuff I am responsible for." />
							<Module imgURL={'./app/assets/images/classes-icon.jpg'} linkto="/classes" name="Classes" desc="What I  need for each className." />
						</div>
						<div className="col-md-5 col-md-offset-2 col-xs-12">
							<Module imgURL={'./app/assets/images/todo-icon.jpg'} linkto="/ToDo" name="To-Do List" desc="What I need to do." />
							<Module imgURL={'./app/assets/images/events-icon.jpg'} linkto="/Events" name="Next Events" desc="What I need to be ready for." />
						</div>
					</div>
				</div>
				);
	}
}


