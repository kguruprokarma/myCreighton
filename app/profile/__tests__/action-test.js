/*Created Date: - 30 -01 -2017
*Usage of file: - This script is for unit test for actions.*
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../constants/urlConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const studentData = {
  'timing': '-18.934',
  'data': [
    {
      'netid': 'bab74e76ba',
      'birth_date': '1988-06-06',
      'email': { 'school_email': 'bab74e76ba@creighton.edu' },
      'emergency_contact': { 'first_name': null, 'last_name': null, 'middle_name': null },
      'guardian': { 'first_name': null, 'last_name': null, 'middle_name': null },
      'home_address': null,
      'legal_name': { 'first_name': '3f0c9b03e8', 'last_name': 'e5eb1d7455', 'middle_name': 'R' },
      'parent': { 'first_name': null, 'last_name': null, 'middle_name': null },
      'pidm': '3268947',
      'primary_phone_no': null,
      'school_address': null
    }
  ]
};

const staffProfileData = { 'timing': '-4.353', 'data': [{ 'netid': 'ed8ad0b875', 'banner_pidm': '3439269', 'date_of_birth': '1992-03-15 00:00:00.0', 'emergency_contact': { 'first_name': '19669702ab', 'last_name': '0f2eb7129e' }, 'emp_number': '27523', 'faculty_address': { 'home_Address_line1': '1015 North 14th Street', 'home_Address_line2': 'Apt 201', 'home_Address_line3': null, 'home_State_code': 'NE', 'home_postal_code': '68102', 'home_town_or_city': 'Omaha' }, 'faculty_name': { 'first_name': '248715109e', 'last_name': '0f2eb7129e', 'middle_name': 'D' }, 'full_name': 'e739e1f8ba', 'mail_address': { 'mail_Address_line1': null, 'mail_Address_line2': null, 'mail_Address_line3': null, 'mail_State_code': null, 'mail_postal_code': null, 'mail_town_or_city': null }, 'marital_status': 'S', 'personal_email': 'ellietoscan@gmail.com', 'phone': '', 'work_address': { 'work_Address_line1': null, 'work_Address_line2': null, 'work_Address_line3': null, 'work_State_code': null, 'work_postal_code': null, 'work_town_or_city': null }, 'work_email': null }] };

const facultyAcademicData = {
  'appointment': {
    'department': 'Natural Sciences - Biology',
    'school': 'Arts & Sciences',
    'status': 'Tenure'
  },
  'instruction': {
    'status': '',
    'creditHours': 12,
    'currentCourses': ['BIO 201 - C', 'BIO 205 - AJ', 'BIO 310 - 1', 'BIO 341 - 1'],
    'pastCourses': ['BIO 297', 'BIO 362', 'BIO 463', 'CHM 371'],
    'teachingAssistants': ['Ramesh Pavarti', 'Laura Feltman', 'Meiu Zhou']
  },
  'officeInformation': {
    'location': 'Rigge Science Building Rm 314',
    'officeHours': {
      'startTime': '09:00am',
      'endTime': '06:00pm',
      'weekDays': 'Mon, Wed, Fri'
    }
  }
};

const facultyProfileData = {

};

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  const userReqObj = {};
  userReqObj.primaryKey = 'netid';
  userReqObj.primaryValue = '5de48407ab';
  it('testing action for profile data for student retrival case', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.STUDENT_PROFILE + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=5de48407ab`, {
      status: 200,
      response: studentData
    });
    const expectedActions = [
      { type: types.REQUEST_STUDENT_PROFILE_DATA },
      { type: types.RECEIVE_STUDENT_PROFILE_DATA, data: studentData }
    ];
    const store = mockStore();
    return store.dispatch(actions.getStudentProfileData(userReqObj))
      .then(() => {
        const result = store.getActions(userReqObj);
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action failure for student profile case', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.STUDENT_PROFILE + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=5de48407ab`, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_STUDENT_PROFILE_DATA },
      { type: types.RECEIVE_STUDENT_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();
    return store.dispatch(actions.getStudentProfileData(userReqObj))
      .then(() => {
        const result = store.getActions(userReqObj);
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });


  it('testing action for profile data for staff retrival case', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.STAFF_BIO + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=5de48407ab`, {
      status: 200,
      response: staffProfileData
    });
    const expectedActions = [
      { type: types.REQUEST_STAFF_PROFILE_DATA },
      { type: types.RECEIVE_STAFF_PROFILE_DATA, data: staffProfileData }
    ];
    const store = mockStore();

    return store.dispatch(actions.getStaffProfileData(userReqObj))
      .then(() => {
        const result = store.getActions(userReqObj);
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action failure for staff profile case', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.STAFF_BIO + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=5de48407ab`, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_STAFF_PROFILE_DATA },
      { type: types.RECEIVE_STAFF_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();

    return store.dispatch(actions.getStaffProfileData(userReqObj))
      .then(() => {
        const result = store.getActions(userReqObj);
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('Success test case for faculty Profile', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.FACULTY_BIO + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=5de48407ab`, {
      status: 200,
      response: facultyProfileData
    });
    const expectedActions = [
      { type: types.REQUEST_FACULTY_PROFILE_DATA },
      { type: types.RECEIVE_FACULTY_PROFILE_DATA, data: facultyProfileData }
    ];
    const store = mockStore();

    return store.dispatch(actions.getFacultyProfileData(userReqObj))
      .then(() => {
        const result = store.getActions(userReqObj);
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('faculty profile action test case for error', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.FACULTY_BIO + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=5de48407ab`, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_FACULTY_PROFILE_DATA },
      { type: types.RECEIVE_FACULTY_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();

    return store.dispatch(actions.getFacultyProfileData(userReqObj))
      .then(() => {
        const result = store.getActions(userReqObj);
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('Success test case for faculty Academic', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.FACULTY_LEARN + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=5de48407ab`, {
      status: 200,
      response: facultyAcademicData
    });
    const expectedActions = [
      { type: types.REQUEST_FACULTY_ACADEMIC_DATA },
      { type: types.RECEIVE_FACULTY_ACADEMIC_DATA, data: facultyAcademicData }
    ];
    const store = mockStore();

    return store.dispatch(actions.getFacultyAcademicData(userReqObj))
      .then(() => {
        const result = store.getActions(userReqObj);
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('faculty academic action test case for error', () => {
    moxios.stubRequest(`${urlConstants.API_GATEWAY + urlConstants.FACULTY_LEARN + urlConstants.API_SINGLE}?primaryKey=netid&primaryValue=5de48407ab`, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_FACULTY_ACADEMIC_DATA },
      { type: types.RECEIVE_FACULTY_ACADEMIC_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();

    return store.dispatch(actions.getFacultyAcademicData(userReqObj))
      .then(() => {
        const result = store.getActions(userReqObj);
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });
});
