/*Created Date: - 23rd -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { find, findIndex, sortBy } from 'lodash';
import HeaderLabel from './../../common/headerLabel';
import ClassInfo from './../classDetails/components/classInfo';
import ClassAssignments from './../classDetails/components/classAssignments';
//import TodaysClass from './../classDetails/components/todaysClass';
import UpcomingAssignments from './../classDetails/components/upcomingAssignments';
import TestsOrQuizzes from './../classDetails/components/testsOrQuizzes';
import '../classDetails/style.css';
import PreviousNextComponent from '../../common/previousNext';
import { translateText } from '../../common/translate';
import { datesCompare, stringEncodeURIComponent, browserTitle } from '../../common/utility';
import { CLASSES_DETAILS } from '../../constants/nextEventsConstants';
//import * as locales from '../../locales/en/common';

class ClassDetails extends React.PureComponent {

  componentWillMount() {
    browserTitle(translateText('common:CLASS_DETAIL'));
  }

  render() {
    const props = this.props;
    let classData;
    let obj = null;
    let showPrevNext = false;
    if (props.params.categoryname === CLASSES_DETAILS) {
      obj = JSON.parse(localStorage.getItem('eventsFilterData'));
      showPrevNext = false;
      classData = find(obj, { sis_source_id: stringEncodeURIComponent(props.params.id), type: props.params.categoryname });
    } else {
      obj = JSON.parse(localStorage.getItem('classDetails'));
      showPrevNext = true;
      classData = obj[props.params.index];
    }
    let assignments = {};
    if (classData.assignmentData && classData.assignmentData !== null) {
      assignments = classData.assignmentData;
    }
    const testOrQuizzesData = [];
    const assignmentDue = [];
    //const todaysClass = [];
    const upcomingAssignmentsData = [];
    let sortedUpcomingAssignments = [];
    let sortedassignmentDue = [];
    if (assignments && assignments.length > 0 ) {
      assignments.map((assignmentObj) => {
        // if (assignmentObj.submission_types === 'online_quiz') {
        //   testOrQuizzesData.push(assignmentObj);
        // } else {
        if (assignmentObj.assign_due) {
          const dateValue = datesCompare(assignmentObj.assign_due);
          if (dateValue === 1) {
            assignmentDue.push(assignmentObj);
          } else if (dateValue === -1) {
            upcomingAssignmentsData.push(assignmentObj);
          }
          // else if (dateValue === 0) {
          //   todaysClass.push(assignmentObj);
          // }
        }
        //}
        return assignmentObj;
      });
    }

    if (assignmentDue && assignmentDue.length > 0) {
      sortedassignmentDue = sortBy(assignmentDue, ['assign_due']);
    }
    if (upcomingAssignmentsData && upcomingAssignmentsData.length > 0) {
      sortedUpcomingAssignments = sortBy(upcomingAssignmentsData, ['assign_due']);
    }


    let nextObject = {};
    let prevObject = {};
    const index = parseInt(props.params.index);
    if (index < obj.length - 1) {
      nextObject = obj[index + 1];
    } else {
      nextObject.sis_source_id = {};
    }
    if (index > 0) {
      prevObject = obj[index - 1];
    } else {
      prevObject.sis_source_id = {};
    }
    return (
      <section role='region' className='classesDeatils'>
        {showPrevNext &&
          <div className='hidden-xs'>
            <HeaderLabel headerLabel={translateText('common:CLASS_DETAIL')} />
          </div>
        }
        {(classData && Object.keys(classData).length > 0) && (<div>
          <ClassInfo {...classData} />
          {(assignmentDue.length !== 0 || upcomingAssignmentsData.length !== 0 || testOrQuizzesData.length !== 0) ? (<div>
            <ClassAssignments data={sortedassignmentDue} />
            {/*<TodaysClass data={todaysClass} />*/}
            <UpcomingAssignments data={sortedUpcomingAssignments} />
            {/*<TestsOrQuizzes data={testOrQuizzesData} />*/}
          </div>)
            : <p className='openSansLight noContent gbl_lh mb30 mt20 text-italic'>{translateText('common:NO_DETAILS_PROVIDED')}</p>
          }
        </div>)
        }

        {showPrevNext && <PreviousNextComponent presentCategory={props.params.categoryname} totalLength={obj.length - 1} currentIndex={index} prevItem={prevObject.sis_source_id} nextItem={nextObject.sis_source_id} />}
      </section>
    );
  }
}

export default ClassDetails;
