/*Created Date: - 18th -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LegalName from './components/legalName';
import HomeAddress from './components/homeAddress';
import Address from './components/address';
import PrimaryContact from './components/primaryContact';
import EmergencyContact from './components/emergencyContact';
import Email from './components/email';
import Other from './components/other';
import RelationDetail from './components/relationDetail';
import * as actionCreators from '../../actions';
import { Link } from 'react-router';
import styles from '../style.css';
import LeftNav from '../../../common/leftNav';
import { Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../../common/headerLabel';
import { translateText } from '../../../common/translate';
import * as CommonConstants from '../../../constants/commonConstants';
import { authUserDetails } from '../../../common/utility';

export class Profile extends React.PureComponent {

  constructor() {
    super();
  }

  componentWillMount() {
    let userReqObj = authUserDetails();
    userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue ='5de48407ab';    
    this.props.getStudentProfileData(userReqObj);
  }

  render() {
    let USER_DATA = this.props.profile === CommonConstants.STUDENT_LABEL && this.props.profileData;
    return (
      <section>
        <div className='hidden-xs'><HeaderLabel headerLabel={translateText('common:PROFILE_MY_PROFILE')} /></div>
        {USER_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className='userData pull-right'>
              <LegalName legalName={USER_DATA.data[0].legal_name} />
              <HomeAddress homeAddress={USER_DATA.data[0].home_address} />
              <Address />
              <PrimaryContact primaryContact={USER_DATA.data[0].primary_phone_no} />
              <EmergencyContact emergencyContact={USER_DATA.data[0].emergency_contact} />
              <Email email={USER_DATA.data[0].email} />
              <Other />
              <RelationDetail parentDetail={USER_DATA.data[0].parent} gurdianDetail={USER_DATA.data[0].guardian} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
