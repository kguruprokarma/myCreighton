/*Created Date: - 18th -01 -2017
*Usage of file: - This action is used to get profile details of a user.*
*/

import profileApi from '../middleware/profile/api';
import * as types from './actionTypes';

let requestStudentProfileData = () => ({
  type: types.REQUEST_STUDENT_PROFILE_DATA
});

let receiveStudentProfileData = (profileData) => (
  {
    type: types.RECEIVE_STUDENT_PROFILE_DATA,
    data: profileData
  });

let receiveStudentProfileError = (bioJson) => (
  {
    type: types.RECEIVE_STUDENT_DATA_ERROR,
    data: bioJson
  });

let requestStaffProfileData = () => ({
  type: types.REQUEST_STAFF_PROFILE_DATA
});

let receiveStaffProfileData = (profileData) => (
{
  type: types.RECEIVE_STAFF_PROFILE_DATA,
  data: profileData
});

let receiveStaffProfileError = (bioJson) => (
{
  type: types.RECEIVE_STAFF_DATA_ERROR,
  data: bioJson
});

let requestFacultyProfileData = () => ({
  type: types.REQUEST_FACULTY_PROFILE_DATA
});

let receiveFacultyProfileData = (profileData) => (
{
  type: types.RECEIVE_FACULTY_PROFILE_DATA,
  data: profileData
});

let receiveFacultyProfileError = (bioJson) => (
{
  type: types.RECEIVE_FACULTY_DATA_ERROR,
  data: bioJson
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

export function getStaffProfileData() {
  return function (dispatch) {
    dispatch(requestStaffProfileData());
    return profileApi.getStaffProfileData()
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

export function getFacultyProfileData() {
  return function (dispatch) {
    dispatch(requestFacultyProfileData());
    return profileApi.getFacultyProfileData()
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
