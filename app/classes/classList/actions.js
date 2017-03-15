/*Created Date: - 23rd -01 -2017
*Usage of file: - This action is used to get class schedule of a user.*
*/

import classesApi from '../../middleware/classes/api';
import * as types from './actionTypes';


const requestData = () => ({
  type: types.REQUEST_CLASSES_DATA
});

const receiveClassesData = (classesData) => (
  {
    type: types.RECEIVE_CLASSES_DATA,
    data: classesData
  });

const receiveError = (error) => (
  {
    type: types.RECEIVE_CLASSES_DATA_ERROR,
    data: error
  });

const catagoryChange = (str) => (
  {
    type: types.ON_CATAGORY_CHANGE,
    data: str
  });

  const requestAssignmentsData = () => ({
  type: types.REQUEST_ASSIGNMENTS_DATA
  });

const receiveAssignmentsData = (assignmentsData) => (
  {
    type: types.RECEIVE_ASSIGNMENTS_DATA,
    data: assignmentsData
  });

const receiveAssignmentsError = (error) => (
  {
    type: types.RECEIVE_ASSIGNMENTS_DATA_ERROR,
    data: error
  });

export function onCatagoryChange(str) {
  return function (dispatch) {
    dispatch(catagoryChange(str));
  };
}

export function getClassesDataByWeek(reqObj) {
  return function (dispatch) {
    dispatch(requestData());
    return classesApi.getClassesDataByWeek(reqObj).then((response) => {
      dispatch(receiveClassesData(response));
    }
    )
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }));
      }
      );
  };
}

export function getClassesDataByToday(reqObj) {
  return function (dispatch) {
    dispatch(requestData());
    return classesApi.getClassesDataByToday(reqObj)
      .then((response) => {
        dispatch(receiveClassesData(response));
      }
      )
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }));
      }
      );
  };
}


export function getClassesDataForAtoZ(reqObj) {
  return function (dispatch) {
    dispatch(requestData());
    return classesApi.getClassesAtoZData(reqObj)
      .then((response) => {
        dispatch(receiveClassesData(response));
      }
      )
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }));
      }
      );
  };
}

export function getAssignmentDetails(reqObj) {
  return function (dispatch) {
    dispatch(requestAssignmentsData());
    return classesApi.getAssignmentDetails(reqObj)
      .then((response) => {
        dispatch(receiveAssignmentsData(response));
      }
      )
      .catch((error) => {
        dispatch(receiveAssignmentsError({
          error: error
        }));
      }
      );
  };
  }