/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import HeaderLabel from '../../../common/headerLabel';
import { translateText } from '../../../common/translate';
import * as CommonConstants from '../../../constants/commonConstants';
import * as URL_CONSTANTS from '../../../constants/urlConstants';
import FacultyProfileView from './components/profile';
import { authUserDetails } from '../../../common/utility';
import Spinner from '../../../common/spinner';
//import LeftNav from '../../../../common/leftNav';

export class FacultyProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.headerText = '';
  }

  componentWillMount() {
    let userReqObj = authUserDetails();
    userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = 'ed8ad0b875';
    this.props.getFacultyProfileData(userReqObj);
    this.headerText = translateText('common:PROFILE_MY_PROFILE');
  }

  render() {
    let PROFILE_DATA;
    if (this.props.params.facultyprofileparam === URL_CONSTANTS.ACADEMIC) {
      ACADEMIC_DATA = this.props.profile === CommonConstants.FACULTY_LABEL && this.props.profileData;
    } else {
      PROFILE_DATA = this.props.profile === CommonConstants.FACULTY_LABEL && this.props.profileData;
    }

    return (
      <section>
        {this.props.isLoading && <Spinner />}
        <HeaderLabel headerLabel={this.headerText} />
        <FacultyProfileView data={PROFILE_DATA} facultyProfile={this.props.profile} />
      </section>
    );
  }
}

FacultyProfile.propTypes = {
  params: React.PropTypes.string,
  facultyprofileparam: React.PropTypes.string,
  isLoading: React.PropTypes.bool,
  profile: React.PropTypes.string,
  profileData: React.PropTypes.string,
  getFacultyProfileData: React.PropTypes.func
};

const mapStateToProps = (bioState) => (
  {
    profileData: bioState.profileReducer.profileData.data,
    profile: bioState.profileReducer.profile,
    isLoading: bioState.profileReducer.isLoading

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FacultyProfile);