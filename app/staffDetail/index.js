/* Created Date: - 20th -01 -2017
 * Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../searchResults/actions';
import HeaderLabel from './../common/headerLabel';
import ProfileInfo from './components/profileInfo';
import ProfessionalInfo from './components/professionalInfo';
import ExpertiseSkills from './components/expertiseSkills';
import { translateText } from '../common/translate';
import SearchLeftNav from '../common/searchLeftNav';
import Groups from './components/groups';
import ApplicationTool from './components/applicationTools';
import '../staffDetail/style.css';

export class StaffDetails extends React.PureComponent {
  constructor() {
    super();
    this.goback = this.goback.bind(this);
  }
  goback() {
    history.back();
  }
  render() {
    const props = this.props;
    return (
      <section role='region'>
        <div className='hidden-xs'>
          <HeaderLabel headerLabel={translateText('common:STAFF_DETAIL')} />
        </div>
        <Row>
          <Col md={9} sm={8} xs={12} className='pull-right'>
            <div className='text-right hidden-xs hidden-sm'>
              <button className='btn btn-primary resultsList' onClick={this.goback} >{translateText('common:RESULTS_LIST')}</button>
            </div>
            <ProfileInfo profileInfo={props.userData} />
            <ProfessionalInfo professionalInfo={props.userData} />
            <ExpertiseSkills />
            <ApplicationTool />
            <Groups />
          </Col>
          <Col md={3} sm={4} className='hidden-xs'>
            <SearchLeftNav />
          </Col>
        </Row>
      </section >);
  }
}

const mapStateToProps = (profileData) => (
  {
    userData: profileData.staffProfileReducer.profileData
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StaffDetails);
