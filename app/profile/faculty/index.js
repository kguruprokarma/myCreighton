/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LegalName from '../student/bio/components/legalName';
import HomeAddress from '../student/bio/components/homeAddress';
import Address from '../student/bio/components/address';
import PrimaryContact from '../student/bio/components/primaryContact';
import EmergencyContact from '../student/bio/components/emergencyContact';
import Email from '../student/bio/components/email';
import Other from '../student/bio/components/other';
import FamilyDetail from './components/family';
import * as actionCreators from '../actions';
import { Link } from 'react-router';
import styles from '../student/style.css';
import LeftNav from '../../common/leftNav';
import { Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../common/headerLabel';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';

export class FacultyProfile extends React.PureComponent {

  constructor() {
    super();
  }
  componentWillMount() {
    this.props.getFacultyProfileData();
  }

  render() {
    let PROFILE_DATA = this.props.profile === CommonConstants.FACULTY_LABEL && this.props.profileData;
    return (
      <section>
        <HeaderLabel headerLabel={translateText('common:PROFILE_MY_PROFILE')} />
        {PROFILE_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className="userData pull-right">
              <LegalName legalName={PROFILE_DATA.facultyProfile.bioData.legalName} />
              <HomeAddress homeAddress={PROFILE_DATA.facultyProfile.bioData.address.home} />
              <Address address={PROFILE_DATA.facultyProfile.bioData.address.school} profile={this.props.profile} />
              <Address address={PROFILE_DATA.facultyProfile.bioData.address.mailing} shouldShowWhenFaculty={true} profile={this.props.profile} />
              <PrimaryContact primaryContact={PROFILE_DATA.facultyProfile.bioData.contactDetail} />
              <EmergencyContact emergencyContact={PROFILE_DATA.facultyProfile.bioData.contactDetail.emergencyContact} />
              <Email email={PROFILE_DATA.facultyProfile.bioData.contactDetail.email} />
              <Other other={PROFILE_DATA.facultyProfile.bioData.contactDetail} profile={this.props.profile} />
              <FamilyDetail familyDetail={PROFILE_DATA.facultyProfile.bioData.contactDetail.familyDetails} />
            </Col>
            <Col md={3} sm={4} className="hidden-xs">
              <LeftNav role={this.props.profile}/>
            </Col>
          </Row>
        }
      </section>
    );
  }
}

const mapStateToProps = (bioState) => (
  {
    profileData: bioState.profileReducer.profileData.data,
    profile: bioState.profileReducer.profile

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FacultyProfile)