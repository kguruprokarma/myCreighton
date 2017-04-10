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
import Groups from './components/groups';
import ApplicationTool from './components/applicationTools';

export class StaffDetails extends React.PureComponent {
  render() {
    const props = this.props;
    return (
      <section role='region'>
        <div className='hidden-xs mb10 eventDetailsTitle' >
          <Row>
            <Col sm={6}>
              <div className='hidden-xs'>
                <HeaderLabel headerLabel={translateText('common:STAFF_DETAIL')} />
              </div>
            </Col>
          </Row>
        </div>
        <div className='text-right'>
          <button className='btn btn-primary' onClick={() => history.back()} >{translateText('common:RESULTS_LIST')}</button>
        </div>
        <ProfileInfo profileInfo={props.userData} />
        <ProfessionalInfo professionalInfo={props.userData} />
        <ExpertiseSkills />
        <ApplicationTool />
        <Groups />
      </section >);
  }
}

const mapStateToProps = (profileData) => (
  {
    userData: profileData.staffProfileReducer.profileData
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StaffDetails);
