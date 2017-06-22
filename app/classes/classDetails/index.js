/*Created Date: - 23rd -01 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { sortBy } from 'lodash';
import { hashHistory } from 'react-router';
import * as ROUTE_URL from '../../constants/routeContants';
import HeaderLabel from './../../common/headerLabel';
import ClassInfo from './../classDetails/components/classInfo';
import ClassAssignments from './../classDetails/components/classAssignments';
import UpcomingAssignments from './../classDetails/components/upcomingAssignments';
import '../classDetails/style.css';
import PreviousNextComponent from '../../common/previousNext';
import { translateText } from '../../common/translate';
import { datesCompare, browserTitle } from '../../common/utility';
import { CLASSES_DETAILS } from '../../constants/nextEventsConstants';

class ClassDetails extends React.PureComponent {

  componentWillMount() {
    browserTitle(translateText('common:CLASS_DETAIL'));
    const props = this.props;
    if (props.params.categoryname !== CLASSES_DETAILS && !localStorage.getItem('classDetails')) {
      hashHistory.push(ROUTE_URL.CLASSES + ROUTE_URL.WEEK);
    } else if (props.params.categoryname === CLASSES_DETAILS && !localStorage.getItem('eventsFilterData')) {
      hashHistory.push(ROUTE_URL.EVENT_LIST);
    }
  }
  getCurrentView(path) {
    let currentView = '';
    if (path) {
      currentView = path[1];
    }
    return currentView;
  }
  getAssinments(classData) {
    let assignments = {};
    if (classData.assignmentData && classData.assignmentData !== null) {
      assignments = classData.assignmentData;
    }
    return assignments;
  }
  getNextObj(index, obj) {
    let nextObject = {};
    if (index < obj.length - 1) {
      nextObject = obj[index + 1];
    } else {
      nextObject.sis_source_id = {};
    }
    return nextObject;
  }
  getPrevObj(index, obj) {
    let prevObject = {};
    if (index > 0) {
      prevObject = obj[index - 1];
    } else {
      prevObject.sis_source_id = {};
    }
    return prevObject;
  }
  getSortedAssignDue(assignmentDue) {
    let sortedassignmentDue = [];
    if (assignmentDue && assignmentDue.length > 0) {
      sortedassignmentDue = sortBy(assignmentDue, ['assign_due']);
    }
    return sortedassignmentDue;
  }
  getSortedUpcomingAssignments(upcomingAssignmentsData) {
    let sortedUpcomingAssignments = [];
    if (upcomingAssignmentsData && upcomingAssignmentsData.length > 0) {
      sortedUpcomingAssignments = sortBy(upcomingAssignmentsData, ['assign_due']);
    }
    return sortedUpcomingAssignments;
  }
  render() {
    if (localStorage.getItem('classDetails') || localStorage.getItem('eventsFilterData')) {
      const props = this.props;
      let classData;
      let obj = null;
      let showPrevNext = false;
      const currentView = this.getCurrentView(props.params.routePath);

      if (props.params.categoryname === CLASSES_DETAILS) {
        obj = JSON.parse(localStorage.getItem('eventsFilterData'));
        showPrevNext = false;
        classData = obj[props.params.objIndex];
      } else {
        obj = JSON.parse(localStorage.getItem('classDetails'));
        showPrevNext = true;
        classData = obj[props.params.index];
      }

      const assignments = this.getAssinments(classData);
      const testOrQuizzesData = [];
      const assignmentDue = [];
      const upcomingAssignmentsData = [];
      const sortedUpcomingAssignments = this.getSortedUpcomingAssignments(upcomingAssignmentsData);
      const sortedassignmentDue = this.getSortedAssignDue(assignmentDue);
      
      if (assignments && assignments.length > 0) {
        assignments.map((assignmentObj) => {
          if (assignmentObj.assign_due) {
            const dateValue = datesCompare(assignmentObj.assign_due);
            if (dateValue === 1) {
              assignmentDue.push(assignmentObj);
            } else if (dateValue === -1) {
              upcomingAssignmentsData.push(assignmentObj);
            }
          }
          return assignmentObj;
        });
      }
      const index = parseInt(props.params.index);
      const nextObject = this.getNextObj(index, obj);
      const prevObject = this.getPrevObj(index, obj);

      return (
        <section role='region' className='classesDeatils section-container'>
          {showPrevNext &&
            <div className='hidden-xs'>
              <HeaderLabel headerLabel={translateText('common:CLASS_DETAIL')} />
            </div>
          }
          {(classData && Object.keys(classData).length > 0) && (<div>
            <ClassInfo {...classData} currentView={currentView} />
            {(assignmentDue.length !== 0 || upcomingAssignmentsData.length !== 0 || testOrQuizzesData.length !== 0) ? (<div>
              <ClassAssignments data={sortedassignmentDue} />
              <UpcomingAssignments data={sortedUpcomingAssignments} />
            </div>)
              : <p className='openSansLight noContent gbl_lh mb30 mt20 text-italic'>{translateText('common:NO_DETAILS_PROVIDED')}</p>
            }
          </div>)
          }

          {showPrevNext && <PreviousNextComponent presentCategory={props.params.categoryname} totalLength={obj.length - 1} currentIndex={index} prevItem={prevObject.sis_source_id} nextItem={nextObject.sis_source_id} />}
        </section>
      );
    }
    return false;
  }
}

export default ClassDetails;
