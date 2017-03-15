/*Created Date: - 23rd -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import HeaderLabel from './../../common/headerLabel';
import ClassInfo from './../classDetails/components/classInfo';
import ClassAssignments from './../classDetails/components/classAssignments';
import TodaysClass from './../classDetails/components/todaysClass';
import UpcomingAssignments from './../classDetails/components/upcomingAssignments';
import TestsOrQuizzes from './../classDetails/components/testsOrQuizzes';
import style from '../classDetails/style.css';
import * as _ from 'lodash';
import PreviousNext from '../../common/previousNext';
import { translateText } from '../../common/translate';
import * as HEADER from '../../constants/headerTitleConstants';
import { DATESCOMPARE } from '../../common/utility';
import { CLASSES_DETAILS } from '../../constants/nextEventsConstants';

class ClassDetails extends React.PureComponent {
  
  render() {
    let obj = null;
    let showPrevNext = false;    
    if (this.props.params.categoryname === CLASSES_DETAILS) {
      obj = JSON.parse(localStorage.getItem('eventList'));
      showPrevNext = false;
    } else {
      obj = JSON.parse(localStorage.getItem('classDetails'));
      showPrevNext = true;
    }
    const classData = _.find(obj, { sis_source_id: this.props.params.id });
    let assignments = {};
    if (classData.assignmentData && classData.assignmentData != null) {
      assignments =classData.assignmentData;
    }
    
    const assignmentsData = [];
    const testOrQuizzesData = [];
    const assignmentDue =[];
    const todaysClass = [];
    const upcomingAssignmentsData = [];
    const currentDate = new Date();
    {
      assignments && assignments.length > 0 && assignments.map((assignmentObj, i) => {
        if (assignmentObj.submission_types === 'online_quiz') {
          testOrQuizzesData.push(assignmentObj);
        } else {
          if ( assignmentObj.assign_due ) {
              const dateValue = DATESCOMPARE(currentDate, assignmentObj.assign_due); 
              if (dateValue === 1) {
                assignmentDue.push(assignmentObj);
              } else if (dateValue === -1) {
                upcomingAssignmentsData.push(assignmentObj);
              } else if (dateValue === 0) {
                todaysClass.push(assignmentObj);
              }
            }
        }
      });
    }
    let nextObject = {}, 
      prevObject = {};
    const index = _.findIndex(obj, { sis_source_id: this.props.params.id });
    if (index < obj.length - 1) {
      nextObject = obj[Object.keys(obj)[index + 1]];
    } else {
      nextObject.sis_source_id = {};
    }
    if (index > 0) {
      prevObject = obj[Object.keys(obj)[index - 1]];
    } else {
      prevObject.sis_source_id = {};
    }
    
    return (
      <section className='classesDeatils'>
        {showPrevNext && 
          <div className='hidden-xs'>
            <HeaderLabel headerLabel={translateText('common:CLASS_DETAIL')} />
          </div>
          }
        {(classData && Object.keys(classData).length > 0) && (<div>
          <ClassInfo {...classData} />
          <ClassAssignments data={assignmentDue} />
          <TodaysClass data={todaysClass} />
          <UpcomingAssignments data={upcomingAssignmentsData} />
          <TestsOrQuizzes data={testOrQuizzesData} />
          </div>)}
        {showPrevNext && <PreviousNext presentCategory={this.props.params.categoryname} totalLength={obj.length-1} currentIndex={index} prevItem={prevObject.sis_source_id} nextItem={nextObject.sis_source_id} />}
      </section>
    );
  }
}

export default ClassDetails

