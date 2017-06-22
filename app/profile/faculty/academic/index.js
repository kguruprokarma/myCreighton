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
import { browserTitle } from '../../../common/utility';
import Spinner from '../../../common/spinner';


export class FacultyAcademic extends React.PureComponent {
  constructor(props) {
    super(props);
    this.headerText = '';
  }

  componentWillMount() {
    const props = this.props;
    this.headerText = translateText('common:PROFILE_ACADEMIC');
    props.getFacultyAcademicData();
    const facultyTitleValue = `${translateText('common:PROFILE_ACADEMIC')} ${translateText('common:USER_PROFILE')}`;
    browserTitle(facultyTitleValue);
  }

  render() {
    const props = this.props;
    const ACADEMIC_DATA = props.profileData;
    return (
      <section role='region' className='section-container'>
        {props.isLoading && <Spinner />}
        <div className='hidden-xs'><HeaderLabel headerLabel={this.headerText} /></div>
        {ACADEMIC_DATA && <FacultyAcademicView data={ACADEMIC_DATA} facultyProfile={props.profile} />}
        {((!ACADEMIC_DATA && !props.loading && props.isError)) &&
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

export default connect(mapStateToProps, mapDispatchToProps)(FacultyAcademic);
