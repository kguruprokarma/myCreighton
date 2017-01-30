import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AcademicStatus from './components/AcademicStatus';
import AdvisorInformation from './components/AdvisorInformation';
import { Link } from 'react-router';
import * as actionCreators from './actions';
import styles from './style.css';

class Academic extends React.PureComponent {

	constructor() {
		super()
	}

	componentWillMount() {
		this.props.getAcademicData()
	}

	render() {
		let USER_DATA = this.props.academicData
		return (
			<div>
				{USER_DATA && <div>
					<h1 className="bebasregular userHeading hidden-xs mb20 mt20">Academic</h1>
					
					<div className="row">
						<div className="userLeftmenu col-sm-3 hidden-xs">
              				<div className="llist-group openSansLight">
								<Link className="list-group-item">Change View</Link>
								<Link to="/Profile" className="list-group-item ">My Profile</Link>
								<Link to="/Academic" className="list-group-item active">Academic</Link>
								<Link className="list-group-item">Student Life</Link>
								<Link className="list-group-item">Settings</Link>
							</div>
						</div>
						<div className="userData col-md-9 col-sm-8 col-xs-12">
							<AcademicStatus json={USER_DATA.studentProfile.academicDetail} />
							<AdvisorInformation json={USER_DATA.studentProfile.academicDetail} />
						</div>
					</div>
				</div>
				}
			</div>
		);
	}
}

const mapStateToProps = (state) => (
	{
		academicData: state.academicReducer.academicData.data

	})

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Academic)
