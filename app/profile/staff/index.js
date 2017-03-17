/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import LegalName from '../student/bio/components/legalName';
import PrimaryContact from '../student/bio/components/primaryContact';
import EmergencyContact from '../student/bio/components/emergencyContact';
import Email from '../student/bio/components/email';
import Other from './components/other';
import StaffAddress from './components/staffAddress';
import MailAddress from './components/mailAddress';
import WorkAddress from './components/workAddress';
import * as actionCreators from '../actions';
import LeftNav from '../../common/leftNav';
import HeaderLabel from '../../common/headerLabel';
import * as CommonConstants from '../../constants/commonConstants';
import { authUserDetails } from '../../common/utility';
import Spinner from '../../common/spinner';
import FamilyDetail from '../faculty/bio/components/family';

export class StaffProfile extends React.PureComponent {

  componentWillMount() {
    let userReqObj = authUserDetails();
    userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = authUserDetails().netid;
    this.props.getStaffProfileData(userReqObj);
  }

  render() {
    const USER_DATA = this.props.profile === CommonConstants.STAFF_LABEL && this.props.profileData;
    return (
      <section>
        {this.props.loading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:PROFILE_MY_PROFILE')} /></div>
        {USER_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              <LegalName legalName={USER_DATA.data[0].staff_name} />
              <StaffAddress staffAddress={USER_DATA.data[0].faculty_address} />
              <WorkAddress workAddress={USER_DATA.data[0].work_address} profile={this.props.profile}/>
              <MailAddress mailAddress={USER_DATA.data[0].mail_address} />
              <PrimaryContact primaryContact={USER_DATA.data[0].phone} />
              <EmergencyContact emergencyContact={USER_DATA.data[0].emergency_contact} relation={USER_DATA.data[0].emrg_cont_type} phone={USER_DATA.data[0].emergency_contact_phone} />
              <Email professionalLabel={translateText('common:COMMON_SCHOOL')} professionalEmail={USER_DATA.data[0].work_email} personalLabel={translateText('common:COMMON_PERSONAL')} personalEmail={USER_DATA.data[0].personal_email} isShowPersonalEmail />
              <Other profile={this.props.profile} detail={USER_DATA.data[0]} />
              <FamilyDetail familyDetail={USER_DATA.data[0]} />
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
    profile: bioState.profileReducer.profile,
    loading: bioState.profileReducer.isLoading

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(StaffProfile);
