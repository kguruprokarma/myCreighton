/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BusinessInformation from './components/businessInformation';
import ProfessionalDevelopment from './components/professionalDevelopment';
import { Link } from 'react-router';
import * as actionCreators from './actions';
import LeftNav from '../../../common/leftNav';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../../common/headerLabel';
import { translateText } from '../../../common/translate';

export class StaffProfessional extends React.PureComponent {

	constructor() {
		super();
	}

	componentWillMount() {
		this.props.getProfessionalData();
	}

	render() {
		let USER_DATA = this.props.professionalData;
		return (
			<section id="academic">
				<div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:STAFF_PROFESSIONAL')} /></div>
				{USER_DATA &&
					<Row>
						<Col sm={8} md={9} xs={12} className="userData pull-right">
							<BusinessInformation data={USER_DATA.professionalDetail.businessInformation} />	
							<ProfessionalDevelopment data={USER_DATA.professionalDetail.professionalDevelopment} />				
						</Col>
						<Col md={3} sm={4} className="hidden-xs">
						 <LeftNav role={this.props.profile} />
						</Col>
					</Row>
				}
			</section>
		);
	}
}

const mapStateToProps = (professionalState) => (
	{
		professionalData: professionalState.professionalReducer.professionalData.data,
		profile: professionalState.professionalReducer.profile

	});

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfessional);
