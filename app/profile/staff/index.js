/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import LegalName from '../student/bio/components/legalName';
import HomeAddress from '../student/bio/components/homeAddress';
import Address from '../student/bio/components/address';
import PrimaryContact from '../student/bio/components/primaryContact';
import EmergencyContact from '../student/bio/components/emergencyContact';
import Email from '../student/bio/components/email';
import Other from '../student/bio/components/other';
import FamilyDetail from './components/family';
import * as actionCreators from '../actions';
import LeftNav from '../../common/leftNav';
import HeaderLabel from '../../common/headerLabel';
import * as CommonConstants from '../../constants/commonConstants';

export class StaffProfile extends React.PureComponent {

  componentWillMount() {
    this.props.getStaffProfileData();
  }

  render() {
    const USER_DATA = this.props.profile === CommonConstants.STAFF_LABEL && this.props.profileData;
    return (
      <section>
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:PROFILE_MY_PROFILE')} /></div>
        {USER_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              <LegalName legalName={USER_DATA.data[0].legal_name} />
              <HomeAddress homeAddress={USER_DATA.data[0].home_address} />
              <Address schoolAddress={USER_DATA.data[0].school_address} profile={this.props.profile} />
              <Address schoolAddress={USER_DATA.data[0].school_address} shouldShowWhenStaff={true} profile={this.props.profile} />
              <PrimaryContact primaryContact={USER_DATA.data[0].primary_phone_no} />
              <EmergencyContact emergencyContact={USER_DATA.data[0].emergency_contact} />
              <Email email={USER_DATA.data[0].email} />
              <Other profile={this.props.profile} detail={USER_DATA.data[0]} />
              <FamilyDetail familyDetail={USER_DATA.data[0].family_details} />
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <LeftNav role={this.props.profile} />
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

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfile);
