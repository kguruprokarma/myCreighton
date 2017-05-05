/*Created Date: - 18th -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';
import { authUserDetails } from '../../../common/utility';
import AlertComponent from '../../../common/alertComponent';
import LegalName from './components/legalName';
import HomeAddress from './components/homeAddress';
import Address from './components/address';
import PrimaryContact from './components/primaryContact';
import EmergencyContact from './components/emergencyContact';
import Email from './components/email';
import Other from './components/other';
import RelationDetail from './components/relationDetail';
import * as actionCreators from '../../actions';
import LeftNav from '../../../common/leftNav';
import Spinner from '../../../common/spinner';
import HeaderLabel from '../../../common/headerLabel';
import * as CommonConstants from '../../../constants/commonConstants';

export class Profile extends React.PureComponent {
  componentWillMount() {
    let userReqObj = authUserDetails();
    userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = '9274b95f72';
    this.props.getStudentProfileData(userReqObj);
  }

  render() {
    const USER_DATA = this.props.profile === CommonConstants.STUDENT_LABEL && this.props.profileData;
    return (
      <section>
        {this.props.loading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:PROFILE_MY_PROFILE')} /></div>
        {USER_DATA.data ?
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              <LegalName legalName={USER_DATA.data[0].legal_name} />
              <HomeAddress homeAddress={USER_DATA.data[0].home_address} />
              <Address schoolAddress={USER_DATA.data[0].school_address} />
              <PrimaryContact primaryContact={USER_DATA.data[0].primary_phone_no} />
              <EmergencyContact emergencyContact={USER_DATA.data[0].emergency_contact} />
              <Email professionalLabel={translateText('common:COMMON_SCHOOL')} professionalEmail={USER_DATA.data[0].email.school_email} isShowPersonalEmail={false} />
              <Other profile={this.props.profile} detail={USER_DATA.data[0]} />
              <RelationDetail parentDetail={USER_DATA.data[0].parent} gurdianDetail={USER_DATA.data[0].guardian} />
            </Col>
            <Col md={3} sm={4} className='hidden-xs'>
              <LeftNav role={this.props.profile} />
            </Col>
          </Row> :
          <AlertComponent typename='danger' msg={translateText('common:NO_RESPONSE')} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
