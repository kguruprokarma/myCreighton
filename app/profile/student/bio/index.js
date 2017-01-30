/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LegalName from './components/legalName';
import HomeAddress from './components/homeAddress';
import SchoolAddress from './components/schoolAddress';
import PrimaryContact from './components/primaryContact';
import EmergencyContact from './components/emergencyContact';
import Email from './components/email';
import Other from './components/other';
import RelationDetail from './components/relationDetail'
import * as actionCreators from './actions';
import { Link } from 'react-router';
import styles from '../style.css';
import LeftNav from '../../../common/leftNav';
import { Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../../common/headerLabel';

export class Profile extends React.PureComponent {

  constructor() {
    super()
  }

  componentWillMount() {
    this.props.getStudentProfileData()
  }

  render() {
    let USER_DATA = this.props.profileData
    return (
      <section>
<<<<<<< HEAD
=======
        <h1 className="announced-only">Profile data</h1>
>>>>>>> origin/Sprint-2
        <HeaderLabel headerLabel="My Profile" />
        {USER_DATA &&
          <Row>
            <Col sm={8} md={9} xs={12} className="userData pull-right">
              <LegalName json={USER_DATA.studentProfile.bioData.legalName} />
              <HomeAddress json={USER_DATA.studentProfile.bioData.address.home} />
              <SchoolAddress json={USER_DATA.studentProfile.bioData.address.school} />
              <PrimaryContact json={USER_DATA.studentProfile.bioData.contactDetail} />
              <EmergencyContact json={USER_DATA.studentProfile.bioData.contactDetail.emergencyContact} />
              <Email json={USER_DATA.studentProfile.bioData.contactDetail.email} />
              <Other json={USER_DATA.studentProfile.bioData.contactDetail} />
              <RelationDetail json={USER_DATA.studentProfile.bioData.contactDetail.relationDetail} />
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

const mapStateToProps = (state) => (
  {
    profileData: state.studentProfileReducer.profileData.data

  })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
