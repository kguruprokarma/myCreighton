/*Created Date: - 18th -01 -2017
*Usage of file: - This action is used to get profile details of a user.*
*/

import profileApi from '../middleware/profile/api';
import * as types from './actionTypes';

const requestStudentProfileData = () => ({
  type: types.REQUEST_STUDENT_PROFILE_DATA
});

const receiveStudentProfileData = (profileData) => (
  {
    type: types.RECEIVE_STUDENT_PROFILE_DATA,
    data: profileData
  });

const receiveStudentProfileError = (bioJson) => (
  {
    type: types.RECEIVE_STUDENT_DATA_ERROR,
    data: bioJson
  });

const requestStaffProfileData = () => ({
  type: types.REQUEST_STAFF_PROFILE_DATA
});

const receiveStaffProfileData = (profileData) => (
  {
    type: types.RECEIVE_STAFF_PROFILE_DATA,
    data: profileData
  });

const receiveStaffProfileError = (bioJson) => (
  {
    type: types.RECEIVE_STAFF_DATA_ERROR,
    data: bioJson
  });

const requestFacultyProfileData = () => ({
  type: types.REQUEST_FACULTY_PROFILE_DATA
});

const receiveFacultyProfileData = (profileData) => (
  {
    type: types.RECEIVE_FACULTY_PROFILE_DATA,
    data: profileData
  });

const receiveFacultyProfileError = (bioJson) => (
  {
    type: types.RECEIVE_FACULTY_DATA_ERROR,
    data: bioJson
  });

const requestFacultyAcademicData = () => (
  {
    type: types.REQUEST_FACULTY_ACADEMIC_DATA
  });

const receiveFacultyAcademicData = (facultyAcamedic) => (
  {
    type: types.RECEIVE_FACULTY_ACADEMIC_DATA,
    data: facultyAcamedic
  });

const receiveFacultyAcademicDataError = (facultyAcamedicError) => (
  {
    type: types.RECEIVE_FACULTY_ACADEMIC_DATA_ERROR,
    data: facultyAcamedicError
  });

export function getStudentProfileData(reqObj) {
  return function (dispatch) {
    dispatch(requestStudentProfileData());
    return profileApi.getProfileData(reqObj)
      .then((response) => {
        dispatch(receiveStudentProfileData(response));
      }
      )
      .catch((error) => {
        dispatch(receiveStudentProfileError({
          error: error
        }));
      }
      );
  };
}

export function getStaffProfileData(reqObj) {
  return function (dispatch) {
    dispatch(requestStaffProfileData());
    return profileApi.getStaffProfileData(reqObj)
      .then((response) => {
        dispatch(receiveStaffProfileData(response));
      }
      )
      .catch((error) => {
        dispatch(receiveStaffProfileError({
          error: error
        }));
      }
      );
  };
}

export function getFacultyProfileData(reqObj) {
  return function (dispatch) {
    dispatch(requestFacultyProfileData());
    return profileApi.getFacultyProfileData(reqObj)
      .then((response) => {
        dispatch(receiveFacultyProfileData(response));
      }
      )
      .catch((error) => {
        dispatch(receiveFacultyProfileError({
          error: error
        }));
      }
      );
  };
}

// action method to get the faculty academic data
export function getFacultyAcademicData(reqObj) {
  return function (dispatch) {
    dispatch(requestFacultyAcademicData());
    return profileApi.getFacultyAcademicData(reqObj).then((response) => {
      dispatch(receiveFacultyAcademicData(response));
    }).catch((error) => {
      dispatch(receiveFacultyAcademicDataError({
        error: error
      }));
    });
  };
}
