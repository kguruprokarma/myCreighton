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
import FacultyAcademicView from './components/academic';
import { authUserDetails } from '../../../common/utility';
import Spinner from '../../../common/spinner';


export class FacultyAcademic extends React.PureComponent {
  constructor(props) {
    super(props);
    this.headerText = '';
  }

  componentWillMount() {
    let userReqObj = authUserDetails();
    userReqObj = {};
    userReqObj.primaryKey = 'netid';
    userReqObj.primaryValue = 'a4509258ec';
    this.headerText = translateText('common:ACADEMIC');
    this.props.getFacultyAcademicData(userReqObj);
  }

  render() {
    const ACADEMIC_DATA = this.props.profileData;

    return (
      <section>
        {this.props.isLoading && <Spinner />}
        <HeaderLabel headerLabel={this.headerText} />
        {ACADEMIC_DATA && <FacultyAcademicView data={ACADEMIC_DATA} facultyProfile={this.props.profile} />}
      </section>
    );
  }
}

FacultyAcademic.propTypes = {
  isLoading: React.PropTypes.bool,
  profile: React.PropTypes.string,
  profileData: React.PropTypes.string,
  getFacultyAcademicData: React.PropTypes.func

};

const mapStateToProps = (bioState) => (
  {
    profileData: bioState.profileReducer.profileData.data,
    profile: bioState.profileReducer.profile,
    isLoading: bioState.profileReducer.isLoading

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FacultyAcademic);