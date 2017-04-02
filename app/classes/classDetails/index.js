/*Created Date: - 23rd -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { find, findIndex } from 'lodash';
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
      obj = JSON.parse(localStorage.getItem('eventList'));
      showPrevNext = false;
      classData = find(obj, { sis_source_id: stringEncodeURIComponent(props.params.id), type: props.params.categoryname });
    } else {
      obj = JSON.parse(localStorage.getItem('classDetails'));
      showPrevNext = true;
      classData = find(obj, { sis_source_id: stringEncodeURIComponent(props.params.id) });
    }
    let assignments = {};
    if (classData.assignmentData && classData.assignmentData !== null) {
      assignments = classData.assignmentData;
    }
    const testOrQuizzesData = [];
    const assignmentDue = [];
    //const todaysClass = [];
    const upcomingAssignmentsData = [];
    const currentDate = new Date();
    if (assignments && assignments.length > 0 ) {
      assignments.map((assignmentObj) => {
        if (assignmentObj.submission_types === 'online_quiz') {
          testOrQuizzesData.push(assignmentObj);
        } else {
          if (assignmentObj.assign_due) {
            const dateValue = datesCompare(currentDate, assignmentObj.assign_due);
            if (dateValue === 1) {
              assignmentDue.push(assignmentObj);
            } else if (dateValue === -1) {
              upcomingAssignmentsData.push(assignmentObj);
            } 
            // else if (dateValue === 0) {
            //   todaysClass.push(assignmentObj);
            // }
          }
        }
        return assignmentObj;
      });
    }
    let nextObject = {}; 
    let prevObject = {};
    const index = findIndex(obj, { sis_source_id: stringEncodeURIComponent(props.params.id) });
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
          {(assignmentDue.length !== 0 || upcomingAssignmentsData.length !== 0 || testOrQuizzesData.length !== 0) ? (<div>
            <ClassAssignments data={assignmentDue} />
            {/*<TodaysClass data={todaysClass} />*/}
            <UpcomingAssignments data={upcomingAssignmentsData} />
            <TestsOrQuizzes data={testOrQuizzesData} />
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
