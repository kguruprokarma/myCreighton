/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import HeaderLabel from '../../../common/headerLabel';
import AlertComponent from '../../../common/alertComponent';
import { translateText } from '../../../common/translate';
import FacultyAcademicView from './components/academic';
import { authUserDetails, browserTitle } from '../../../common/utility';
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
    userReqObj.primaryValue = authUserDetails().netid;
    this.headerText = translateText('common:PROFILE_ACADEMIC');
    this.props.getFacultyAcademicData(userReqObj);
    const facultyTitleValue = `${translateText('common:PROFILE_ACADEMIC')} ${translateText('common:USER_PROFILE')}`;
    browserTitle(facultyTitleValue);
  }

  render() {
    const ACADEMIC_DATA = this.props.profileData;
    const props = this.props;
    return (
      <section role='region'>
        {props.isLoading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={this.headerText} /></div>
        {ACADEMIC_DATA && <FacultyAcademicView data={ACADEMIC_DATA} facultyProfile={this.props.profile} />}
        {((!ACADEMIC_DATA && !props.loading && props.isError)) &&
          <AlertComponent typename='success' msg={translateText('common:NO_RESPONSE')} />
        }
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
    isLoading: bioState.profileReducer.isLoading,
    isError: bioState.profileReducer.error

  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FacultyAcademic);
