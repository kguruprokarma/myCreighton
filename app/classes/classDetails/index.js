/*Created Date: - 23rd -01 -2017
*Usage of file: - Merge individual components into this file.*
*/

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HeaderLabel from './../../common/headerLabel';
import ClassInfo from './../classDetails/components/classInfo';
import ClassAssignments from './../classDetails/components/classAssignments';
import TodaysClass from './../classDetails/components/todaysClass';
import UpcomingAssignments from './../classDetails/components/upcomingAssignments';
import TestsOrQuizzes from './../classDetails/components/testsOrQuizzes';
import * as actionCreators from './actions';
import style from '../classDetails/style.css';
import * as _ from 'lodash';
import PreviousNext from '../../common/previousNext';
import { translateText } from '../../common/translate';
import * as HEADER from '../../constants/headerTitleConstants';

export class ClassDetails extends React.PureComponent {

  
  componentWillMount() {
    this.props.getClassDetails(this.props.params.id);
  }
  render() {

    const classData = this.props.classDetails && this.props.classDetails.data
      && _.find(this.props.classDetails.data, { id: parseInt(this.props.params.id) });
    return (
      <section className='classesDeatils'>
        <div className='hidden-xs'>
          {this.props.params.eventdetailstype === HEADER.CLASSES ? <HeaderLabel headerLabel={translateText('common:NEXT_EVENTS_CLASSES')} />:<HeaderLabel headerLabel={translateText('common:CLASS_DETAIL')} />}
        </div>
        {(classData && Object.keys(classData).length > 0) && (<div>
          <ClassInfo {...classData.classHeader} />
          <ClassAssignments {...classData} />
          <TodaysClass {...classData} />
          <UpcomingAssignments {...classData} />
          <TestsOrQuizzes {...classData} />
        </div>)}
        {this.props.params.index ? (classData && Object.keys(classData).length > 0) && (
        <PreviousNext presentCategory={this.props.params.categoryname} presentIndex={this.props.params.index} />):''}
      </section>
    );
  }
}

const mapStateToProps = (classDetailsState) => (
  {
    classDetails: classDetailsState.classDetailsReducer.classDetails
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetails);

