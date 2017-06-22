/*Created Date: - 18th -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions';
import HeaderLabel from '../../../common/headerLabel';
import { translateText } from '../../../common/translate';
import AlertComponent from '../../../common/alertComponent';
import * as CommonConstants from '../../../constants/commonConstants';
import * as URL_CONSTANTS from '../../../constants/urlConstants';
import FacultyProfileView from './components/profile';
import { browserTitle } from '../../../common/utility';
import Spinner from '../../../common/spinner';

export class FacultyProfile extends React.PureComponent {
  constructor(props) {
    super(props);
    this.headerText = '';
  }

  componentWillMount() {   
    const props = this.props;
    props.getFacultyProfileData();
    this.headerText = translateText('common:PROFILE_MY_PROFILE');
    browserTitle(translateText('common:PROFILE_MY_PROFILE'));
  }

  render() {
    let PROFILE_DATA;
    const props = this.props;
    if (props.params.facultyprofileparam !== URL_CONSTANTS.ACADEMIC) {
      PROFILE_DATA = props.profile === CommonConstants.FACULTY_LABEL && props.profileData;
    }

    return (
      <section role='region' className='section-container'>
        {props.isLoading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={this.headerText} /></div>
        {PROFILE_DATA && <FacultyProfileView data={PROFILE_DATA} facultyProfile={props.profile} />}
        {((!PROFILE_DATA && !props.loading && props.isError ) || (PROFILE_DATA.error)) &&
          <AlertComponent typename='success' msg={translateText('common:NO_RESPONSE')} />
        }
      </section>
    );
  }
}

const mapStateToProps = (bioState) => (
  {
    profileData: bioState.facultyProfileReducer.profileData.data,
    profile: bioState.facultyProfileReducer.profile,
    isLoading: bioState.facultyProfileReducer.isLoading,
    isError: bioState.facultyProfileReducer.error
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FacultyProfile);