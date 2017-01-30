/**
 * Created by Usman on 12/23/2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

import Avatar from 'react-avatar';

//export const imgurl = './app/Dashboard/images/todo-icon.jpg';
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
							<div className="col-xs-9 col-sm-3"><h2>
								<Avatar name="Usman" size="50" round="true" />
								<strong> Sanjay</strong> - Student</h2>
							</div>
								<div className="col-xs-3 hidden-lg hidden-md hidden-sm">
									<a className="doller-icon pull-right"><img src={'./app/images/doller-icon.jpg'} alt="" onClick={this.onClick.bind(this)} /></a>
								</div>
								<div className="col-sm-9 col-xs-12">
									<div className={this.state.shouldHide ? 'hide' : 'show'}>
										<div className="row">
											<div className="col-xs-12">
												<div className="well green-well">
													<ul className="list-inline listflex row text-center">
														<li>
															<div className="jbvalue visible-xs">15</div>
															<div className="jbText">SWIPES(SAT) <span className="jbvalue hidden-xs">15</span></div>
														</li>
														<li>
															<div className="jbvalue visible-xs">5</div>
															<div className="jbText">Guest <span className="jbvalue hidden-xs">5</span></div>
														</li>
														<li>
															<div className="jbvalue visible-xs">$360.00</div>
															<div className="jbText">DINING <span className="jbvalue hidden-xs">$360.00</span></div>
														</li>
														<li>
															<div className="jbvalue visible-xs">$750.25</div>
															<div className="jbText">JAYBUCK$ <span className="jbvalue hidden-xs">$750.25</span></div>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<a className="doller-icon pull-right hidden-xs"><span onClick={this.onClick.bind(this)}>{this.state.shouldHide ? 'Show' : 'Hide'}</span></a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5 col-xs-12">
							<div className="well white-well">
								<div className="row">
									<div className="col-xs-3 col-md-12">
										<img src={'./app/images/school-icon.jpg'} />
									</div>
									<div className="col-xs-9 col-md-12">
										<h4><Link to="schoolSemester">School &amp; Semester</Link></h4>
										<span>School Stuff I am responsible for.</span>
									</div>
								</div>
							</div>
							<div className="well white-well" >
								<div className="row">
									<div className="col-xs-3 col-md-12"><img src={'./app/images/classes-icon.jpg'} /></div>
									<div className="col-xs-9 col-md-12">
										<h4>
											<Link to="/classes">
												Classes</Link>
										</h4>
										<span>What I  need for each className.</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-5 col-md-offset-2 col-xs-12">
							<div className="well white-well">
								<div className="row">
									<div className="col-xs-3 col-md-12"><img src={'./app/images/todo-icon.jpg'} /></div>
									<div className="col-xs-9 col-md-12">
										<h4><Link to="/ToDo">To-Do List</Link></h4>
										<span>What I need to do.</span>
									</div>
								</div>
							</div>
							<div className="well white-well">
								<div className="row">
									<div className="col-xs-3 col-md-12"><img src={'./app/images/events-icon.jpg'} alt="School & Semester" /></div>
									<div className="col-xs-9 col-md-12">
										<h4><Link to="/Events">Next Events</Link></h4>
										<span>What I need to be ready for.</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				);
	}
}


