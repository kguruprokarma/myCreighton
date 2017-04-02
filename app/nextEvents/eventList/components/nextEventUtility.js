import moment from 'moment';
import { filter, each } from 'lodash';
import * as CommonConstants from '../../../constants/commonConstants';
//import { convertEncodeURIComponent } from './utility';


export const showFeatureEvents = (apiDate, today) => {
  const APIDate = new Date(moment(apiDate).format('MMM D, YYYY'));
  const todayDate = new Date(moment(today).format('MMM D, YYYY'));
  const APITime = moment(apiDate).format('HH:mm');
  const todayTime = moment(today).format('HH:mm');
  if (APIDate >= todayDate ) {
    if (APIDate.toString() === todayDate.toString() && APITime < todayTime) {
      return 0;
    } 
    return 1;
  } 
  return 0;
};

export const getClassesData = (arrayData, eventFilterData, today) => {
  let data = null;
  const displayOptionData = [];
  each(arrayData, (arrayId) => {
    data = (filter(eventFilterData, { 'sis_source_id': arrayId }))[0];
    if (data) {
      const value = showFeatureEvents(data.timeStamp, today);
      if (value > 0) {
        displayOptionData.push(data);
      }
    }
  });
  return displayOptionData;
};

export const getAssigmentsAndQuizzesData = (arrayData, eventFilterData, today) => {
  let data = null;
  const displayOptionData = [];
  each(arrayData, (arrayId) => {
    data = filter(eventFilterData, { 'sis_source_id': arrayId });
    if (data && data.length > 0) {
      const listOfAssignmentsOrQuizze = data[0].assignmentData;
      listOfAssignmentsOrQuizze.map((assignmentOrQuizze) => {
        if (assignmentOrQuizze.type === CommonConstants.EVENT_TYPE_ASSIGNMENTS ||
                assignmentOrQuizze.type === CommonConstants.EVENT_TYPE_QUIZ) {
          const value = showFeatureEvents(assignmentOrQuizze.timeStamp, today);
          if (value > 0) {
            displayOptionData.push(assignmentOrQuizze);
          }
        }
      });
    }
  });
  return displayOptionData;
};

export const prepareAssignmentOrQuizze = (assignmentData) => {
  const classEvent = [];
  if (assignmentData) {
    const assignmentsData = assignmentData.data;
    each(assignmentsData, (assignmentObject) => {
      const data = {};
      data.name = assignmentObject.assign_title;
      data.sid = assignmentObject.assignment_id;
      data.checked = true;
      classEvent.push(data);
    });
  }
  return classEvent;
};

export const getAssigmentOrQuizzes = (arrayData, eventFilterData, today) => {
  let data = null;
  const displayOptionData = [];
  each(arrayData, (arrayId) => {
    data = filter(eventFilterData, { 'assignment_id': arrayId });
    if (data && data.length > 0) {
      const value = showFeatureEvents(data.timeStamp, today);
      if (value > 0) {
        displayOptionData.push(data[0]);
      }
    }
  });
  return displayOptionData;
};

export const prepareDisplayObject = (type, object) => {
  const displayObj = { 'itemName': type, 'checked': CommonConstants.TRUE, 'childrenUnselect': CommonConstants.FALSE, 'children': object };
  return displayObj;
};


