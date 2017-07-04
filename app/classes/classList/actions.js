/*Created Date: - 23rd -01 -2017
*Usage of file: - This action is used to get class schedule of a user.*
*/
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

export function onCatagoryChange(str) {
  return function (dispatch) {
    dispatch(catagoryChange(str));
  };
}

export function onReceiveError(error) {
  return function (dispatch) {
    dispatch(receiveError(error));
  };
}

export function getClassesData(result) {
  return function (dispatch) {
    dispatch(requestData());
    dispatch(receiveClassesData(result));
  };
}

export function getAssignmentDetails(result) {
  return function (dispatch) {
    dispatch(requestAssignmentsData());
    dispatch(receiveAssignmentsData(result));
  };
}