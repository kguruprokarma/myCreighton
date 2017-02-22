/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AcademicStatus from './components/academicStatus';
import AdvisorInformation from './components/advisorInformation';
import { Link } from 'react-router';
import * as actionCreators from './actions';
import styles from '../style.css';
import LeftNav from '../../../common/leftNav';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../../common/headerLabel';
import { translateText } from '../../../common/translate';

export class Academic extends React.PureComponent {

	constructor() {
		super();
	}

	componentWillMount() {
		this.props.getAcademicData();
	}

	render() {
		let USER_DATA = this.props.academicData;
		return (
			<section id="academic">
				<div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:PROFILE_ACADEMIC')} /></div>
				{USER_DATA &&
					<Row>
						<Col sm={8} md={9} xs={12} className="userData pull-right">
							<AcademicStatus json={USER_DATA.studentProfile.academicDetail} />
							<AdvisorInformation json={USER_DATA.studentProfile.academicDetail} />
						</Col>
						<Col md={3} sm={4} className="hidden-xs">
							<LeftNav />
						</Col>
					</Row>
				}
			</section>
		);
	}
}

const mapStateToProps = (acdemicState) => (
	{
		academicData: acdemicState.academicReducer.academicData.data

	});

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Academic);
