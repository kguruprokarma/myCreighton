/**
 * Created by Usman on 12/23/2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import UserDetail from './components/userDetail';
import MealPlanView from './components/mealPlanView';
import Module from './components/module';
import style from './style/style.css';

//export const imgurl = './app/assets/images/todo-icon.jpg';
export default class dashboard extends Component {

	constructor(props) {
		super(props);
		this.state = { shouldHide: true };
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
								<div className="col-xs-3 hidden-lg hidden-md hidden-sm">
									<a className="doller-icon pull-right"><img src={'./app/assets/images/doller-icon.jpg'} alt="" onClick={this.onClick.bind(this)} /></a>
								</div>
								<div className="col-sm-9 col-xs-12">
									<div className={this.state.shouldHide ? 'hide' : 'show'}>
										<MealPlanView />
									</div>
									<a className="doller-icon pull-right hidden-xs"><span onClick={this.onClick.bind(this)}>{this.state.shouldHide ? 'Show' : 'Hide'}</span></a>
								</div>
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


