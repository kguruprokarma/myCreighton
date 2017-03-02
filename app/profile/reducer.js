/*Created Date: - 18th -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  profileData: {},
  isLoading: false,
  error: false,
  profile: 'STUDENT'
};

const profileReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.RECEIVE_STUDENT_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        profileData: []
      });
    case types.REQUEST_STUDENT_PROFILE_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_STUDENT_PROFILE_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        profile: types.STUDENT_PROFILE_NAME,
        profileData: action.data
      });
    case types.RECEIVE_STAFF_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        profileData: []
      });
    case types.REQUEST_STAFF_PROFILE_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_STAFF_PROFILE_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        profile: types.STAFF_PROFILE_NAME,
        profileData: action.data
      });
    case types.RECEIVE_FACULTY_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        profileData: []
      });
    case types.REQUEST_FACULTY_PROFILE_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_FACULTY_PROFILE_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        profile: types.FACULTY_PROFILE_NAME,
        profileData: action.data
      });
    case types.REQUEST_FACULTY_ACADEMIC_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_FACULTY_ACADEMIC_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        profile: types.FACULTY_PROFILE_NAME,
        profileData: action.data
      });
    case types.RECEIVE_FACULTY_ACADEMIC_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        profileData: []
      });
    default:
      return state;
  }
};


export default profileReducer;