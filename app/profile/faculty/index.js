/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LegalName from '../staff/components/legalName';
import HomeAddress from '../staff/components/homeAddress';
import Address from '../staff/components/address';
import PrimaryContact from '../staff/components/primaryContact';
import EmergencyContact from '../staff/components/emergencyContact';
import Email from '../staff/components/email';
import Other from '../staff/components/other';
import FamilyDetail from './components/family';
import * as actionCreators from '../actions';
import { Link } from 'react-router';
import styles from '../student/style.css';
import LeftNav from '../../common/leftNav';
import { Row, Col } from 'react-bootstrap';
import HeaderLabel from '../../common/headerLabel';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';
import * as URL_CONSTANTS from '../../constants/urlConstants';
import FacultyProfileView from './components/profile';
import FacultyAcademicView from './components/academic';

export class FacultyProfile extends React.PureComponent {

  constructor(props) {
    super(props);
    this.headerText = '';
  }
  componentWillMount() {
    if (this.props.params.facultyprofileparam === URL_CONSTANTS.PROFILE) {    
      this.props.getFacultyProfileData();
      this.headerText = translateText('common:PROFILE_MY_PROFILE');
    }
    if (this.props.params.facultyprofileparam === URL_CONSTANTS.ACADEMIC) { 
      this.headerText = translateText('common:ACADEMIC'); this.props.getFacultyProfileData();  
      this.props.getFacultyAcademicData();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params.facultyprofileparam && this.url !== nextProps.params.facultyprofileparam) {
      this.url = nextProps.params.facultyprofileparam;
      if (this.url === URL_CONSTANTS.PROFILE) {    
        this.headerText = translateText('common:PROFILE_MY_PROFILE');
        this.props.getFacultyProfileData();
      }
      if (this.url === URL_CONSTANTS.ACADEMIC) {  
        this.headerText = translateText('common:ACADEMIC');  this.props.getFacultyProfileData();
        this.props.getFacultyAcademicData();
      }
    } 
  }

  render() {
    const PROFILE_DATA = this.props.profile === CommonConstants.FACULTY_LABEL && this.props.profileData;
    console.log(PROFILE_DATA);
    return (
      <section>
        <HeaderLabel headerLabel={this.headerText} />
        {this.props.params.facultyprofileparam === URL_CONSTANTS.PROFILE && PROFILE_DATA && <FacultyProfileView data={PROFILE_DATA} facultyProfile={this.props.profile} />}
        {this.props.params.facultyprofileparam === URL_CONSTANTS.ACADEMIC && PROFILE_DATA && <FacultyAcademicView data={PROFILE_DATA} facultyProfile={this.props.profile} />}
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

export default connect(mapStateToProps, mapDispatchToProps)(FacultyProfile);